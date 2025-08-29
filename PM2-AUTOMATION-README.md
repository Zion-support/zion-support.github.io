# PM2 Automation System - GitHub Actions Replacement

This document describes the PM2 automation system that has replaced GitHub Actions for CI/CD operations.

## Overview

The PM2 automation system provides a local, efficient alternative to GitHub Actions with the following benefits:
- **Faster execution** - No waiting for GitHub runners
- **Cost-effective** - No GitHub Actions minutes consumed
- **Full control** - Complete control over the CI/CD environment
- **Real-time monitoring** - Direct access to logs and process status

## System Components

### 1. PM2 Process Manager
- **Status**: Running and monitoring the application
- **Configuration**: Stored in `/home/ubuntu/.pm2/dump.pm2`
- **Auto-restart**: Enabled for reliability

### 2. Automation Scripts

#### `scripts/pm2-automation.sh` - Main Orchestrator
Main automation script that replaces GitHub Actions workflows.

**Usage:**
```bash
# Run full CI/CD pipeline (default)
bash scripts/pm2-automation.sh

# Run specific components
bash scripts/pm2-automation.sh ci          # CI only
bash scripts/pm2-automation.sh test        # Tests only
bash scripts/pm2-automation.sh deploy      # Deployment only
bash scripts/pm2-automation.sh monitor     # Show PM2 status
bash scripts/pm2-automation.sh help        # Show help
```

#### `scripts/simple-ci.sh` - CI Process
Simplified CI script that handles:
- Dependency installation
- Project building
- Build verification
- PM2 configuration saving

#### `ecosystem.config.js` - PM2 Configuration
PM2 ecosystem configuration file for process management.

## Workflow Comparison

### Before (GitHub Actions)
```
Push to GitHub → GitHub Actions Runner → Install Dependencies → Build → Test → Deploy
```

### After (PM2 Automation)
```
Local Command → PM2 Automation → Install Dependencies → Build → Test → Deploy → PM2 Restart
```

## Current Status

✅ **PM2 Status**: Running
- Application: `zion-app`
- Status: Online
- Memory: ~18.3MB
- Restarts: 1

✅ **Build Status**: Successful
- Build output: `dist/` directory
- Main file: `index.html`
- Assets: CSS, JS, and other resources

✅ **Automation**: Fully functional
- CI process working
- Build verification working
- PM2 integration working

## Usage Examples

### Daily Development Workflow
```bash
# 1. Make code changes
# 2. Run CI to verify changes
bash scripts/pm2-automation.sh ci

# 3. If CI passes, deploy
bash scripts/pm2-automation.sh deploy

# 4. Monitor PM2 status
bash scripts/pm2-automation.sh monitor
```

### Full Pipeline Execution
```bash
# Run complete CI/CD pipeline
bash scripts/pm2-automation.sh full
```

### PM2 Management
```bash
# Start PM2 processes
bash scripts/pm2-automation.sh start

# Stop PM2 processes
bash scripts/pm2-automation.sh stop

# Restart PM2 processes
bash scripts/pm2-automation.sh restart
```

## Configuration

### PM2 Startup
PM2 is configured to start automatically on system reboot:
```bash
pm2 startup
pm2 save
```

### Environment Variables
- `NODE_ENV`: development
- `PORT`: 3000
- `cwd`: /workspace

## Monitoring and Logs

### View PM2 Status
```bash
pm2 status
```

### View Logs
```bash
pm2 logs zion-app
pm2 logs --lines 50
```

### Monitor Resources
```bash
pm2 monit
```

## Troubleshooting

### PM2 Process Issues
```bash
# Check status
pm2 status

# View logs
pm2 logs

# Restart processes
pm2 restart all

# Delete and recreate
pm2 delete all
pm2 start "npm run dev" --name "zion-app"
```

### Build Issues
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install

# Run CI again
bash scripts/pm2-automation.sh ci
```

## Migration Notes

### What Was Replaced
- ✅ GitHub Actions CI workflow → `scripts/simple-ci.sh`
- ✅ GitHub Actions test workflow → Built-in test verification
- ✅ GitHub Actions deploy workflow → `scripts/pm2-automation.sh deploy`
- ✅ GitHub Actions status checks → PM2 monitoring

### What Was Added
- ✅ Local PM2 process management
- ✅ Real-time application monitoring
- ✅ Automated restart capabilities
- ✅ Local build verification
- ✅ Integrated deployment workflow

## Future Enhancements

1. **Scheduled Automation**: Add cron jobs for automated CI runs
2. **Notification System**: Integrate with Slack/Teams for build notifications
3. **Advanced Testing**: Add comprehensive test suites
4. **Deployment Targets**: Add support for multiple deployment environments
5. **Metrics Collection**: Add performance and build metrics collection

## Support

For issues or questions about the PM2 automation system:
1. Check PM2 status: `pm2 status`
2. Review logs: `pm2 logs`
3. Run diagnostics: `bash scripts/pm2-automation.sh monitor`
4. Check build output: `ls -la dist/`

---

**Last Updated**: August 29, 2025
**Status**: ✅ Fully Operational
**GitHub Actions**: ❌ Replaced by PM2 Automation