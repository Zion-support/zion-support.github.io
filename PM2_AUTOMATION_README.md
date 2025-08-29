# 🚀 Zion Tech Group - Intelligent PM2 Automation System

A comprehensive and intelligent PM2 automation system designed to streamline your development workflow, improve code quality, and provide proactive monitoring for your Zion Tech Group applications.

## 🌟 Features

### 🎯 **Intelligent Process Management**
- **Auto-restart** with configurable thresholds
- **Memory and CPU monitoring** with automatic alerts
- **Health scoring** system for overall application status
- **Zero-downtime reloads** for seamless updates

### 🔍 **Advanced Monitoring & Alerting**
- **Real-time performance metrics** collection
- **Proactive problem detection** before issues escalate
- **Intelligent alerting** with severity levels
- **Comprehensive health reports** and insights

### 🛠️ **Development Automation**
- **Automated quality checks** (TypeScript, ESLint, Tests)
- **Smart file watching** with auto-reload
- **Build automation** for development and production
- **Deployment preparation** with comprehensive validation

### 📊 **Comprehensive Reporting**
- **Performance analytics** and trend analysis
- **Health score tracking** over time
- **Resource utilization** monitoring
- **Alert history** and incident tracking

## 🏗️ Architecture

```
Zion Tech Group PM2 Automation System
├── ecosystem.config.js          # PM2 ecosystem configuration
├── scripts/
│   ├── pm2-manager.js          # Intelligent PM2 management
│   ├── dev-automation.js       # Development workflow automation
│   ├── pm2-monitor.js          # Real-time monitoring & alerting
│   ├── pm2-start.sh            # Convenient startup script
│   └── dev-workflow.sh         # Comprehensive workflow orchestration
├── logs/                        # Application logs
├── monitoring/                  # Monitoring reports
├── alerts/                      # Alert history
└── reports/                     # Build and deployment reports
```

## 🚀 Quick Start

### 1. **Install PM2** (if not already installed)
```bash
npm install -g pm2
```

### 2. **Start Development Environment**
```bash
# Make scripts executable
chmod +x scripts/*.sh

# Start development environment
./scripts/dev-workflow.sh dev
```

### 3. **Start Monitoring**
```bash
# Start intelligent monitoring
node scripts/pm2-monitor.js start
```

## 📖 Detailed Usage Guide

### 🔧 **PM2 Ecosystem Configuration**

The `ecosystem.config.js` file defines three main applications:

- **`zion-frontend`**: React/Vite frontend application
- **`zion-backend`**: Express.js backend server
- **`zion-hybrid-dev`**: Combined development mode

**Key Features:**
- Auto-restart on crashes
- Memory and CPU limits
- Comprehensive logging
- Environment-specific configurations

### 🎮 **PM2 Manager Script**

**Location:** `scripts/pm2-manager.js`

**Commands:**
```bash
# Start all applications
node scripts/pm2-manager.js start-all

# Stop all applications
node scripts/pm2-manager.js stop-all

# Restart all applications
node scripts/pm2-manager.js restart-all

# Reload all applications (zero-downtime)
node scripts/pm2-manager.js reload-all

# Show current status
node scripts/pm2-manager.js status

# View logs
node scripts/pm2-manager.js logs [app-name] [lines]

# Monitor logs in real-time
node scripts/pm2-manager.js monitor [app-name]

# Generate health report
node scripts/pm2-manager.js health

# Clean up old logs
node scripts/pm2-manager.js cleanup-logs [days]
```

### 🤖 **Development Automation Script**

**Location:** `scripts/dev-automation.js`

**Commands:**
```bash
# Run quality checks
node scripts/dev-automation.js quality

# Auto-fix code issues
node scripts/dev-automation.js auto-fix

# Start development build
node scripts/dev-automation.js dev

# Run production build
node scripts/dev-automation.js build

# Start file watcher
node scripts/dev-automation.js watch

# Prepare for deployment
node scripts/dev-automation.js deploy-prep

# Show current status
node scripts/dev-automation.js status
```

### 📊 **PM2 Monitor Script**

**Location:** `scripts/pm2-monitor.js`

**Commands:**
```bash
# Start monitoring
node scripts/pm2-monitor.js start

# Stop monitoring
node scripts/pm2-monitor.js stop

# Show monitoring status
node scripts/pm2-monitor.js status

# Generate comprehensive report
node scripts/pm2-monitor.js report
```

