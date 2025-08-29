# 🚀 Zion Tech Group - PM2 Intelligent Automation System

A comprehensive, intelligent PM2 automation system designed to streamline your development workflow, improve code quality, and automate deployment processes.

## ✨ Features

### 🔧 **Intelligent Process Management**
- **Multi-environment support**: Development, staging, and production configurations
- **Auto-restart capabilities**: Smart restart policies with configurable thresholds
- **Resource monitoring**: CPU and memory usage tracking with automatic alerts
- **Process clustering**: Load balancing and high availability support

### 📊 **Advanced Monitoring & Analytics**
- **Real-time metrics**: Live system resource monitoring
- **Health checks**: Automated API endpoint monitoring
- **Log management**: Intelligent log rotation and cleanup
- **Performance insights**: Detailed process performance analytics

### 🚀 **Smart Development Workflow**
- **Code quality automation**: Automated linting, type checking, and testing
- **Smart commits**: Intelligent commit message generation based on changes
- **Auto-fix capabilities**: Automatic resolution of common code issues
- **Quality gates**: Configurable quality thresholds for deployment

### 🔄 **Automated Deployment Pipeline**
- **Zero-downtime deployments**: Seamless production updates
- **Environment management**: Automated environment setup and configuration
- **Health verification**: Post-deployment health checks
- **Rollback support**: Quick rollback to previous versions

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PM2 Ecosystem                           │
├─────────────────────────────────────────────────────────────┤
│  Frontend Dev  │  Backend Dev  │  TypeScript  │  Linting  │
│     (Port 3K)  │   (Port 5K)   │    Watcher   │  Watcher  │
├─────────────────────────────────────────────────────────────┤
│  Frontend Prod │  Backend Prod  │  Monitoring  │  Workflow │
│     (Port 3K)  │   (Port 5K)   │    System    │  Manager  │
└─────────────────────────────────────────────────────────────┘
```

## 📁 File Structure

```
├── ecosystem.config.js          # PM2 ecosystem configuration
├── scripts/
│   ├── pm2-dev.sh              # Development environment manager
│   ├── pm2-prod.sh             # Production deployment manager
│   ├── pm2-monitor.sh          # Intelligent monitoring system
│   └── pm2-workflow.sh         # Development workflow automation
├── logs/                        # PM2 log files
└── PM2_AUTOMATION_README.md    # This documentation
```

## 🚀 Quick Start

### 1. **Install PM2 Globally**
```bash
npm install -g pm2
```

### 2. **Setup Development Environment**
```bash
chmod +x scripts/pm2-dev.sh
./scripts/pm2-dev.sh
```

### 3. **Start Production Deployment**
```bash
chmod +x scripts/pm2-prod.sh
./scripts/pm2-prod.sh
```

### 4. **Monitor Your Application**
```bash
chmod +x scripts/pm2-monitor.sh
./scripts/pm2-monitor.sh --monitor
```

## 📋 Detailed Usage

### 🔧 **Development Environment Manager** (`pm2-dev.sh`)

Manages your development environment with intelligent process management.

```bash
./scripts/pm2-dev.sh
```

**Features:**
- Automatic dependency installation
- Port conflict resolution
- Environment variable setup
- Process health monitoring

### 🚀 **Production Deployment Manager** (`pm2-prod.sh`)

Handles production deployments with comprehensive testing and verification.

```bash
./scripts/pm2-prod.sh
```

**Features:**
- Code quality validation
- Automated testing
- Zero-downtime deployment
- Health verification
- Startup script configuration

### 🔍 **Intelligent Monitor** (`pm2-monitor.sh`)

Provides real-time monitoring with automatic maintenance capabilities.

```bash
# Start continuous monitoring
./scripts/pm2-monitor.sh --monitor

# Generate health report
./scripts/pm2-monitor.sh --health

# Run automatic maintenance
./scripts/pm2-monitor.sh --maintenance

# Show current status
./scripts/pm2-monitor.sh --status
```

**Features:**
- Real-time process monitoring
- System resource tracking
- Automatic issue detection
- Log rotation and cleanup
- Health report generation

### 🔄 **Development Workflow** (`pm2-workflow.sh`)

Automates your development pipeline with smart quality management.

```bash
# Run development workflow
./scripts/pm2-workflow.sh --dev

# Run production deployment workflow
./scripts/pm2-workflow.sh --prod

# Setup development environment
./scripts/pm2-workflow.sh --setup

# Interactive development mode
./scripts/pm2-workflow.sh --interactive
```

**Features:**
- Automated code quality checks
- Smart commit generation
- Auto-fix capabilities
- Quality gates for deployment
- Interactive development mode

## ⚙️ Configuration

### **Environment Variables**

Create `.env` files for different environments:

```bash
# .env.development
NODE_ENV=development
PORT=3000
REACT_APP_API_URL=http://localhost:5000/api

