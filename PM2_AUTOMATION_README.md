# 🚀 PM2 Intelligent Automation System

A comprehensive PM2 automation system designed to enhance your Zion Tech Group development workflow with intelligent process management, automated monitoring, and advanced orchestration capabilities.

## 🌟 Features

### Core PM2 Management
- **Multi-Environment Support**: Development, Production, and Hybrid modes
- **Intelligent Process Management**: Auto-restart, health monitoring, and resource optimization
- **Real-time Monitoring**: Live process status, resource usage, and performance metrics
- **Automated Scaling**: Intelligent scaling based on resource usage and performance thresholds

### Advanced Automation
- **File Watching**: Automatic rebuilds and reloads on code changes
- **Intelligent Build Queue**: Priority-based build processing with debouncing
- **Auto-Fix Capabilities**: Automatic error resolution and dependency management
- **Performance Optimization**: Bundle size monitoring and optimization suggestions

### Web Dashboard
- **Real-time Monitoring**: Live updates via Server-Sent Events (SSE)
- **Interactive Charts**: Resource usage and process status visualization
- **Process Management**: Start, stop, restart, and reload processes from the UI
- **Log Management**: Real-time log viewing and filtering

## 📁 File Structure

```
├── ecosystem.config.js                    # PM2 ecosystem configuration
├── scripts/
│   └── pm2-intelligent-manager.js        # Main PM2 management script
├── automation/
│   ├── pm2-automation-orchestrator.cjs   # File watching and build automation
│   └── pm2-dashboard.cjs                 # Web dashboard server
└── logs/                                 # Log files directory
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install PM2 globally
npm install -g pm2

# Install required dependencies
npm install express chokidar
```

### 2. Start Development Environment

```bash
# Start development environment with all automation services
node scripts/pm2-intelligent-manager.js start:dev

# Or start hybrid environment (frontend + backend + automation)
node scripts/pm2-intelligent-manager.js start:hybrid
```

### 3. Access the Dashboard

```bash
# Start the web dashboard
node automation/pm2-dashboard.cjs start

# Open http://localhost:3001 in your browser
```

## 🛠️ Usage Guide

### PM2 Intelligent Manager

The main management script provides comprehensive control over your PM2 processes:

```bash
# Development environment
node scripts/pm2-intelligent-manager.js start:dev

# Production environment
node scripts/pm2-intelligent-manager.js start:prod

# Hybrid environment (recommended for development)
node scripts/pm2-intelligent-manager.js start:hybrid

# Process management
node scripts/pm2-intelligent-manager.js stop          # Stop all processes
node scripts/pm2-intelligent-manager.js restart       # Restart all processes
node scripts/pm2-intelligent-manager.js reload        # Reload all processes

# Monitoring and reporting
node scripts/pm2-intelligent-manager.js status        # Show status and resources
node scripts/pm2-intelligent-manager.js health        # Run health check
node scripts/pm2-intelligent-manager.js monitor       # Start continuous monitoring
node scripts/pm2-intelligent-manager.js report        # Generate system report

# Log management
node scripts/pm2-intelligent-manager.js logs [name] [lines]  # View logs
node scripts/pm2-intelligent-manager.js cleanup              # Clean old logs
node scripts/pm2-intelligent-manager.js backup               # Backup configuration
```

### Automation Orchestrator

The orchestrator automatically handles file changes and build processes:

```bash
# Start the orchestrator
node automation/pm2-automation-orchestrator.cjs start

# Generate report
node automation/pm2-automation-orchestrator.cjs report
```

### Web Dashboard

Access the web dashboard for visual monitoring and management:

```bash
# Start dashboard
node automation/pm2-dashboard.cjs start

# Access at http://localhost:3001
```

## 🔧 Configuration

### Ecosystem Configuration

The `ecosystem.config.js` file defines all your PM2 processes:

