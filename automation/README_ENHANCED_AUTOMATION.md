# 🚀 Enhanced PM2 Automation System

A comprehensive, enterprise-grade automation system for PM2 process management with real-time monitoring, intelligent alerting, and self-healing capabilities.

## ✨ Features

### 🔍 **Real-Time Monitoring Dashboard**

- **Live Process Status**: Real-time monitoring of all PM2 processes
- **Performance Metrics**: CPU, memory, and uptime tracking with interactive charts
- **Process Control**: Start, stop, restart processes directly from the dashboard
- **WebSocket Updates**: Live updates without page refresh
- **Responsive Design**: Modern, mobile-friendly interface

### 🚨 **Advanced Alerting System**

- **Multi-Channel Notifications**: Email, Slack, and webhook support
- **Intelligent Thresholds**: Configurable alerts for memory, CPU, and process health
- **Smart Cooldown**: Prevents alert spam with intelligent cooldown logic
- **Severity Levels**: Critical, warning, and info alerts with different notification rules
- **Rich Alert Content**: Detailed HTML emails and formatted Slack messages

### 🔄 **Intelligent Process Recovery**

- **Self-Healing**: Automatically detects and recovers failed processes
- **Multiple Recovery Strategies**: Restart, reload, scale, and dependency checking
- **Priority-Based Recovery**: Critical processes get highest recovery priority
- **Exponential Backoff**: Intelligent retry logic with configurable delays
- **Dependency Management**: Handles process dependencies automatically

### 📊 **Comprehensive Metrics & Analytics**

- **Performance Profiling**: Detailed process performance analysis
- **Historical Data**: Long-term metrics storage and analysis
- **External Integrations**: Prometheus and Grafana support
- **Custom Dashboards**: Configurable monitoring views

### 🛡️ **Enterprise Security**

- **Authentication**: Optional user authentication and authorization
- **Role-Based Access**: Different permission levels for different users
- **API Security**: Rate limiting and CORS configuration
- **Secure Communication**: HTTPS support and secure webhooks

## 🚀 Quick Start

### 1. **Installation**

```bash
cd automation
npm install
```

### 2. **Configuration**

Copy and customize the configuration file:

```bash
cp config/automation-config.js config/automation-config.local.js
```

Set environment variables for your setup:

```bash
export NODE_ENV=production
export DASHBOARD_PORT=3001
export EMAIL_ENABLED=true
export EMAIL_HOST=smtp.gmail.com
export EMAIL_USER=your-email@gmail.com
export EMAIL_PASS=your-app-password
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

### 3. **Start the System**

```bash
# Start the enhanced automation system
node start-enhanced-automation.js

# Or use PM2
pm2 start start-enhanced-automation.js --name "enhanced-automation"
```

### 4. **Access the Dashboard**

Open your browser and navigate to:

```
http://localhost:3001
```

## 📋 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Enhanced Automation System               │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   Monitoring    │  │    Alerting     │  │   Process   │ │
│  │    Dashboard    │  │     System      │  │  Recovery   │ │
│  │                 │  │                 │  │   System    │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   Maintenance   │  │     Metrics     │  │  Security   │ │
│  │   Scheduler     │  │   Collection    │  │   Layer     │ │
│  │                 │  │                 │  │             │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                    PM2 Process Manager                     │
└─────────────────────────────────────────────────────────────┘
```

## ⚙️ Configuration

### **Dashboard Configuration**

```javascript
dashboard: {
  port: 3001,
  host: '0.0.0.0',
  enableWebSocket: true,
  updateInterval: 2000,
  enableProcessControl: true,
  enableMetrics: true,
  enableCharts: true
}
```

### **Alerting Configuration**

```javascript
alerting: {
  enabled: true,
  cooldown: 5 * 60 * 1000, // 5 minutes
  thresholds: {
    memory: 100 * 1024 * 1024, // 100MB
    cpu: 80, // 80%
    restartCount: 10
  },
  email: {
    enabled: true,
    host: 'smtp.gmail.com',
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
}
```

### **Recovery Configuration**

```javascript
recovery: {
  enabled: true,
  maxRetries: 3,
  retryDelay: 5000,
  exponentialBackoff: true,
  criticalProcesses: ['zion-app', 'zion-backend'],
  processDependencies: {
    'zion-app': ['zion-backend'],
    'build-automation': ['dependency-monitor']
  }
}
```

## 🔧 API Endpoints

### **Process Management**

```bash
# Get all processes
GET /api/processes

# Get process logs
GET /api/processes/:name/logs

# Restart process
POST /api/processes/:name/restart

# Stop process
POST /api/processes/:name/stop

# Start process
POST /api/processes/:name/start
```

### **System Information**

```bash
# Get system metrics
GET /api/metrics

# Get active alerts
GET /api/alerts

# Get system health
GET /health
```

## 📊 Dashboard Features

### **Main Dashboard**

- **Process Overview**: Real-time status of all PM2 processes
- **Performance Charts**: Interactive charts showing CPU and memory usage
- **Alert Center**: Live alert feed with severity indicators
- **Quick Actions**: One-click process control buttons

### **Process Details**

- **Resource Usage**: Detailed CPU and memory metrics
- **Uptime Tracking**: Process stability and restart information
- **Log Access**: Real-time log viewing and filtering
- **Health Score**: Overall process health assessment

