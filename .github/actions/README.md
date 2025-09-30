# PM2 Automation System

This directory contains documentation for the PM2-based automation system that has replaced all GitHub Actions workflows.

## Automation Overview

All automation tasks are now handled by PM2 processes running continuously on the server, providing real-time monitoring and automated execution.

## PM2 Automation Processes

### 🔄 High Priority Automations
- **console-error-fixer**: Runs every 15 minutes - Automated console error detection and fixing
- **link-checker**: Runs every 30 minutes - Automated broken link detection and reporting
- **daily-build-test**: Runs every hour - Automated build testing and verification
- **continuous-improvement**: Runs every 2 hours - Automated code improvement suggestions
- **quality-checks**: Runs every 3 hours - Automated code quality and linting checks
- **performance-monitor**: Runs every 2 hours - Performance monitoring and optimization
- **link-integrity**: Runs every 2 hours - Link integrity validation and reporting

### ⏰ Scheduled Automations
- **security-audit**: Runs every 4 hours - Security vulnerability scanning and reporting
- **front-maximizer**: Runs every 4 hours - Frontend optimization and enhancement
- **dependency-updates**: Runs every 6 hours - Automated dependency management
- **sitemap-runner**: Runs every 6 hours - Sitemap generation and validation

### 🚀 Main Applications
- **zion-app**: Main frontend application
- **zion-backend**: Backend server application

## PM2 Configuration

The automation system is configured in `ecosystem.config.cjs` at the root of the project.

### Key Features
- **Auto-restart**: All processes automatically restart on failure
- **Memory management**: Configurable memory limits with automatic restarts
- **Environment-specific configs**: Production and development configurations
- **Process monitoring**: Real-time status monitoring and logging

## Monitoring and Management

### PM2 Commands
```bash
# View all processes
pm2 status

# Monitor processes in real-time
pm2 monit

# View logs for a specific process
pm2 logs <process-name>

# Restart a process
pm2 restart <process-name>

# Stop all processes
pm2 stop all

# Start all processes
pm2 start ecosystem.config.cjs
```

### Process Status
All automation processes run continuously and can be monitored through PM2's built-in monitoring tools.

## Benefits of PM2 over GitHub Actions

1. **Real-time execution**: Processes run continuously instead of waiting for triggers
2. **Immediate feedback**: Instant error detection and resolution
3. **Resource efficiency**: Better resource utilization and monitoring
4. **Customizable scheduling**: Flexible timing and interval configurations
5. **Local execution**: No dependency on external CI/CD services
6. **Cost effective**: No GitHub Actions minutes consumption

## Environment Variables

The PM2 processes use the following environment variables:
- `NODE_ENV`: Set to 'production' for all automation processes
- `AUTOMATION_INTERVAL`: Configurable intervals for each automation process
- `NODE_OPTIONS`: Memory and legacy provider configurations

## Usage

### Manual Process Management
You can manually manage processes using PM2 commands:

1. **Start all processes**: `pm2 start ecosystem.config.cjs`
2. **Stop all processes**: `pm2 stop all`
3. **Restart specific process**: `pm2 restart <process-name>`
4. **View process logs**: `pm2 logs <process-name>`

### Process Monitoring
- **Real-time monitoring**: `pm2 monit`
- **Process status**: `pm2 status`
- **Resource usage**: `pm2 show <process-name>`

## Customization

### Adding New Automations
1. Create a new automation script in `./scripts/automation/`
2. Add the process configuration to `ecosystem.config.cjs`
3. Set appropriate intervals and resource limits
4. Test the automation locally before deployment

### Modifying Existing Automations
1. Update the automation script
2. Adjust configuration in `ecosystem.config.cjs` if needed
3. Restart the specific process: `pm2 restart <process-name>`
4. Monitor the execution and logs

### Environment-Specific Configurations
You can create environment-specific configurations by:
1. Adding environment blocks in `ecosystem.config.cjs`
2. Using environment variables for configuration
3. Creating separate configuration files for different environments

## Monitoring & Troubleshooting

### Process Status
- Monitor process execution with `pm2 status`
- Check individual process logs for detailed information
- Use `pm2 monit` for real-time resource monitoring

### Common Issues
1. **Process failures**: Check PM2 logs with `pm2 logs <process-name>`
2. **Memory issues**: Adjust `max_memory_restart` values in ecosystem.config.cjs
3. **Restart loops**: Check for script errors or missing dependencies
4. **Performance issues**: Monitor resource usage with `pm2 monit`

### Performance Optimization
- Use appropriate memory limits for each process
- Monitor CPU and memory usage
- Optimize automation scripts for efficiency
- Use appropriate restart strategies

## Security Considerations

### Process Security
- All processes run in production environment
- Memory limits prevent resource exhaustion
- Auto-restart ensures service availability
- Process isolation prevents cross-contamination

### Code Scanning
- Security audits run automatically every 4 hours
- Dependency updates are managed automatically
- Quality checks ensure code standards
- Performance monitoring detects issues

## Support

For questions or issues with PM2 automation:
1. Check the process logs for error details
2. Review PM2 documentation and commands
3. Monitor process status and resource usage
4. Create an issue with detailed information

## Contributing

When contributing to automation processes:
1. Follow the existing patterns and structure
2. Test changes thoroughly before deployment
3. Update documentation as needed
4. Ensure security best practices are followed

## Migration from GitHub Actions

This system replaces the following GitHub Actions workflows:
- **CI/CD Pipeline** → PM2 continuous processes
- **Security & Dependency Management** → Automated security-audit and dependency-updates
- **Testing & Quality Assurance** → Automated quality-checks and daily-build-test
- **Release Management** → Continuous deployment with PM2
- **Dependency Management** → Automated dependency-updates process
- **Continuous Improvement** → Automated continuous-improvement process
- **Link Crawler Factory** → Automated link-checker and link-integrity processes

All functionality is now handled by PM2 automation processes running continuously on the server, providing better performance, reliability, and cost-effectiveness.