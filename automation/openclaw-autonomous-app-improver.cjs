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

const FREQUENCY_SECONDS = Math.max(10, Number.parseInt(process.env.OPENCLAW_FREQUENCY_SECONDS || '45', 10));
const THINKING = process.env.OPENCLAW_THINKING || 'minimal';
const AGENT_TIMEOUT_SECONDS = Math.max(30, Number.parseInt(process.env.OPENCLAW_AGENT_TIMEOUT_SECONDS || '240', 10));
const MAX_PARALLEL = Math.max(1, Number.parseInt(process.env.OPENCLAW_MAX_PARALLEL || '2', 10));
const OPENCLAW_AGENT_ID = process.env.OPENCLAW_AGENT_ID || 'main';

const PROMPT_WORKERS = [
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
let report = {
  startedAt: new Date().toISOString(),
  frequencySeconds: FREQUENCY_SECONDS,
  maxParallel: MAX_PARALLEL,
  cycles: 0,
  promptsSent: 0,
  successes: 0,
  failures: 0,
  lastError: null,
  lastCycleAt: null,
  lastResults: [],
};

function ensureDirs() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  fs.mkdirSync(REPORT_DIR, { recursive: true });
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

function runOpenClawPrompt(worker) {
  const cliMessage = `${worker.prompt}\n\nRepository: ${ROOT}\nRun mode: autonomous high-frequency prompt agent.`;
  const command = `source ~/.nvm/nvm.sh && nvm use 22 >/dev/null && openclaw agent --agent ${OPENCLAW_AGENT_ID} --message ${JSON.stringify(
    cliMessage
  )} --thinking ${THINKING} --timeout ${AGENT_TIMEOUT_SECONDS} --json`;

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
        resolve({ worker: worker.name, ok: true, output: stdout.trim() });
        return;
      }
      reject(new Error(`${worker.name} failed with code ${code}: ${(stderr || stdout).trim()}`));
    });
  });
}

async function runCycle() {
  report.cycles += 1;
  report.lastCycleAt = new Date().toISOString();
  log('Starting OpenClaw improvement cycle', { cycle: report.cycles, frequencySeconds: FREQUENCY_SECONDS });

  const queue = [...PROMPT_WORKERS];
  const inFlight = new Set();
  const cycleResults = [];

  while (queue.length > 0 || inFlight.size > 0) {
    while (queue.length > 0 && inFlight.size < MAX_PARALLEL) {
      const worker = queue.shift();
      report.promptsSent += 1;
      const promise = runOpenClawPrompt(worker)
        .then((result) => {
          report.successes += 1;
          cycleResults.push({
            worker: result.worker,
            ok: true,
            at: new Date().toISOString(),
            snippet: result.output.slice(0, 500),
          });
          log('OpenClaw prompt succeeded', { worker: result.worker });
        })
        .catch((err) => {
          report.failures += 1;
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
  saveReport();
}

async function preflightAuthCheck() {
  try {
    await runOpenClawPrompt({
      name: 'preflight-auth-check',
      prompt: 'Reply with exactly: AUTH_OK',
    });
    log('OpenClaw auth preflight passed');
  } catch (err) {
    const message = err.message || 'unknown auth failure';
    if (message.includes('HTTP 401') || message.includes('auth')) {
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
    await sleep(FREQUENCY_SECONDS * 1000);
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
