# PM2 Automation System for Zion App

A comprehensive automation system that monitors Netlify build status and automatically fixes issues using PM2 process management.

## 🚀 Features

### Core Automation Components

- **Netlify Build Monitor** - Real-time build status monitoring and issue detection
- **Netlify Build Automation** - API integration for automatic deployment and fixes
- **Build Health Monitor** - Prevents build issues before they occur
- **Code Quality Monitor** - Continuous code quality enforcement
- **Dependency Monitor** - Dependency health and security monitoring
- **File Integrity Monitor** - Prevents file corruption and maintains consistency
- **Performance Optimizer** - Continuous performance monitoring and optimization
- **Intelligent Orchestrator** - Coordinates all automation components

### Key Capabilities

- ✅ **Automatic Issue Detection** - Identifies build failures, TypeScript errors, and dependency conflicts
- ✅ **Intelligent Auto-Fixing** - Automatically resolves common issues without manual intervention
- ✅ **Netlify Integration** - Direct API integration for build monitoring and deployment
- ✅ **Performance Optimization** - Continuous build performance monitoring and improvement
- ✅ **Health Monitoring** - Real-time health checks and automated recovery
- ✅ **Logging & Analytics** - Comprehensive logging and performance analytics
- ✅ **PM2 Process Management** - Robust process management with automatic restarts

## 📋 Prerequisites

- Node.js 16.0.0 or higher
- PM2 (will be installed automatically if missing)
- Git repository access
- Netlify account (for build monitoring features)

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app
```

### 2. Set Environment Variables

```bash
# Required for Netlify integration
export NETLIFY_SITE_ID="your-netlify-site-id"
export NETLIFY_TOKEN="your-netlify-api-token"

# Optional: Set Node environment
export NODE_ENV="production"
```

### 3. Install Dependencies

```bash
cd automation
npm install
```

### 4. Start the Automation System

```bash
# Make the startup script executable
chmod +x start-pm2-automation.sh

# Start the automation system
./start-pm2-automation.sh start
```

## 🎯 Usage

### Starting the System

```bash
# Start all automation components
./start-pm2-automation.sh start

# Or use PM2 directly
pm2 start ecosystem.config.cjs
```

### Monitoring and Control

```bash
# Check system status
./start-pm2-automation.sh status

# View recent logs
./start-pm2-automation.sh logs

# Run health check
./start-pm2-automation.sh monitor

# Restart the system
./start-pm2-automation.sh restart

# Stop the system
./start-pm2-automation.sh stop
```

### PM2 Commands

```bash
# View all processes
pm2 status

# Monitor processes in real-time
pm2 monit

# View logs for specific process
pm2 logs netlify-build-monitor

# Restart specific process
pm2 restart netlify-build-monitor

# Save current configuration
pm2 save

# Setup startup script
pm2 startup
```

## 🏗️ Architecture

### Process Structure

```
PM2 Ecosystem
├── netlify-build-monitor (Core monitoring)
├── netlify-build-automation (API integration)
├── build-health-monitor (Build prevention)
├── code-quality-monitor (Code quality)
├── dependency-monitor (Dependency health)
├── build-automation (Auto-fixing)
├── file-integrity-monitor (File consistency)
├── performance-optimizer (Performance)
├── lint-monitor (Linting)
├── intelligent-orchestrator (Coordination)
└── automation-dashboard (Monitoring UI)
```

### Monitoring Schedule

- **Every 2 minutes**: Build status monitoring
- **Every 5 minutes**: Health checks
- **Every 10 minutes**: Code quality checks
- **Every 15 minutes**: Project health monitoring
- **Daily**: Maintenance and optimization
- **Weekly**: Deep optimization and cleanup

## 🔍 Monitoring & Logs

### Log Locations

- **PM2 Logs**: `~/.pm2/logs/`
- **Application Logs**: `./automation/logs/`
- **Health Check Logs**: `./automation/logs/health-check.log`

### Key Metrics

- Build success/failure rates
- Build duration trends
- Error pattern analysis
- Performance metrics
- Dependency health status
- File integrity status

### Health Checks

The system automatically performs health checks every 5 minutes and logs results to `health-check.log`. You can also run manual health checks:

```bash
./start-pm2-automation.sh monitor
```

## 🛠️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NETLIFY_SITE_ID` | Your Netlify site ID | Yes (for Netlify features) |
| `NETLIFY_TOKEN` | Your Netlify API token | Yes (for Netlify features) |
| `NODE_ENV` | Node.js environment | No (defaults to production) |

### PM2 Configuration

The system uses `ecosystem.config.cjs` for PM2 configuration. Key settings:

- **Memory Limits**: Each process has memory limits to prevent resource exhaustion
- **Auto-restart**: Processes automatically restart on failure
- **Cron Restarts**: Scheduled restarts to prevent memory leaks
- **Log Rotation**: Automatic log file management

### Customization

