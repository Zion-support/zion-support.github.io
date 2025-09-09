# PM2 Automation System

This directory contains documentation for the PM2-based automation system that has replaced GitHub Actions workflows for the Zion Tech Group website.

## Automation Overview

The Zion Tech Group website now uses PM2 (Process Manager 2) for all automation tasks, providing:
- **Continuous monitoring** of all processes
- **Automatic restart** on failures
- **Resource management** with memory limits
- **Scheduled automation** at various intervals
- **Real-time process monitoring**

## PM2 Processes

### 🚀 Main Applications
- **zion-app**: Main frontend application
- **zion-backend**: Backend server

### 🔄 Automation Processes

#### High Priority (15 minutes)
- **console-error-fixer**: Continuous console error detection and fixing

#### Regular Intervals
- **link-checker**: Link validation every 30 minutes
- **continuous-improvement**: Code improvements every 2 hours
- **daily-build-test**: Build and test automation every hour
- **security-audit**: Security scanning every 4 hours
- **dependency-updates**: Package updates every 6 hours
- **performance-monitor**: Performance monitoring every 2 hours
- **quality-checks**: Code quality checks every 3 hours
- **link-integrity**: Link integrity verification every 2 hours
- **front-maximizer**: Frontend optimization every 4 hours
- **sitemap-runner**: Sitemap generation every 6 hours

## Configuration

### Ecosystem Configuration
- **File**: `ecosystem.config.cjs`
- **Memory Limits**: 512MB for automation processes, 1GB for main apps
- **Auto-restart**: Enabled for all processes
- **Environment**: Production mode with optimized Node.js settings

### Environment Variables
- `NODE_ENV`: Production
- `NODE_OPTIONS`: Optimized memory settings
- `AUTOMATION_INTERVAL`: Process-specific timing intervals

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

### Restart Specific Process
```bash
pm2 restart <process-name>
```

### Stop All Processes
```bash
pm2 stop all
```

### Delete All Processes
```bash
pm2 delete all
```

### View Logs
```bash
pm2 logs <process-name>
pm2 logs --lines 100
```

## Benefits Over GitHub Actions

1. **Real-time Processing**: Continuous operation instead of triggered runs
2. **Resource Efficiency**: Lower overhead and faster execution
3. **Immediate Response**: Instant error detection and recovery
4. **Cost Effective**: No GitHub Actions minutes consumption
5. **Local Control**: Full control over automation timing and resources
6. **Scalability**: Easy to add new automation processes

## Monitoring & Maintenance

### Health Checks
- Monitor process status with `pm2 list`
- Check memory usage and restart counts
- Review logs for errors or warnings

### Performance Optimization
- Adjust memory limits in ecosystem config
- Modify automation intervals as needed
- Monitor CPU usage patterns

### Troubleshooting
1. **Process Crashes**: Check logs with `pm2 logs <name>`
2. **Memory Issues**: Adjust max_memory_restart values
3. **High Restart Counts**: Investigate underlying issues
4. **Performance Issues**: Monitor resource usage

## Security

- All processes run in production environment
- Memory limits prevent resource exhaustion
- Auto-restart ensures service availability
- Process isolation for security

## Future Enhancements

- Add monitoring dashboards
- Implement alerting for critical failures
- Add process dependency management
- Create backup automation processes

## Support

For PM2 automation issues:
1. Check process status with `pm2 list`
2. Review logs for error details
3. Verify ecosystem configuration
4. Check system resources
5. Contact the development team
