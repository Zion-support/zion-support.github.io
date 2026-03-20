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

## Run

```bash
npm run openclaw:status
npm run openclaw:app-improve
```

## Notes

- OpenClaw requires Node 22+, while this repo uses Node 20 via `.nvmrc`.
- The wrapper handles the runtime switch automatically.
- If your browser cannot be launched automatically, configure the executable path:

```bash
source ~/.nvm/nvm.sh
nvm use 22
openclaw config set browser.executablePath "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```