- **Frontend Development**: `zion-frontend-dev` (Vite dev server)
- **Backend Development**: `zion-backend-dev` (Express dev server)
- **Hybrid Development**: `zion-hybrid-dev` (Both frontend and backend)
- **Production Frontend**: `zion-frontend-prod` (Built and served)
- **Production Backend**: `zion-backend-prod` (Built and served)
- **Automation Services**: Various monitoring and automation processes

### Environment Variables

```bash
# Development
NODE_ENV=development
PORT=3000
NODE_OPTIONS="--max-old-space-size=4096 --openssl-legacy-provider"

# Production
NODE_ENV=production
PORT=3000
```

### Customization

You can customize the automation behavior by modifying:

- **Health check intervals** in the manager scripts
- **Resource thresholds** for auto-scaling
- **File watching patterns** in the orchestrator
- **Build queue priorities** and processing logic

## 📊 Monitoring Features

### Real-time Metrics

- **Process Status**: Online, stopped, error states
- **Resource Usage**: Memory, CPU, and load averages
- **Performance Metrics**: Response times, throughput, error rates
- **System Health**: Uptime, network interfaces, platform info

### Automated Alerts

- **Critical Process Failures**: Automatic restart and notification
- **High Resource Usage**: Memory and CPU threshold alerts
- **Build Failures**: Automatic retry and error resolution
- **Performance Degradation**: Threshold-based warnings

### Health Checks

- **Process Health**: Status, restart counts, uptime monitoring
- **System Resources**: Memory, CPU, disk usage monitoring
- **Network Health**: Interface status and connectivity
- **Dependency Health**: Package and service availability

## 🔄 Automation Workflows

### Development Workflow

1. **File Change Detection**: Watches source files for changes
2. **Intelligent Build Queue**: Prioritizes builds based on file type and change
3. **Automatic Rebuilds**: Frontend and backend rebuild on code changes
4. **Process Reloading**: Hot reloads processes without full restarts
5. **Health Monitoring**: Continuous monitoring and auto-recovery

### Production Workflow

1. **Environment Management**: Easy switching between dev/prod/hybrid
2. **Auto-scaling**: Intelligent scaling based on resource usage
3. **Load Balancing**: Cluster mode for high availability
4. **Performance Monitoring**: Real-time performance metrics
5. **Automated Recovery**: Self-healing processes and services

### Maintenance Workflow

1. **Log Management**: Automatic log rotation and cleanup
2. **Configuration Backup**: Regular backup of ecosystem configuration
3. **Health Reports**: Comprehensive system health reports
4. **Performance Optimization**: Bundle size and performance suggestions
5. **Security Scanning**: Automated security vulnerability checks

## 🚨 Troubleshooting

### Common Issues

**Processes not starting:**
```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs

# Restart PM2 daemon
pm2 kill && pm2 start ecosystem.config.js
```

**High memory usage:**
```bash
# Check memory usage
node scripts/pm2-intelligent-manager.js status

# Restart processes to free memory
pm2 restart all

# Check for memory leaks
pm2 monit
```

**Build failures:**
```bash
# Check build logs
npm run build

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Run health check
node scripts/pm2-intelligent-manager.js health
```

### Debug Mode

Enable debug logging by setting environment variables:

```bash
LOG_LEVEL=debug node scripts/pm2-intelligent-manager.js start:dev
```

### Log Files

All logs are stored in the `logs/` directory:

- `pm2-manager-*.log`: Manager script logs
- `pm2-orchestrator-*.log`: Orchestrator logs
- `*-error.log`: Error logs for each process
- `*-out.log`: Output logs for each process
- `*-combined.log`: Combined logs for each process

## 🔮 Advanced Features

### Custom Automation Scripts

You can extend the automation system by adding custom scripts:

```javascript
// Add to ecosystem.config.js
{
  name: 'custom-automation',
  script: './automation/custom-script.js',
  // ... other configuration
}
```

### Integration with CI/CD

