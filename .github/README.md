# PM2 Automation System

This directory contains the configuration for the PM2 process manager that handles all automation tasks for the Zion Tech Group website.

## Overview

Instead of GitHub Actions, this project uses PM2 (Process Manager 2) to run continuous automation tasks. PM2 provides better performance, local execution, and real-time monitoring capabilities.

## Current Automation Processes

### 🔄 Console Error Fixer
- **Process Name**: `console-error-fixer`
- **Script**: `./scripts/automation/console-error-fixer.cjs`
- **Interval**: Every 15 minutes (900,000ms)
- **Purpose**: Automatically detects and fixes console errors in the application

### 🔗 Link Checker
- **Process Name**: `link-checker`
- **Script**: `./scripts/automation/link-checker.cjs`
- **Interval**: Every 30 minutes (1,800,000ms)
- **Purpose**: Checks for broken links and reports issues

### 🚀 Continuous Improvement
- **Process Name**: `continuous-improvement`
- **Script**: `./scripts/automation/continuous-improvement.cjs`
- **Interval**: Every 2 hours (7,200,000ms)
- **Purpose**: Suggests and implements improvements automatically

### 🧪 Daily Build & Test
- **Process Name**: `daily-build-test`
- **Script**: `./scripts/automation/daily-build-test.cjs`
- **Interval**: Every hour (3,600,000ms)
- **Purpose**: Runs build verification and testing

### 🔒 Security Audit
- **Process Name**: `security-audit`
- **Script**: `./scripts/automation/security-audit.cjs`
- **Interval**: Every 4 hours (14,400,000ms)
- **Purpose**: Performs security vulnerability scanning

### 📦 Dependency Updates
- **Process Name**: `dependency-updates`
- **Script**: `./scripts/automation/dependency-updates.cjs`
- **Interval**: Every 6 hours (21,600,000ms)
- **Purpose**: Checks for and updates outdated dependencies

### 📊 Performance Monitoring
- **Process Name**: `performance-monitor`
- **Script**: `./scripts/automation/performance-monitor.cjs`
- **Interval**: Every 2 hours (7,200,000ms)
- **Purpose**: Monitors application performance metrics

### ✅ Quality Checks
- **Process Name**: `quality-checks`
- **Script**: `./scripts/automation/quality-checks.cjs`
- **Interval**: Every 3 hours (10,800,000ms)
- **Purpose**: Runs code quality and linting checks

### 🔗 Link Integrity
- **Process Name**: `link-integrity`
- **Script**: `./scripts/automation/link-integrity.cjs`
- **Interval**: Every 2 hours (7,200,000ms)
- **Purpose**: Ensures link integrity and reports broken links

### 🎯 Front Maximizer
- **Process Name**: `front-maximizer`
- **Script**: `./scripts/automation/front-maximizer.cjs`
- **Interval**: Every 4 hours (14,400,000ms)
- **Purpose**: Optimizes frontend performance and user experience

### 🗺️ Sitemap Runner
- **Process Name**: `sitemap-runner`
- **Script**: `./scripts/automation/sitemap-runner.cjs`
- **Interval**: Every 6 hours (21,600,000ms)
- **Purpose**: Generates and validates sitemaps

## Configuration

### Ecosystem File
The PM2 configuration is defined in `ecosystem.config.cjs` at the project root.

### Environment Variables
All automation processes run with:
- `NODE_ENV`: production
- `AUTOMATION_INTERVAL`: Process-specific interval in milliseconds

## Management Commands

### Start All Processes
```bash
pm2 start ecosystem.config.cjs
```

### Monitor Processes
```bash
pm2 list
pm2 monit
```

### View Logs
```bash
pm2 logs [process-name]
pm2 logs --lines 100
```

### Restart Processes
```bash
pm2 restart [process-name]
pm2 restart all
```

### Stop Processes
```bash
pm2 stop [process-name]
pm2 stop all
```

### Delete Processes
```bash
pm2 delete [process-name]
pm2 delete all
```

## Benefits of PM2 over GitHub Actions

1. **Real-time Execution**: Processes run continuously instead of on-demand
2. **Local Control**: No dependency on external services or API limits
3. **Better Performance**: Faster execution without CI/CD overhead
4. **Cost Effective**: No additional service costs
5. **Immediate Feedback**: Real-time monitoring and logging
6. **Customizable Intervals**: Precise control over execution timing

## Monitoring

### Process Status
- All processes are configured with `autorestart: true`
- Memory limits are set to prevent resource exhaustion
- Processes automatically restart on failure

### Health Checks
- Monitor process status with `pm2 list`
- Check logs for any errors or issues
- Use `pm2 monit` for real-time monitoring

## Troubleshooting

### Common Issues
1. **Process Stopped**: Check logs for error details
2. **High Memory Usage**: Verify memory limits in ecosystem config
3. **Script Errors**: Check automation script syntax and dependencies

### Debug Mode
To debug a specific process:
```bash
pm2 logs [process-name] --lines 200
pm2 restart [process-name]
```

## Security

- All processes run in production mode
- No sensitive data is logged
- Processes are isolated and have memory limits
- Regular security audits are performed automatically

## Support

For PM2 automation issues:
1. Check process status with `pm2 list`
2. Review logs for error details
3. Verify automation scripts exist and are executable
4. Check ecosystem configuration syntax