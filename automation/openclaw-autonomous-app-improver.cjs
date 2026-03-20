#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = process.cwd();
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
const REPORT_DIR = path.join(ROOT, 'automation', 'reports');
const REPORT_PATH = path.join(REPORT_DIR, 'openclaw-autonomous-app-improver-latest.json');
const LOG_PATH = path.join(LOG_DIR, 'openclaw-autonomous-app-improver.log');
const SKILLS_PATH = path.join(ROOT, 'automation', 'config', 'openclaw-agent-skills.json');

const FREQUENCY_SECONDS = Math.max(10, Number.parseInt(process.env.OPENCLAW_FREQUENCY_SECONDS || '45', 10));
const THINKING = process.env.OPENCLAW_THINKING || 'low';
const AGENT_TIMEOUT_SECONDS = Math.max(30, Number.parseInt(process.env.OPENCLAW_AGENT_TIMEOUT_SECONDS || '240', 10));
const MAX_PARALLEL = Math.max(1, Number.parseInt(process.env.OPENCLAW_MAX_PARALLEL || '2', 10));
const OPENCLAW_AGENT_ID = process.env.OPENCLAW_AGENT_ID || 'main';
const MAX_SNIPPET_CHARS = Math.max(200, Number.parseInt(process.env.OPENCLAW_MAX_SNIPPET_CHARS || '600', 10));
const CONTRACT_TOKEN = process.env.OPENCLAW_PREFLIGHT_TOKEN || 'AUTH_OK';
const MIN_FREQUENCY_SECONDS = Math.max(10, Number.parseInt(process.env.OPENCLAW_MIN_FREQUENCY_SECONDS || '20', 10));
const MAX_FREQUENCY_SECONDS = Math.max(FREQUENCY_SECONDS, Number.parseInt(process.env.OPENCLAW_MAX_FREQUENCY_SECONDS || '180', 10));

const DEFAULT_WORKERS = [
  {
    name: 'quality-guard',
    prompt:
      'Run an autonomous quality pass for this Next.js app. Focus on lint/type/test regressions and safe, reversible fixes. Output concrete prioritized actions only.',
  },
  {
    name: 'ux-improver',
    prompt:
      'Audit app UX opportunities and propose implementation-ready improvements for navigation, conversion clarity, and accessibility. Keep actions low-risk and incremental.',
  },
  {
    name: 'automation-optimizer',
    prompt:
      'Inspect automation opportunities to speed app improvement cycles. Recommend high-impact script/workflow changes that reduce manual effort and keep main branch healthy.',
  },
];

let active = true;
let dynamicFrequencySeconds = FREQUENCY_SECONDS;
let report = {
  startedAt: new Date().toISOString(),
  frequencySeconds: FREQUENCY_SECONDS,
  maxParallel: MAX_PARALLEL,
  cycles: 0,
  promptsSent: 0,
  successes: 0,
  failures: 0,
  contractFailures: 0,
  parseFailures: 0,
  lowValueCycles: 0,
  actionsFound: 0,
  severityCounts: { critical: 0, high: 0, medium: 0, low: 0, unknown: 0 },
  lastError: null,
  lastCycleAt: null,
  lastResults: [],
  workerFreshness: {},
  dynamicFrequencySeconds: FREQUENCY_SECONDS,
};

function ensureDirs() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

