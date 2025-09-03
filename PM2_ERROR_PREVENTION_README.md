# PM2 Error Prevention Automation System

## Overview

The PM2 Error Prevention Automation System is a comprehensive solution that automatically detects and fixes common project errors in real-time. It runs continuously in the background using PM2 process manager to ensure your project stays error-free.

## Features

### 🔧 Automated Error Fixing

- **TypeScript Error Fixing**: Automatically fixes TypeScript syntax errors, missing imports, and type issues
- **ESLint Error Fixing**: Resolves linting errors and code style issues
- **Build Error Prevention**: Monitors and fixes build-time errors
- **Import Path Resolution**: Automatically corrects broken import paths
- **File Extension Management**: Converts .js files to .tsx when they contain JSX

### 📊 Continuous Monitoring

- **Real-time Error Detection**: Monitors for new errors every 5 minutes
- **Dependency Health Checks**: Tracks outdated packages and security vulnerabilities
- **File System Health**: Detects orphaned files, duplicates, and large files
- **Performance Monitoring**: Tracks memory usage and CPU utilization

### 🚀 Intelligent Automation

- **Predictive Issue Detection**: Identifies potential problems before they become errors
- **Smart Dependency Management**: Automatically updates dependencies when safe
- **Code Quality Enhancement**: Continuously improves code quality and consistency
- **Automated Recovery**: Self-healing system that restarts failed processes

## Quick Start

### 1. Install Dependencies

```bash
# Install PM2 globally
npm install -g pm2

# Install project dependencies
npm install
```

### 2. Setup the Automation System

```bash
# Run the setup script
./start-error-prevention-automation.sh install
```

### 3. Start the Automation

```bash
# Start all error prevention automations
./start-error-prevention-automation.sh start
```

### 4. Monitor Status

```bash
# Check status of all processes
./start-error-prevention-automation.sh status

# View logs
./start-error-prevention-automation.sh logs pm2-error-prevention
```

## Management Commands

### Start/Stop/Restart

```bash
# Start the automation
./start-error-prevention-automation.sh start

# Stop the automation
./start-error-prevention-automation.sh stop

# Restart the automation
./start-error-prevention-automation.sh restart
```

### Monitoring

```bash
# Show status of all processes
./start-error-prevention-automation.sh status

# View logs for specific service
./start-error-prevention-automation.sh logs pm2-error-prevention
./start-error-prevention-automation.sh logs console-error-fixer
./start-error-prevention-automation.sh logs typescript-error-fixer

# Run one-time error fix
./start-error-prevention-automation.sh fix
```

### Direct PM2 Commands

```bash
# View all PM2 processes
pm2 status

# View logs for all processes
pm2 logs

# Monitor processes in real-time
pm2 monit

# Restart all processes
pm2 restart all

# Stop all processes
pm2 stop all
```

## Automation Components

### 1. PM2 Error Prevention (Main Controller)

- **Script**: `scripts/automation/pm2-error-prevention-automation.cjs`
- **Interval**: Every 5 minutes
- **Purpose**: Orchestrates all error prevention activities

### 2. Console Error Fixer

- **Script**: `scripts/automation/console-error-fixer.cjs`
- **Interval**: Every 15 minutes
- **Purpose**: Fixes console errors and runtime issues

### 3. Comprehensive Error Fixer

- **Script**: `scripts/automation/comprehensive-error-fixer.cjs`
- **Interval**: Every 30 minutes
- **Purpose**: Comprehensive error analysis and fixing

### 4. TypeScript Error Fixer

- **Script**: `scripts/automation/typescript-error-fixer.cjs`
- **Interval**: Every 45 minutes
- **Purpose**: TypeScript-specific error resolution

### 5. JSX Error Fixer

- **Script**: `scripts/automation/jsx-error-fixer.cjs`
- **Interval**: Every 40 minutes
- **Purpose**: JSX syntax and React component fixes

### 6. Master Error Fixer

- **Script**: `scripts/automation/master-error-fixer.cjs`
- **Interval**: Every hour
- **Purpose**: Coordinates all error fixers and provides oversight

## Enhanced Error Fixer

The Enhanced Error Fixer (`scripts/automation/enhanced-error-fixer.cjs`) is a standalone tool that can be run manually to fix current project errors:

```bash
# Run the enhanced error fixer
node scripts/automation/enhanced-error-fixer.cjs
```

### What It Fixes