**Monitoring Features:**
- **Process Monitoring**: Every 10 seconds
- **Performance Monitoring**: Every 30 seconds
- **Health Monitoring**: Every minute
- **Resource Monitoring**: Every 45 seconds
- **Log Monitoring**: Every 15 seconds

### 🚀 **PM2 Startup Script**

**Location:** `scripts/pm2-start.sh`

**Usage:**
```bash
# Start PM2 processes
./scripts/pm2-start.sh

# Start and show status
./scripts/pm2-start.sh -s

# Start and show logs
./scripts/pm2-start.sh -l

# Setup startup script
./scripts/pm2-start.sh -u

# All options
./scripts/pm2-start.sh -a
```

### 🔄 **Development Workflow Script**

**Location:** `scripts/dev-workflow.sh`

**Commands:**
```bash
# Start development environment
./scripts/dev-workflow.sh dev

# Run production build
./scripts/dev-workflow.sh build

# Deploy to production
./scripts/dev-workflow.sh deploy

# Show current status
./scripts/dev-workflow.sh status

# View logs
./scripts/dev-workflow.sh logs [app-name] [lines]

# Restart all services
./scripts/dev-workflow.sh restart

# Clean up
./scripts/dev-workflow.sh cleanup

# Start monitoring
./scripts/dev-workflow.sh monitor
```

**Options:**
- `-q, --quick`: Skip quality checks for faster startup
- `-f, --force`: Force restart even if processes are running
- `-v, --verbose`: Enable verbose output

## 📊 Monitoring & Alerting

### 🚨 **Alert Types**

1. **Status Alerts** (High Severity)
   - Process offline
   - Application crashes

2. **Performance Alerts** (Medium Severity)
   - High memory usage (>80%)
   - High CPU usage (>85%)
   - Multiple restarts (>5)

3. **System Alerts** (Medium/High Severity)
   - System memory usage (>90%)
   - High system load (>5)

4. **Log Alerts** (Medium Severity)
   - Error patterns detected
   - Exception occurrences

### 📈 **Health Scoring System**

- **100-80**: 🟢 Good - All systems operational
- **79-60**: 🟡 Warning - Some issues detected
- **59-0**: 🔴 Critical - Immediate attention required

**Scoring Factors:**
- Process status (-30 points for offline)
- Restart frequency (-5 points per restart, max -20)
- Memory usage (-15 points for >800MB)
- CPU usage (-10 points for >80%)

### 📊 **Performance Metrics**

- **Memory Usage**: Real-time memory consumption
- **CPU Usage**: Current CPU utilization
- **Uptime**: Process uptime tracking
- **Restart Count**: Automatic restart tracking
- **Response Time**: Application response monitoring

## 🔧 Configuration

### **Environment Variables**

```bash
# Development
NODE_ENV=development
PORT=3000 (frontend), 5000 (backend)

# Production
NODE_ENV=production
PORT=3000 (frontend), 5000 (backend)
```

### **PM2 Configuration Options**

```javascript
// ecosystem.config.js
{
  instances: 1,                    // Number of instances
  autorestart: true,               // Auto-restart on crash
  watch: false,                    // File watching (disabled for performance)
  max_memory_restart: '1G',        // Memory limit
  min_uptime: '10s',               // Minimum uptime before stable
  max_restarts: 10,                // Maximum restart attempts
  restart_delay: 4000,             // Delay between restarts
  kill_timeout: 5000,              // Graceful shutdown timeout
  wait_ready: true,                // Wait for ready signal
  listen_timeout: 8000             // Timeout for ready signal
}
```

### **Monitoring Configuration**

```javascript
// pm2-monitor.js
{
  monitoringInterval: 10000,        // Process monitoring (10s)
  alertThresholds: {
    memory: 80,                     // Memory alert threshold (%)
    cpu: 85,                        // CPU alert threshold (%)
    restarts: 5,                    // Restart alert threshold
    responseTime: 2000              // Response time threshold (ms)
  }
}
```

## 🚀 Deployment

### **Development Deployment**

```bash
# Start development environment
./scripts/dev-workflow.sh dev

# Or use individual commands
node scripts/pm2-manager.js start-all
node scripts/pm2-monitor.js start
```

### **Production Deployment**

```bash
# Prepare for deployment
./scripts/dev-workflow.sh deploy

# Or use individual commands
node scripts/dev-automation.js deploy-prep
pm2 start ecosystem.config.js --env production
```

### **Zero-Downtime Updates**

