# 🤖 PM2 Intelligent Automation System

## Overview

This enhanced PM2 automation system provides intelligent process management, monitoring, and orchestration for your Zion application development workflow. It replaces the previous basic automation system with a robust, PM2-powered solution that offers:

- **Intelligent Process Management**: Automatic restart, health monitoring, and performance optimization
- **Zero-Downtime Deployments**: Seamless process reloading and updates
- **Comprehensive Monitoring**: Real-time status, logs, and performance metrics
- **Auto-Healing**: Automatic detection and resolution of common issues
- **Smart Orchestration**: Intelligent coordination between automation systems

## 🚀 Quick Start

### 1. Install PM2 (if not already installed)

```bash
npm install -g pm2
```

### 2. Start All Automation Processes

```bash
# Using the launcher script (recommended)
bash scripts/pm2-automation-launcher.sh start

# Or using npm scripts
npm run automation:start

# Or using PM2 directly
npm run pm2:start
```

### 3. Check Status

```bash
# View all running processes
npm run pm2:status

# Or use the launcher
bash scripts/pm2-automation-launcher.sh status
```

## 📱 Available Automation Systems

| System | Purpose | Priority | Auto-Restart |
|--------|---------|----------|--------------|
| **zion-app** | Main React application | High | ✅ |
| **zion-backend** | Express.js backend server | High | ✅ |
| **automation-orchestrator** | Intelligent automation coordination | High | ✅ |
| **automation-dashboard** | Web-based automation monitoring | Medium | ✅ |
| **lint-monitor** | Continuous code quality monitoring | High | ✅ |
| **code-quality-monitor** | Code complexity and maintainability | Medium | ✅ |
| **performance-optimizer** | Performance monitoring and optimization | Medium | ✅ |
| **security-scanner** | Security vulnerability detection | High | ✅ |
| **seo-optimizer** | SEO monitoring and optimization | Medium | ✅ |
| **test-generator** | Automated test generation | Medium | ✅ |
| **content-generator** | Content generation automation | Low | ✅ |
| **edge-cache-warmer** | CDN cache optimization | Low | ✅ |

## 🎮 Management Commands

### Using the Launcher Script (Recommended)

```bash
# Process Management
bash scripts/pm2-automation-launcher.sh start          # Start all processes
bash scripts/pm2-automation-launcher.sh stop           # Stop all processes
bash scripts/pm2-automation-launcher.sh restart        # Restart all processes
bash scripts/pm2-automation-launcher.sh reload         # Zero-downtime reload

# Monitoring
bash scripts/pm2-automation-launcher.sh status         # Show process status
bash scripts/pm2-automation-launcher.sh logs           # Show all logs
bash scripts/pm2-automation-launcher.sh logs zion-app  # Show specific app logs
bash scripts/pm2-automation-launcher.sh monitor        # Start PM2 monitoring

# Health & Maintenance
bash scripts/pm2-automation-launcher.sh health         # Perform health check
bash scripts/pm2-automation-launcher.sh autofix        # Auto-fix issues
bash scripts/pm2-automation-launcher.sh cleanup        # Clean up old logs

# Orchestration
bash scripts/pm2-automation-launcher.sh start-orchestrator  # Start intelligent orchestrator
bash scripts/pm2-automation-launcher.sh stop-orchestrator   # Stop intelligent orchestrator
```

### Using NPM Scripts

```bash
# PM2 Management
npm run pm2:start        # Start all processes
npm run pm2:stop         # Stop all processes
npm run pm2:restart      # Restart all processes
npm run pm2:reload       # Zero-downtime reload
npm run pm2:status       # Show status
npm run pm2:logs         # Show logs
npm run pm2:monitor      # Start monitoring

# Health & Reports
npm run pm2:health       # Health check
npm run pm2:report       # Generate report
npm run pm2:autofix      # Auto-fix issues
npm run pm2:cleanup      # Clean up logs

# Automation Management
npm run automation:start         # Start automation
npm run automation:stop          # Stop automation
npm run automation:restart       # Restart automation
npm run automation:status        # Show automation status
npm run automation:health        # Automation health check
npm run automation:orchestrator  # Start intelligent orchestrator
```

### Using PM2 Directly

```bash
# Basic PM2 commands
pm2 start ecosystem.config.js    # Start all processes
pm2 stop all                     # Stop all processes
pm2 restart all                  # Restart all processes
pm2 reload all                   # Zero-downtime reload
pm2 delete all                   # Delete all processes
pm2 status                       # Show status
pm2 logs                         # Show logs
pm2 monit                        # Start monitoring

# Process-specific commands
pm2 start ecosystem.config.js --only zion-app        # Start specific app
pm2 restart zion-app                                 # Restart specific app
pm2 stop zion-app                                    # Stop specific app
pm2 logs zion-app                                    # Show specific app logs
```

## 🎼 Intelligent Orchestrator

The intelligent orchestrator provides advanced automation coordination:

```bash
# Start the orchestrator
node automation/pm2-intelligent-orchestrator.cjs monitor

# Or use the launcher
bash scripts/pm2-automation-launcher.sh start-orchestrator

# Or use npm
npm run pm2:orchestrator
```

### Orchestrator Features

- **Automatic Health Monitoring**: Continuous health checks every 5 minutes
- **PM2 Status Monitoring**: Real-time PM2 process status monitoring every 30 seconds
- **File Watching**: Monitors critical configuration files for changes
- **Auto-Restart**: Automatically restarts failed processes
- **Performance Metrics**: Tracks success rates and execution times
- **Intelligent Coordination**: Prioritizes critical systems and manages dependencies

## 📊 Monitoring & Health

### Health Check

