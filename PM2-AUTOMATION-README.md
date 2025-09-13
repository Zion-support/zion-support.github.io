# 🚀 Intelligent PM2 Automation System

A comprehensive, intelligent automation system built with PM2 that continuously monitors, optimizes, and improves your application development workflow.

## 🎯 Overview

This PM2 automation system provides intelligent, automated processes that help developers maintain code quality, security, performance, and best practices throughout the development lifecycle. The system runs continuously in the background, providing real-time insights and automated fixes.

## 🔧 Core Automation Components

### 1. **Smart Test Runner** 🧪
- **Intelligent Test Execution**: Automatically determines test scope based on changed files
- **Performance Monitoring**: Tracks test execution time and identifies slow tests
- **Coverage Analysis**: Generates comprehensive test coverage reports
- **Smart Recommendations**: Provides actionable insights for test optimization

**Features:**
- Detects changed files and runs only relevant tests
- Supports unit, integration, and E2E tests
- Automatic test performance analysis
- Coverage report generation
- Test history tracking

**Usage:**
```bash
npm run test:smart
# or directly
node scripts/pm2/smart-test-runner.js
```

### 2. **Git Workflow Automator** 🔄
- **Automated Branch Management**: Creates feature branches with consistent naming
- **Conflict Resolution**: Automatically detects and resolves merge conflicts
- **PR Automation**: Creates pull requests with standardized templates
- **Branch Cleanup**: Removes old branches automatically

**Features:**
- Smart branch naming conventions
- Automatic merge conflict resolution
- Pull request generation
- Branch age monitoring and cleanup
- Workflow recommendations

**Usage:**
```bash
npm run git:workflow
# or directly
node scripts/pm2/git-workflow-automator.js
```

### 3. **Security Scanner** 🔒
- **Vulnerability Detection**: Scans code for security patterns and vulnerabilities
- **Dependency Analysis**: Monitors npm packages for known security issues
- **Configuration Security**: Checks configuration files for security misconfigurations
- **Environment Variable Security**: Scans for hardcoded secrets

**Features:**
- Pattern-based vulnerability detection
- NPM audit integration
- Configuration file security analysis
- Environment variable scanning
- Risk scoring and recommendations

**Usage:**
```bash
npm run security:scan
# or directly
node scripts/pm2/security-scanner.js
```

### 4. **Bundle Optimizer** 📦
- **Bundle Analysis**: Comprehensive analysis of build output
- **Code Splitting**: Implements intelligent code splitting strategies
- **Tree Shaking**: Enables dead code elimination
- **Performance Optimization**: Generates optimization recommendations

**Features:**
- Bundle size analysis and monitoring
- Automatic code splitting implementation
- Tree shaking optimization
- Import optimization
- Performance scoring

**Usage:**
```bash
npm run bundle:optimize
# or directly
node scripts/pm2/bundle-optimizer.js
```

### 5. **Enhanced Existing Automations** ⚡

#### Code Quality Monitor
- Enhanced code analysis with more patterns
- Better issue categorization
- Performance impact analysis

#### Performance Monitor
- Build performance tracking
- Bundle analysis integration
- Performance regression detection

#### Dependency Monitor
- Enhanced security scanning
- Update recommendations
- Compatibility checking

#### Lint Fixer & Auto-Commit
- Intelligent fix prioritization
- Better commit message generation
- Conflict resolution

## 🚀 Getting Started

### 1. **Installation**
```bash
# Install PM2 globally if not already installed
npm install -g pm2

# Install project dependencies
npm install
```

### 2. **Start All Automations**
```bash
# Start all PM2 automation processes
npm run automation:setup

# Check status
npm run pm2:status

# View logs
npm run pm2:logs
```

### 3. **Run Individual Automations**
```bash
# Run specific automation
npm run test:smart
npm run security:scan
npm run bundle:optimize
npm run git:workflow

# Run full automation suite
npm run automation:full
```

### 4. **Monitor and Manage**
```bash
# View PM2 monitoring interface
npm run pm2:monit

# Restart all automations
npm run pm2:restart

# Stop all automations
npm run automation:stop
```

## 📊 Automation Schedule

| Automation | Frequency | Purpose |
|------------|-----------|---------|
| **Smart Test Runner** | Every 2 hours | Continuous testing and quality assurance |
| **Git Workflow** | Every 3 hours | Git operations and conflict resolution |
| **Code Quality** | Every 12 hours | Code quality monitoring |
| **Performance** | Every 8 hours | Performance monitoring |
| **Lint Fixer** | Every 6 hours | Code style fixes |
| **Auto Commit** | Every 4 hours | Automated fixes commit |
| **Dependency Monitor** | Weekly (Sunday) | Dependency updates and security |
| **Security Scanner** | Daily (midnight) | Security vulnerability scanning |
| **Bundle Optimizer** | Daily (6 AM) | Bundle optimization |

