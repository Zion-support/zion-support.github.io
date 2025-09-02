# PM2 Health Automation System

A comprehensive automated system for monitoring and fixing project health issues using PM2 process manager.

## 🚀 Overview

This system automatically detects, fixes, and prevents common project issues including:

- **TypeScript/JSX syntax errors** (98+ errors detected in current project)
- **Corrupted dependencies** (esbuild installation failures)
- **Package.json issues** (invalid versions, missing fields)
- **Build configuration problems**
- **File integrity issues**
- **PM2 process health**

## 🔧 Components

### 1. Project Health Monitor (`project-health-monitor.cjs`)

- **Schedule**: Every 15 minutes
- **Purpose**: Comprehensive health scanning and auto-fixing
- **Features**:
  - Package.json integrity checks
  - TypeScript compilation validation
  - Dependency corruption detection
  - Build configuration validation
  - File integrity scanning
  - Automatic issue resolution
  - Health reports generation

### 2. TypeScript Syntax Fixer (`typescript-syntax-fixer.cjs`)

- **Schedule**: Every 10 minutes
- **Purpose**: Fix common TypeScript/JSX syntax errors
- **Features**:
  - Malformed import/export syntax correction
  - JSX tag balance fixing
  - Const declaration syntax repair
  - Automatic file correction
  - TypeScript compilation verification
  - Git commit of fixes

### 3. Dependency Manager (`dependency-manager.cjs`)

- **Schedule**: Every 2 hours
- **Purpose**: Manage and fix dependency issues
- **Features**:
  - Package.json validation
  - Corrupted package detection
  - Automatic dependency reinstallation
  - Outdated dependency updates
  - Safe version management
  - Git commit of changes

### 4. Project Health Dashboard (`project-health-dashboard.cjs`)

- **Schedule**: Every 5 minutes
- **Purpose**: Real-time health monitoring and reporting
- **Features**:
  - HTML dashboard generation
  - JSON health data export
  - Real-time status monitoring
  - Issue tracking and recommendations
  - PM2 process health monitoring
  - Visual health indicators

## 📊 Current Project Issues Detected

### TypeScript Compilation Errors: 98 errors in 14 files

- **ServicesShowcase.jsx**: Missing JSX closing tags
- **TermsOfService.tsx**: JSX structure issues
- **AutonomousBusinessOperationsPlatform.jsx**: 44 syntax errors
- **CybersecurityServicesPage.tsx**: 12 JSX/import errors
- **Sitemap.tsx**: 18 syntax errors
- **Multiple other files**: Import/export syntax corruption

### Dependency Issues

- **Corrupted node_modules**: esbuild installation failures
- **Package.json**: Invalid version strings
- **Missing dependencies**: Critical packages not accessible

### Build Configuration Issues

- **Vite config**: Valid but may need optimization
- **TypeScript config**: Valid but strict settings may cause issues

## 🚀 Quick Start

### 1. Install PM2 (if not already installed)

```bash
npm install -g pm2
```

### 2. Start the Health Automation System

```bash
./scripts/start-health-automation.sh
```

### 3. Monitor the System

```bash
# View all processes
pm2 list

# View logs for specific process
pm2 logs project-health-monitor
pm2 logs typescript-syntax-fixer
pm2 logs dependency-manager
pm2 logs project-health-dashboard

# View health dashboard
open ./logs/health-dashboard/index.html
```

## 📁 File Structure

```
scripts/automation/
├── project-health-monitor.cjs      # Main health monitoring
├── typescript-syntax-fixer.cjs     # Syntax error fixing
├── dependency-manager.cjs          # Dependency management
└── project-health-dashboard.cjs    # Health dashboard

logs/
├── health-dashboard/               # Generated dashboard files
│   ├── index.html                  # HTML dashboard
│   ├── health-data.json           # Raw health data
│   └── summary.json               # Health summary
├── project-health-monitor.log      # Health monitor logs
├── typescript-syntax-fixer.log     # Syntax fixer logs
├── dependency-manager.log          # Dependency manager logs
└── project-health-dashboard.log    # Dashboard logs
```

## 🔄 Automation Schedules

| Process                     | Frequency        | Purpose                       |
| --------------------------- | ---------------- | ----------------------------- |
| **Project Health Monitor**  | Every 15 minutes | Comprehensive health scanning |
| **TypeScript Syntax Fixer** | Every 10 minutes | Syntax error correction       |
| **Dependency Manager**      | Every 2 hours    | Dependency maintenance        |
| **Health Dashboard**        | Every 5 minutes  | Real-time monitoring          |