# .env.production
NODE_ENV=production
PORT=3000
REACT_APP_API_URL=https://your-domain.com/api
```

### **PM2 Ecosystem Configuration**

The `ecosystem.config.js` file contains:

- **Process definitions**: Frontend, backend, watchers
- **Environment configurations**: Development and production settings
- **Resource limits**: Memory and CPU thresholds
- **Logging configuration**: File paths and rotation settings
- **Deployment settings**: Git integration and deployment paths

## 📊 Monitoring & Metrics

### **Real-time Metrics**
- CPU usage per process
- Memory consumption
- Network connections
- Process uptime and restart counts

### **Health Checks**
- API endpoint monitoring
- Process status verification
- Resource threshold alerts
- Automatic issue detection

### **Log Management**
- Structured logging with timestamps
- Automatic log rotation
- Error log aggregation
- Performance log analysis

## 🔒 Security Features

- **Environment isolation**: Separate configurations for different environments
- **Process isolation**: Each service runs in its own process
- **Resource limits**: Prevents resource exhaustion attacks
- **Secure defaults**: Production-ready security configurations

## 🚨 Troubleshooting

### **Common Issues**

1. **Port Conflicts**
   ```bash
   # Check what's using a port
   lsof -i :3000
   
   # Kill conflicting process
   kill -9 <PID>
   ```

2. **PM2 Process Issues**
   ```bash
   # List all processes
   pm2 list
   
   # Restart specific process
   pm2 restart zion-frontend-dev
   
   # View logs
   pm2 logs zion-frontend-dev
   ```

3. **Memory Issues**
   ```bash
   # Check memory usage
   pm2 monit
   
   # Restart processes with high memory usage
   pm2 restart all
   ```

### **Debug Mode**

Enable debug logging:

```bash
# Set debug environment
export DEBUG=pm2:*

# Run with verbose output
./scripts/pm2-dev.sh --verbose
```

## 📈 Performance Optimization

### **Resource Management**
- **Memory limits**: Configurable memory thresholds per process
- **CPU limits**: Process CPU usage monitoring
- **Auto-scaling**: Automatic process scaling based on load
- **Load balancing**: Intelligent request distribution

### **Monitoring Alerts**
- **High CPU usage**: Alert when CPU > 80%
- **High memory usage**: Alert when memory > 85%
- **High restart count**: Alert when restarts > 5
- **Process failures**: Immediate alert on process crashes

## 🔄 Continuous Integration

### **Git Integration**
- **Automatic commits**: Smart commit message generation
- **Branch protection**: Quality gates for main branches
- **Deployment triggers**: Automatic deployment on successful builds
- **Rollback support**: Quick rollback to previous versions

### **Quality Gates**
- **TypeScript validation**: Ensures type safety
- **Linting checks**: Code style and quality validation
- **Build verification**: Ensures successful compilation
- **Test coverage**: Minimum test coverage requirements

## 📚 Advanced Features

### **Process Clustering**
```javascript
// Enable clustering for better performance
{
  name: 'zion-backend-prod',
  instances: 'max', // Use all CPU cores
  exec_mode: 'cluster'
}
```

### **Custom Monitoring**
```bash
# Custom health check endpoint
curl http://localhost:5000/api/health

# Custom metrics endpoint
curl http://localhost:5000/api/metrics
```

### **Log Aggregation**
```bash
# View all logs
pm2 logs

# View specific process logs
pm2 logs zion-frontend-dev

# Follow logs in real-time
pm2 logs --follow
```

## 🤝 Contributing

### **Adding New Processes**
1. Add process definition to `ecosystem.config.js`
2. Create corresponding startup script
3. Update monitoring configuration
4. Test in development environment

### **Custom Scripts**
1. Create new script in `scripts/` directory
2. Make executable: `chmod +x scripts/your-script.sh`
3. Add to documentation
4. Test thoroughly

## 📞 Support

### **Getting Help**
- Check the troubleshooting section
- Review PM2 documentation: https://pm2.keymetrics.io/
- Check process logs: `pm2 logs`
- Monitor real-time: `pm2 monit`

### **Reporting Issues**
1. Check if issue is documented
2. Gather relevant logs and metrics
3. Provide reproduction steps
4. Include environment details

## 🎯 Best Practices

### **Development**
- Use development scripts for local development
- Run quality checks before committing
- Monitor resource usage during development
- Use interactive mode for complex workflows

### **Production**
- Always test in staging first
- Monitor health metrics continuously
- Set up proper alerting
- Regular maintenance and updates

### **Monitoring**
- Set up continuous monitoring
- Configure appropriate alert thresholds
- Regular health report generation
- Proactive issue detection

## 🚀 Future Enhancements

### **Planned Features**
- **Docker integration**: Containerized deployment support
- **Kubernetes support**: Cloud-native deployment
- **Advanced analytics**: Machine learning-based performance insights
- **Multi-cloud support**: Cross-platform deployment
- **API management**: Automated API documentation and testing

### **Community Contributions**
- **Custom plugins**: Extensible monitoring plugins
- **Integration APIs**: Third-party service integration
- **Custom workflows**: User-defined automation workflows
- **Performance profiles**: Optimized configurations for different use cases

---

## 📄 License

This PM2 automation system is part of the Zion Tech Group project and follows the same licensing terms.

## 🙏 Acknowledgments

- PM2 team for the excellent process manager
- Node.js community for the robust ecosystem
- Open source contributors for inspiration and tools

---

**Made with ❤️ by Zion Tech Group**

*Empowering developers with intelligent automation tools for the future.*