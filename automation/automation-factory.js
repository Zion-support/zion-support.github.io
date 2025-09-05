const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationFactory {
  constructor() {
    this.scripts = new Map();
    this.runningScripts = new Map();
    this.statusFile = path.resolve(__dirname, 'automation-status.json');
    this.loadStatus();
  }

  optimizeImages() {
    try {
      // Placeholder for image optimization
      return { optimized: 0, totalImages: 0, savings: "0KB" };
    } catch (error) {
      return { error: error.message };
    }
  }

  analyzeDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8"));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});

      return {
        totalDependencies: dependencies.length + devDependencies.length,
        productionDependencies: dependencies.length,
        devDependencies: devDependencies.length
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  generateRecommendations() {
    return [
      "Implement code splitting for better performance",
      "Optimize images using WebP format",
      "Remove unused dependencies",
      "Enable gzip compression"
    ];
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        const data = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
        this.scripts = new Map(data.scripts || []);
      }
    } catch (error) {
      console.error('Failed to load status:', error.message);
    }
  }

  saveStatus() {
    try {
      const data = {
        scripts: Array.from(this.scripts.entries()),
        lastUpdated: new Date().toISOString()
      };
      fs.writeFileSync(this.statusFile, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Failed to save status:', error.message);
    }
  }

  registerScript(scriptName, scriptPath, description) {
    this.scripts.set(scriptName, {
      file: scriptName,
      description: description,
      path: scriptPath,
      status: "available",
      lastRun: null,
      successCount: 0,
      errorCount: 0
    });
    this.saveStatus();
  }

  async runScript(scriptName) {
    const script = this.scripts.get(scriptName);
    if (!script) {
      throw new Error(`Script "${scriptName}" not found`);
    }

    if (this.runningScripts.has(scriptName)) {
      throw new Error(`Script "${scriptName}" is already running`);
    }

    const startTime = Date.now();
    
    try {
      this.log(`Starting script: ${scriptName}`);
      this.runningScripts.set(scriptName, { startTime, pid: null });
      this.saveStatus();

      return new Promise((resolve) => {
        const child = execSync(`node ${script.path}`, { 
          cwd: __dirname,
          stdio: 'inherit'
        });

        child.on('close', (code) => {
          const duration = Date.now() - startTime;
          this.runningScripts.delete(scriptName);
          script.lastRun = new Date().toISOString();
          
          if (code === 0) {
            script.successCount++;
            this.log(`Script "${scriptName}" completed successfully in ${duration}ms`);
          } else {
            script.errorCount++;
            this.log(`Script "${scriptName}" failed with code ${code}`, "ERROR");
          }
          
          this.saveStatus();
          resolve({ success: code === 0, duration, code });
        });

        child.on('error', (error) => {
          script.errorCount++;
          this.log(`Script "${scriptName}" error: ${error.message}`, "ERROR");
          this.runningScripts.delete(scriptName);
          this.saveStatus();
          resolve({ success: false, error: error.message });
        });
      });
    } catch (error) {
      script.errorCount++;
      this.log(`Failed to start script "${scriptName}": ${error.message}`, "ERROR");
      this.runningScripts.delete(scriptName);
      this.saveStatus();
      throw error;
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  getStatus() {
    return {
      scripts: Array.from(this.scripts.entries()),
      running: Array.from(this.runningScripts.keys()),
      lastUpdated: new Date().toISOString()
    };
  }
}

module.exports = AutomationFactory;