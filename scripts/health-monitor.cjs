#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'health-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async checkSystemHealth() {
    this.log('🔍 Checking system health...');
    try {
      const result = execSync('node --version && npm --version', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      const [nodeVersion, npmVersion] = result.trim().split('\n');
      
      this.log(`🔍 Node.js version: ${nodeVersion}`);
      this.log(`🔍 npm version: ${npmVersion}`);
      
      return {
        nodeVersion,
        npmVersion,
        status: 'healthy'
      };
    } catch (error) {
      this.log(`❌ System health check failed: ${error.message}`);
      return { error: error.message, status: 'unhealthy' };
    }
  }

  async checkProjectHealth() {
    this.log('🔍 Checking project health...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      const hasNodeModules = fs.existsSync(nodeModulesPath);
      
      this.log(`🔍 Project name: ${packageJson.name}`);
      this.log(`🔍 Project version: ${packageJson.version}`);
      this.log(`🔍 Node modules: ${hasNodeModules ? 'installed' : 'missing'}`);
      
      return {
        name: packageJson.name,
        version: packageJson.version,
        hasNodeModules,
        status: hasNodeModules ? 'healthy' : 'needs_install'
      };
    } catch (error) {
      this.log(`❌ Project health check failed: ${error.message}`);
      return { error: error.message, status: 'unhealthy' };
    }
  }

  async checkBuildHealth() {
    this.log('🔍 Checking build health...');
    try {
      const result = execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      
      this.log('✅ Build completed successfully');
      
      return {
        success: true,
        status: 'healthy'
      };
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        status: 'unhealthy'
      };
    }
  }

  async checkTestHealth() {
    this.log('🔍 Checking test health...');
    try {
      const result = execSync('npm test', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      });
      
      this.log('✅ Tests passed successfully');
      
      return {
        passed: true,
        status: 'healthy'
      };
    } catch (error) {
      this.log(`❌ Tests failed: ${error.message}`);
      return {
        passed: false,
        error: error.message,
        status: 'unhealthy'
      };
    }
  }

  async checkLintingHealth() {
    this.log('🔍 Checking linting health...');
    try {
      const result = execSync('npm run lint', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      
      this.log('✅ Linting passed successfully');
      
      return {
        passed: true,
        status: 'healthy'
      };
    } catch (error) {
      this.log(`❌ Linting failed: ${error.message}`);
      return {
        passed: false,
        error: error.message,
        status: 'unhealthy'
      };
    }
  }

  async checkTypeScriptHealth() {
    this.log('🔍 Checking TypeScript health...');
    try {
      const result = execSync('npx tsc --noEmit', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      
      this.log('✅ TypeScript check passed successfully');
      
      return {
        passed: true,
        status: 'healthy'
      };
    } catch (error) {
      this.log(`❌ TypeScript check failed: ${error.message}`);
      return {
        passed: false,
        error: error.message,
        status: 'unhealthy'
      };
    }
  }

  async checkDependencyHealth() {
    this.log('🔍 Checking dependency health...');
    try {
      const result = execSync('npm audit --audit-level=moderate', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      });
      
      this.log('✅ Dependencies are healthy');
      
      return {
        healthy: true,
        status: 'healthy'
      };
    } catch (error) {
      this.log(`❌ Dependencies have issues: ${error.message}`);
      return {
        healthy: false,
        error: error.message,
        status: 'unhealthy'
      };
    }
  }

  async checkFileSystemHealth() {
    this.log('🔍 Checking file system health...');
    try {
      const criticalFiles = [
        'package.json',
        'next.config.js',
        'tsconfig.json',
        '.eslintrc.json'
      ];

      const missingFiles = [];
      const existingFiles = [];

      for (const file of criticalFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          existingFiles.push(file);
        } else {
          missingFiles.push(file);
        }
      }

      this.log(`🔍 Existing files: ${existingFiles.length}`);
      this.log(`🔍 Missing files: ${missingFiles.length}`);

      return {
        existing: existingFiles,
        missing: missingFiles,
        status: missingFiles.length === 0 ? 'healthy' : 'missing_files'
      };
    } catch (error) {
      this.log(`❌ File system health check failed: ${error.message}`);
      return { error: error.message, status: 'unhealthy' };
    }
  }

  async generateHealthReport() {
    this.log('📊 Generating health report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis: {
        system: await this.checkSystemHealth(),
        project: await this.checkProjectHealth(),
        build: await this.checkBuildHealth(),
        tests: await this.checkTestHealth(),
        linting: await this.checkLintingHealth(),
        typeScript: await this.checkTypeScriptHealth(),
        dependencies: await this.checkDependencyHealth(),
        fileSystem: await this.checkFileSystemHealth()
      }
    };

    // Calculate overall health score
    report.healthScore = this.calculateHealthScore(report.analysis);

    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);

    const reportFile = path.join(this.reportsDir, `health-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Health report generated: ${reportFile}`);
    
    return report;
  }

  calculateHealthScore(analysis) {
    let score = 0;
    let totalChecks = 0;

    const checks = [
      analysis.system,
      analysis.project,
      analysis.build,
      analysis.tests,
      analysis.linting,
      analysis.typeScript,
      analysis.dependencies,
      analysis.fileSystem
    ];

    checks.forEach(check => {
      totalChecks++;
      if (check.status === 'healthy') {
        score += 1;
      } else if (check.status === 'needs_install' || check.status === 'missing_files') {
        score += 0.5;
      }
    });

    const percentage = (score / totalChecks) * 100;
    
    return {
      score: Math.round(percentage),
      status: percentage >= 90 ? 'excellent' :
              percentage >= 80 ? 'good' :
              percentage >= 70 ? 'fair' :
              percentage >= 60 ? 'poor' : 'critical'
    };
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    if (analysis.system && analysis.system.status !== 'healthy') {
      recommendations.push({
        type: 'system_health',
        priority: 'high',
        message: 'System health issues detected. Check Node.js and npm installation.',
        impact: 'Affects project functionality'
      });
    }

    if (analysis.project && analysis.project.status === 'needs_install') {
      recommendations.push({
        type: 'dependencies',
        priority: 'high',
        message: 'Node modules not installed. Run npm install.',
        impact: 'Required for project to function'
      });
    }

    if (analysis.build && !analysis.build.success) {
      recommendations.push({
        type: 'build_health',
        priority: 'high',
        message: 'Build failed. Fix build errors to ensure project health.',
        impact: 'Prevents deployment'
      });
    }

    if (analysis.tests && !analysis.tests.passed) {
      recommendations.push({
        type: 'test_health',
        priority: 'medium',
        message: 'Tests failed. Fix failing tests to ensure code quality.',
        impact: 'Affects code reliability'
      });
    }

    if (analysis.linting && !analysis.linting.passed) {
      recommendations.push({
        type: 'linting_health',
        priority: 'medium',
        message: 'Linting failed. Fix linting errors to improve code quality.',
        impact: 'Improves code consistency'
      });
    }

    if (analysis.typeScript && !analysis.typeScript.passed) {
      recommendations.push({
        type: 'typescript_health',
        priority: 'high',
        message: 'TypeScript check failed. Fix type errors.',
        impact: 'Prevents runtime errors'
      });
    }

    if (analysis.dependencies && !analysis.dependencies.healthy) {
      recommendations.push({
        type: 'dependency_health',
        priority: 'medium',
        message: 'Dependencies have security issues. Run npm audit fix.',
        impact: 'Reduces security risks'
      });
    }

    if (analysis.fileSystem && analysis.fileSystem.missing.length > 0) {
      recommendations.push({
        type: 'file_system_health',
        priority: 'medium',
        message: `Missing critical files: ${analysis.fileSystem.missing.join(', ')}.`,
        impact: 'Affects project configuration'
      });
    }

    return recommendations;
  }

  async run() {
    this.log('🏥 Starting Health Monitor...');
    
    try {
      const report = await this.generateHealthReport();
      
      this.log('🎉 Health monitoring completed!');
      this.log(`🏥 Overall health score: ${report.healthScore.score}% (${report.healthScore.status})`);
      this.log(`🔍 System: ${report.analysis.system.status}`);
      this.log(`🔍 Project: ${report.analysis.project.status}`);
      this.log(`🔍 Build: ${report.analysis.build.status}`);
      this.log(`🔍 Tests: ${report.analysis.tests.status}`);
      this.log(`🔍 Linting: ${report.analysis.linting.status}`);
      this.log(`🔍 TypeScript: ${report.analysis.typeScript.status}`);
      this.log(`🔍 Dependencies: ${report.analysis.dependencies.status}`);
      this.log(`🔍 File System: ${report.analysis.fileSystem.status}`);
      this.log(`💡 Recommendations: ${report.recommendations.length}`);
      
      return report;
    } catch (error) {
      this.log(`💥 Health monitoring failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the monitor if this file is executed directly
if (require.main === module) {
  const monitor = new HealthMonitor();
  monitor.run()
    .then((report) => {
      console.log('\n🎉 Health Monitor completed successfully!');
      console.log(`🏥 Overall health score: ${report.healthScore.score}% (${report.healthScore.status})`);
      console.log(`💡 Recommendations: ${report.recommendations.length}`);
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Health Monitor failed:', error.message);
      process.exit(1);
    });
}

module.exports = HealthMonitor;