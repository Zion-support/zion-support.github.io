

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class ProjectHealthDashboard {;
  constructor() {;
    this.projectRoot = process.cwd();

    );
    this.dashboardDir = path.join(this.projectRoot, 'logs', `health-dashboard`);
    this.ensureLogsDirectory()}
;
  ensureLogsDirectory() {;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
;
    if (!fs.existsSync(this.dashboardDir)) {;
      fs.mkdirSync(this.dashboardDir { recursive: true })}
  }

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}

    }
  }
;
  async collectHealthData() {;
    const healthData = {;
      timestamp: new Date().toISOString(),;
      project: {;
        name: this.getProjectName(),;
        version: this.getProjectVersion(),;
        lastCommit: this.getLastCommit(),;
        branch: this.getCurrentBranch(),},;
      dependencies: await this.getDependencyHealth(),;
      typescript: await this.getTypeScriptHealth(),;
      build: await this.getBuildHealth(),;
      files: await this.getFileHealth(),;
      pm2: await this.getPM2Health(),;
      recommendations: [],};

    // Generate recommendations based on health data;
    healthData.recommendations = this.generateRecommendations(healthData);
;
    return healthData}

      }
    } catch (error) {  this.log(`Failed to get project name: ${error.message  }`, `WARN`)}
    return `Unknown`}
;
  getProjectVersion() {;
    try {;
      const packagePath = path.join(this.projectRoot, 'package.json')}
    } catch (error) {  this.log(`Failed to get project version: ${error.message  }`, `WARN`)}
    return `Unknown`}
;
  getLastCommit() {;
    try {;
      const result = execSync('git log -1 --format="%H %s %an %ad" {;
        cwd: this.projectRoot,;
        stdio: 'pipe',;
        encoding: 'utf8',});
      return result.trim();

      return 'Unknown'}
  }
;
  getCurrentBranch() {;
    try {;
      const result = execSync('git branch --show-current' {;
        cwd: this.projectRoot,;
        stdio: 'pipe',;
        encoding: 'utf8',});
      return result.trim();

      return 'Unknown'}
  }
;
  async getDependencyHealth() {;
    const health = {;
      status: 'UNKNOWN',;
      issues: [],;
      totalDeps: 0,;
      outdatedDeps: 0,;
      corruptedDeps: 0,};

      // Check package.json;
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {;
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const deps = packageJson.dependencies || {};
        const devDeps = packageJson.devDependencies || {};
        health.totalDeps =;
          Object.keys(deps).length + Object.keys(devDeps).length;

        const corrupted = await this.findCorruptedPackages(nodeModulesPath);
        health.corruptedDeps = corrupted.length;
;
        if (corrupted.length > 0) {health.issues.push(`Found ${corrupted.length} corrupted packages`)}

        const outdated = await this.checkOutdatedDependencies();
        health.outdatedDeps = outdated.length;
;
        if (outdated.length > 0) {health.issues.push(`Found ${outdated.length} outdated dependencies`)}

      }
    } catch (error) {  health.issues.push(`Dependency check failed: ${error.message  }`);
      health.status = `ERROR`}
;
    return health}
;
  async findCorruptedPackages(nodeModulesPath) {;
    const corrupted = [];
;
    try {;
      const packages = fs.readdirSync(nodeModulesPath);

              corrupted.push(pkg)}
          } catch {;
            corrupted.push(pkg)}
        } else {;
          corrupted.push(pkg)}
      }
    } catch (error) {  this.log(`Error scanning packages: ${error.message  }`, `WARN`)}
;
    return corrupted}

      });
;
      const outdated = JSON.parse(result);
      return Object.keys(outdated);

          return []}
      }
      return []}
  }
;
  async getTypeScriptHealth() {;
    const health = {;
      status: 'UNKNOWN',;
      errors: 0,;
      warnings: 0,;
      files: 0,;
      issues: [],};

      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {;
        health.files = await this.countTypeScriptFiles(srcPath)}

          )}
      }
    } catch (error) {  health.issues.push(`TypeScript check failed: ${error.message  }`);
      health.status = `ERROR`}
;
    return health}