```bash
# Reload all applications
node scripts/pm2-manager.js reload-all

# Or use PM2 directly
pm2 reload all
```

## 📁 Directory Structure

```
project-root/
├── ecosystem.config.js              # PM2 ecosystem configuration
├── scripts/                         # Automation scripts
│   ├── pm2-manager.js              # PM2 management
│   ├── dev-automation.js           # Development automation
│   ├── pm2-monitor.js              # Monitoring system
│   ├── pm2-start.sh                # Startup script
│   └── dev-workflow.sh             # Workflow orchestration
├── logs/                            # Application logs
│   ├── frontend-*.log              # Frontend logs
│   ├── backend-*.log               # Backend logs
│   └── hybrid-*.log                # Hybrid mode logs
├── monitoring/                      # Monitoring reports
│   ├── performance-*.json          # Performance metrics
│   ├── health-*.json               # Health reports
│   └── resources-*.json            # System resources
├── alerts/                          # Alert history
│   └── alert-*.json                # Individual alerts
├── reports/                         # Build reports
│   ├── build-report-*.json         # Build information
│   └── deployment-report-*.json    # Deployment status
└── dist/                            # Build outputs
    ├── frontend/                    # Frontend build
    └── backend/                     # Backend build
```

## 🔍 Troubleshooting

### **Common Issues**

1. **PM2 Not Installed**
   ```bash
   npm install -g pm2
   ```

2. **Port Already in Use**
   ```bash
   # Check what's using the port
   lsof -i :3000
   lsof -i :5000
   
   # Kill the process
   kill -9 <PID>
   ```

3. **Permission Denied**
   ```bash
   # Make scripts executable
   chmod +x scripts/*.sh
   ```

4. **Memory Issues**
   ```bash
   # Check memory usage
   pm2 monit
   
   # Restart processes
   pm2 restart all
   ```

### **Debug Mode**

```bash
# Enable verbose output
./scripts/dev-workflow.sh dev -v

# Check PM2 logs
pm2 logs --lines 100

# Check PM2 status
pm2 status
```

### **Reset Everything**

```bash
# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

# Clear PM2 logs
pm2 flush

# Start fresh
./scripts/dev-workflow.sh dev
```

## 📚 Advanced Usage

### **Custom Monitoring Rules**

Edit `scripts/pm2-monitor.js` to customize:
- Alert thresholds
- Monitoring intervals
- Health scoring algorithms
- Notification methods

### **Integration with External Services**

The monitoring system can be extended to integrate with:
- **Slack**: Webhook notifications
- **Email**: SMTP alerts
- **SMS**: Twilio integration
- **PagerDuty**: Incident management
- **Discord**: Channel notifications
- **Teams**: Microsoft Teams integration

### **Custom Health Checks**

Add custom health checks in `scripts/pm2-monitor.js`:
```javascript
// Add custom health check
async customHealthCheck() {
  // Your custom logic here
  // Return health score (0-100)
}
```

### **Performance Optimization**

- **Memory Management**: Configure appropriate memory limits
- **CPU Monitoring**: Set realistic CPU thresholds
- **Log Rotation**: Implement log rotation policies
- **Resource Cleanup**: Regular cleanup of old reports and logs

## 🤝 Contributing

To contribute to the PM2 automation system:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### **Development Guidelines**

- Follow existing code style
- Add comprehensive error handling
- Include helpful logging
- Write clear documentation
- Test all scenarios

## 📄 License

This PM2 automation system is part of the Zion Tech Group project and follows the same licensing terms.

## 🆘 Support

For support and questions:

- **Documentation**: Check this README first
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions
- **Community**: Join our developer community

---

## 🎯 **Quick Reference Card**

### **Essential Commands**
```bash
# Start development
./scripts/dev-workflow.sh dev

# Start monitoring
node scripts/pm2-monitor.js start

# Check status
pm2 status

# View logs
pm2 logs

# Open monitoring dashboard
pm2 monit
```

### **Emergency Commands**
```bash
# Stop everything
pm2 stop all

# Restart everything
pm2 restart all

# Reload (zero-downtime)
pm2 reload all

# Check health
node scripts/pm2-monitor.js status
```

### **File Locations**
- **Config**: `ecosystem.config.js`
- **Scripts**: `scripts/` directory
- **Logs**: `logs/` directory
- **Reports**: `reports/` directory
- **Monitoring**: `monitoring/` directory

---

**🚀 Happy Coding with Zion Tech Group PM2 Automation! 🚀**