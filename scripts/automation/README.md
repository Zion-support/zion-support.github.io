# 🧠 Enhanced Intelligent PM2 Automation Systems

This directory contains advanced, AI-powered automation systems that work together to provide intelligent development, deployment, and repository management capabilities.

## 🚀 New Intelligent Systems

### 1. **Intelligent Repository Manager** (`intelligent-repository-manager.cjs`)
Advanced automation for repository management, PR analysis, and intelligent merging.

**Features:**
- 🔄 **Smart Auto-Merge**: Automatically analyzes and merges pull requests based on complexity and risk assessment
- 🚨 **Conflict Resolution**: Intelligent conflict detection and automatic resolution strategies
- 📊 **Branch Analysis**: Analyzes branch complexity, file changes, and merge readiness
- 🎯 **Priority-Based Processing**: Processes branches based on priority and risk level
- 🧹 **Automatic Cleanup**: Removes merged branches and maintains repository hygiene

**Configuration:** `config/repo-manager.config.json`

### 2. **Advanced Development Intelligence** (`advanced-development-intelligence.cjs`)
AI-powered code analysis, pattern recognition, and development optimization.

**Features:**
- 🔍 **Pattern Recognition**: Detects code patterns, anti-patterns, and best practices
- 📊 **Complexity Analysis**: Calculates cyclomatic complexity and identifies problematic code
- 🚨 **Issue Prediction**: Predicts potential issues before they become problems
- 💡 **Optimization Suggestions**: Provides actionable recommendations for code improvement
- 📈 **Trend Analysis**: Tracks development trends and code quality metrics over time

**Configuration:** `config/dev-intelligence.config.json`

### 3. **Intelligent Deployment Orchestrator** (`intelligent-deployment-orchestrator.cjs`)
Advanced deployment management with automatic rollbacks, health checks, and pipeline optimization.

**Features:**
- 🚀 **Multiple Deployment Strategies**: Rolling, Blue-Green, Canary, and Recreate deployments
- 🏥 **Health Monitoring**: Continuous health checks with automatic rollback on failure
- 🔄 **Auto-Rollback**: Intelligent rollback strategies when deployments fail
- 📊 **Performance Metrics**: Tracks deployment success rates and performance
- 🎯 **Environment Management**: Manages multiple environments with different configurations

**Configuration:** `config/deployment-orchestrator.config.json`

### 4. **Master Intelligent Automation Controller** (`master-intelligent-automation-controller.cjs`)
Orchestrates all intelligent automation systems and provides unified control.

**Features:**
- 🎯 **System Orchestration**: Coordinates all automation systems
- 📊 **Cross-System Optimization**: Identifies and executes optimization opportunities across systems
- 🏥 **Health Monitoring**: Monitors the health of all automation systems
- 📈 **Unified Reporting**: Generates comprehensive reports from all systems
- 🔄 **Automation Queue Management**: Manages and prioritizes automation tasks

**Configuration:** `config/master-controller.config.json`

## 🚀 Quick Start

### 1. **Start the Complete System**
```bash
# Make the startup script executable
chmod +x start-intelligent-pm2-automation.sh

# Start the intelligent automation system
./start-intelligent-pm2-automation.sh
```

### 2. **Use Management Scripts**
```bash
# Start the system
./scripts/intelligent-pm2-start.sh

# Check status
./scripts/intelligent-pm2-status.sh

# View logs
./scripts/intelligent-pm2-logs.sh

# Monitor processes
./scripts/intelligent-pm2-monitor.sh

# Stop the system
./scripts/intelligent-pm2-stop.sh

# Restart the system
./scripts/intelligent-pm2-restart.sh
```

### 3. **Manual System Control**
```bash
# Start individual systems
node scripts/automation/intelligent-repository-manager.cjs
node scripts/automation/advanced-development-intelligence.cjs
node scripts/automation/intelligent-deployment-orchestrator.cjs
node scripts/automation/master-intelligent-automation-controller.cjs

# Start PM2 ecosystem
pm2 start ecosystem.enhanced.cjs
```

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                Master Intelligent Controller                │
│                     (Orchestrator)                         │
└─────────────────────┬───────────────────────────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
┌───▼────┐    ┌──────▼──────┐    ┌─────▼─────┐
│ Repo   │    │ Development │    │Deployment │
│Manager │    │Intelligence │    │Orchestrator│
└────────┘    └─────────────┘    └───────────┘
    │                 │                 │
    └─────────────────┼─────────────────┘
                      │
              ┌───────▼───────┐
              │   PM2 Core    │
              │   Ecosystem   │
              └───────────────┘
