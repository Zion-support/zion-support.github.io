# PM2 Automation System

This directory contains documentation for the PM2-based automation system that has replaced GitHub Actions workflows.

## Automation Overview

All continuous integration, testing, security, and deployment automation is now handled by PM2 processes running on the server.

### 🔄 PM2 Automation Processes

The following PM2 processes are running continuously:

- **console-error-fixer**: Runs every 15 minutes - fixes console errors automatically
- **link-checker**: Runs every 30 minutes - checks for broken links
- **continuous-improvement**: Runs every 2 hours - automated code improvements
- **daily-build-test**: Runs every hour - continuous build and testing
- **security-audit**: Runs every 4 hours - security vulnerability scanning
- **dependency-updates**: Runs every 6 hours - automated dependency updates
- **performance-monitor**: Runs every 2 hours - performance monitoring
- **quality-checks**: Runs every 3 hours - code quality assurance
- **link-integrity**: Runs every 2 hours - link integrity verification
- **front-maximizer**: Runs every 4 hours - frontend optimization
- **sitemap-runner**: Runs every 6 hours - sitemap generation and validation

### 🚀 Main Applications

- **zion-app**: Main application server
- **zion-backend**: Backend API server

## Configuration

### PM2 Ecosystem File
- **File**: `ecosystem.config.cjs` (in root directory)
- **Purpose**: Defines all PM2 processes, their schedules, and configurations

### Automation Scripts
- **Location**: `scripts/automation/`
- **Purpose**: Individual automation scripts that PM2 manages

## Benefits of PM2 over GitHub Actions

1. **Real-time Processing**: Continuous automation instead of event-triggered
2. **Resource Efficiency**: Runs on the same server, no external API calls
3. **Immediate Response**: No waiting for GitHub Actions to queue and start
4. **Cost Effective**: No GitHub Actions minutes consumption
5. **Customizable**: Full control over timing, intervals, and processes

## Monitoring

### PM2 Commands
```bash
# View all processes
pm2 list

# Monitor processes in real-time
pm2 monit

# View logs for specific process
pm2 logs [process-name]

# Restart all processes
pm2 restart all

# Stop all processes
pm2 stop all
```

### Process Status
- All automation processes run continuously with automatic restart
- Memory usage is optimized (typically 50-70MB per process)
- CPU usage is minimal during idle periods

## Troubleshooting

### Common Issues

1. **Process Errors**: Check logs with `pm2 logs [process-name]`
2. **Memory Issues**: Processes automatically restart if they exceed memory limits
3. **Script Failures**: PM2 automatically restarts failed processes

### Debug Mode

To debug specific processes:
```bash
# View detailed logs
pm2 logs [process-name] --lines 100

# Restart specific process
pm2 restart [process-name]

# Check process details
pm2 show [process-name]
```

## Maintenance

### Regular Tasks
- Monitor PM2 process health
- Review automation logs for any issues
- Update automation scripts as needed
- Ensure PM2 startup on server reboot

### Server Reboot
PM2 processes will automatically restart if configured with:
```bash
pm2 startup
pm2 save
```

## Support

For automation issues:
1. Check PM2 process status
2. Review process logs
3. Verify automation scripts are working
4. Check server resources and PM2 configuration

## Contributing

When modifying automation:
1. Update the corresponding script in `scripts/automation/`
2. Test the script locally before deployment
3. Update PM2 configuration if needed
4. Monitor the process after changes
