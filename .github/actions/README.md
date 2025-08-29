# PM2 Automation System

This directory contains documentation for the PM2-based automation system that has replaced GitHub Actions workflows.

## Automation Overview

All continuous integration, testing, security, and deployment automation is now handled by PM2 processes running continuously on the server.

## PM2 Automation Processes

### 1. Console Error Fixer (`console-error-fixer.cjs`)
**Purpose**: Automatically fixes console errors in the application
**Schedule**: Runs every 15 minutes
**Features**:
- Real-time error detection and fixing
- Automatic code correction
- Continuous monitoring

### 2. Link Checker (`link-checker.cjs`)
**Purpose**: Automated link validation and broken link detection
**Schedule**: Runs every 30 minutes
**Features**:
- Comprehensive link validation
- Broken link reporting
- Automatic link repair suggestions

### 3. Continuous Improvement (`continuous-improvement.cjs`)
**Purpose**: Automated code improvements and optimizations
**Schedule**: Runs every 2 hours
**Features**:
- Code quality improvements
- Performance optimizations
- Automated refactoring suggestions

### 4. Daily Build & Test (`daily-build-test.cjs`)
**Purpose**: Continuous build verification and testing
**Schedule**: Runs every hour
**Features**:
- Automated build testing
- Test execution
- Build artifact validation

### 5. Security Audit (`security-audit.cjs`)
**Purpose**: Security vulnerability scanning and assessment
**Schedule**: Runs every 4 hours
**Features**:
- Dependency vulnerability scanning
- Code security analysis
- Security policy compliance

### 6. Dependency Updates (`dependency-updates.cjs`)
**Purpose**: Automated dependency management and updates
**Schedule**: Runs every 6 hours
**Features**:
- Outdated package detection
- Security vulnerability scanning
- Automated update recommendations

### 7. Performance Monitor (`performance-monitor.cjs`)
**Purpose**: Application performance monitoring and optimization
**Schedule**: Runs every 2 hours
**Features**:
- Performance metrics collection
- Bottleneck identification
- Optimization suggestions

### 8. Quality Checks (`quality-checks.cjs`)
**Purpose**: Code quality assurance and standards enforcement
**Schedule**: Runs every 3 hours
**Features**:
- Code quality analysis
- Linting and formatting checks
- Quality gates enforcement

### 9. Link Integrity (`link-integrity.cjs`)
**Purpose**: Comprehensive link integrity verification
**Schedule**: Runs every 2 hours
**Features**:
- Deep link validation
- SEO impact assessment
- Link structure optimization

### 10. Front Maximizer (`front-maximizer.cjs`)
**Purpose**: Frontend optimization and enhancement
**Schedule**: Runs every 4 hours
**Features**:
- Frontend performance optimization
- User experience improvements
- Interface enhancements

### 11. Sitemap Runner (`sitemap-runner.cjs`)
**Purpose**: Automated sitemap generation and validation
**Schedule**: Runs every 6 hours
**Features**:
- Dynamic sitemap generation
- SEO optimization
- Search engine compatibility

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
6. **Persistent**: Processes run continuously without interruption

## Monitoring & Management

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

# Save current process list
pm2 save

# Setup startup script
pm2 startup
```

### Process Status
- All automation processes run continuously with automatic restart
- Memory usage is optimized (typically 50-70MB per process)
- CPU usage is minimal during idle periods
- Automatic error recovery and restart

## Troubleshooting

### Common Issues
1. **Process Errors**: Check logs with `pm2 logs [process-name]`
2. **Memory Issues**: Processes automatically restart if they exceed memory limits
3. **Script Failures**: PM2 automatically restarts failed processes
4. **High Resource Usage**: Monitor with `pm2 monit`

### Debug Mode
To debug specific processes:
```bash
# View detailed logs
pm2 logs [process-name] --lines 100

# Restart specific process
pm2 restart [process-name]

# Check process details
pm2 show [process-name]

# Monitor specific process
pm2 monit [process-name]
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

## Security Considerations

### Process Isolation
- Each automation process runs in its own PM2 instance
- Memory limits prevent resource exhaustion
- Automatic restart on failures

### Access Control
- PM2 processes run with appropriate permissions
- No external API access required
- Secure local execution environment

## Support

For automation issues:
1. Check PM2 process status with `pm2 list`
2. Review process logs for error details
3. Verify automation scripts are working correctly
4. Check server resources and PM2 configuration
5. Use `pm2 monit` for real-time monitoring

## Contributing

When modifying automation:
1. Update the corresponding script in `scripts/automation/`
2. Test the script locally before deployment
3. Update PM2 configuration in `ecosystem.config.cjs` if needed
4. Monitor the process after changes with `pm2 logs`
5. Ensure proper error handling and logging