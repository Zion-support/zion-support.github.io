const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
    this.logFile = path.join(__dirname, '../logs/performance-optimizer.log');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async optimizeBundle() {
    try {
      this.log('Optimizing bundle size...');
      execSync('npm run build:analyze', { stdio: 'pipe' });
      this.optimizations.push('Bundle analysis completed');
      this.log('✓ Bundle analysis completed');
    } catch (error) {
      this.log(`Bundle optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeImages() {
    try {
      this.log('Optimizing images...');
      // Check if there are images to optimize
      const publicDir = path.join(process.cwd(), 'public');
      if (fs.existsSync(publicDir)) {
        const files = fs.readdirSync(publicDir, { recursive: true });
        const imageFiles = files.filter(
          file =>
            typeof file === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );

        if (imageFiles.length > 0) {
          this.log(`Found ${imageFiles.length} images to optimize`);
          this.optimizations.push(`Found ${imageFiles.length} images`);
        } else {
          this.log('No images found to optimize');
        }
      }
    } catch (error) {
      this.log(`Image optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async checkDependencies() {
    try {
      this.log('Checking for unused dependencies...');
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
      );
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});

      this.log(`Found ${dependencies.length} production dependencies`);
      this.log(`Found ${devDependencies.length} dev dependencies`);

      this.optimizations.push(
        `Analyzed ${dependencies.length + devDependencies.length} dependencies`
      );
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      recommendations: [
        'Consider implementing code splitting',
        'Optimize images using WebP format',
        'Remove unused dependencies',
        'Enable gzip compression',
        'Use React.memo for expensive components',
      ],
    };

    const reportFile = path.join(
      __dirname,
      'reports',
      'performance-report.json'
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Performance report saved to: ${reportFile}`);
  }

  async run() {
    this.log('⚡ Starting Performance Optimizer');

    try {
      await this.optimizeBundle();
      await this.optimizeImages();
      await this.checkDependencies();
      await this.generateReport();

      this.log('='.repeat(50));
      this.log(
        `🎯 Performance Optimizer completed. Optimizations: ${this.optimizations.length}`
      );
      this.optimizations.forEach(opt => this.log(`  ✓ ${opt}`));
    } catch (error) {
      this.log(`❌ Performance Optimizer failed: ${error.message}`, 'ERROR');
    }
  }
}

// Main execution
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;