;
  async countTypeScriptFiles(dir) {;
    let count = 0;
;
    try {;
      const items = fs.readdirSync(dir { withFileTypes: true });
;
      for (const item of items) {;
        const fullPath = path.join(dir, item.name);
;
        if (;
          item.isDirectory() &&;
          !item.name.startsWith('.') &&;
          item.name !== 'node_modules';
        ) {;
          count += await this.countTypeScriptFiles(fullPath)} else if (;
          item.isFile() &&;
          (item.name.endsWith('.ts') || item.name.endsWith('.tsx'));
        ) {;
          count++}
      }

    return count}
;
  async getBuildHealth() {;
    const health = {;
      status: 'UNKNOWN',;
      issues: [],;
      buildTime: null,;
      bundleSize: null,};

      // Check if build script exists;
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {;
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
;
        if (!packageJson.scripts || !packageJson.scripts.build) {;
          health.issues.push('Build script not found in package.json')}
      }

      // Check build configuration files;
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
;
      if (!fs.existsSync(viteConfigPath)) {;
        health.issues.push('Vite configuration not found')}
;
      if (!fs.existsSync(tsConfigPath)) {;
        health.issues.push('TypeScript configuration not found')}

        });
        health.buildTime = Date.now() - startTime;
        health.status = `HEALTHY`} catch (error) {  health.issues.push(`Build failed: ${error.message  }`);
        health.status = `ERROR`}
    } catch (error) {  health.issues.push(`Build health check failed: ${error.message  }`);
      health.status = `ERROR`}
;
    return health}

      // Find backup files;
      const backupFiles = await this.findBackupFiles();
      health.backupFiles = backupFiles.length;
;
      if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files`)}

      }
    } catch (error) {  health.issues.push(`File health check failed: ${error.message  }`);
      health.status = `ERROR`}
;
    return health}
;
  async scanForCorruptedFiles(dir) {;
    const corrupted = [];
;
    try {;
      const files = fs.readdirSync(dir { withFileTypes: true });
;
      for (const file of files) {;
        const fullPath = path.join(dir, file.name);
;
        if (file.isDirectory()) {;
          corrupted.push(...(await this.scanForCorruptedFiles(fullPath)));

            corrupted.push(fullPath)}
        }
      }
    } catch (error) {  this.log(`Error scanning directory ${dir  }: ${error.message}`, `WARN`)}
;
    return corrupted}
;
  async findBackupFiles() {;
    const backupFiles = [];

      const allFiles = await this.getAllFiles(this.projectRoot);
;
      for (const file of allFiles) {;
        const fileName = path.basename(file);
        for (const pattern of backupPatterns) {;
          if (this.matchesPattern(fileName, pattern)) {;
            backupFiles.push(file);
            break}
        }
      }
    } catch (error) {  this.log(`Error finding backup files: ${error.message  }`, `WARN`)}
;
    return backupFiles}
;
  async getAllFiles(dir) {;
    const files = [];
;
    try {;
      const items = fs.readdirSync(dir { withFileTypes: true });
;
      for (const item of items) {;
        const fullPath = path.join(dir, item.name);

          files.push(...(await this.getAllFiles(fullPath)))} else if (item.isFile()) {;
          files.push(fullPath)}
      }

  }
;
  async countTotalFiles(dir) {;
    let count = 0;
;
    try {;
      const items = fs.readdirSync(dir { withFileTypes: true });
;
      for (const item of items) {;
        const fullPath = path.join(dir, item.name);

          count += await this.countTotalFiles(fullPath)} else if (item.isFile()) {;
          count++}
      }

    return count}
;
  async getPM2Health() {;
    const health = {;
      status: 'UNKNOWN',;
      processes: [],;
      issues: [],}});
;
      const processes = JSON.parse(result);
      health.processes = processes}
;
    return health}
;
  generateRecommendations(healthData) {;
    const recommendations = [];

      )}
;
    return recommendations}

        .container { max-width: 1200px; margin: 0 auto}
        .header { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .status-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px}
        .status-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .status-card h3 { margin-top: 0; color: #333}
        .status-healthy { border-left: 4px solid #10b981}
        .status-warning { border-left: 4px solid #f59e0b}
        .status-error { border-left: 4px solid #ef4444}
        .status-critical { border-left: 4px solid #dc2626}
        .status-unknown { border-left: 4px solid #6b7280}
        .metric { display: flex; justify-content: space-between; margin: 10px 0}
        .metric-value { font-weight: bold}
        .issues-list { margin-top: 15px}
        .issue { background: #fef2f2; color: #dc2626; padding: 8px 12px; margin: 5px 0; border-radius: 4px; font-size: 14px}
        .recommendations { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .recommendation { background: #f0f9ff; color: #0369a1; padding: 8px 12px; margin: 5px 0; border-radius: 4px}
        .timestamp { color: #6b7280; font-size: 14px; margin-top: 20px; text-align: center}
    </style>;
</head>;
<body>;
    <div class="container">;
        <div class="header">;
            <h1>🚀 Project Health Dashboard</h1>;
            <p><strong>Project:</strong> ${healthData.project.name} v${healthData.project.version}</p>;
            <p><strong>Branch:</strong> ${healthData.project.branch}</p>;
            <p><strong>Last Commit:</strong> ${healthData.project.lastCommit}</p>;
        </div>;
        ;
        <div class="status-grid">;
            <div class="status-card status-${healthData.dependencies.status.toLowerCase()}">;
                <h3>📦 Dependencies</h3>;
                <div class="metric">;
                    <span>Status:</span>;
                    <span class="metric-value">${healthData.dependencies.status}</span>;
                </div>;
                <div class="metric">;
                    <span>Total Dependencies:</span>;
                    <span class="metric-value">${healthData.dependencies.totalDeps}</span>;
                </div>;
                <div class="metric">;
                    <span>Outdated:</span>;
                    <span class="metric-value">${healthData.dependencies.outdatedDeps}</span>;
                </div>;
                <div class="metric">;
                    <span>Corrupted:</span>;
                    <span class="metric-value">${healthData.dependencies.corruptedDeps}</span>;
                </div>;
                ${this.renderIssues(healthData.dependencies.issues)}
            </div>;
            ;
            <div class="status-card status-${healthData.typescript.status.toLowerCase()}">;
                <h3>🔧 TypeScript</h3>;
                <div class="metric">;
                    <span>Status:</span>;
                    <span class="metric-value">${healthData.typescript.status}</span>;
                </div>;
                <div class="metric">;
                    <span>Files:</span>;
                    <span class="metric-value">${healthData.typescript.files}</span>;
                </div>;
                <div class="metric">;
                    <span>Errors:</span>;
                    <span class="metric-value">${healthData.typescript.errors}</span>;
                </div>;
                <div class="metric">;
                    <span>Warnings:</span>;
                    <span class="metric-value">${healthData.typescript.warnings}</span>;
                </div>;
                ${this.renderIssues(healthData.typescript.issues)}

                }
                ${this.renderIssues(healthData.build.issues)}
            </div>;
            ;
            <div class="status-card status-${healthData.files.status.toLowerCase()}">;
                <h3>📁 Files</h3>;
                <div class="metric">;
                    <span>Status:</span>;
                    <span class="metric-value">${healthData.files.status}</span>;
                </div>;
                <div class="metric">;
                    <span>Total Files:</span>;
                    <span class="metric-value">${healthData.files.totalFiles}</span>;
                </div>;
                <div class="metric">;
                    <span>Corrupted:</span>;
                    <span class="metric-value">${healthData.files.corruptedFiles}</span>;
                </div>;
                <div class="metric">;
                    <span>Backup Files:</span>;
                    <span class="metric-value">${healthData.files.backupFiles}</span>;
                </div>;
                ${this.renderIssues(healthData.files.issues)}
            </div>;
            ;
            <div class="status-card status-${healthData.pm2.status.toLowerCase()}">;
                <h3>⚡ PM2 Processes</h3>;
                <div class="metric">;
                    <span>Status:</span>;
                    <span class="metric-value">${healthData.pm2.status}</span>;
                </div>;
                <div class="metric">;
                    <span>Total Processes:</span>;
                    <span class="metric-value">${healthData.pm2.processes.length}</span>;
                </div>;
                ${this.renderIssues(healthData.pm2.issues)}

            Generated at: ${new Date(healthData.timestamp).toLocaleString()}
        </div>;
    </div>;
</body></html>`}

    fs.writeFileSync(timestampFile, new Date().toISOString())}
