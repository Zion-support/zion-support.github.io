# OpenClaw Setup for App Improvement

This workspace now supports running OpenClaw without disrupting the app's Node 20 toolchain.

## What was configured

- OpenClaw CLI is installed globally (`openclaw@latest`).
- Node 22 is installed for OpenClaw runtime compatibility.
- Wrapper script: `scripts/openclaw-app-improve.sh`
  - Runs OpenClaw with Node 22
  - Boots an isolated OpenClaw managed browser profile
  - Switches back to Node 20
  - Runs `npm run app:improvement-cycle`
- NPM scripts:
  - `npm run openclaw:status`
  - `npm run openclaw:app-improve`
  - `npm run openclaw:autonomous-once`
  - `npm run openclaw:autonomous`
  - `npm run openclaw:autonomous-guardian-once`
  - `npm run openclaw:autonomous-guardian`
  - `npm run openclaw:autonomous:start`
  - `npm run openclaw:autonomous:stop`
  - `npm run openclaw:autonomous:status`
  - `npm run openclaw:autonomous:logs`
  - `npm run openclaw:stack:start`
  - `npm run openclaw:stack:restart`
  - `npm run openclaw:stack:status`
  - `npm run openclaw:stack:logs`
  - `npm run openclaw:autonomy-cycle`

## Run

```bash
npm run openclaw:status
npm run openclaw:app-improve
npm run openclaw:autonomous-once
```

For continuous high-frequency autonomous prompting:

```bash
OPENCLAW_FREQUENCY_SECONDS=30 OPENCLAW_MAX_PARALLEL=2 npm run openclaw:autonomous
```

To self-heal autonomous prompting when stale:

```bash
OPENCLAW_GUARDIAN_STALE_SECONDS=300 npm run openclaw:autonomous-guardian
```

To run a full autonomous implementation/deploy cycle:

```bash
npm run openclaw:autonomy-cycle
```

## Notes

- OpenClaw requires Node 22+, while this repo uses Node 20 via `.nvmrc`.
- The wrapper handles the runtime switch automatically.
- Autonomous prompt logs and report:
  - `automation/logs/openclaw-autonomous-app-improver.log`
  - `automation/reports/openclaw-autonomous-app-improver-latest.json`
- Prompt worker skill catalog:
  - `automation/config/openclaw-agent-skills.json`
- PM2 supervised OpenClaw autonomy processes:
  - `openclaw-autonomous-prompts`
  - `openclaw-autonomous-guardian`
- New Openclaw GitHub Actions workflows:
  - `.github/workflows/ai-openclaw-autonomous-cycle.yml`
  - `.github/workflows/ai-openclaw-freshness-sla.yml`
  - `.github/workflows/ai-openclaw-incident-escalator.yml`
- If your browser cannot be launched automatically, configure the executable path:

```bash
source ~/.nvm/nvm.sh
nvm use 22
openclaw config set browser.executablePath "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

## Worker catalog

Openclaw workers are configured in `automation/config/openclaw-agent-skills.json`.

Key workers include:
- quality and UX improvement
- automation and reliability optimization
- workflow reliability and release safety specialists
- PM2 SLO, docs sync, and security ops specialists

Each worker now supports richer controls: `riskTier`, `timeoutSeconds`, `maxRetries`, `cadenceSeconds`, and `outputSchema`.

## Structured output contract

Openclaw worker prompts request JSON action output:

```json
{
  "actions": [
    {
      "type": "workflow-change",
      "severity": "high",
      "targetPath": ".github/workflows/example.yml",
      "command": "npm run lint:check",
      "summary": "Add retry and timeout for flaky job",
      "confidence": 0.82
    }
  ]
}
```

If a worker returns legacy text, Openclaw stores a backward-compatible `legacy-text` action record and increments parse-failure telemetry.

## Health and SLO signals

`automation/reports/openclaw-autonomous-app-improver-latest.json` includes:
- lifecycle counters: `cycles`, `promptsSent`, `successes`, `failures`
- quality counters: `actionsFound`, `severityCounts`, `parseFailures`, `lowValueCycles`
- contract counters: `contractFailures`
- per-worker freshness: `workerFreshness`

Guardian restart triggers include:
- stale or missing report
- failure burst
- repeated low-value cycles
- auth preflight contract failures
- stale worker freshness windows

## Incident and recovery playbook

1. Run one-shot checks:
   - `npm run openclaw:autonomous-once`
   - `npm run openclaw:autonomous-guardian-once`
2. Inspect report:
   - `automation/reports/openclaw-autonomous-app-improver-latest.json`
3. Validate PM2 processes:
   - `npm run openclaw:stack:status`
4. Restart stack if unhealthy:
   - `npm run openclaw:stack:restart`
5. Use GitHub workflow artifacts and issue output from Openclaw SLA/incident workflows for cross-run diagnosis.
