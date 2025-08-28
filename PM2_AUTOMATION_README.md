# PM2 Automation System for Zion App

## Overview

This PM2 automation system provides continuous, autonomous monitoring and fixing of the Zion app. The system includes a revolutionary **Console Error Fixer** that automatically detects and fixes TypeScript/JavaScript errors every 15 minutes.

## 🚀 Quick Start

### 1. Install PM2 (if not already installed)
```bash
npm install -g pm2
```

### 2. Start the entire automation system
```bash
./scripts/start-pm2-automation.sh
```

### 3. Monitor the console error fixer
```bash
./scripts/monitor-error-fixer.sh
```

## 🔧 Console Error Fixer (NEW!)

The **Console Error Fixer** is the flagship automation that runs every 15 minutes and automatically:

- **Scans** for TypeScript/JavaScript errors using ESLint and TypeScript compiler
- **Detects** common error patterns (import errors, syntax errors, type errors, runtime errors)
- **Auto-fixes** errors using intelligent pattern matching and code transformation
- **Verifies** fixes by running build tests
- **Generates** detailed error reports

### Error Types Automatically Fixed

| Error Type | Pattern | Fix Strategy | Priority |
|------------|---------|--------------|----------|
| Import Errors | `Cannot find module`, `Module not found` | Fix import paths, resolve aliases | High |
| Syntax Errors | `Unexpected token`, `Parsing error` | Fix syntax issues, JSX formatting | Critical |
| Type Errors | `Property does not exist`, `Type not assignable` | Add type annotations | Medium |
| Runtime Errors | `Cannot read property`, `Cannot set property` | Add null checks, error handling | High |
| Reference Errors | `ReferenceError` | Fix variable declarations | High |

### Auto-Fix Examples

#### Import Path Fixes
```typescript
// Before (broken)
import Button from '../../../components/Button.jsx'

// After (fixed)
import Button from '@/components/Button'
```

#### Syntax Fixes
```typescript
// Before (broken)
const Component = function(props) {
  return <div className="container" />
}

// After (fixed)
const Component = function(props: any) {
  return <div className="container" />
}
```

#### Type Safety Fixes
```typescript
// Before (broken)
const handleClick = (event) => {
  console.log(event.target.value)
}

// After (fixed)
const handleClick = (event: any) => {
  console.log(event?.target?.value)
}
```

## 🤖 Complete Automation Suite

| Automation | Frequency | Purpose |
|------------|-----------|---------|
| **Console Error Fixer** | Every 15 minutes | Auto-fix TypeScript/JavaScript errors |
| Quality Checks | Every 3 hours | Linting, type checking, testing |
| Link Checker | Every 30 minutes | Verify internal/external links |
| Link Integrity | Every 2 hours | Check link health and redirects |
| Performance Monitor | Every 2 hours | Monitor app performance metrics |
| Security Audit | Every 4 hours | Security vulnerability scanning |
| Dependency Updates | Every 6 hours | Check for package updates |
| Continuous Improvement | Every 2 hours | Code quality improvements |
| Daily Build Test | Every hour | Build verification and testing |
| Front Maximizer | Every 4 hours | Frontend optimization |
| Sitemap Runner | Every 6 hours | Generate and update sitemaps |

## 📊 Monitoring and Reports

### Real-time Monitoring
```bash
# Show all automation processes
pm2 status

# Monitor console error fixer specifically
pm2 logs console-error-fixer

# Show detailed process info
pm2 show console-error-fixer
```

### Error Reports
The console error fixer generates detailed JSON reports:
- `console-error-fix-report.json` - Latest report
- Historical reports with timestamps
- Summary of fixed vs. unfixed errors
- Detailed error analysis and fix results

### Interactive Monitor
Use the built-in monitor script for comprehensive oversight:
```bash
./scripts/monitor-error-fixer.sh
```

## 🛠️ Management Commands

### Start/Stop Automations
```bash
# Start specific automation
pm2 start ecosystem.config.js --only console-error-fixer

# Stop specific automation
pm2 stop console-error-fixer

# Restart specific automation
pm2 restart console-error-fixer

# Stop all automations
pm2 stop all

# Start all automations
pm2 start ecosystem.config.js
```

