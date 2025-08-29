# 🚀 PM2 Intelligent Automation System for Zion Tech Group

## Overview

This comprehensive PM2 automation system transforms your development workflow with intelligent process management, automated testing, deployment automation, and continuous monitoring. Built specifically for the Zion Tech Group project, it provides enterprise-grade automation capabilities.

## ✨ Key Features

### 🔧 **Intelligent Process Management**
- **PM2 Ecosystem Configuration**: Comprehensive process management for all services
- **Auto-restart & Health Monitoring**: Automatic recovery from failures
- **Memory & CPU Monitoring**: Intelligent resource management
- **Zero-downtime Reloads**: Seamless updates without service interruption

### 🚀 **Development Workflow Automation**
- **File Watching**: Automatic detection of code changes
- **Auto-linting**: Continuous code quality monitoring
- **Auto-testing**: Intelligent test execution on file changes
- **Hot Reloading**: Instant process updates for development

### 🚀 **Deployment Automation**
- **Multi-environment Support**: Staging, production, and development
- **Automated Backups**: Pre-deployment safety nets
- **Health Checks**: Post-deployment verification
- **Automatic Rollback**: Instant recovery on deployment failures
- **Deployment History**: Complete audit trail

### 📊 **Monitoring & Analytics**
- **Real-time Metrics**: Process performance monitoring
- **Health Reports**: Automated system health assessment
- **Log Management**: Centralized logging with rotation
- **Alerting**: Intelligent notification system

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PM2 Automation System                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   Frontend      │  │    Backend      │  │ Automation  │ │
│  │   Processes     │  │   Processes     │  │  Services   │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │  Development    │  │   Deployment    │  │ Monitoring  │ │
│  │   Workflow      │  │  Automation     │  │   & Logs    │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │  Intelligent    │  │   Health        │  │   Backup    │ │
│  │ Orchestrator    │  │   Monitoring    │  │  System     │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 📁 File Structure

```
├── ecosystem.config.js                    # PM2 ecosystem configuration
├── workflow.config.json                   # Workflow configuration
├── scripts/
│   ├── pm2-automation-launcher.sh        # Main automation launcher
│   ├── pm2-intelligent-manager.js        # Intelligent PM2 manager
│   ├── pm2-dev-workflow.js               # Development workflow automation
│   └── pm2-deployment-automation.js      # Deployment automation
├── automation/                            # Existing automation scripts
├── logs/                                 # System logs
├── deployments/                          # Deployment artifacts
└── backups/                              # System backups
```

## 🚀 Quick Start

### 1. Install PM2 Globally
```bash
npm install -g pm2
```

### 2. Install Project Dependencies
```bash
npm run install:all
```

### 3. Start Development Environment
```bash
# Start PM2 ecosystem in development mode
./scripts/pm2-automation-launcher.sh start development

# Or start development workflow (includes file watching)
./scripts/pm2-automation-launcher.sh dev:start
```

### 4. Check Status
```bash
./scripts/pm2-automation-launcher.sh status
```

## 📋 Available Commands

### Core PM2 Commands
```bash
./scripts/pm2-automation-launcher.sh start [env]     # Start ecosystem
./scripts/pm2-automation-launcher.sh stop            # Stop all processes
./scripts/pm2-automation-launcher.sh restart         # Restart all processes
./scripts/pm2-automation-launcher.sh reload          # Zero-downtime reload
./scripts/pm2-automation-launcher.sh delete          # Delete all processes
./scripts/pm2-automation-launcher.sh status          # Show status
./scripts/pm2-automation-launcher.sh logs [app] [lines]  # Show logs
./scripts/pm2-automation-launcher.sh monit [app]     # Monitor specific app
./scripts/pm2-automation-launcher.sh scale [app] [instances]  # Scale app
```