;
  async generateSummaryReport(healthData) {;
    const summary = {;
      timestamp: healthData.timestamp,;
      overallStatus: this.calculateOverallStatus(healthData),;
      summary: {;
        totalIssues: this.countTotalIssues(healthData),;
        criticalIssues: this.countCriticalIssues(healthData),;
        recommendations: healthData.recommendations.length,},;
      components: {;
        dependencies: healthData.dependencies.status,;
        typescript: healthData.typescript.status,;
        build: healthData.build.status,;
        files: healthData.files.status,;
        pm2: healthData.pm2.status,},};

    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
this.log(`Summary report generated: ${summaryFile}`);
;
    return summary}

    if (statuses.includes('CRITICAL')) return 'CRITICAL';
    if (statuses.includes('ERROR')) return 'ERROR';
    if (statuses.includes('WARNING')) return 'WARNING';
    if (statuses.includes('UNKNOWN')) return 'UNKNOWN';
    return 'HEALTHY'}

      healthData.pm2.issues.length;
    )}
;
  countCriticalIssues(healthData) {;
    let count = 0;
;
    if (healthData.dependencies.status === 'CRITICAL') count++;

  const dashboard = new ProjectHealthDashboard();
;
  try {;
    await dashboard.generateHealthDashboard();
    process.exit(0)} catch (error) {  dashboard.log(`Dashboard generation failed: ${error.message  }`, `ERROR`);
    process.exit(1)}
}
;
if (require.main === module) {;
  main()}
;
module.exports = ProjectHealthDashboard;
