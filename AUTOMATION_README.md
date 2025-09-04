# PM2 Automation System

This project includes a comprehensive PM2 automation system for error prevention and monitoring.

## Features

- **Error Monitoring**: Continuous monitoring of linting, build, and TypeScript errors
- **Lint Automation**: Automatic fixing of linting issues
- **Build Monitoring**: Regular build verification
- **Comprehensive Error Prevention**: Automated cleanup of corrupted files and comprehensive error checking

## Scripts

### 1. Error Monitor (`scripts/error-monitor.js`)
- Monitors linting errors every 5 minutes
- Monitors build errors every 5 minutes
- Monitors TypeScript errors every 5 minutes
- Logs all findings to `logs/error-monitor.log`

### 2. Lint Automation (`scripts/lint-automation.js`)
- Automatically fixes linting issues every 10 minutes
- Logs all fixes to `logs/lint-automation.log`

### 3. Build Monitor (`scripts/build-monitor.js`)
- Runs build verification every 30 minutes
- Logs build results to `logs/build-monitor.log`

### 4. Comprehensive Error Prevention (`scripts/comprehensive-error-prevention.js`)
- Cleans corrupted files and directories
- Runs comprehensive error checking every 15 minutes
- Logs all activities to `logs/error-prevention.log`

## Usage

### Start the Automation System
```bash
./start-automation.sh
```

### Manual PM2 Commands
```bash
# Start all processes
pm2 start ecosystem.config.cjs

# Check status
pm2 status

# View logs
pm2 logs

# Stop all processes
pm2 stop all

# Restart all processes
pm2 restart all

# Delete all processes
pm2 delete all
```

### Individual Process Management
```bash
# Start specific process
pm2 start ecosystem.config.cjs --only error-monitor

# Stop specific process
pm2 stop error-monitor

# Restart specific process
pm2 restart error-monitor

# View logs for specific process
pm2 logs error-monitor
```

## Configuration

The PM2 configuration is defined in `ecosystem.config.cjs` with the following settings:

- **Instances**: 1 per process
- **Auto-restart**: Enabled
- **Memory limit**: 1GB per process
- **Logging**: Comprehensive logging with timestamps
- **Environment**: Production mode

## Log Files

All logs are stored in the `logs/` directory:

- `error-monitor.log` - Error monitoring logs
- `lint-automation.log` - Lint automation logs
- `build-monitor.log` - Build monitoring logs
- `error-prevention.log` - Comprehensive error prevention logs

## Monitoring

The system provides real-time monitoring through:

1. **Console Output**: Real-time status updates
2. **Log Files**: Detailed logging for each process
3. **PM2 Dashboard**: Use `pm2 monit` for real-time monitoring

## Troubleshooting

### Common Issues

1. **Permission Errors**: Ensure scripts are executable
   ```bash
   chmod +x scripts/*.js
   chmod +x start-automation.sh
   ```

2. **Memory Issues**: Check PM2 memory usage
   ```bash
   pm2 monit
   ```

3. **Process Not Starting**: Check logs for errors
   ```bash
   pm2 logs error-monitor
   ```

### Reset System
```bash
# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

# Restart system
./start-automation.sh
```

## Benefits

- **Automated Error Prevention**: Proactively fixes issues before they become problems
- **Continuous Monitoring**: 24/7 monitoring of project health
- **Automated Cleanup**: Removes corrupted files automatically
- **Comprehensive Logging**: Detailed logs for debugging and monitoring
- **Scalable**: Easy to add new automation scripts
- **Reliable**: PM2 ensures processes restart on failure

## Maintenance

The system is designed to be self-maintaining, but regular checks are recommended:

1. **Weekly**: Check PM2 status and logs
2. **Monthly**: Review log files for patterns
3. **As Needed**: Update automation scripts based on project requirements

## Support

For issues or questions about the automation system, check the log files first, then review the PM2 documentation at https://pm2.keymetrics.io/docs/.