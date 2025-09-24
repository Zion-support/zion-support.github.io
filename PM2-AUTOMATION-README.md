# PM2 Automation Setup - Replacing GitHub Actions

This document describes the PM2-based automation system that has replaced all GitHub Actions workflows.

## Overview

All GitHub Actions workflows have been migrated to PM2 automation processes that run locally on the server. This provides better control, faster execution, and eliminates dependency on GitHub's infrastructure.

## Migration Summary

| GitHub Action | PM2 Process | Schedule | Purpose |
|---------------|-------------|----------|---------|
| `agent-factory.yml` | `link-checker` | Daily 2 AM | Check for broken links and build issues |
| `continuous-improvement.yml` | `continuous-improvement` | Weekly Monday 2 AM | Run linting, type checking, and auto-fix |
| `ci-cd.yml` | `daily-build-test` | Daily 6 AM | Build, test, and security audit |
| `security.yml` | `security-audit` | Weekly Sunday 8 AM | Security vulnerability scanning |
| `dependencies.yml` | `dependency-updates` | Weekly Tuesday 10 AM | Check and update dependencies |
| Performance testing from `ci-cd.yml` | `performance-monitor` | Daily 12 PM | Performance analysis and optimization |
| `quality-check.yml` | `quality-checks` | Daily 2 PM | Code quality, accessibility, and security checks |
| `link-checker.yml` | `link-integrity` | Daily 4 PM | Comprehensive link validation |

## Installation

### 1. Install PM2 Globally

```bash
npm install -g pm2
```

### 2. Start All Processes

```bash
npm run pm2:start
```

This will:
- Install PM2 if not present
- Start main applications
- Start all automation processes
- Save PM2 configuration
- Setup startup scripts

## Available Commands

### PM2 Management

```bash
# Start all processes
npm run pm2:start

# Start only main applications
npm run pm2:start:apps

# Start only automation processes
npm run pm2:start:automation

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

# Delete all processes
npm run pm2:delete

# Save current configuration
npm run pm2:save

# Setup startup script
npm run pm2:startup
```

### Direct PM2 Commands

```bash
# Start specific processes
pm2 start ecosystem.config.js --only apps
pm2 start ecosystem.config.js --only automation

# View detailed status
pm2 show <process-name>

# View logs for specific process
pm2 logs <process-name>

# Restart specific process
pm2 restart <process-name>

# Stop specific process
pm2 stop <process-name>
```

## Process Configuration

### Main Applications

- **zion-app**: Main frontend application
- **zion-backend**: Backend server

### Automation Processes

All automation processes are configured with:
- `autorestart: false` - Don't restart on completion
- `cron_restart` - Schedule-based execution
- `watch: false` - No file watching
- Proper error handling and logging

## Schedule Details

| Process | Schedule | Description |
|---------|----------|-------------|
| `link-checker` | `0 2 * * *` | Daily at 2 AM |
| `continuous-improvement` | `0 2 * * 1` | Weekly on Monday at 2 AM |
| `daily-build-test` | `0 6 * * *` | Daily at 6 AM |
| `security-audit` | `0 8 * * 0` | Weekly on Sunday at 8 AM |
| `dependency-updates` | `0 10 * * 2` | Weekly on Tuesday at 10 AM |
| `performance-monitor` | `0 12 * * *` | Daily at 12 PM |
| `quality-checks` | `0 14 * * *` | Daily at 2 PM |
| `link-integrity` | `0 16 * * *` | Daily at 4 PM |

## Reports and Outputs

Each automation process generates detailed reports:

- **Link Checker**: `link-checker-report.json`
- **Performance Monitor**: `performance-report.json`
- **Quality Checks**: `quality-report.json`
- **Link Integrity**: `link-integrity-report.json`

Reports include:
- Timestamp of execution
- Detailed results and metrics
- Issues found and recommendations
- Success/failure status

## Monitoring and Logs

### View All Logs

```bash
pm2 logs
```

### View Specific Process Logs

```bash
pm2 logs <process-name>
```

### Monitor Processes in Real-time

```bash
pm2 monit
```

### Check Process Status

```bash
pm2 status
```

## Troubleshooting

### Process Not Starting

1. Check if PM2 is installed: `pm2 --version`
2. Verify ecosystem.config.js syntax
3. Check logs: `pm2 logs <process-name>`
4. Ensure proper permissions

### Automation Not Running

1. Check cron schedule: `pm2 show <process-name>`
2. Verify process is started: `pm2 status`
3. Check system timezone
4. Review logs for errors

### Performance Issues

1. Monitor resource usage: `pm2 monit`
2. Check process memory limits
3. Review automation scripts for optimization
4. Consider adjusting schedules

## Benefits of PM2 Over GitHub Actions

1. **Faster Execution**: No GitHub runner queue delays
2. **Better Control**: Full control over execution environment
3. **Cost Effective**: No GitHub Actions minutes consumption
4. **Real-time Monitoring**: Live process monitoring and logs
5. **Flexible Scheduling**: Precise cron-based scheduling
6. **Local Resources**: Access to local system resources
7. **Offline Capability**: Works without internet connectivity
8. **Custom Reporting**: Detailed local reports and metrics

## Security Considerations

- All automation scripts run with local permissions
- No external API calls to GitHub
- Local file system access for reports
- Environment variable handling through PM2
- Process isolation and resource limits

## Maintenance

### Regular Tasks

1. **Weekly**: Review automation reports
2. **Monthly**: Update dependency versions
3. **Quarterly**: Review and optimize schedules
4. **As Needed**: Update automation scripts

### Backup

- PM2 configuration: `pm2 save`
- Ecosystem config: `ecosystem.config.js`
- Automation scripts: `scripts/automation/`
- Generated reports: Various JSON files

## Support

For issues or questions:
1. Check PM2 logs: `pm2 logs`
2. Review process status: `pm2 status`
3. Check automation script outputs
4. Review generated reports

---

**Note**: This system completely replaces GitHub Actions. All workflows have been deleted and replaced with PM2 automation processes.