```

## 🔧 Configuration

Each system has its own configuration file in the `config/` directory:

- **Repository Manager**: `config/repo-manager.config.json`
- **Development Intelligence**: `config/dev-intelligence.config.json`
- **Deployment Orchestrator**: `config/deployment-orchestrator.config.json`
- **Master Controller**: `config/master-controller.config.json`

### Key Configuration Options

#### Repository Manager
```json
{
  "autoMergeEnabled": true,
  "conflictResolutionEnabled": true,
  "mergeStrategy": "squash",
  "conflictThreshold": 3,
  "mergeBatchSize": 5
}
```

#### Development Intelligence
```json
{
  "codeAnalysisEnabled": true,
  "patternRecognitionEnabled": true,
  "issuePredictionEnabled": true,
  "analysisInterval": 600000
}
```

#### Deployment Orchestrator
```json
{
  "autoDeployEnabled": true,
  "healthCheckEnabled": true,
  "autoRollbackEnabled": true,
  "healthThreshold": 0.95
}
```

## 📈 Monitoring and Reports

### Log Files
All systems generate detailed logs in the `logs/` directory:
- `master-controller.log` - Master controller logs
- `intelligent-repository-manager.log` - Repository manager logs
- `advanced-development-intelligence.log` - Development intelligence logs
- `intelligent-deployment-orchestrator.log` - Deployment orchestrator logs

### Reports
Systems generate comprehensive reports:
- `master-automation-report.json` - Master system report
- `repository-manager-report.json` - Repository management report
- `development-intelligence-report.json` - Code analysis report
- `deployment-report.json` - Deployment performance report

### Health Monitoring
```bash
# Check system health
./scripts/intelligent-pm2-status.sh

# Monitor in real-time
./scripts/intelligent-pm2-monitor.sh

# View health metrics
pm2 monit
```

## 🎯 Use Cases

### 1. **Automated Repository Management**
- Automatically merge simple, low-risk pull requests
- Detect and resolve merge conflicts
- Clean up merged branches
- Maintain repository hygiene

### 2. **Intelligent Code Analysis**
- Identify code quality issues before they become problems
- Detect anti-patterns and suggest improvements
- Track code complexity trends
- Provide optimization recommendations

### 3. **Advanced Deployment Management**
- Deploy with confidence using multiple strategies
- Automatic rollback on failure
- Health monitoring and alerting
- Performance optimization

### 4. **Cross-System Optimization**
- Identify optimization opportunities across all systems
- Coordinate improvements for maximum impact
- Generate actionable insights and recommendations

## 🔍 Troubleshooting

### Common Issues

#### 1. **System Won't Start**
```bash
# Check prerequisites
node --version
npm --version
pm2 --version

# Check logs
tail -f logs/master-controller.log
```

#### 2. **PM2 Processes Not Running**
```bash
# Check PM2 status
pm2 list

# Restart PM2
pm2 restart all

# Check PM2 logs
pm2 logs
```

#### 3. **Configuration Issues**
```bash
# Validate configuration files
node -e "console.log(JSON.parse(require('fs').readFileSync('scripts/automation/config/master-controller.config.json')))"
```

### Debug Mode
Enable debug logging by setting environment variables:
```bash
export DEBUG=true
export LOG_LEVEL=debug
./start-intelligent-pm2-automation.sh
```

## 🚀 Advanced Usage

### Custom Automation Scripts
```javascript
const MasterController = require('./master-intelligent-automation-controller.cjs');

const controller = new MasterController();

// Execute custom automation
await controller.executeAutomation('repository_merge', {
  priority: 'high',
  options: { force: true }
});

// Get system insights
const insights = await controller.gatherSystemInsights();
```

### Integration with CI/CD
```yaml
# GitHub Actions example
- name: Start Intelligent Automation
  run: |
    chmod +x start-intelligent-pm2-automation.sh
    ./start-intelligent-pm2-automation.sh

- name: Wait for Systems
  run: |
    sleep 30
    ./scripts/intelligent-pm2-status.sh
```

## 📚 API Reference

### Master Controller Methods
- `start()` - Start all systems
- `stop()` - Stop all systems
- `executeAutomation(type, options)` - Execute automation
- `getSystemStatus()` - Get system health status
- `generateMasterReport()` - Generate comprehensive report

### Repository Manager Methods
- `intelligentMerge()` - Execute intelligent merge process
- `resolveConflicts()` - Resolve merge conflicts
- `analyzePullRequests()` - Analyze open PRs
- `generateReport()` - Generate repository report

### Development Intelligence Methods
- `analyzeCodebase()` - Analyze entire codebase
- `predictPotentialIssues()` - Predict future issues
- `generateOptimizationSuggestions()` - Generate suggestions
- `analyzeDevelopmentTrends()` - Analyze trends

### Deployment Orchestrator Methods
- `startDeployment(environment, strategy)` - Start deployment
- `performHealthChecks()` - Execute health checks
- `triggerRollback()` - Trigger automatic rollback
- `generateDeploymentReport()` - Generate deployment report

## 🤝 Contributing

To add new automation systems:

1. Create the system file in `scripts/automation/`
2. Add configuration in `config/`
3. Update the master controller to include the new system
4. Add the system to the enhanced ecosystem configuration
5. Update this README with documentation

## 📄 License

This project is part of the Zion Tech Group automation ecosystem.

## 🆘 Support

For issues and questions:
1. Check the logs in the `logs/` directory
2. Review the configuration files
3. Check system status with management scripts
4. Review this documentation

---

**🧠 The future of intelligent automation is here!**
