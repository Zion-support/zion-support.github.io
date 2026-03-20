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

## Notes

- OpenClaw requires Node 22+, while this repo uses Node 20 via `.nvmrc`.
- The wrapper handles the runtime switch automatically.
- Autonomous prompt logs and report:
  - `automation/logs/openclaw-autonomous-app-improver.log`
  - `automation/reports/openclaw-autonomous-app-improver-latest.json`
- Prompt worker skill catalog:
  - `automation/config/openclaw-agent-skills.json`
- If your browser cannot be launched automatically, configure the executable path:

```bash
source ~/.nvm/nvm.sh
nvm use 22
openclaw config set browser.executablePath "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```
