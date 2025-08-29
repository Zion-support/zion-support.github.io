# PM2 Automation System

This document describes the PM2-based automation system that has replaced the GitHub Actions workflows for this project.

## Overview

The PM2 automation system provides the same functionality as the previous GitHub Actions workflows but runs locally with better performance and more control. It handles:

- **CI/CD Pipeline** - Build, lint, type-check, and test automation
- **Security Scanning** - Automated security audits and vulnerability checks
- **Deployment** - Build verification and deployment workflows
- **Continuous Improvement** - Automated code quality improvements
- **Scheduled Tasks** - Daily and weekly maintenance tasks

## Architecture

### Core Components

1. **PM2 Process Manager** (`scripts/pm2-process-manager.js`)
   - Manages all PM2 processes
   - Provides CLI interface for automation tasks
   - Handles process lifecycle management

2. **PM2 Automation Engine** (`scripts/pm2-automation.js`)
   - Executes automation tasks
   - Handles CI/CD workflows
   - Manages security and deployment processes

3. **PM2 Ecosystem Config** (`ecosystem.config.cjs`)
   - Defines PM2 application configurations
   - Configures deployment settings
   - Sets environment variables

### Process Structure

```
PM2 Processes:
├── bolt-app (main application)
├── automation (automation engine)
└── scheduled-tasks (scheduled automation)
```

## Installation & Setup

### Prerequisites

- Node.js 18+ installed
- PM2 installed globally: `npm install -g pm2`

### Initial Setup

```bash
# Install dependencies
npm install

# Setup PM2 automation
npm run pm2:setup

# Start all PM2 processes
npm run pm2:start
```

## Usage

### Available Commands

#### PM2 Management
```bash
npm run pm2:start      # Start all PM2 processes
npm run pm2:stop       # Stop all PM2 processes
npm run pm2:restart    # Restart all PM2 processes
npm run pm2:status     # Show PM2 status
npm run pm2:health     # Run health check
```

#### Automation Tasks
```bash
npm run pm2:ci         # Run CI pipeline
npm run pm2:deploy     # Run deployment workflow
npm run pm2:security   # Run security scan
npm run pm2:improvement # Run continuous improvement
```

#### Setup & Configuration
```bash
npm run pm2:setup      # Setup startup scripts and cron jobs
```

### Direct Script Usage

You can also run the scripts directly:

```bash
# PM2 Process Manager
node scripts/pm2-process-manager.js <command>

# PM2 Automation
node scripts/pm2-automation.js <command>
```

## Automation Workflows

### CI Pipeline (`npm run pm2:ci`)

Replaces GitHub Actions CI workflow:
- Installs dependencies
- Runs linting
- Performs type checking
- Builds the project
- Verifies build output

### Security Scan (`npm run pm2:security`)

Replaces GitHub Actions Security workflow:
- Runs npm security audit
- Checks for high severity vulnerabilities
- Generates security reports

### Deployment (`npm run pm2:deploy`)

Replaces GitHub Actions Deploy workflow:
- Builds project for production
- Verifies build artifacts
- Prepares for deployment
- Ready for hosting platform integration

### Continuous Improvement (`npm run pm2:improvement`)

Replaces GitHub Actions Continuous Improvement workflow:
- Runs linting with auto-fix
- Performs type checking
- Builds project to ensure compatibility
- Runs on scheduled basis (Mondays)

## Scheduled Tasks

The system automatically runs scheduled tasks:

- **Daily at 2 AM**: Security scan
- **Weekly on Monday at 2 AM**: Continuous improvement tasks

### Cron Job Setup

After running `npm run pm2:setup`, add these to your crontab:

```bash
# Daily security scan
0 2 * * * /workspace/scripts/run-scheduled-tasks.sh

# Weekly continuous improvement (Mondays)
0 2 * * 1 /workspace/scripts/run-scheduled-tasks.sh
```

## Monitoring & Logs

### Log Files

- `pm2-automation.log` - Automation task logs
- `pm2-process-manager.log` - Process management logs
- `pm2-cron.log` - Scheduled task logs

### PM2 Monitoring

```bash
# View all processes
pm2 list

# Monitor processes in real-time
pm2 monit

# View logs
pm2 logs

# View specific process logs
pm2 logs <process-name>
```

## Configuration

### Environment Variables

The system supports different environments:

- **Development**: `NODE_ENV=development`
- **Production**: `NODE_ENV=production`

### Customization

You can customize the automation by modifying:

- `scripts/pm2-automation.js` - Automation logic
- `scripts/pm2-process-manager.js` - Process management
- `ecosystem.config.cjs` - PM2 configuration

## Migration from GitHub Actions

### What Was Replaced

| GitHub Actions Workflow | PM2 Automation |
|------------------------|----------------|
| `ci.yml` | `npm run pm2:ci` |
| `deploy.yml` | `npm run pm2:deploy` |
| `security.yml` | `npm run pm2:security` |
| `continuous-improvement.yml` | `npm run pm2:improvement` |
| `dependencies.yml` | Integrated into CI pipeline |
| `test.yml` | Integrated into CI pipeline |

### Benefits of Migration

1. **Faster Execution** - No GitHub Actions queue delays
2. **Better Control** - Full control over execution environment
3. **Cost Effective** - No GitHub Actions minutes consumption
4. **Real-time Monitoring** - Immediate feedback and status
5. **Custom Scheduling** - Flexible cron-based scheduling
6. **Local Development** - Test automation locally before deployment

## Troubleshooting

### Common Issues

1. **PM2 Not Found**
   ```bash
   npm install -g pm2
   ```

2. **Permission Issues**
   ```bash
   sudo npm install -g pm2
   ```

3. **Process Errors**
   ```bash
   npm run pm2:health
   pm2 logs
   ```

4. **Automation Failures**
   ```bash
   # Check logs
   tail -f pm2-automation.log
   
   # Restart processes
   npm run pm2:restart
   ```

### Health Checks

```bash
# Run comprehensive health check
npm run pm2:health

# Check specific automation
npm run pm2:ci
npm run pm2:security
```

## Support

For issues or questions about the PM2 automation system:

1. Check the logs in the log files
2. Run health checks: `npm run pm2:health`
3. Check PM2 status: `npm run pm2:status`
4. Review this documentation

## Future Enhancements

Potential improvements for the automation system:

- Web-based dashboard for monitoring
- Slack/Teams notifications for failures
- Integration with external monitoring tools
- Advanced scheduling options
- Performance metrics and analytics
- Automated rollback capabilities