## 🔧 Configuration

### Environment Variables
```bash
NODE_ENV=development
PM2_PROCESS_NAME=<automation-name>
```

### Configuration Files
Each automation can be configured via JSON files:

- `.gitworkflow.json` - Git workflow configuration
- `.bundle-optimizer.json` - Bundle optimization settings
- `.security-scanner.json` - Security scanning rules

### PM2 Configuration
All automations are configured in `ecosystem.config.js` with:
- Memory limits
- Restart policies
- Logging configuration
- Cron scheduling

## 📈 Monitoring and Reports

### Real-time Monitoring
```bash
# PM2 monitoring dashboard
npm run pm2:monit

# View specific process logs
pm2 logs <process-name>
```

### Generated Reports
All automations generate detailed reports in `logs/pm2/`:
- `test-report.json` - Test execution results
- `git-workflow-report.json` - Git workflow status
- `security-report.json` - Security scan results
- `bundle-optimization-report.json` - Bundle analysis

### Log Files
Each automation maintains detailed logs:
- Standard output logs
- Error logs
- Process-specific logs

## 🎯 Use Cases

### Development Workflow
1. **Continuous Testing**: Tests run automatically every 2 hours
2. **Code Quality**: Linting and fixes applied automatically
3. **Security**: Daily security scans catch vulnerabilities early
4. **Performance**: Regular performance monitoring prevents regressions

### Production Preparation
1. **Bundle Optimization**: Daily bundle analysis and optimization
2. **Security Hardening**: Comprehensive security scanning
3. **Dependency Management**: Regular dependency updates and security checks
4. **Quality Assurance**: Automated code quality improvements

### Team Collaboration
1. **Git Automation**: Streamlined branch management and conflict resolution
2. **Standardized Processes**: Consistent automation across team
3. **Quality Gates**: Automated quality checks before deployment
4. **Performance Monitoring**: Team-wide performance awareness

## 🚨 Troubleshooting

### Common Issues

#### Process Not Starting
```bash
# Check PM2 status
pm2 status

# View error logs
pm2 logs <process-name> --err

# Restart specific process
pm2 restart <process-name>
```

#### High Memory Usage
```bash
# Check memory usage
pm2 monit

# Restart with memory reset
pm2 restart <process-name>
```

#### Log File Issues
```bash
# Ensure logs directory exists
mkdir -p logs/pm2

# Check file permissions
chmod 755 logs/pm2
```

### Debug Mode
Enable debug logging by setting environment variables:
```bash
DEBUG=* npm run automation:setup
```

## 🔮 Future Enhancements

### Planned Features
- **AI-Powered Code Review**: Automated code review suggestions
- **Performance Regression Detection**: Machine learning-based performance analysis
- **Intelligent Deployment**: Automated deployment based on quality gates
- **Team Analytics**: Development team performance insights
- **Integration Hub**: Connect with external tools and services

### Extensibility
The system is designed to be easily extensible:
- Plugin architecture for custom automations
- Webhook integration for external triggers
- API endpoints for automation control
- Custom rule engines for specific needs

## 📚 API Reference

### Automation Manager
```javascript
const AutomationManager = require('./scripts/automation-manager.js');

const manager = new AutomationManager();
await manager.startAll();
await manager.getStatus();
await manager.runHealthCheck();
```

### Individual Automations
```javascript
const SmartTestRunner = require('./scripts/pm2/smart-test-runner.js');
const SecurityScanner = require('./scripts/pm2/security-scanner.js');
const BundleOptimizer = require('./scripts/pm2/bundle-optimizer.js');

// Run individual automations
const testRunner = new SmartTestRunner();
await testRunner.run();
```

## 🤝 Contributing

### Adding New Automations
1. Create automation script in `scripts/pm2/`
2. Add to `ecosystem.config.js`
3. Update `package.json` scripts
4. Document in this README

### Customization
- Modify configuration files for specific needs
- Extend automation classes for custom logic
- Add new monitoring metrics
- Integrate with external services

## 📄 License

This automation system is part of the Zion.app project and follows the same licensing terms.

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section
2. Review PM2 logs for errors
3. Check automation-specific logs
4. Review configuration files
5. Consult PM2 documentation

---

**🚀 Happy Automating!** This intelligent PM2 automation system will continuously improve your development workflow, ensuring high-quality, secure, and performant applications.