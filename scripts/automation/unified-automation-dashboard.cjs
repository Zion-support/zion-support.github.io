#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class UnifiedAutomationDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.dashboardDir = path.join(this.logsDir, 'dashboard');
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.dashboardDir)) {
      fs.mkdirSync(this.dashboardDir, { recursive: true });
    }
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'unified-dashboard.log');
    this.errorFile = path.join(this.logsDir, 'unified-dashboard-error.log');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;

    console.log(logMessage);

    // Write to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');

    // Write errors to error file
    if (level === 'ERROR') {
      fs.appendFileSync(this.errorFile, logMessage + '\n');
    }
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(output);
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async getAutomationReports() {
    const reports = {};
    const reportFiles = [
      'console-error-fixer-report.json',
      'performance-report.json',
      'comprehensive-error-fixer-report.json',
      'ai-improvements.json',
      'performance-optimizations.json',
      'test-results.json',
    ];

    for (const file of reportFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          reports[file.replace('.json', '')] = JSON.parse(content);
        } catch (error) {
          this.log(`Failed to read report ${file}: ${error.message}`, 'WARN');
        }
      }
    }

    return reports;
  }

  async analyzeCodeQuality() {
    const analysis = {
      timestamp: new Date().toISOString(),
      metrics: {},
      recommendations: [],
    };

    try {
      // Check TypeScript compilation
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        analysis.metrics.typescript = { status: 'passed', errors: 0 };
      } catch (error) {
        const errorOutput = error.message;
        const errorCount = (errorOutput.match(/error TS\d+/g) || []).length;
        analysis.metrics.typescript = { status: 'failed', errors: errorCount };
        analysis.recommendations.push('Fix TypeScript compilation errors');
      }

      // Check ESLint
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        analysis.metrics.eslint = { status: 'passed', issues: 0 };
      } catch (error) {
        const errorOutput = error.message;
        const issueCount = (errorOutput.match(/error\s+/g) || []).length;
        analysis.metrics.eslint = { status: 'failed', issues: issueCount };
        analysis.recommendations.push('Fix ESLint issues');
      }

      // Check bundle size
      const distDir = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distDir)) {
        const files = fs.readdirSync(distDir);
        let totalSize = 0;
        files.forEach(file => {
          const filePath = path.join(distDir, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
        });
        analysis.metrics.bundleSize = {
          totalFiles: files.length,
          totalSize: `${(totalSize / 1024 / 1024).toFixed(2)} MB`,
        };
      }
    } catch (error) {
      this.log(`Code quality analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async generateDashboard() {
    this.log('Generating unified automation dashboard...');

    try {
      const pm2Status = await this.getPM2Status();
      const reports = await this.getAutomationReports();
      const codeQuality = await this.analyzeCodeQuality();

      const dashboard = {
        timestamp: new Date().toISOString(),
        pm2Status: {
          totalProcesses: pm2Status.length,
          online: pm2Status.filter(p => p.pm2_env.status === 'online').length,
          errored: pm2Status.filter(p => p.pm2_env.status === 'errored').length,
          stopped: pm2Status.filter(p => p.pm2_env.status === 'stopped').length,
          processes: pm2Status.map(p => ({
            name: p.name,
            status: p.pm2_env.status,
            memory: p.monit.memory,
            cpu: p.monit.cpu,
            uptime: p.pm2_env.pm_uptime,
            restarts: p.pm2_env.restart_time,
          })),
        },
        automationReports: reports,
        codeQuality: codeQuality,
        summary: {
          totalIssues: this.calculateTotalIssues(reports, codeQuality),
          criticalIssues: this.identifyCriticalIssues(reports, codeQuality),
          nextActions: this.generateNextActions(reports, codeQuality),
        },
      };

      // Save dashboard data
      const dashboardPath = path.join(this.dashboardDir, 'dashboard-data.json');
      fs.writeFileSync(dashboardPath, JSON.stringify(dashboard, null, 2));

      // Generate HTML dashboard
      const htmlDashboard = this.generateHTMLDashboard(dashboard);
      const htmlPath = path.join(this.dashboardDir, 'index.html');
      fs.writeFileSync(htmlPath, htmlDashboard);

      this.log(`Dashboard generated successfully at ${htmlPath}`);
      return dashboard;
    } catch (error) {
      this.log(`Dashboard generation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  calculateTotalIssues(reports, codeQuality) {
    let total = 0;

    if (reports['console-error-fixer']) {
      total += reports['console-error-fixer'].consoleErrors || 0;
      total += reports['console-error-fixer'].throwStatements || 0;
    }

    if (
      codeQuality.metrics.typescript &&
      codeQuality.metrics.typescript.status === 'failed'
    ) {
      total += codeQuality.metrics.typescript.errors;
    }

    if (
      codeQuality.metrics.eslint &&
      codeQuality.metrics.eslint.status === 'failed'
    ) {
      total += codeQuality.metrics.eslint.issues;
    }

    return total;
  }

  identifyCriticalIssues(reports, codeQuality) {
    const critical = [];

    if (
      codeQuality.metrics.typescript &&
      codeQuality.metrics.typescript.status === 'failed'
    ) {
      critical.push('TypeScript compilation errors preventing build');
    }

    if (
      codeQuality.metrics.eslint &&
      codeQuality.metrics.eslint.status === 'failed'
    ) {
      critical.push('ESLint issues affecting code quality');
    }

    return critical;
  }

  generateNextActions(reports, codeQuality) {
    const actions = [];

    if (
      codeQuality.metrics.typescript &&
      codeQuality.metrics.typescript.status === 'failed'
    ) {
      actions.push('Run TypeScript compiler to identify and fix type errors');
    }

    if (
      codeQuality.metrics.eslint &&
      codeQuality.metrics.eslint.status === 'failed'
    ) {
      actions.push('Run ESLint to identify and fix code style issues');
    }

    if (
      reports['console-error-fixer'] &&
      reports['console-error-fixer'].consoleErrors > 0
    ) {
      actions.push(
        'Review and remove console.log statements from production code'
      );
    }

    return actions;
  }

  generateHTMLDashboard(dashboard) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech Group - Automation Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'neon-blue': '#00d4ff',
                        'neon-purple': '#8b5cf6',
                        'neon-pink': '#ec4899'
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-900 text-white min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <header class="text-center mb-8">
            <h1 class="text-4xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                🚀 Zion Tech Group Automation Dashboard
            </h1>
            <p class="text-gray-400 mt-2">Real-time monitoring of all PM2 automations and code quality</p>
            <p class="text-sm text-gray-500 mt-1">Last updated: ${new Date(dashboard.timestamp).toLocaleString()}</p>
        </header>

        <!-- Status Overview -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div class="flex items-center">
                    <div class="p-2 bg-green-500 rounded-lg">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-400">Online Processes</p>
                        <p class="text-2xl font-bold text-green-400">${dashboard.pm2Status.online}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div class="flex items-center">
                    <div class="p-2 bg-red-500 rounded-lg">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-400">Errored Processes</p>
                        <p class="text-2xl font-bold text-red-400">${dashboard.pm2Status.errored}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div class="flex items-center">
                    <div class="p-2 bg-yellow-500 rounded-lg">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-400">Total Issues</p>
                        <p class="text-2xl font-bold text-yellow-400">${dashboard.summary.totalIssues}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div class="flex items-center">
                    <div class="p-2 bg-blue-500 rounded-lg">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-400">Bundle Size</p>
                        <p class="text-2xl font-bold text-blue-400">${dashboard.codeQuality.metrics.bundleSize ? dashboard.codeQuality.metrics.bundleSize.totalSize : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Process Status -->
        <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
            <h2 class="text-2xl font-bold mb-4 text-neon-blue">🔄 PM2 Process Status</h2>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b border-gray-700">
                            <th class="text-left py-2">Process</th>
                            <th class="text-left py-2">Status</th>
                            <th class="text-left py-2">Memory</th>
                            <th class="text-left py-2">CPU</th>
                            <th class="text-left py-2">Uptime</th>
                            <th class="text-left py-2">Restarts</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dashboard.pm2Status.processes
                          .map(
                            process => `
                            <tr class="border-b border-gray-700">
                                <td class="py-2 font-medium">${process.name}</td>
                                <td class="py-2">
                                    <span class="px-2 py-1 rounded text-xs font-medium ${
                                      process.status === 'online'
                                        ? 'bg-green-500 text-white'
                                        : process.status === 'errored'
                                          ? 'bg-red-500 text-white'
                                          : 'bg-yellow-500 text-black'
                                    }">${process.status}</span>
                                </td>
                                <td class="py-2">${(process.memory / 1024 / 1024).toFixed(1)} MB</td>
                                <td class="py-2">${process.cpu}%</td>
                                <td class="py-2">${Math.floor(process.uptime / 1000 / 60)}m</td>
                                <td class="py-2">${process.restarts}</td>
                            </tr>
                        `
                          )
                          .join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Code Quality -->
        <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
            <h2 class="text-2xl font-bold mb-4 text-neon-purple">🔍 Code Quality Analysis</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold mb-3">TypeScript</h3>
                    <div class="flex items-center">
                        <span class="px-3 py-1 rounded text-sm font-medium ${
                          dashboard.codeQuality.metrics.typescript.status ===
                          'passed'
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                        }">${dashboard.codeQuality.metrics.typescript.status}</span>
                        <span class="ml-2 text-gray-400">${dashboard.codeQuality.metrics.typescript.errors} errors</span>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-3">ESLint</h3>
                    <div class="flex items-center">
                        <span class="px-3 py-1 rounded text-sm font-medium ${
                          dashboard.codeQuality.metrics.eslint.status ===
                          'passed'
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                        }">${dashboard.codeQuality.metrics.eslint.status}</span>
                        <span class="ml-2 text-gray-400">${dashboard.codeQuality.metrics.eslint.issues} issues</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Next Actions -->
        <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
            <h2 class="text-2xl font-bold mb-4 text-neon-pink">⚡ Next Actions</h2>
            <div class="space-y-3">
                ${dashboard.summary.nextActions
                  .map(
                    action => `
                    <div class="flex items-start">
                        <div class="w-2 h-2 bg-neon-pink rounded-full mt-2 mr-3"></div>
                        <p class="text-gray-300">${action}</p>
                    </div>
                `
                  )
                  .join('')}
            </div>
        </div>

        <!-- Critical Issues -->
        ${
          dashboard.summary.criticalIssues.length > 0
            ? `
            <div class="bg-red-900/20 border border-red-500 rounded-lg p-6 mb-8">
                <h2 class="text-2xl font-bold mb-4 text-red-400">🚨 Critical Issues</h2>
                <div class="space-y-3">
                    ${dashboard.summary.criticalIssues
                      .map(
                        issue => `
                        <div class="flex items-start">
                            <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                            <p class="text-red-300">${issue}</p>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            </div>
        `
            : ''
        }

        <footer class="text-center text-gray-500 mt-12">
            <p>Dashboard auto-refreshes every 5 minutes</p>
            <p class="text-sm mt-1">Powered by PM2 Automation System</p>
        </footer>
    </div>

    <script>
        // Auto-refresh every 5 minutes
        setInterval(() => {
            location.reload();
        }, 5 * 60 * 1000);
    </script>
</body>
</html>`;
  }

  async start() {
    this.log('Starting unified automation dashboard...');

    try {
      // Generate initial dashboard
      await this.generateDashboard();

      // Set up periodic dashboard updates
      setInterval(
        async () => {
          try {
            await this.generateDashboard();
          } catch (error) {
            this.log(`Dashboard update failed: ${error.message}`, 'ERROR');
          }
        },
        5 * 60 * 1000
      ); // Every 5 minutes

      this.log('Unified automation dashboard started successfully');

      // Keep the process running
      setInterval(() => {
        this.log('Dashboard heartbeat...');
      }, 60000); // Every minute
    } catch (error) {
      this.log(`Failed to start dashboard: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const dashboard = new UnifiedAutomationDashboard();

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    dashboard.log('Shutting down gracefully...');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    dashboard.log('Shutting down gracefully...');
    process.exit(0);
  });

  dashboard.start().catch(error => {
    dashboard.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = UnifiedAutomationDashboard;