### Development Workflow
```bash
./scripts/pm2-automation-launcher.sh dev:start       # Start dev workflow
./scripts/pm2-automation-launcher.sh dev:stop        # Stop dev workflow
./scripts/pm2-automation-launcher.sh test            # Run tests
./scripts/pm2-automation-launcher.sh lint            # Run linting
./scripts/pm2-automation-launcher.sh lint:fix        # Fix linting issues
./scripts/pm2-automation-launcher.sh build [env]     # Build project
```

### Deployment
```bash
./scripts/pm2-automation-launcher.sh deploy [env]    # Deploy to environment
./scripts/pm2-automation-launcher.sh rollback [env]  # Rollback deployment
./scripts/pm2-automation-launcher.sh deploy:status [env]  # Show deployment status
./scripts/pm2-automation-launcher.sh deploy:history [limit]  # Show deployment history
```

### Automation & Monitoring
```bash
./scripts/pm2-automation-launcher.sh auto:start      # Start automation manager
./scripts/pm2-automation-launcher.sh health          # Generate health report
./scripts/pm2-automation-launcher.sh cleanup [days]  # Clean up old logs
```

## 🔧 Configuration

### Ecosystem Configuration (`ecosystem.config.js`)
The PM2 ecosystem configuration defines all processes and their settings:

- **Frontend Development Server**: Vite dev server with React
- **Backend Development Server**: Express.js server with TypeScript
- **Hybrid Development Mode**: Combined frontend + backend
- **Automation Services**: All 23 automation scripts
- **Environment-specific Settings**: Development, staging, production

### Workflow Configuration (`workflow.config.json`)
Configures the development workflow behavior:

- **File Watching Patterns**: Which files to monitor
- **Auto-features**: Testing, linting, building, deployment
- **Performance Settings**: Optimization intervals and thresholds
- **Security Settings**: Scanning intervals and vulnerability checks
- **Integration Settings**: GitHub, Netlify, Sentry, analytics

## 🌍 Environment Management

### Development Environment
```bash
./scripts/pm2-automation-launcher.sh start development
```
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- File watching enabled
- Auto-linting and testing
- Debug mode enabled

### Staging Environment
```bash
./scripts/pm2-automation-launcher.sh start staging
```
- Frontend: http://localhost:3001
- Backend: http://localhost:5001
- Production-like settings
- Health monitoring enabled

### Production Environment
```bash
./scripts/pm2-automation-launcher.sh start production
```
- Optimized for performance
- Health monitoring and alerting
- Automatic backups
- Error tracking

## 🚀 Deployment Workflow

### 1. Pre-deployment Checks
- Git status verification
- Dependency audit
- Type checking
- Environment validation

### 2. Automated Build
- Frontend build (Vite)
- Backend build (TypeScript)
- Asset optimization
- Bundle analysis

### 3. Testing
- Unit tests
- Integration tests
- Build verification
- Performance tests

### 4. Deployment
- Process stopping
- File deployment
- Health checks
- PM2 ecosystem update

### 5. Verification
- Service health verification
- Performance monitoring
- Error rate checking
- Rollback preparation

## 📊 Monitoring & Health

### Health Checks
- Process status monitoring
- Memory usage tracking
- CPU utilization
- Restart count monitoring
- Response time measurement

### Automated Recovery
- Memory threshold monitoring
- Automatic process restart
- Failure count tracking
- Intelligent restart strategies

### Logging
- Centralized log collection
- Log rotation and cleanup
- Error categorization
- Performance metrics

## 🔒 Security Features

### Automated Security Scanning
- Dependency vulnerability checks
- Code security analysis
- Configuration validation
- Regular security audits

### Access Control
- Environment isolation
- Process-level security
- Log access control
- Deployment verification

## 📈 Performance Optimization

### Bundle Optimization
- Automatic bundle analysis
- Tree shaking optimization
- Code splitting
- Asset compression

### Runtime Optimization
- Memory usage monitoring
- CPU optimization
- Process scaling
- Load balancing

## 🧪 Testing Integration

