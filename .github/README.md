# PM2 Automation System

This directory contains configuration and documentation for the PM2-based automation system that has replaced GitHub Actions workflows.

## Automation Overview

All previously GitHub Actions-based workflows have been migrated to PM2 processes that run continuously and automatically.

### 🔄 PM2 Automation Processes

The following automation processes are managed by PM2 and run continuously:

#### High Priority (Every 15 minutes)
- **console-error-fixer**: Automatically fixes console errors and JavaScript issues

#### Regular Intervals
- **link-checker**: Runs every 30 minutes to check for broken links
- **continuous-improvement**: Runs every 2 hours for automated improvements
- **daily-build-test**: Runs every hour for build verification and testing
- **security-audit**: Runs every 4 hours for security scanning
- **performance-monitor**: Runs every 2 hours for performance monitoring
- **quality-checks**: Runs every 3 hours for code quality assurance
- **link-integrity**: Runs every 2 hours for link integrity verification
- **front-maximizer**: Runs every 4 hours for frontend optimization
- **sitemap-runner**: Runs every 6 hours for sitemap generation
- **dependency-updates**: Runs every 6 hours for dependency management

### 🚀 Main Applications
- **zion-app**: Main frontend application
- **zion-backend**: Backend server

## PM2 Management

### Check Status
```bash
pm2 status
```

### View Logs
```bash
pm2 logs [process-name]
```

### Restart All Processes
```bash
pm2 restart all
```

### Stop All Processes
```bash
pm2 stop all
```

### Start All Processes
```bash
pm2 start ecosystem.config.cjs
```

## Configuration

The PM2 configuration is defined in `ecosystem.config.cjs` at the root of the project.

## Benefits of PM2 over GitHub Actions

1. **Continuous Operation**: Processes run continuously instead of being triggered by events
2. **Real-time Monitoring**: Immediate visibility into automation status
3. **Resource Efficiency**: Better resource utilization and monitoring
4. **Faster Response**: No waiting for GitHub Actions to trigger
5. **Local Control**: Full control over automation without external dependencies

## Migration Notes

- All GitHub Actions workflows have been replaced with PM2 processes
- Automation now runs continuously instead of on-demand
- Better error handling and recovery mechanisms
- Improved monitoring and logging capabilities

## Support

For automation issues:
1. Check PM2 status: `pm2 status`
2. Review process logs: `pm2 logs [process-name]`
3. Restart processes if needed: `pm2 restart [process-name]`
4. Check the main PM2 automation documentation in the project root