The system can integrate with your CI/CD pipeline:

```bash
# Deploy to production
pm2 deploy production

# Update and reload
pm2 deploy production update
```

### Custom Health Checks

Implement custom health check endpoints:

```javascript
// Add health check endpoint to your app
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: Date.now() });
});
```

### Performance Optimization

The system provides performance optimization suggestions:

- **Bundle Size**: Automatic bundle size monitoring
- **Code Splitting**: Dynamic import recommendations
- **Tree Shaking**: Vite configuration optimization
- **Asset Optimization**: Image and asset optimization tips

## 📈 Performance Metrics

### Key Performance Indicators

- **Build Time**: Average and historical build times
- **Bundle Size**: Frontend bundle size monitoring
- **Memory Usage**: Process and system memory usage
- **CPU Usage**: Process and system CPU utilization
- **Response Time**: Application response time metrics
- **Error Rate**: Error frequency and types

### Optimization Recommendations

The system automatically suggests optimizations based on:

- **High memory usage**: Memory optimization strategies
- **Slow build times**: Build process optimization
- **Large bundle sizes**: Code splitting and tree shaking
- **High CPU usage**: Process optimization and scaling

## 🔒 Security Features

### Security Monitoring

- **Vulnerability Scanning**: Automated security checks
- **Dependency Monitoring**: Outdated package detection
- **Access Control**: Process-level access management
- **Audit Logging**: Comprehensive action logging

### Best Practices

- **Process Isolation**: Separate processes for different environments
- **Resource Limits**: Memory and CPU limits per process
- **Log Rotation**: Automatic log file rotation
- **Backup Management**: Regular configuration backups

## 🤝 Contributing

### Adding New Automation Features

1. **Create Script**: Add new automation script to `automation/` directory
2. **Update Ecosystem**: Add process configuration to `ecosystem.config.js`
3. **Extend Manager**: Add new commands to `pm2-intelligent-manager.js`
4. **Update Dashboard**: Add new features to the web dashboard

### Testing

```bash
# Test individual components
node scripts/pm2-intelligent-manager.js health
node automation/pm2-automation-orchestrator.cjs report

# Test full system
node scripts/pm2-intelligent-manager.js start:hybrid
node automation/pm2-dashboard.cjs start
```

## 📚 Additional Resources

### Documentation

- [PM2 Official Documentation](https://pm2.keymetrics.io/docs/)
- [Node.js Process Management](https://nodejs.org/api/process.html)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practices-performance.html)

### Community

- [PM2 GitHub Repository](https://github.com/Unitech/pm2)
- [Node.js Community](https://nodejs.org/en/community/)
- [Express.js Community](https://expressjs.com/en/resources/community.html)

## 🎯 Roadmap

### Upcoming Features

- **Machine Learning Integration**: Predictive scaling and optimization
- **Advanced Analytics**: Detailed performance analytics and insights
- **Multi-Cloud Support**: Cloud provider integration and management
- **Mobile Dashboard**: Mobile-optimized monitoring interface
- **API Integration**: REST API for external integrations
- **Plugin System**: Extensible plugin architecture

### Long-term Goals

- **AI-Powered Optimization**: Machine learning-based performance optimization
- **Predictive Maintenance**: Predictive failure detection and prevention
- **Global Monitoring**: Multi-region and multi-environment monitoring
- **Advanced Security**: Advanced threat detection and prevention
- **Compliance Tools**: Regulatory compliance monitoring and reporting

---

## 🚀 Get Started Today!

Transform your development workflow with intelligent PM2 automation:

```bash
# Clone and setup
git clone <your-repo>
cd <your-project>

# Install PM2
npm install -g pm2

# Start the intelligent automation system
node scripts/pm2-intelligent-manager.js start:hybrid

# Open the dashboard
node automation/pm2-dashboard.cjs start
```

**Happy coding with intelligent automation! 🎉**