function loadWorkers() {
  try {
    const raw = fs.readFileSync(SKILLS_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    const workers = Array.isArray(parsed.workers) ? parsed.workers : [];
    const valid = workers
      .filter((w) => w && w.enabled !== false && typeof w.name === 'string' && typeof w.prompt === 'string')
      .map((w) => ({
        name: w.name.trim(),
        prompt: w.prompt.trim(),
        timeoutSeconds: Math.max(30, Number.parseInt(String(w.timeoutSeconds || AGENT_TIMEOUT_SECONDS), 10)),
        outputSchema: typeof w.outputSchema === 'string' ? w.outputSchema : '',
      }))
      .filter((w) => w.name && w.prompt);
    if (valid.length > 0) {
      return valid;
    }
  } catch (_err) {}
  return DEFAULT_WORKERS;
}

function log(message, data) {
  const line = `[${new Date().toISOString()}] ${message}${data ? ` ${JSON.stringify(data)}` : ''}\n`;
  fs.appendFileSync(LOG_PATH, line);
  process.stdout.write(line);
}

function saveReport() {
  report.updatedAt = new Date().toISOString();
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
}

function normalizeSeverity(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (['critical', 'high', 'medium', 'low'].includes(normalized)) {
    return normalized;
  }
  return 'unknown';
}

function sanitizeAction(action = {}) {
  return {
    type: typeof action.type === 'string' ? action.type.trim() : 'suggestion',
    severity: normalizeSeverity(action.severity),
    targetPath: typeof action.targetPath === 'string' ? action.targetPath.trim() : '',
    command: typeof action.command === 'string' ? action.command.trim() : '',
    summary: typeof action.summary === 'string' ? action.summary.trim() : '',
    confidence: Number.isFinite(Number(action.confidence)) ? Number(action.confidence) : null,
  };
}

function extractStructuredActions(rawOutput) {
  const output = String(rawOutput || '').trim();
  if (!output) {
    return { actions: [], parseFailed: false };
  }

  const maybeJson = [];
  const lines = output.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length > 0) {
    maybeJson.push(lines[lines.length - 1]);
  }
  maybeJson.push(output);

  for (const candidate of maybeJson) {
    try {
      const parsed = JSON.parse(candidate);
      if (Array.isArray(parsed)) {
        return { actions: parsed.map((item) => sanitizeAction(item)).filter((item) => item.summary), parseFailed: false };
      }
      if (parsed && Array.isArray(parsed.actions)) {
        return {
          actions: parsed.actions.map((item) => sanitizeAction(item)).filter((item) => item.summary),
          parseFailed: false,
        };
      }
    } catch (_err) {
      // ignore parse errors and fallback
    }
  }

  // Backward compatibility path: turn legacy text into one coarse action.
  return {
    actions: [
      sanitizeAction({
        type: 'legacy-text',
        severity: 'unknown',
        summary: output.slice(0, MAX_SNIPPET_CHARS),
      }),
    ],
    parseFailed: true,
  };
}

function runOpenClawPrompt(worker) {
  const schemaSuffix = worker.outputSchema
    ? '\nReturn strict JSON with shape: {"actions":[{"type":"...","severity":"critical|high|medium|low","targetPath":"...","command":"...","summary":"...","confidence":0.0}]}.'
    : '';
  const cliMessage = `${worker.prompt}${schemaSuffix}\n\nRepository: ${ROOT}\nRun mode: autonomous high-frequency prompt agent.`;
  const timeoutSeconds = Math.max(30, Number.parseInt(String(worker.timeoutSeconds || AGENT_TIMEOUT_SECONDS), 10));
  const command = `source ~/.nvm/nvm.sh && nvm use 22 >/dev/null && openclaw agent --agent ${OPENCLAW_AGENT_ID} --message ${JSON.stringify(
    cliMessage
  )} --thinking ${THINKING} --timeout ${timeoutSeconds} --json`;

  return new Promise((resolve, reject) => {
    const child = spawn('bash', ['-lc', command], { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += String(chunk);
    });
    child.stderr.on('data', (chunk) => {
      stderr += String(chunk);
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve({ worker: worker.name, ok: true, output: stdout.trim(), stderr: stderr.trim() });
        return;
      }
      reject(new Error(`${worker.name} failed with code ${code}: ${(stderr || stdout).trim()}`));
    });
  });
}

