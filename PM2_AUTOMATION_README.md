# PM2 Automation Setup

This document describes the PM2 automation system that has replaced the GitHub Actions workflows.

## Overview

The following GitHub Actions workflows have been replaced with PM2 automation:

- **CI Workflow** → `ci-automation` (runs every 6 hours)
- **Deploy Workflow** → `deploy-automation` (runs on demand)
- **Dependencies Workflow** → `dependency-automation` (runs every Monday at 2 AM)

## PM2 Processes

### Current Running Processes

1. **zion-app** - Main application (development mode)
2. **ci-automation** - Continuous Integration automation
3. **dependency-automation** - Dependency management automation
4. **deploy-automation** - Deployment automation

### Automation Scripts

- `scripts/ci-automation.sh` - Runs linting, type checking, building, and testing
- `scripts/deploy-automation.sh` - Handles deployment process
- `scripts/dependency-automation.sh` - Updates dependencies and runs security audits

## Commands

### Check Status
```bash
pm2 status
```

### View Logs
```bash
pm2 logs [process-name]
```

### Restart Process
```bash
pm2 restart [process-name]
```

### Stop Process
```bash
pm2 stop [process-name]
```

### Start Process
```bash
pm2 start [process-name]
```

### Save Configuration
```bash
pm2 save
```

### Load Configuration
```bash
pm2 resurrect
```

## Scheduling

- **CI Automation**: Every 6 hours (`0 */6 * * *`)
- **Dependency Management**: Every Monday at 2 AM (`0 2 * * 1`)
- **Deploy Automation**: Manual trigger only

## Benefits of PM2 over GitHub Actions

1. **Faster execution** - No need to wait for GitHub Actions queue
2. **Cost effective** - No GitHub Actions minutes consumed
3. **Real-time monitoring** - Live process monitoring and logs
4. **Immediate feedback** - Instant execution and results
5. **Resource control** - Better resource management and optimization

## Maintenance

The PM2 processes are configured to auto-restart on failure and are saved to persist across server reboots.

To ensure the automation continues working after server restarts:
```bash
pm2 startup
pm2 save
```

## Troubleshooting

If a process fails:
1. Check logs: `pm2 logs [process-name]`
2. Restart: `pm2 restart [process-name]`
3. Check status: `pm2 status`

For dependency issues:
1. Run: `npm ci` to clean install
2. Check for conflicts: `npm ls`
3. Update lockfile: `rm package-lock.json && npm install`