```bash
# Perform comprehensive health check
npm run pm2:health

# Or use the launcher
bash scripts/pm2-automation-launcher.sh health
```

The health check examines:
- PM2 daemon status
- Process health and status
- Success rates and restart counts
- Resource usage and performance
- Log file health

### Real-time Monitoring

```bash
# Start PM2 monitoring interface
npm run pm2:monitor

# Or use the launcher
bash scripts/pm2-automation-launcher.sh monitor
```

### Log Management

```bash
# View all logs
npm run pm2:logs

# View specific app logs
bash scripts/pm2-automation-launcher.sh logs zion-app 100

# View logs with custom line count
bash scripts/pm2-automation-launcher.sh logs zion-app 50
```

## 🔧 Auto-Fix & Maintenance

### Automatic Issue Resolution

```bash
# Auto-fix common issues
npm run pm2:autofix

# Or use the launcher
bash scripts/pm2-automation-launcher.sh autofix
```

Auto-fix capabilities:
- Restart stopped processes
- Clear corrupted logs
- Reset failed processes
- Optimize resource usage

### Log Cleanup

```bash
# Clean up old logs
npm run pm2:cleanup

# Or use the launcher
bash scripts/pm2-automation-launcher.sh cleanup
```

Cleanup features:
- Remove logs older than 7 days
- Clear PM2 internal logs
- Optimize log file sizes
- Archive important logs

## 📈 Performance Optimization

### Resource Management

- **Memory Limits**: Each process has configurable memory limits
- **Auto-Restart**: Processes restart automatically if they exceed limits
- **Load Balancing**: Intelligent process distribution across resources
- **Performance Monitoring**: Continuous performance metrics tracking

### Scaling

```bash
# Scale specific processes
pm2 scale zion-app 2        # Scale to 2 instances
pm2 scale zion-backend 3    # Scale to 3 instances

# Scale all processes
pm2 scale ecosystem.config.js 2
```

## 🚨 Troubleshooting

### Common Issues

1. **PM2 Not Found**
   ```bash
   npm install -g pm2
   ```

2. **Permission Issues**
   ```bash
   sudo npm install -g pm2
   ```

3. **Process Won't Start**
   ```bash
   # Check logs
   pm2 logs
   
   # Check status
   pm2 status
   
   # Auto-fix
   npm run pm2:autofix
   ```

4. **High Memory Usage**
   ```bash
   # Check memory usage
   pm2 monit
   
   # Restart processes
   pm2 restart all
   ```

### Debug Mode

```bash
# Start with debug logging
DEBUG=* pm2 start ecosystem.config.js

# Or check debug logs
pm2 logs --lines 1000 | grep DEBUG
```

## 📋 Configuration

### Ecosystem Configuration

The `ecosystem.config.js` file contains all PM2 process configurations:

```javascript
module.exports = {
  apps: [
    {
      name: 'zion-app',
      script: 'npm',
      args: 'run dev',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    }
    // ... more apps
  ]
};
```

### Environment Variables

- `NODE_ENV`: Environment (development/production)
- `PORT`: Application port
- `LOG_LEVEL`: Logging level (debug/info/warn/error)
- `MAX_MEMORY`: Memory limit for processes

## 🔄 Deployment

### Production Deployment

```bash
# Deploy to production
pm2 deploy production setup
pm2 deploy production

# Or use ecosystem config
pm2 deploy ecosystem.config.js production
```

### Zero-Downtime Updates

```bash
# Reload without downtime
pm2 reload all

# Or restart gracefully
pm2 restart all
```

## 📚 Advanced Usage

### Custom Process Management

```bash
# Start specific processes
pm2 start ecosystem.config.js --only zion-app,zion-backend

# Start with custom environment
pm2 start ecosystem.config.js --env production

# Start with custom instances
pm2 start ecosystem.config.js --instances 4
```

### Process Clustering

```bash
# Enable clustering for Node.js apps
pm2 start ecosystem.config.js --instances max

# Or specify exact number
pm2 start ecosystem.config.js --instances 4
```

### Load Balancing

```bash
# Enable load balancing
pm2 start ecosystem.config.js --instances 4 --exec-mode cluster
```

## 🎯 Best Practices

1. **Start with Orchestrator**: Always start the intelligent orchestrator first
2. **Monitor Health**: Regular health checks prevent issues
3. **Use Auto-Fix**: Let the system resolve common problems automatically
4. **Scale Gradually**: Start with single instances and scale as needed
5. **Monitor Resources**: Keep an eye on memory and CPU usage
6. **Regular Cleanup**: Clean up logs and temporary files regularly
7. **Backup Configs**: Keep backups of your ecosystem configuration

## 🔗 Integration

### CI/CD Integration

```yaml
# GitHub Actions example
- name: Deploy with PM2
  run: |
    pm2 start ecosystem.config.js --env production
    pm2 save
    pm2 startup
```

### Monitoring Integration

- **PM2 Plus**: Cloud monitoring and alerting
- **PM2 Keymetrics**: Advanced monitoring dashboard
- **Custom Metrics**: Integration with your monitoring stack

## 📞 Support

For issues or questions:

1. Check the logs: `pm2 logs`
2. Run health check: `npm run pm2:health`
3. Check status: `pm2 status`
4. Review this documentation
5. Check PM2 official documentation: https://pm2.keymetrics.io/

## 🚀 What's Next?

This PM2 automation system provides a solid foundation for:
- **Microservices Architecture**: Easy scaling and management
- **Container Integration**: Docker and Kubernetes support
- **Cloud Deployment**: AWS, Azure, GCP integration
- **Advanced Monitoring**: APM and performance monitoring
- **Auto-Scaling**: Dynamic resource allocation

---

**Happy Automating! 🎉**