You can customize the automation behavior by modifying:

- `ecosystem.config.cjs` - PM2 process configuration
- Individual automation scripts - Behavior and thresholds
- Monitoring schedules - Check frequencies and timing

## 🚨 Troubleshooting

### Common Issues

#### 1. PM2 Not Found

```bash
# Install PM2 globally
npm install -g pm2

# Verify installation
pm2 --version
```

#### 2. Permission Issues

```bash
# Fix file permissions
chmod +x start-pm2-automation.sh
chmod +x *.sh

# Fix directory permissions
chmod 755 logs/
```

#### 3. Process Not Starting

```bash
# Check PM2 status
pm2 status

# View error logs
pm2 logs --err

# Restart specific process
pm2 restart process-name
```

#### 4. Memory Issues

```bash
# Check memory usage
pm2 monit

# Restart processes
pm2 restart all

# Check system resources
./start-pm2-automation.sh monitor
```

### Debug Mode

Enable debug logging by setting the environment variable:

```bash
export DEBUG=pm2:*
./start-pm2-automation.sh start
```

### Log Analysis

```bash
# View recent errors
grep "ERROR" logs/*.log | tail -20

# View build failures
grep "Build failed" logs/*.log | tail -20

# View performance metrics
grep "Build performance" logs/*.log | tail -20
```

## 📊 Performance Optimization

### Automatic Optimizations

The system automatically applies performance optimizations:

- **Build Configuration**: Optimizes Next.js and build settings
- **Memory Management**: Adjusts Node.js memory limits
- **Dependency Updates**: Keeps dependencies current and secure
- **Cache Management**: Cleans up build artifacts and caches
- **Process Scheduling**: Distributes load across processes

### Manual Optimizations

```bash
# Run performance analysis
npm run build:analyze

# Clean build artifacts
npm run build:clean

# Optimize dependencies
npm audit fix
npm update
```

## 🔒 Security

### Environment Variables

- Never commit sensitive tokens to version control
- Use environment variables for all credentials
- Rotate API tokens regularly
- Monitor access logs for suspicious activity

### Process Isolation

- Each automation component runs in isolation
- Memory limits prevent resource exhaustion
- Automatic restarts prevent hanging processes
- Log rotation prevents disk space issues

## 📈 Scaling

### Horizontal Scaling

The system can be scaled horizontally by:

- Running multiple instances of key processes
- Distributing load across multiple servers
- Using PM2 cluster mode for CPU-intensive tasks

### Vertical Scaling

Vertical scaling options:

- Increase memory limits for individual processes
- Adjust monitoring frequencies
- Add more automation components
- Optimize resource usage patterns

## 🔄 Updates and Maintenance

### Updating the System

```bash
# Pull latest changes
git pull origin main

# Install updated dependencies
cd automation
npm install

# Restart the system
./start-pm2-automation.sh restart
```

### Maintenance Schedule

- **Daily**: Automatic cleanup and optimization
- **Weekly**: Deep optimization and dependency updates
- **Monthly**: Configuration review and performance analysis
- **As Needed**: Security updates and critical fixes

## 📚 API Reference

### Netlify Build Monitor

```javascript
const NetlifyBuildMonitor = require('./automation/netlify-build-monitor');

const monitor = new NetlifyBuildMonitor();
await monitor.start();
```

### Netlify Build Automation

```javascript
const NetlifyBuildAutomation = require('./automation/netlify-build-automation');

const automation = new NetlifyBuildAutomation();
await automation.start();
```

### Key Methods

- `start()` - Start the automation system
- `stop()` - Stop the automation system
- `getStatus()` - Get current system status
- `triggerBuild()` - Manually trigger a build
- `checkBuildHealth()` - Run health checks

## 🤝 Contributing

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Zion-Holdings/zion.app.git

# Install dependencies
cd automation
npm install

# Start in development mode
NODE_ENV=development pm2 start ecosystem.config.cjs
```

### Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Check code quality
npm run quality
```

### Code Style

- Follow existing code patterns
- Add comprehensive error handling
- Include detailed logging
- Write clear documentation
- Add appropriate tests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🆘 Support

### Getting Help

- Check the troubleshooting section above
- Review logs for error details
- Check PM2 status and process health
- Run health checks to identify issues

### Reporting Issues

When reporting issues, please include:

- PM2 status output
- Relevant log files
- Environment details
- Steps to reproduce
- Expected vs actual behavior

### Contact

For support and questions:

- Create an issue in the GitHub repository
- Check the documentation and troubleshooting guides
- Review the automation system logs

## 🎉 Acknowledgments

- **PM2 Team** - For the excellent process management tool
- **Netlify** - For the comprehensive build and deployment platform
- **Node.js Community** - For the robust ecosystem and tools

---

**Note**: This automation system is designed to run continuously and automatically fix issues. Monitor the logs regularly to ensure optimal performance and catch any issues early.
