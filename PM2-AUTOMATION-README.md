# PM2 Automation System

This document describes the PM2 automation system that has replaced GitHub Actions for CI/CD, dependency management, and security monitoring.

## Overview

The PM2 automation system provides the following functionality that was previously handled by GitHub Actions:

- **CI/CD Pipeline**: Automated building, testing, and deployment
- **Dependency Management**: Automated dependency updates and security audits
- **Security Monitoring**: Regular security checks and vulnerability scanning
- **Process Management**: Application monitoring and auto-restart capabilities

## Prerequisites

- Node.js 18+ installed
- PM2 installed globally: `npm install -g pm2`
- Yarn package manager (the project uses yarn)

## Installation

1. Ensure PM2 is installed globally:
   ```bash
   npm install -g pm2
   ```

2. The automation scripts are located in the `scripts/` directory:
   - `pm2-automation.js` - Main automation script
   - `pm2-cron.sh` - Cron job script for scheduled tasks

3. Make scripts executable:
   ```bash
   chmod +x scripts/pm2-automation.js scripts/pm2-cron.sh
   ```

## Configuration

### PM2 Ecosystem Configuration

The `ecosystem.config.js` file contains PM2 configuration for:
- Application startup and monitoring
- Environment-specific settings
- Deployment automation

### Automation Scripts

The main automation script (`scripts/pm2-automation.js`) provides the following commands:

#### CI Process
```bash
node scripts/pm2-automation.js ci
```
- Installs dependencies
- Runs linting (non-blocking)
- Runs type checking (non-blocking)
- Builds the project
- Runs tests if available (non-blocking)

#### Deployment Process
```bash
node scripts/pm2-automation.js deploy
```
- Installs dependencies
- Builds the project
- Verifies build output
- Prepares for deployment

#### Dependency Updates
```bash
node scripts/pm2-automation.js deps
```
- Checks for outdated packages
- Runs security audit
- Updates dependencies
- Rebuilds and verifies the project
- Runs quality checks (non-blocking)

#### Security Checks
```bash
node scripts/pm2-automation.js security
```
- Installs dependencies
- Runs security audit
- Checks for outdated packages

#### Start Monitoring
```bash
node scripts/pm2-automation.js deploy
```
- Starts PM2 monitoring
- Provides monitoring dashboard access

## Scheduled Automation

The `scripts/pm2-cron.sh` script can be used with cron to automate tasks:

### Cron Configuration

Add the following to your crontab (`crontab -e`):

```bash
# Run dependency updates every Monday at 2 AM
0 2 * * 1 /workspace/scripts/pm2-cron.sh

# Run security checks every Monday at 2 AM
0 2 * * 1 /workspace/scripts/pm2-cron.sh

# Run CI checks daily at 6 AM
0 6 * * * /workspace/scripts/pm2-cron.sh

# Run deployment checks daily at 8 AM
0 8 * * * /workspace/scripts/pm2-cron.sh
```

### Manual Cron Execution

You can also run the cron script manually:
```bash
bash scripts/pm2-cron.sh
```

## PM2 Commands

### Basic PM2 Operations

```bash
# Start the application
pm2 start ecosystem.config.js

# Monitor applications
pm2 monit

# View logs
pm2 logs

# View status
pm2 status

# Restart application
pm2 restart bolt-zion-app

# Stop application
pm2 stop bolt-zion-app

# Delete application from PM2
pm2 delete bolt-zion-app
```

### PM2 Monitoring

```bash
# Real-time monitoring dashboard
pm2 monit

# View detailed information
pm2 show bolt-zion-app

# View logs for specific app
pm2 logs bolt-zion-app

# View logs with timestamps
pm2 logs bolt-zion-app --timestamp
```

## Logs and Monitoring

### Automation Logs

All automation tasks log to `pm2-automation.log` in the workspace root.

### PM2 Logs

PM2 logs are stored in `~/.pm2/logs/` and can be viewed with:
```bash
pm2 logs
```

### Monitoring Dashboard

Access the PM2 monitoring dashboard:
```bash
pm2 monit
```

## Troubleshooting

### Common Issues

1. **PM2 not found**: Ensure PM2 is installed globally
   ```bash
   npm install -g pm2
   ```

2. **Permission denied**: Make scripts executable
   ```bash
   chmod +x scripts/pm2-automation.js scripts/pm2-cron.sh
   ```

3. **Yarn issues**: Ensure yarn is properly installed and configured

4. **Build failures**: Check the build logs and ensure all dependencies are installed

### Debugging

1. Check automation logs:
   ```bash
   tail -f pm2-automation.log
   ```

2. Check PM2 logs:
   ```bash
   pm2 logs bolt-zion-app
   ```

3. Check PM2 status:
   ```bash
   pm2 status
   ```

## Migration from GitHub Actions

This PM2 automation system replaces the following GitHub Actions workflows:

- `ci.yml` → `node scripts/pm2-automation.js ci`
- `deploy.yml` → `node scripts/pm2-automation.js deploy`
- `dependencies.yml` → `node scripts/pm2-automation.js deps`
- `security.yml` → `node scripts/pm2-automation.js security`

### Benefits of PM2 Automation

- **Faster execution**: No need to wait for GitHub Actions runners
- **Local control**: Full control over the automation environment
- **Cost effective**: No GitHub Actions minutes consumed
- **Real-time monitoring**: Immediate feedback and monitoring
- **Customizable**: Easy to modify and extend automation logic

## Security Considerations

- The automation scripts run with the same permissions as the user executing them
- Ensure proper access controls on the automation scripts
- Monitor logs for any suspicious activity
- Regularly update dependencies to address security vulnerabilities

## Support

For issues with the PM2 automation system:
1. Check the logs in `pm2-automation.log`
2. Review PM2 logs with `pm2 logs`
3. Verify script permissions and dependencies
4. Check the troubleshooting section above