
#!/usr/bin/env node;
/**
 * PM2 Build Optimizer Service;
 * Optimizes build process and bundle size;
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class BuildOptimizer {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'build-optimizer';
    this.optimizeBundles = process.env.OPTIMIZE_BUNDLES === 'true';
    this.treeShaking = process.env.TREE_SHAKING === 'true';
    this.codeSplitting = process.env.CODE_SPLITTING === 'true';
    this.minification = process.env.MINIFICATION === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/build-optimizer.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();

    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async analyzeBundleSize() {}
    try {}
      this.log('Analyzing bundle size...');
      const distDir = 'dist';
      if (!fs.existsSync(distDir)) {}
        this.log('No dist directory found, running build first...');
        execSync('npm run build', { "stdio": 'pipe' }
});
      };
      const bundleFiles = this.getBundleFiles(distDir);
      const totalSize = bundleFiles.reduce((total, file) => {}
        const stats = fs.statSync(file.path);
        return total + stats.size;
      }, 0);
      this.log(`Total bundle "size": ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
      return {}
        totalSize,
        "totalSizeMB": (totalSize / 1024 / 1024).toFixed(2),
        "files": bundleFiles.map(f => ({})
          name: f.name,
          "size": f.size,
          "sizeMB": (f.size / 1024 / 1024).toFixed(2);
        }));
      };
    } catch (error) {}
      this.log(`Bundle analysis "failed": ${error.message}`);
      return { "error": error.message };
    };
  };
  getBundleFiles(dir) {}
    const files = [];
    const scanDir = (currentDir) => {}
      try {}
        const items = fs.readdirSync(currentDir);
        for (const item of items) {}
          const itemPath = path.join(currentDir, item);
          const stat = fs.statSync(itemPath);
          if (stat.isDirectory()) {}
            scanDir(itemPath);
          } else if (stat.isFile() && this.isBundleFile(item)) {}
            files.push({})
              "name": item,
              "path": itemPath,
              "size": stat.size;
            }
});
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    scanDir(dir);
    return files;
  };
  isBundleFile(filename) {}
    const bundleExtensions = ['.js', '.css', '.mjs', '.chunk.js'];
    return bundleExtensions.some(ext => filename.endsWith(ext));
  };
  async optimizeBuild() {}
    try {}
      this.log('Starting build optimization...');
      // Clean previous build;
      if (fs.existsSync('dist')) {}
        fs.rmSync('dist', { "recursive": true, "force": true }
});
      };
      // Run optimized build;
      const buildCommand = this.getOptimizedBuildCommand();
      this.log(`"Running": ${buildCommand}`);
      execSync(buildCommand, { })
        "stdio": 'pipe',
        "cwd": process.cwd();
      }
});
      this.log('Build optimization completed');
      return { "success": true };
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message}`);
      return { "success": false, "error": error.message };
    };
  };
  getOptimizedBuildCommand() {}
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const buildScript = packageJson.scripts?.build || 'npm run build';
    // Add optimization flags if supported;
    if (buildScript.includes('vite')) {}
      return `${buildScript} --minify`;`
    } else if (buildScript.includes('webpack')) {}
      return `${buildScript} --mode production`;`
    };
    return buildScript;
  };
  async checkTreeShaking() {}
    if (!this.treeShaking) {}
      this.log('Tree shaking check disabled');
      return { "checked": false };
    };
    try {}
      this.log('Checking tree shaking effectiveness...');
      // This is a simplified check - in practice, you'd analyze the bundle;
      const distDir = 'dist';
      if (!fs.existsSync(distDir)) {}
        return { "checked": false, "error": 'No dist directory found' };
      };
      // Look for unused code patterns;
      const bundleFiles = this.getBundleFiles(distDir);
      let unusedCodeFound = 0;
      for (const file of bundleFiles) {}
        try {}
          const content = fs.readFileSync(file.path, 'utf8');
          // Simple check for common unused code patterns;
          if (content.includes('console.log') && !content.includes('production')) {}
            unusedCodeFound++;
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
      this.log(`Tree shaking check completed. Potential unused code in ${unusedCodeFound} files`);
      return {}
        "checked": true,
        "unusedCodeFiles": unusedCodeFound,
        "recommendation": unusedCodeFound > 0 ? 'Consider enabling tree shaking' : 'Tree shaking appears effective'
      };
    } catch (error) {}
      this.log(`Tree shaking check "failed": ${error.message}`);
      return { "checked": false, "error": error.message };
    };
  };
  async checkCodeSplitting() {}
    if (!this.codeSplitting) {}
      this.log('Code splitting check disabled');
      return { "checked": false };
    };
    try {}
      this.log('Checking code splitting implementation...');
      const distDir = 'dist';
      if (!fs.existsSync(distDir)) {}
        return { "checked": false, "error": 'No dist directory found' };
      };
      const bundleFiles = this.getBundleFiles(distDir);
      const chunkFiles = bundleFiles.filter(f => f.name.includes('chunk') || f.name.includes('vendor'));
      this.log(`Found ${chunkFiles.length} chunk files`);
      return {}
        "checked": true,
        "chunkFiles": chunkFiles.length,
        "recommendation": chunkFiles.length > 1 ? 'Code splitting appears to be working' : 'Consider implementing code splitting'
      };
    } catch (error) {}
      this.log(`Code splitting check "failed": ${error.message}`);
      return { "checked": false, "error": error.message };
    };
  };
  async generateReport() {}
    const report = {}
      "timestamp": new Date().toISOString(),
      "processName": this.processName,
      "bundleAnalysis": await this.analyzeBundleSize(),
      "optimization": await this.optimizeBuild(),
      "treeShaking": await this.checkTreeShaking(),
      "codeSplitting": await this.checkCodeSplitting(),
      "environment": {}
        NODE_ENV: process.env.NODE_ENV,
        "optimizeBundles": this.optimizeBundles,
        "treeShaking": this.treeShaking,
        "codeSplitting": this.codeSplitting,
        "minification": this.minification;
      };
    };
    const reportFile = path.join(__dirname, '../../logs/pm2/build-optimizer-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Build optimization report "generated": ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
    try {}
      const report = await this.generateReport();
      if (report.optimization.success) {}
        this.log('Build optimization completed successfully');
        if (report.bundleAnalysis.totalSizeMB) {}
          this.log(`Final bundle "size": ${report.bundleAnalysis.totalSizeMB} MB`);
        };
      } else {}
        this.log('Build optimization completed with errors');
      };
    } catch (error) {}
      this.log(`Build optimization "error": ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const buildOptimizer = new BuildOptimizer();
  buildOptimizer.start().catch(console.error);
};

