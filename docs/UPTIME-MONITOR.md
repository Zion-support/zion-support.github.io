# Uptime Monitor Setup

> Autonomous HTTP health checker with Telegram alerts. Runs every 5 minutes.

## Components

| Script | Purpose |
|--------|---------|
| `scripts/uptime-monitor.sh` | Core logic: curl APP_URL, log status, send Telegram alerts on state changes |
| `scripts/run-uptime-monitor.sh` | Wrapper that sources `.env` then runs monitor |
| `systemd timer` (optional) | Schedules execution every 5 min (recommended on systemd hosts) |

## Configuration

**Environment variables** (sourced from `coordination/.env` by wrapper):
- `APP_URL` — URL to check (default: `http://localhost:3000/`)
- `TELEGRAM_BOT_TOKEN` — bot token for alerts
- `TELEGRAM_CHAT_ID` — chat ID (default: `8435383377`)

**State files**:
- `~/.hermes/state/uptime-last-status` — last known status (`up`/`down`)
- `~/.hermes/memory/uptime-monitor.log` — execution log
- `~/.hermes/memory/uptime-monitor.log` — summary every 10th run

## Scheduling

### Option A: Systemd Timer (recommended on systemd-based hosts)

Create `~/.config/systemd/user/uptime-monitor.service`:
```ini
[Unit]
Description=OpenClaw Uptime Monitor

[Service]
Type=oneshot
ExecStart=/root/.openclaw/workspace/scripts/run-uptime-monitor.sh
```

Create `~/.config/systemd/user/uptime-monitor.timer`:
```ini
[Unit]
Description=Run uptime monitor every 5 minutes

[Timer]
OnBootSec=1min
OnUnitActiveSec=5min
Persistent=true

[Install]
WantedBy=timers.target
```

Enable and start:
```bash
systemctl --user daemon-reload
systemctl --user enable --now uptime-monitor.timer
systemctl --user status uptime-monitor.timer
```

### Option B: Cron (if available)

```bash
crontab -e
*/5 * * * * /root/.openclaw/workspace/scripts/run-uptime-monitor.sh >> /root/.hermes/memory/uptime-cron.log 2>&1
```

## Behavior

- **Up (HTTP 200)**: logs OK, sends recovery alert if previous was `down`
- **Down (non-200)**: logs FAIL, sends outage alert (only on first failure to avoid spam)
- **Summary**: every 50 minutes (10th run) logs uptime percentage

## Alerts

Telegram messages include:
- 🚨 *App Down!* — first detection of outage
- ✅ *App Recovered* — service back online

## Verification

Manual test:
```bash
APP_URL=http://localhost:3000 /root/.openclaw/workspace/scripts/uptime-monitor.sh
```

Check logs:
```bash
tail -f ~/.hermes/memory/uptime-monitor.log
```

Check state:
```bash
cat ~/.hermes/state/uptime-last-status
```