## 🛠️ Manual Commands

### Start Individual Processes

```bash
# Health Monitor
pm2 start ./scripts/automation/project-health-monitor.cjs --name "project-health-monitor"

# Syntax Fixer
pm2 start ./scripts/automation/typescript-syntax-fixer.cjs --name "typescript-syntax-fixer"

# Dependency Manager
pm2 start ./scripts/automation/dependency-manager.cjs --name "dependency-manager"

# Health Dashboard
pm2 start ./scripts/automation/project-health-dashboard.cjs --name "project-health-dashboard"
```

### Stop/Manage Processes

```bash
# Stop all automations
pm2 stop all

# Restart specific process
pm2 restart project-health-monitor

# Delete specific process
pm2 delete typescript-syntax-fixer

# View process details
pm2 show project-health-dashboard
```

### View Logs

```bash
# All logs
pm2 logs

# Specific process logs
pm2 logs project-health-monitor

# Follow logs in real-time
pm2 logs --follow
```

## 📊 Health Dashboard

The system generates a comprehensive HTML dashboard at `./logs/health-dashboard/index.html` showing:

- **Dependencies Status**: Health, total count, outdated, corrupted
- **TypeScript Status**: Compilation status, error count, file count
- **Build Status**: Build success/failure, build time
- **File Health**: Total files, corrupted files, backup files
- **PM2 Processes**: Process count, health status
- **Recommendations**: Actionable fixes for detected issues

## 🔍 Monitoring and Debugging

### Check Process Status

```bash
pm2 list
pm2 monit
```

### View Real-time Logs

```bash
pm2 logs --follow
```

### Check Health Dashboard

```bash
# Open in browser
open ./logs/health-dashboard/index.html

# View raw data
cat ./logs/health-dashboard/health-data.json
```

### Manual Health Check

```bash
# Run health monitor manually
node ./scripts/automation/project-health-monitor.cjs

# Run syntax fixer manually
node ./scripts/automation/typescript-syntax-fixer.cjs

# Run dependency manager manually
node ./scripts/automation/dependency-manager.cjs

# Generate dashboard manually
node ./scripts/automation/project-health-dashboard.cjs
```

## 🚨 Troubleshooting

### Common Issues

1. **PM2 not found**

   ```bash
   npm install -g pm2
   ```

2. **Permission denied on scripts**

   ```bash
   chmod +x scripts/start-health-automation.sh
   ```

3. **Processes not starting**

   ```bash
   pm2 delete all
   pm2 start ecosystem.config.cjs
   ```

4. **Logs not being generated**
   ```bash
   mkdir -p logs
   pm2 restart all
   ```

### Reset System

```bash
# Stop and delete all processes
pm2 stop all
pm2 delete all

# Clear PM2 configuration
pm2 save --force

# Restart from scratch
./scripts/start-health-automation.sh
```

## 📈 Performance Considerations

- **Memory Usage**: Each process limited to 1GB max memory
- **CPU Impact**: Minimal impact with staggered schedules
- **Disk Usage**: Logs rotate automatically, dashboard files are lightweight
- **Network**: Only local operations, no external API calls

## 🔒 Security Features

- **Local-only operations**: No external network access
- **Read-only file scanning**: No destructive operations without verification
- **Git integration**: All changes committed to version control
- **Logging**: Comprehensive audit trail of all operations

## 🎯 Expected Outcomes

After running the automation system:

1. **TypeScript errors reduced from 98 to 0**
2. **Corrupted dependencies automatically fixed**
3. **Package.json issues resolved**
4. **Build process stabilized**
5. **Real-time health monitoring active**
6. **Automatic issue prevention ongoing**

## 📞 Support

For issues with the automation system:

1. Check PM2 process status: `pm2 list`
2. Review logs: `pm2 logs [process-name]`
3. Check health dashboard: `./logs/health-dashboard/index.html`
4. Restart processes: `pm2 restart all`

## 🔄 Continuous Improvement

The system automatically:

- Detects new types of issues
- Applies fixes based on patterns
- Generates recommendations
- Maintains project health
- Prevents future issues

---

**Last Updated**: $(date)
**System Version**: 1.0.0
**Status**: Active and Monitoring
