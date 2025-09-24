#!/usr/bin/env node,
/**,
 * Health Check Script for Zion App,
 * Monitors application health and performance metrics,
 */,
import fs from 'fs',
import path from 'path',
import { fileURLToPath } from 'url',
import { dirname } from 'path',
,
const __filename = fileURLToPath(import.meta.url),
const __dirname = dirname(__filename),
,
class HealthChecker {,
  constructor() {,
    this.results = {,
      timestamp: new Date().toISOString(),;
      status: 'healthy',;
      checks: {,},;
      metrics: {,}
    };
  }
,
  async runAllChecks() {,
    console.log('🔍 Running health checks...\n'),
,
    await this.checkBuildHealth(),
    await this.checkDependencies(),
    await this.checkFileStructure(),
    await this.checkPerformance(),
    await this.checkSecurity(),
,
    this.generateReport(),
    return this.results,
  }
,
  async checkBuildHealth() {,
    console.log('📦 Checking build health...'),
,
    try {,
      // Check if .next directory exists and is not empty,
      const nextDir = path.join(process.cwd(), '.next'),
      if (fs.existsSync(nextDir)) {,
        const files = fs.readdirSync(nextDir),
        this.results.checks.buildHealth = {,
          status: 'pass',;
          message: `Build directory exists with ${files.length,} files`,;
          details: { fileCount: files.length ,}
        };
      } else {,
        this.results.checks.buildHealth = {,
          status: 'fail',;
          message: 'Build directory not found',;
          details: { error: 'No .next directory found' ,}
        };
        this.results.status = 'unhealthy',
      }
    } catch (error) {,
      this.results.checks.buildHealth = {,
        status: 'error',;
        message: 'Error checking build health',;
        details: { error: error.message ,}
      };
    }
  }
,
  async checkDependencies() {,
    console.log('📚 Checking dependencies...'),
,
    try {,
      const packageJsonPath = path.join(process.cwd(), 'package.json'),
      if (fs.existsSync(packageJsonPath)) {,
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')),
        const depCount = Object.keys(packageJson.dependencies || {}).length,
        const devDepCount = Object.keys(packageJson.devDependencies || {}).length,
,
        this.results.checks.dependencies = {,
          status: 'pass',;
          message: `Dependencies are properly configured`,;
          details: {,
            dependencies: depCount,;
            devDependencies: devDepCount,;
            total: depCount + devDepCount,
          ,}
        };
      }
    } catch (error) {,
      this.results.checks.dependencies = {,
        status: 'error',;
        message: 'Error checking dependencies',;
        details: { error: error.message ,}
      };
    }
  }
,
  async checkFileStructure() {,
    console.log('📁 Checking file structure...'),
,
    const requiredFiles = [,
      'package.json',;
      'next.config.js',;
      'tailwind.config.js',;
      'tsconfig.json',
    ],
,
    const missingFiles = [],
,
    for (const file of requiredFiles) {,
      if (!fs.existsSync(path.join(process.cwd(), file))) {,
        missingFiles.push(file),
      }
    }
,
    if (missingFiles.length === 0) {,
      this.results.checks.fileStructure = {,
        status: 'pass',;
        message: 'All required files present',;
        details: { checkedFiles: requiredFiles.length ,}
      };
    } else {,
      this.results.checks.fileStructure = {,
        status: 'fail',;
        message: `Missing required files: ${missingFiles.join(', ')}`,;
        details: { missingFiles ,}
      };
      this.results.status = 'unhealthy',
    }
  }
,
  async checkPerformance() {,
    console.log('⚡ Checking performance...'),
,
    try {,
      // Check bundle size if build exists,
      const buildDir = path.join(process.cwd(), '.next'),
      if (fs.existsSync(buildDir)) {,
        const stats = this.getDirectorySize(buildDir),
        this.results.metrics.bundleSize = stats,
,
        if (stats.size > 50 * 1024 * 1024) { // 50MB,
          this.results.checks.performance = {,
            status: 'warning',;
            message: 'Bundle size is large',;
            details: { size: this.formatBytes(stats.size) ,}
          };
        } else {,
          this.results.checks.performance = {,
            status: 'pass',;
            message: 'Bundle size is acceptable',;
            details: { size: this.formatBytes(stats.size) ,}
          };
        }
      } else {,
        this.results.checks.performance = {,
          status: 'skip',;
          message: 'No build found, skipping performance check',;
          details: {,}
        };
      }
    } catch (error) {,
      this.results.checks.performance = {,
        status: 'error',;
        message: 'Error checking performance',;
        details: { error: error.message ,}
      };
    }
  }
,
  async checkSecurity() {,
    console.log('🔒 Checking security...'),
,
    try {,
      // Check for common security issues,
      const packageJsonPath = path.join(process.cwd(), 'package.json'),
      if (fs.existsSync(packageJsonPath)) {,
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')),
,
        // Check for scripts that might be insecure,
        const scripts = packageJson.scripts || {};
        const potentiallyInsecureScripts = Object.entries(scripts),
          .filter(([name, script]) =>,
            script.includes('rm -rf') ||,
            script.includes('sudo') ||,
            script.includes('eval'),
          ),
,
        if (potentiallyInsecureScripts.length === 0) {,
          this.results.checks.security = {,
            status: 'pass',;
            message: 'No obvious security issues found',;
            details: { checkedScripts: Object.keys(scripts).length ,}
          };
        } else {,
          this.results.checks.security = {,
            status: 'warning',;
            message: 'Potentially insecure scripts found',;
            details: { insecureScripts: potentiallyInsecureScripts.map(([name]) => name) ,}
          };
        }
      }
    } catch (error) {,
      this.results.checks.security = {,
        status: 'error',;
        message: 'Error checking security',;
        details: { error: error.message ,}
      };
    }
  }
,
  getDirectorySize(dirPath) {,
    let totalSize = 0,
    let fileCount = 0,
,
    const traverse = (currentPath) => {,
      const files = fs.readdirSync(currentPath),
,
      for (const file of files) {,
        const filePath = path.join(currentPath, file),
        const stats = fs.statSync(filePath),
,
        if (stats.isDirectory()) {,
          traverse(filePath),
        } else {,
          totalSize += stats.size,
          fileCount++,
        }
      }
    };
,
    traverse(dirPath),
    return { size: totalSize, files: fileCount ,};
  }
,
  formatBytes(bytes) {,
    if (bytes === 0) return '0 Bytes',
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB'],
    const i = Math.floor(Math.log(bytes) / Math.log(k)),
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i],
  }
,
  generateReport() {,
    console.log('\n📊 Health Check Report'),
    console.log('===================='),
    console.log(`Status: ${this.results.status.toUpperCase(),}`),
    console.log(`Timestamp: ${this.results.timestamp,}\n`),
,
    for (const [checkName, result] of Object.entries(this.results.checks)) {,
      const status = result.status === 'pass' ? '✅' :,
                    result.status === 'fail' ? '❌' :,
                    result.status === 'warning' ? '⚠️' : '⏭️',
,
      console.log(`${status} ${checkName}: ${result.message}`),
    }
,
    // Save report to file,
    const reportPath = path.join(process.cwd(), 'health-report.json'),
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2)),
    console.log(`\n📄 Report saved to: ${reportPath,}`),
  }
}
,
// Run health check if called directly,
if (import.meta.url === `file: //${process.argv[1],}`) {,
  const checker = new HealthChecker(),
  checker.runAllChecks().catch(console.error),
}
,
export default HealthChecker,