### Logs and Debugging
```bash
# View all logs
pm2 logs

# View specific automation logs
pm2 logs console-error-fixer

# View logs with line limit
pm2 logs console-error-fixer --lines 50

# Clear logs
pm2 flush
```

### Process Management
```bash
# Save current PM2 configuration
pm2 save

# Restore saved configuration
pm2 resurrect

# Delete all processes
pm2 delete all

# Show process details
pm2 show console-error-fixer
```

## 🔍 Error Detection Capabilities

### ESLint Integration
- Scans all TypeScript/JavaScript files
- Detects syntax, style, and potential runtime issues
- Integrates with project-specific ESLint rules

### TypeScript Compiler Integration
- Full type checking across the codebase
- Detects type mismatches and missing annotations
- Identifies import/export issues

### Pattern Recognition
- Intelligent error pattern matching
- Context-aware fix strategies
- Priority-based error resolution

## 🚨 Error Resolution Strategies

### Import Path Resolution
- Converts relative paths to absolute aliases
- Fixes JSX extension imports
- Resolves module resolution issues

### Syntax Correction
- Fixes common syntax mistakes
- Corrects JSX formatting
- Resolves parsing errors

### Type Safety Enhancement
- Adds missing type annotations
- Implements null-safe operators
- Enhances error handling

### Runtime Error Prevention
- Adds null checks and validation
- Implements defensive programming patterns
- Enhances error boundaries

## 📈 Performance and Reliability

### Resource Management
- Memory limit: 512MB per automation
- Automatic restart on memory overflow
- Graceful error handling and recovery

### Scalability
- Single instance per automation
- Configurable execution intervals
- Load-balanced execution patterns

### Monitoring
- Real-time process monitoring
- Memory and CPU usage tracking
- Automatic health checks

## 🔧 Configuration

### Environment Variables
```bash
# Customize automation intervals (in milliseconds)
export AUTOMATION_INTERVAL=900000  # 15 minutes for error fixer
export NODE_ENV=production
```

### Ecosystem Configuration
All automations are configured in `ecosystem.config.js`:
- Process names and scripts
- Memory limits and restart policies
- Environment variables and intervals
- Watch and autorestart settings

## 🚀 Deployment

### Production Deployment
```bash
# Start all automations in production mode
NODE_ENV=production ./scripts/start-pm2-automation.sh

# Monitor production processes
pm2 monit
```

### Development Mode
```bash
# Start with development settings
NODE_ENV=development ./scripts/start-pm2-automation.sh
```

## 📚 Troubleshooting

### Common Issues

#### PM2 Not Found
```bash
npm install -g pm2
```

#### Permission Denied
```bash
chmod +x scripts/*.sh
```

#### Process Won't Start
```bash
# Check logs for errors
pm2 logs console-error-fixer

# Restart the process
pm2 restart console-error-fixer
```

#### Memory Issues
```bash
# Check memory usage
pm2 monit

# Restart if memory is high
pm2 restart all
```

### Debug Mode
```bash
# Enable debug logging
DEBUG=* pm2 start ecosystem.config.js --only console-error-fixer

# View detailed logs
pm2 logs console-error-fixer --lines 100
```

## 🔮 Future Enhancements

### Planned Features
- **AI-powered error analysis** - Machine learning for better error detection
- **Code quality scoring** - Automated code quality metrics
- **Performance optimization** - Automatic performance improvements
- **Security hardening** - Proactive security enhancements
- **Dependency intelligence** - Smart dependency management

### Integration Opportunities
- **GitHub integration** - Automatic PR creation for fixes
- **Slack notifications** - Real-time error alerts
- **Metrics dashboard** - Web-based monitoring interface
- **CI/CD integration** - Automated deployment triggers

## 📄 License

This automation system is part of the Zion App project and follows the same licensing terms.

## 🤝 Contributing

To contribute to the automation system:
1. Review the existing automation scripts
2. Test your changes thoroughly
3. Follow the established patterns and conventions
4. Update documentation as needed

---

**🚀 The Console Error Fixer runs autonomously every 15 minutes, ensuring your Zion App stays error-free and production-ready!**
