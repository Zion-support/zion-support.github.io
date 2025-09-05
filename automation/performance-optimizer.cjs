#!/usr/bin/env node;
/*
 Simple Performance Optimizer;
 - Scans project for large images in public/ and optimizes via sharp if available;
 - Ensures Next.js production optimizations flags are present in next.config.js;
 - Generates a small report file referencing actions taken;
*/

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(message, type = 'INFO') {}
  const icons = { }
    "INFO": 'ℹ', 
    "SUCCESS": '✅', 
    "ERROR": '❌', 
    "WARNING": '⚠️' 
  };
  console.log(`${icons[type]} [${type}] ${message}`);
};
class PerformanceOptimizer {}
  constructor() {}
    this.report = {}
      timestamp: new Date().toISOString(),
      optimizations: [],
      issues: [],
      recommendations: [];
    };
  };
  async optimize() {}
    try {}
      log('Starting performance optimization...', 'INFO');
      
      await this.checkNextConfig();
      await this.optimizeImages();
      await this.checkBundleSize();
      await this.checkLighthouse();
      
      this.generateReport();
      log('Performance optimization completed', 'SUCCESS');
      
      return true;
    } catch (error) {}
      log(`Performance optimization failed: ${error.message}`, 'ERROR');
      return false;
    };
  };
  async checkNextConfig() {}
    const configPath = 'next.config.js';
    
    if (!fs.existsSync(configPath)) {}
      this.report.issues.push('next.config.js not found');
      return;
    };
    const config = fs.readFileSync(configPath, 'utf8');
    const optimizations = [];

    if (!config.includes('optimizeCss')) {}
      optimizations.push('Add CSS optimization');
    };
    if (!config.includes('experimental')) {}
      optimizations.push('Add experimental features');
    };
    if (!config.includes('compress')) {}
      optimizations.push('Enable compression');
    };
    if (optimizations.length > 0) {}
      this.report.recommendations.push({})
        file: configPath,
        optimizations;
      }
});
      log(`Found ${optimizations.length} optimization opportunities in next.config.js`, 'WARNING');
    } else {}
      log('next.config.js is well optimized', 'SUCCESS');
    };
  };
  async optimizeImages() {}
    const publicDir = 'public';
    
    if (!fs.existsSync(publicDir)) {}
      log('Public directory not found', 'WARNING');
      return;
    };
    try {}
      // Check if sharp is available;
      execSync('npx sharp --version', { stdio: 'pipe' }
});
      
      const imageFiles = this.findImageFiles(publicDir);
      let optimizedCount = 0;

      for (const imagePath of imageFiles) {}
        const stats = fs.statSync(imagePath);
        const sizeKB = Math.round(stats.size / 1024);
        
        if (sizeKB > 100) { // Optimize images larger than 100KB;}
          try {}
            const outputPath = imagePath.replace(/(\.[^.]+)$/, '_optimized$1');
            execSync(`npx sharp -i "${imagePath}" -o "${outputPath}" --quality 80`, { stdio: 'pipe' }
});
            
            const newStats = fs.statSync(outputPath);
            const newSizeKB = Math.round(newStats.size / 1024);
            const savings = Math.round(((sizeKB - newSizeKB) / sizeKB) * 100);
            
            this.report.optimizations.push({})
              file: imagePath,
              originalSize: sizeKB,
              optimizedSize: newSizeKB,
              savings: `${savings}%``
            }
});
            
            optimizedCount++;
            log(`Optimized ${path.basename(imagePath)}: ${sizeKB}KB → ${newSizeKB}KB (${savings}% savings)`, 'SUCCESS');
          } catch (error) {}
            log(`Failed to optimize ${imagePath}: ${error.message}`, 'ERROR');
          };
        };
      };
      if (optimizedCount === 0) {}
        log('No large images found to optimize', 'INFO');
      };
    } catch (error) {}
      log('Sharp not available, skipping image optimization', 'WARNING');
    };
  };
  findImageFiles(dir) {}
    const imageFiles = [];
    const files = fs.readdirSync(dir, { withFileTypes: true }
});
    
    for (const file of files) {}
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {}
        imageFiles.push(...this.findImageFiles(fullPath));
      } else if (file.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)) {}
        imageFiles.push(fullPath);
      };
    };
    return imageFiles;
  };
  async checkBundleSize() {}
    try {}
      log('Checking bundle size...', 'INFO');
      
      // Run build to get bundle analysis;
      execSync('npm run build', { stdio: 'pipe' }
});
      
      const nextDir = '.next';
      if (fs.existsSync(nextDir)) {}
        const staticDir = path.join(nextDir, 'static');
        if (fs.existsSync(staticDir)) {}
          const totalSize = this.getDirectorySize(staticDir);
          const sizeMB = Math.round(totalSize / (1024 * 1024) * 100) / 100;
          
          this.report.optimizations.push({})
            type: 'bundle_size',
            size: `${sizeMB}MB`,`
            status: sizeMB < 5 ? 'good' : sizeMB < 10 ? 'warning' : 'large'
          }
});
          
          if (sizeMB > 10) {}
            this.report.recommendations.push({})
              type: 'bundle_size',
              message: 'Bundle size is large, consider code splitting and lazy loading'
            }
});
          };
          log(`Bundle size: ${sizeMB}MB`, sizeMB < 5 ? 'SUCCESS' : sizeMB < 10 ? 'WARNING' : 'ERROR');
        };
      };
    } catch (error) {}
      log(`Failed to check bundle size: ${error.message}`, 'ERROR');
    };
  };
  getDirectorySize(dir) {}
    let totalSize = 0;
    const files = fs.readdirSync(dir, { withFileTypes: true }
});
    
    for (const file of files) {}
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {}
        totalSize += this.getDirectorySize(fullPath);
      } else {}
        totalSize += fs.statSync(fullPath).size;
      };
    };
    return totalSize;
  };
  async checkLighthouse() {}
    try {}
      // Check if lighthouse is available;
      execSync('npx lighthouse --version', { stdio: 'pipe' }
});
      log('Lighthouse available, consider running: npx lighthouse http://localhost:3000', 'INFO');
    } catch (error) {}
      log('Lighthouse not available, install with: npm install -g lighthouse', 'WARNING');
    };
  };
  generateReport() {}
    const reportPath = 'performance-optimization-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    log(`Performance report saved to ${reportPath}`, 'SUCCESS');
  };
};
// Run if called directly;
if (require.main === module) {}
  const optimizer = new PerformanceOptimizer();
  optimizer.optimize().then(success => {})
    process.exit(success ? 0 : 1);
  }
});
};
module.exports = PerformanceOptimizer;