- **ESLint Configuration Issues**: Fixes module type mismatches
- **TypeScript Errors**: Resolves import paths, missing properties, type mismatches
- **Missing Imports**: Adds React imports where needed
- **Build Errors**: Creates missing components and fixes build issues
- **Package.json Issues**: Installs missing dependencies
- **File Extensions**: Converts .js files to .tsx when they contain JSX

## Logs and Reports

### Log Locations

- **PM2 Logs**: `~/.pm2/logs/`
- **Application Logs**: `automation/logs/`
- **Reports**: `reports/`

### Key Log Files

- `pm2-error-prevention.log` - Main automation logs
- `enhanced-error-fixer-report.json` - Error fixing results
- `enhanced-error-fixer-summary.md` - Human-readable summary
- `typescript-errors.log` - TypeScript error tracking
- `eslint-errors.log` - ESLint error tracking
- `build-errors.log` - Build error tracking

### Report Structure

```json
{
  "timestamp": "2025-09-01T06:52:44.397Z",
  "errorsFound": 11882,
  "errorsFixed": 12,
  "warnings": [],
  "details": [
    "Added React import to src/components/Example.tsx",
    "Fixed import path in src/pages/Example.tsx",
    "Renamed src/utils/example.js to src/utils/example.tsx"
  ]
}
```

## Configuration

### Environment Variables

- `AUTOMATION_INTERVAL`: Interval between automation runs (default: 300000ms = 5 minutes)
- `NODE_ENV`: Environment mode (production/development)

### PM2 Configuration

The system uses `ecosystem.config.cjs` for PM2 configuration. Key settings:

- **Memory Limit**: 1GB per process
- **Auto Restart**: Enabled
- **Log Rotation**: 10MB max size, 30 files retained
- **Cron Restarts**: Scheduled restarts for intelligent automations

## Troubleshooting

### Common Issues

#### 1. PM2 Not Found

```bash
npm install -g pm2
```

#### 2. Permission Issues

```bash
sudo npm install -g pm2
```

#### 3. Process Not Starting

```bash
# Check logs
pm2 logs

# Restart processes
pm2 restart all

# Check for syntax errors in scripts
node scripts/automation/pm2-error-prevention-automation.cjs
```

#### 4. High Memory Usage

```bash
# Monitor memory usage
pm2 monit

# Restart processes to free memory
pm2 restart all
```

### Debug Mode

```bash
# Run with debug logging
DEBUG=* pm2 start ecosystem.config.cjs

# View detailed logs
pm2 logs --lines 100
```

## Performance Monitoring

### Memory Usage

- Each automation process uses ~50-70MB
- Total system usage: ~300-400MB
- Log rotation prevents disk space issues

### CPU Usage

- Minimal CPU usage during normal operation
- Spikes during error fixing cycles
- Background processing doesn't affect development

### Disk Usage

- Log files are automatically rotated
- Reports are cleaned up automatically
- Maximum disk usage: ~100MB

## Best Practices

### 1. Regular Monitoring

- Check status daily: `./start-error-prevention-automation.sh status`
- Review logs weekly: `pm2 logs --lines 50`
- Monitor reports monthly

### 2. Maintenance

- Update dependencies regularly
- Review and clean up old logs
- Monitor disk space usage

### 3. Development Workflow

- Let the automation run in the background
- Check logs when encountering issues
- Use manual error fix for immediate problems

## Integration with CI/CD

The automation system can be integrated with CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run Error Prevention
  run: |
    ./start-error-prevention-automation.sh fix
    npm run build
    npm run test
```

## Security Considerations

- All automation runs with project-level permissions
- No external API calls without explicit configuration
- Logs may contain sensitive information - secure appropriately
- PM2 processes run under the same user as the application

## Support and Maintenance

### Regular Tasks

- [ ] Monitor automation status daily
- [ ] Review error reports weekly
- [ ] Update dependencies monthly
- [ ] Clean up old logs quarterly

### Emergency Procedures

1. Stop automation: `./start-error-prevention-automation.sh stop`
2. Check logs: `pm2 logs`
3. Fix issues manually
4. Restart automation: `./start-error-prevention-automation.sh start`

## Contributing

To add new error fixers or modify existing ones:

1. Create new script in `scripts/automation/`
2. Add to `ecosystem.config.cjs`
3. Update this README
4. Test thoroughly before deployment

## License

This automation system is part of the Zion Tech Group project and follows the same licensing terms.