### Automated Testing
- File change detection
- Related test identification
- Test execution automation
- Coverage reporting

### Test Types
- Unit tests
- Integration tests
- Build verification tests
- Performance tests

## 🔄 Continuous Integration

### GitHub Integration
- Webhook support
- Automated testing
- Deployment triggers
- Status reporting

### Netlify Integration
- Function deployment
- Edge caching
- Performance monitoring
- Analytics integration

## 📱 Monitoring Dashboard

### Real-time Metrics
- Process status
- Resource usage
- Performance metrics
- Error rates

### Historical Data
- Deployment history
- Performance trends
- Error patterns
- Usage statistics

## 🚨 Alerting & Notifications

### Alert Types
- Process failures
- High resource usage
- Deployment failures
- Security issues

### Notification Channels
- Console output
- Log files
- Email notifications
- Webhook alerts

## 🛠️ Troubleshooting

### Common Issues

#### PM2 Not Found
```bash
npm install -g pm2
```

#### Permission Issues
```bash
sudo chmod +x scripts/pm2-automation-launcher.sh
```

#### Port Conflicts
Check `ecosystem.config.js` for port configurations and ensure ports are available.

#### Memory Issues
Monitor memory usage with:
```bash
./scripts/pm2-automation-launcher.sh health
```

### Debug Mode
Enable debug logging by setting environment variables:
```bash
DEBUG=true ./scripts/pm2-automation-launcher.sh start
```

### Log Analysis
```bash
# View recent logs
./scripts/pm2-automation-launcher.sh logs

# View specific app logs
./scripts/pm2-automation-launcher.sh logs zion-frontend-dev 100

# Monitor specific app
./scripts/pm2-automation-launcher.sh monit zion-backend-dev
```

## 🔧 Advanced Configuration

### Custom Environment Variables
Create `.env.development`, `.env.staging`, or `.env.production` files for environment-specific configuration.

### PM2 Configuration Customization
Modify `ecosystem.config.js` to add custom processes or modify existing configurations.

### Workflow Customization
Edit `workflow.config.json` to customize automation behavior, file patterns, and intervals.

## 📚 API Reference

### PM2 Intelligent Manager
```javascript
const manager = new PM2IntelligentManager();
await manager.startEcosystem('production');
await manager.generateHealthReport();
```

### Development Workflow
```javascript
const workflow = new PM2DevWorkflow();
await workflow.startDevelopmentWorkflow();
await workflow.runFullTestSuite();
```

### Deployment Automation
```javascript
const deployment = new PM2DeploymentAutomation();
await deployment.deploy('production');
await deployment.rollbackDeployment('staging');
```

## 🤝 Contributing

### Adding New Automation Scripts
1. Create script in `automation/` directory
2. Add to `ecosystem.config.js`
3. Update `workflow.config.json`
4. Test with automation launcher

### Extending PM2 Configuration
1. Modify `ecosystem.config.js`
2. Add new environment variables
3. Update deployment scripts
4. Test in staging environment

## 📄 License

This automation system is part of the Zion Tech Group project and follows the same licensing terms.

## 🆘 Support

### Getting Help
- Check the troubleshooting section
- Review logs in `./logs/` directory
- Use `./scripts/pm2-automation-launcher.sh help`
- Check PM2 documentation: https://pm2.keymetrics.io/

### Reporting Issues
- Check existing automation scripts
- Review PM2 ecosystem configuration
- Verify environment setup
- Check dependency versions

---

## 🎯 Next Steps

1. **Install PM2**: `npm install -g pm2`
2. **Start Development**: `./scripts/pm2-automation-launcher.sh dev:start`
3. **Explore Commands**: `./scripts/pm2-automation-launcher.sh help`
4. **Customize Configuration**: Edit `workflow.config.json`
5. **Deploy to Staging**: `./scripts/pm2-automation-launcher.sh deploy staging`

Welcome to the future of intelligent development automation! 🚀