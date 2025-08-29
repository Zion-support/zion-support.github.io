# PM2 Automation System

This directory contains the PM2 process manager configuration and automation scripts for the Zion Tech Group website.

## Overview

The application now uses PM2 (Process Manager 2) for all automation tasks instead of GitHub Actions. This provides:
- **Real-time automation**: Continuous monitoring and execution
- **Better performance**: No waiting for GitHub Actions queue
- **Local control**: Full control over automation processes
- **Resource efficiency**: Optimized memory and CPU usage

## PM2 Configuration

### Main Configuration File
- **File**: `ecosystem.config.cjs` (in project root)
- **Purpose**: Defines all PM2 processes and their configurations

### Available Scripts

```bash
# Start all automation processes
npm run pm2:start:automation

# Start main applications
npm run pm2:start:apps

# Start all processes
npm run pm2:start

# Stop all processes
npm run pm2:stop

# Restart all processes
npm run pm2:restart

# View logs
npm run pm2:logs

# Monitor processes
npm run pm2:monit

# Check status
npm run pm2:status

# Save current configuration
npm run pm2:save

# Setup startup scripts
npm run pm2:startup
```

## Automation Processes

### 🔧 Console Error Fixer
- **Script**: `./scripts/automation/console-error-fixer.cjs`
- **Frequency**: Every 15 minutes
- **Purpose**: Automatically fixes console errors in the codebase

### 🔗 Link Checker
- **Script**: `./scripts/automation/link-checker.cjs`
- **Frequency**: Every 30 minutes
- **Purpose**: Checks for broken links and reports issues

### 📈 Continuous Improvement
- **Script**: `./scripts/automation/continuous-improvement.cjs`
- **Frequency**: Every 2 hours
- **Purpose**: Suggests and implements code improvements

### 🧪 Daily Build & Test
- **Script**: `./scripts/automation/daily-build-test.cjs`
- **Frequency**: Every hour
- **Purpose**: Runs build verification and basic tests

### 🔒 Security Audit
- **Script**: `./scripts/automation/security-audit.cjs`
- **Frequency**: Every 4 hours
- **Purpose**: Security vulnerability scanning and reporting

### 📦 Dependency Updates
- **Script**: `./scripts/automation/dependency-updates.cjs`
- **Frequency**: Every 6 hours
- **Purpose**: Checks for outdated packages and security updates

### 📊 Performance Monitor
- **Script**: `./scripts/automation/performance-monitor.cjs`
- **Frequency**: Every 2 hours
- **Purpose**: Monitors application performance metrics

### ✅ Quality Checks
- **Script**: `./scripts/automation/quality-checks.cjs`
- **Frequency**: Every 3 hours
- **Purpose**: Code quality analysis and linting

### 🔗 Link Integrity
- **Script**: `./scripts/automation/link-integrity.cjs`
- **Frequency**: Every 2 hours
- **Purpose**: Deep link validation and integrity checking

### 🎯 Front Maximizer
- **Script**: `./scripts/automation/front-maximizer.cjs`
- **Frequency**: Every 4 hours
- **Purpose**: Frontend optimization and enhancement

### 🗺️ Sitemap Runner
- **Script**: `./scripts/automation/sitemap-runner.cjs`
- **Frequency**: Every 6 hours
- **Purpose**: Generates and validates sitemaps

## Main Applications

### Zion App
- **Script**: `npm start`
- **Purpose**: Main frontend application
- **Status**: Configured but not required for automation

### Zion Backend
- **Script**: `cd server && npm start`
- **Purpose**: Backend server
- **Status**: Configured but not required for automation

## Monitoring and Management

### View Process Status
```bash
pm2 status
```

### View Logs
```bash
pm2 logs [process-name]
```

### Monitor Resources
```bash
pm2 monit
```

### Restart Specific Process
```bash
pm2 restart [process-name]
```

### Stop Specific Process
```bash
pm2 stop [process-name]
```

## Benefits Over GitHub Actions

1. **Real-time Execution**: No waiting for GitHub Actions queue
2. **Continuous Monitoring**: 24/7 automation without delays
3. **Resource Control**: Optimized memory and CPU usage
4. **Local Management**: Full control over automation processes
5. **Cost Effective**: No GitHub Actions minutes consumption
6. **Faster Execution**: Direct local execution vs. remote CI/CD

## Troubleshooting

### Process Not Starting
```bash
# Check PM2 logs
pm2 logs

# Restart specific process
pm2 restart [process-name]

# Check ecosystem config
cat ecosystem.config.cjs
```

### High Memory Usage
```bash
# Monitor memory usage
pm2 monit

# Restart processes
pm2 restart all

# Check memory limits in ecosystem.config.cjs
```

### Process Errors
```bash
# View error logs
pm2 logs [process-name] --err

# Check process status
pm2 status

# Restart errored processes
pm2 restart [process-name]
```

## Configuration

All automation processes are configured in `ecosystem.config.cjs` with:
- **Memory limits**: 512MB per automation process
- **Auto-restart**: Enabled for all processes
- **Environment variables**: Production-ready configuration
- **Instance management**: Single instance per process for efficiency

## Security

- All processes run in production environment
- Memory limits prevent resource exhaustion
- Auto-restart ensures continuous operation
- Process isolation for security

## Support

For PM2 automation issues:
1. Check process status: `pm2 status`
2. View logs: `pm2 logs [process-name]`
3. Monitor resources: `pm2 monit`
4. Restart processes: `pm2 restart [process-name]`
5. Check ecosystem configuration: `ecosystem.config.cjs`