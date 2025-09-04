# PM2 Automation System

This directory contains PM2 automation scripts that replace the GitHub Actions workflows.

## Overview

The PM2 automation system provides:
- **CI/CD Automation**: Replaces GitHub Actions CI/CD pipeline
- **Continuous Automation**: Replaces GitHub Actions continuous automation workflow

## Files

- `ci-cd-automation.js` - CI/CD pipeline automation (testing, linting, building)
- `continuous-automation.js` - Continuous automation (automation scripts, security audits)
- `ecosystem.config.js` - PM2 configuration file
- `start-automation.sh` - Startup script for PM2 processes

## Usage

### Start PM2 Automation
```bash
./pm2-automation/start-automation.sh
```

### Manual PM2 Commands
```bash
# Start individual processes
pm2 start pm2-automation/ci-cd-automation.js --name ci-cd-automation
pm2 start pm2-automation/continuous-automation.js --name continuous-automation

# Check status
pm2 status

# View logs
pm2 logs

# Restart processes
pm2 restart all

# Stop processes
pm2 stop all

# Save current process list
pm2 save
```

## Features

- **Automated Scheduling**: Processes run every 6 hours
- **Logging**: Comprehensive logging to `logs/` directory
- **Reporting**: JSON reports generated in `reports/` directory
- **Error Handling**: Robust error handling and recovery
- **Memory Management**: Automatic restart on memory limits

## Migration from GitHub Actions

This system replaces the following GitHub Actions workflows:
- `.github/workflows/ci-cd.yml` (deleted)
- `.github/workflows/continuous-automation.yml` (deleted)

The PM2 system provides the same functionality with:
- Better resource management
- Local execution
- Real-time monitoring
- Persistent processes