async function runCycle() {
  const workers = loadWorkers();
  report.cycles += 1;
  report.lastCycleAt = new Date().toISOString();
  log('Starting OpenClaw improvement cycle', {
    cycle: report.cycles,
    frequencySeconds: FREQUENCY_SECONDS,
    workers: workers.length,
  });

  const queue = [...workers];
  const inFlight = new Set();
  const cycleResults = [];
  const cycleActionCount = { total: 0 };
  const cycleFailureCount = { total: 0 };

  while (queue.length > 0 || inFlight.size > 0) {
    while (queue.length > 0 && inFlight.size < MAX_PARALLEL) {
      const worker = queue.shift();
      report.promptsSent += 1;
      const promise = runOpenClawPrompt(worker)
        .then((result) => {
          const extracted = extractStructuredActions(result.output);
          if (extracted.parseFailed) {
            report.parseFailures += 1;
          }

          const actions = extracted.actions;
          for (const action of actions) {
            cycleActionCount.total += 1;
            report.actionsFound += 1;
            report.severityCounts[action.severity] = (report.severityCounts[action.severity] || 0) + 1;
          }

          report.successes += 1;
          report.workerFreshness[result.worker] = new Date().toISOString();
          cycleResults.push({
            worker: result.worker,
            ok: true,
            at: new Date().toISOString(),
            snippet: result.output.slice(0, MAX_SNIPPET_CHARS),
            actions,
            actionCount: actions.length,
          });
          log('OpenClaw prompt succeeded', { worker: result.worker, actions: actions.length });
        })
        .catch((err) => {
          report.failures += 1;
          cycleFailureCount.total += 1;
          report.lastError = err.message;
          cycleResults.push({
            worker: worker.name,
            ok: false,
            at: new Date().toISOString(),
            error: err.message,
          });
          log('OpenClaw prompt failed', { worker: worker.name, error: err.message });
        })
        .finally(() => inFlight.delete(promise));

      inFlight.add(promise);
    }
    if (inFlight.size > 0) {
      await Promise.race(inFlight);
    }
  }

  report.lastResults = cycleResults;
  if (cycleActionCount.total === 0) {
    report.lowValueCycles += 1;
  }
  if (cycleActionCount.total === 0 || cycleFailureCount.total > 0) {
    dynamicFrequencySeconds = Math.min(MAX_FREQUENCY_SECONDS, dynamicFrequencySeconds + 10);
  } else {
    dynamicFrequencySeconds = Math.max(MIN_FREQUENCY_SECONDS, dynamicFrequencySeconds - 5);
  }
  report.dynamicFrequencySeconds = dynamicFrequencySeconds;
  saveReport();
}

async function preflightAuthCheck() {
  try {
    const result = await runOpenClawPrompt({
      name: 'preflight-auth-check',
      prompt: `Reply with exactly: ${CONTRACT_TOKEN}`,
    });
    if ((result.output || '').trim() !== CONTRACT_TOKEN) {
      report.contractFailures += 1;
      throw new Error(`OpenClaw auth preflight contract failed. Expected "${CONTRACT_TOKEN}" and received "${result.output}".`);
    }
    log('OpenClaw auth preflight passed');
  } catch (err) {
    const message = err.message || 'unknown auth failure';
    if (message.includes('HTTP 401') || message.includes('auth')) {
      report.contractFailures += 1;
      throw new Error(
        'OpenClaw/OpenRouter authentication failed. Reconfigure OpenClaw auth before running autonomous mode.'
      );
    }
    throw err;
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  ensureDirs();
  log('OpenClaw autonomous app improver started', {
    frequencySeconds: FREQUENCY_SECONDS,
    maxParallel: MAX_PARALLEL,
    agentId: OPENCLAW_AGENT_ID,
    thinking: THINKING,
  });

  if (process.argv[2] === 'once') {
    await preflightAuthCheck();
    await runCycle();
    log('OpenClaw autonomous app improver completed one cycle');
    return;
  }

  await preflightAuthCheck();
  while (active) {
    await runCycle();
    await sleep(dynamicFrequencySeconds * 1000);
  }
}

process.on('SIGINT', () => {
  active = false;
  log('Received SIGINT, stopping OpenClaw autonomous app improver');
  saveReport();
  process.exit(0);
});

process.on('SIGTERM', () => {
  active = false;
  log('Received SIGTERM, stopping OpenClaw autonomous app improver');
  saveReport();
  process.exit(0);
});

main().catch((err) => {
  report.failures += 1;
  report.lastError = err.message;
  saveReport();
  log('Fatal error in OpenClaw autonomous app improver', { error: err.message });
  process.exit(1);
});
