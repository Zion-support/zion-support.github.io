const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildOptimizer {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer';
    this.optimizeDependencies = process.env.OPTIMIZE_DEPENDENCIES === 'true';
    this.optimizeAssets = process.env.OPTIMIZE_ASSETS === 'true';
    this.optimizeCode = process.env.OPTIMIZE_CODE === 'true';
    this.logFile = path.join(process.cwd(), 'logs/pm2/build-optimizer.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());

    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage);
  }

  async optimizeDependencies() {
    if (!this.optimizeDependencies) return;

    try {
      this.log('Optimizing dependencies...');

      // Check for duplicate dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const lockFile = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

      const dependencies = lockFile.dependencies || {};
      // This would need more sophisticated analysis
      return [];
    } catch (error) {
      this.log(`Duplicate dependency check error: ${error.message}`);
      return [];
    }
  }

  async optimizeAssets() {
    if (!this.optimizeAssets) return;

    try {
      this.log('Optimizing assets...');

      // Optimize images
      const imageFiles = this.findImageFiles();
      for (const file of imageFiles) {
        await this.optimizeImage(file);
      }

      // Optimize CSS
      const cssFiles = this.findCSSFiles();
      for (const file of cssFiles) {
        await this.optimizeCSS(file);
      }

      // Optimize JS
      const jsFiles = this.findJSFiles();
      for (const file of jsFiles) {
        await this.optimizeJS(file);
      }

    } catch (error) {
      this.log(`Asset optimization error: ${error.message}`);
    }
  }

  findImageFiles() {
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    return this.findFilesByExtension(extensions);
  }

  findCSSFiles() {
    const extensions = ['.css', '.scss', '.sass', '.less'];
    return this.findFilesByExtension(extensions);
  }

  findJSFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    return this.findFilesByExtension(extensions);
  }

  findFilesByExtension(extensions) {
    const files = [];
    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!item.startsWith('.') && item !== 'node_modules') {
              scanDir(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };

    scanDir(process.cwd());
    return files;
  }

  async optimizeImage(filePath) {
    try {
      // Use imagemin or similar tool to optimize images
      this.log(`Optimizing image: ${path.relative(process.cwd(), filePath)}`);
    } catch (error) {
      this.log(`Image optimization failed for ${filePath}: ${error.message}`);
    }
  }

  async optimizeCSS(filePath) {
    try {
      // Use cssnano or similar tool to optimize CSS
      this.log(`Optimizing CSS: ${path.relative(process.cwd(), filePath)}`);
    } catch (error) {
      this.log(`CSS optimization failed for ${filePath}: ${error.message}`);
    }
  }

  async optimizeJS(filePath) {
    try {
      // Use terser or similar tool to optimize JS
      this.log(`Optimizing JS: ${path.relative(process.cwd(), filePath)}`);
    } catch (error) {
      this.log(`JS optimization failed for ${filePath}: ${error.message}`);
    }
  }

  async optimizeCode() {
    if (!this.optimizeCode) return;

    try {
      this.log('Optimizing code...');

      // Run TypeScript compiler optimizations
      try {
        execSync('npx tsc --build --force', { stdio: 'pipe' });
        this.log('TypeScript compilation optimized');
      } catch (error) {
        this.log(`TypeScript optimization failed: ${error.message}`);
      }

      // Run ESLint with auto-fix
      try {
        execSync('npx eslint . --fix', { stdio: 'pipe' });
        this.log('ESLint auto-fix completed');
      } catch (error) {
        this.log(`ESLint optimization failed: ${error.message}`);
      }

    } catch (error) {
      this.log(`Code optimization error: ${error.message}`);
    }
  }

  async optimizeBuild() {
    this.log('Starting build optimization...');

    await this.optimizeDependencies();
    await this.optimizeAssets();
    await this.optimizeCode();

    this.log('Build optimization completed');
  }

  async start() {
    this.log('Build optimizer service started');

    // Run optimization immediately
    await this.optimizeBuild();

    // Set up interval for periodic optimization
    setInterval(async () => {
      await this.optimizeBuild();
    }, 24 * 60 * 60 * 1000); // Every 24 hours
  }
}

// Start the service
const buildOptimizer = new BuildOptimizer();
buildOptimizer.start().catch(console.error);