### **Alert Management**

- **Alert History**: Complete alert log with filtering
- **Notification Settings**: Configurable alert channels
- **Threshold Management**: Adjustable alert thresholds
- **Alert Acknowledgment**: Mark alerts as resolved

## 🚨 Alert Types

### **Resource Alerts**

- **High Memory Usage**: When process exceeds memory threshold
- **High CPU Usage**: When process exceeds CPU threshold
- **Disk Space**: When disk usage is high

### **Process Alerts**

- **Process Stopped**: When a process goes offline
- **High Restart Count**: When process restarts too frequently
- **Unstable Process**: When process uptime is very low

### **System Alerts**

- **System Resources**: Overall system health
- **Dependency Issues**: When dependent processes fail
- **Performance Degradation**: When system performance drops

## 🔄 Recovery Strategies

### **Automatic Recovery**

1. **Health Check**: Continuous monitoring of process health
2. **Issue Detection**: Automatic identification of problems
3. **Strategy Selection**: Choose best recovery method
4. **Recovery Execution**: Automatic problem resolution
5. **Verification**: Confirm recovery success

### **Recovery Methods**

- **Restart**: Simple process restart
- **Reload**: Graceful process reload
- **Scale**: Add additional process instances
- **Dependency Check**: Ensure dependencies are running
- **Graceful Shutdown**: Clean process termination

## 🛠️ Maintenance

### **Scheduled Maintenance**

- **Daily**: Log rotation and cleanup
- **Weekly**: Metrics aggregation and cleanup
- **Monthly**: System optimization and cleanup

### **Maintenance Tasks**

- **Log Management**: Rotate and compress log files
- **Metrics Cleanup**: Remove old performance data
- **Alert Cleanup**: Archive old alerts
- **System Optimization**: Performance tuning

## 🔒 Security Features

### **Authentication**

- **Basic Auth**: Username/password authentication
- **JWT Support**: Token-based authentication
- **OAuth Integration**: Third-party authentication

### **Authorization**

- **Role-Based Access**: Different permission levels
- **API Security**: Rate limiting and CORS
- **Audit Logging**: Track all system actions

## 📈 Monitoring & Metrics

### **Performance Metrics**

- **Process Metrics**: CPU, memory, uptime, restart count
- **System Metrics**: Overall system health and performance
- **Application Metrics**: Custom application-specific metrics

### **External Integrations**

- **Prometheus**: Metrics export for monitoring systems
- **Grafana**: Advanced visualization and dashboards
- **Custom Webhooks**: Integration with external systems

## 🚀 Deployment

### **Production Deployment**

```bash
# Set production environment
export NODE_ENV=production

# Start with PM2
pm2 start start-enhanced-automation.js \
  --name "enhanced-automation" \
  --env production \
  --max-memory-restart 1G

# Save PM2 configuration
pm2 save
pm2 startup
```

### **Docker Deployment**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["node", "start-enhanced-automation.js"]
```

### **Environment Variables**

```bash
# Required
NODE_ENV=production
DASHBOARD_PORT=3001

# Optional - Email
EMAIL_ENABLED=true
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Optional - Slack
SLACK_ENABLED=true
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...

# Optional - Security
DASHBOARD_USERS=[{"username":"admin","password":"hash","role":"admin"}]
```

## 🧪 Testing

### **Run Tests**

```bash
# Install test dependencies
npm install --save-dev jest supertest

# Run tests
npm test

# Run with coverage
npm run test:coverage
```

### **Test Configuration**

```javascript
// Set testing environment
export TESTING_ENABLED=true
export MOCK_PM2=true
export TEST_DATA=true
```

## 📚 Troubleshooting

### **Common Issues**

1. **Dashboard Not Loading**

   - Check if port 3001 is available
   - Verify PM2 is running
   - Check console for error messages

2. **Alerts Not Sending**

   - Verify email/Slack configuration
   - Check network connectivity
   - Review alert thresholds

3. **Process Recovery Failing**
   - Check process dependencies
   - Verify PM2 permissions
   - Review recovery configuration

### **Debug Mode**

```bash
# Enable debug logging
export VERBOSE=true
export NODE_ENV=development

# Start with debug output
node start-enhanced-automation.js
```

### **Log Files**

```bash
# View system logs
pm2 logs enhanced-automation

# View specific component logs
pm2 logs enhanced-automation --lines 100
```

## 🤝 Contributing

### **Development Setup**

```bash
# Clone repository
git clone <repository-url>
cd automation

# Install dependencies
npm install

# Start development mode
npm run dev
```

### **Code Standards**

- Follow ESLint configuration
- Write comprehensive tests
- Document all new features
- Follow existing code patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### **Documentation**

- [API Reference](API.md)
- [Configuration Guide](CONFIGURATION.md)
- [Troubleshooting Guide](TROUBLESHOOTING.md)

### **Community**

- [GitHub Issues](https://github.com/your-repo/issues)
- [Discussions](https://github.com/your-repo/discussions)
- [Wiki](https://github.com/your-repo/wiki)

---

**Built with ❤️ by Zion Tech Group**

_For questions and support, please open an issue on GitHub or contact our team._
