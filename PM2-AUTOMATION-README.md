# PM2 Automation System - GitHub Actions Replacement

This document explains how to use the PM2 automation system that replaces the GitHub Actions workflows for CI/CD, dependency management, and monitoring.

## Overview

The PM2 automation system provides the same functionality as the GitHub Actions workflows but runs locally on your server, giving you more control and reducing external dependencies.

## What's Replaced

| GitHub Action | PM2 Equivalent | Description |
|---------------|----------------|-------------|
| `ci.yml` | `pm2-automation.sh ci` | Continuous Integration pipeline |
| `deploy.yml` | `pm2-automation.sh deploy` | Deployment automation |
| `dependencies.yml` | `pm2-cron.sh deps` | Dependency updates |
| `security.yml` | `pm2-cron.sh security` | Security scanning |
| `quality-check.yml` | `pm2-cron.sh quality` | Quality checks |
| `test.yml` | `pm2-automation.sh test` | Test execution |

## Quick Start

### 1. Install PM2 (if not already installed)
```bash
npm install -g pm2
```

### 2. Start PM2 Services
```bash
# Start the application
pm2 start ecosystem.config.js

# Or use the automation script
./scripts/pm2-automation.sh start
```

### 3. Set Up Automated Tasks
```bash
# Install the cron jobs
crontab scripts/crontab-setup.txt

# Or set up PM2 startup
./scripts/pm2-startup.sh
```

## Scripts Overview

### `pm2-automation.sh` - Main Automation Script
This is your primary tool for manual operations and CI/CD tasks.

```bash
# Run CI pipeline
./scripts/pm2-automation.sh ci

# Deploy application
./scripts/pm2-automation.sh deploy

# Run tests
./scripts/pm2-automation.sh test

# Monitor services
./scripts/pm2-automation.sh monitor

# Show status
./scripts/pm2-automation.sh status

# Restart services
./scripts/pm2-automation.sh restart

# Stop all services
./scripts/pm2-automation.sh stop

# Start services
./scripts/pm2-automation.sh start
```

### `pm2-cron.sh` - Automated Background Tasks
This script runs automated tasks on schedule.

```bash
# Update dependencies
./scripts/pm2-cron.sh deps

# Run security scan
./scripts/pm2-cron.sh security

# Run quality checks
./scripts/pm2-cron.sh quality

# Verify build
./scripts/pm2-cron.sh build

# Check and restart services if needed
./scripts/pm2-cron.sh restart

# Clean up logs and cache
./scripts/pm2-cron.sh cleanup

# Run all tasks
./scripts/pm2-cron.sh all
```

### `pm2-startup.sh` - System Boot Configuration
Configures PM2 to start automatically on system boot.

```bash
./scripts/pm2-startup.sh
```

## Automated Schedule

The system runs the following tasks automatically:

- **Every Monday at 2 AM**: Dependency updates
- **Every day at 3 AM**: Security scanning
- **Every day at 4 AM**: Quality checks
- **Every 6 hours**: Service health checks
- **Every Sunday at 1 AM**: Full maintenance
- **Every day at 5 AM**: Log cleanup

## Configuration Files

### `ecosystem.config.js`
PM2 ecosystem configuration for your application.

### `scripts/crontab-setup.txt`
Cron job configuration for automated tasks.

## Monitoring and Logs

### View PM2 Status
```bash
pm2 list
pm2 monit
```

### View Logs
```bash
# PM2 logs
pm2 logs

# Automation script logs
tail -f /tmp/pm2-*.log

# Specific task logs
tail -f /tmp/pm2-deps.log      # Dependency updates
tail -f /tmp/pm2-security.log  # Security scans
tail -f /tmp/pm2-quality.log   # Quality checks
```

## Troubleshooting

### PM2 Not Running
```bash
# Start PM2 daemon
pm2 start

# Check status
pm2 ping
```

### Services Not Starting
```bash
# Check logs
pm2 logs

# Restart services
pm2 restart all

# Reload configuration
pm2 reload ecosystem.config.js
```

### Cron Jobs Not Working
```bash
# Check cron service
sudo systemctl status cron

# View cron logs
sudo tail -f /var/log/syslog | grep CRON

# Test cron job manually
./scripts/pm2-cron.sh deps
```

## Migration from GitHub Actions

### Before (GitHub Actions)
- Workflows triggered on push/PR
- External service dependency
- Limited customization
- GitHub-specific features

### After (PM2 Automation)
- Local execution
- Full control over timing
- Customizable scripts
- No external dependencies
- Real-time monitoring

## Security Considerations

- Scripts run with your user permissions
- Logs are stored locally
- No external API calls
- Full audit trail available

## Performance Benefits

- Faster execution (no network latency)
- No GitHub Actions queue waiting
- Real-time feedback
- Resource usage monitoring

## Support and Maintenance

### Regular Maintenance
- Monitor log files for errors
- Check PM2 process status
- Review cron job execution
- Update scripts as needed

### Backup
- Keep copies of automation scripts
- Document any customizations
- Version control your PM2 configuration

## Example Workflow

### Daily Development
```bash
# Start development
./scripts/pm2-automation.sh start

# Monitor during development
./scripts/pm2-automation.sh monitor

# Run CI checks
./scripts/pm2-automation.sh ci

# Deploy when ready
./scripts/pm2-automation.sh deploy
```

### Automated Maintenance
The system automatically:
1. Updates dependencies weekly
2. Scans for security issues daily
3. Runs quality checks daily
4. Monitors service health
5. Cleans up old logs

## Conclusion

The PM2 automation system provides a robust, local alternative to GitHub Actions with:
- Full control over execution
- Real-time monitoring
- Automated maintenance
- No external dependencies
- Customizable workflows

This system ensures your application runs smoothly with automated CI/CD, security scanning, and maintenance tasks running locally on your server.