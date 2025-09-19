
#!/usr/bin/env node;
/**
 * PM2 SEO & Accessibility Service;
 * Checks SEO and accessibility compliance;
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class SEOAccessibility {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'seo-accessibility';
    this.checkSEO = process.env.CHECK_SEO === 'true';
    this.checkAccessibility = process.env.CHECK_ACCESSIBILITY === 'true';
    this.checkPerformance = process.env.CHECK_PERFORMANCE === 'true';
    this.lighthouseAudit = process.env.LIGHTHOUSE_AUDIT === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/seo-accessibility.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();

    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async checkSEO() {}
    if (!this.checkSEO) {}
      this.log('SEO checking disabled');
      return { checked: false };
    };
    try {}
      this.log('Checking SEO compliance...');
      const seoIssues = [];
      const htmlFiles = this.findHTMLFiles();
      for (const file of htmlFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
          const issues = this.analyzeSEO(content, file);
          seoIssues.push(...issues);
        } catch (err) {}
          this.log(`Error reading ${file}: ${err.message}`);
        };
      };
      this.log(`Found ${seoIssues.length} SEO issues`);
      return {}
        checked: true,
        issues: seoIssues,
        totalIssues: seoIssues.length,
        filesChecked: htmlFiles.length;
      };
    } catch (error) {}
      this.log(`SEO check failed: ${error.message}`);
      return { checked: false, error: error.message };
    };
  };
  findHTMLFiles() {}
    const htmlFiles = [];
    const scanDir = (dir) => {}
      try {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && (file.endsWith('.html') || file.endsWith('.htm'))) {}
            htmlFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    // Scan common directories;
    const scanDirs = ['public', 'dist', 'out', 'build', 'pages'];
    for (const dir of scanDirs) {}
      if (fs.existsSync(dir)) {}
        scanDir(dir);
      };
    };
    return htmlFiles;
  };
  analyzeSEO(content, filePath) {}
    const issues = [];
    // Check for title tag;
    if (!content.includes('<title>')) {}
      issues.push({})
        file: filePath,
        type: 'missing_title',
        severity: 'high',
        message: 'Missing <title> tag'
      }
});
    };
    // Check for meta description;
    if (!content.includes('name="description"')) {}
      issues.push({})
        file: filePath,
        type: 'missing_meta_description',
        severity: 'high',
        message: 'Missing meta description'
      }
});
    };
    // Check for h1 tag;
    if (!content.includes('<h1>')) {}
      issues.push({})
        file: filePath,
        type: 'missing_h1',
        severity: 'medium',
        message: 'Missing <h1> tag'
      }
});
    };
    // Check for alt attributes on images;
    const imgTags = content.match(/<img[^>]*>/g) || [];
    for (const imgTag of imgTags) {}
      if (!imgTag.includes('alt=')) {}
        issues.push({})
          file: filePath,
          type: 'missing_alt_text',
          severity: 'medium',
          message: 'Image missing alt attribute'
        }
});
      };
    };
    // Check for lang attribute;
    if (!content.includes('lang=')) {}
      issues.push({})
        file: filePath,
        type: 'missing_lang',
        severity: 'medium',
        message: 'Missing lang attribute on html tag'
      }
});
    };
    // Check for viewport meta tag;
    if (!content.includes('name="viewport"')) {}
      issues.push({})
        file: filePath,
        type: 'missing_viewport',
        severity: 'high',
        message: 'Missing viewport meta tag'
      }
});
    };
    return issues;
  };
  async checkAccessibility() {}
    if (!this.checkAccessibility) {}
      this.log('Accessibility checking disabled');
      return { checked: false };
    };
    try {}
      this.log('Checking accessibility compliance...');
      const a11yIssues = [];
      const htmlFiles = this.findHTMLFiles();
      for (const file of htmlFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
          const issues = this.analyzeAccessibility(content, file);
          a11yIssues.push(...issues);
        } catch (err) {}
          this.log(`Error reading ${file}: ${err.message}`);
        };
      };
      this.log(`Found ${a11yIssues.length} accessibility issues`);
      return {}
        checked: true,
        issues: a11yIssues,
        totalIssues: a11yIssues.length,
        filesChecked: htmlFiles.length;
      };
    } catch (error) {}
      this.log(`Accessibility check failed: ${error.message}`);
      return { checked: false, error: error.message };
    };
  };
  analyzeAccessibility(content, filePath) {}
    const issues = [];
    // Check for proper heading hierarchy;
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    let lastLevel = 0;
    for (const heading of headings) {}
      const level = parseInt(heading.match(/<h(\d)/)[1]);
      if (level > lastLevel + 1) {}
        issues.push({})
          file: filePath,
          type: 'heading_hierarchy',
          severity: 'medium',
          message: `Heading level ${level} follows level ${lastLevel} (skipped levels)
        }
});
      };
      lastLevel = level;
    };
    // Check for form labels;
    const inputTags = content.match(/<input[^>]*>/g) || [];
    for (const inputTag of inputTags) {}
      if (inputTag.includes('type=') && !inputTag.includes('type="hidden"')) {}
        if (!inputTag.includes('aria-label') && !inputTag.includes('aria-labelledby')) {}
          // Check if there's a label element nearby (simplified);
          const hasLabel = content.includes('</label>');
          if (!hasLabel) {}
            issues.push({})
              file: filePath,
              type: 'missing_form_label',
              severity: 'high',
              message: 'Form input missing label or aria-label'
            }
});
          };
        };
      };
    };
    // Check for color contrast (simplified - would need actual color analysis);
    const colorStyles = content.match(/color\s*:\s*[^;]+/g) || [];
    if (colorStyles.length > 0) {}
      issues.push({})
        file: filePath,
        type: 'color_contrast_check',
        severity: 'low',
        message: 'Manual color contrast check recommended'
      }
});
    };
    // Check for keyboard navigation;
    const interactiveElements = content.match(/<button|<a|<input|<select|<textarea/g) || [];
    const tabIndexElements = content.match(/tabindex/g) || [];
    if (interactiveElements.length > 0 && tabIndexElements.length === 0) {}
      issues.push({})
        file: filePath,
        type: 'keyboard_navigation',
        severity: 'medium',
        message: 'Consider adding tabindex for keyboard navigation'
      }
});
    };
    return issues;
  };
  async checkPerformance() {}
    if (!this.checkPerformance) {}
      this.log('Performance checking disabled');
      return { checked: false };
    };
    try {}
      this.log('Checking performance...');
      const performanceIssues = [];
      // Check bundle size;
      const distDir = 'dist';
      if (fs.existsSync(distDir)) {}
        const bundleSize = this.calculateBundleSize(distDir);
        if (bundleSize > 2 * 1024 * 1024) { // 2MB threshold;}
          performanceIssues.push({})
            type: 'large_bundle',
            severity: 'medium',
            message: `Bundle size is ${(bundleSize / 1024 / 1024).toFixed(2)}MB (consider code splitting)
          }
});
        };
      };
      // Check for unoptimized images;
      const imageFiles = this.findImageFiles();
      for (const file of imageFiles) {}
        try {}
          const stats = fs.statSync(file);
          if (stats.size > 500 * 1024) { // 500KB threshold;}
            performanceIssues.push({})
              type: 'large_image',
              severity: 'medium',
              message: `Large image file: ${path.basename(file)} (${(stats.size / 1024).toFixed(2)}KB)
            }
});
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
      this.log(`Found ${performanceIssues.length} performance issues`);
      return {}
        checked: true,
        issues: performanceIssues,
        totalIssues: performanceIssues.length;
      };
    } catch (error) {}
      this.log(`Performance check failed: ${error.message}`);
      return { checked: false, error: error.message };
    };
  };
  calculateBundleSize(dir) {}
    let totalSize = 0;
    const scanDir = (currentDir) => {}
      try {}
        const files = fs.readdirSync(currentDir);
        for (const file of files) {}
          const filePath = path.join(currentDir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {}
            scanDir(filePath);
          } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.css'))) {}
            totalSize += stat.size;
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    scanDir(dir);
    return totalSize;
  };
  findImageFiles() {}
    const imageFiles = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const scanDir = (dir) => {}
      try {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.toLowerCase().endsWith(ext))) {}
            imageFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    const scanDirs = ['public', 'dist', 'out', 'build', 'assets', 'images'];
    for (const dir of scanDirs) {}
      if (fs.existsSync(dir)) {}
        scanDir(dir);
      };
    };
    return imageFiles;
  };
  async runLighthouseAudit() {}
    if (!this.lighthouseAudit) {}
      this.log('Lighthouse audit disabled');
      return { audited: false };
    };
    try {}
      this.log('Running Lighthouse audit...');
      // Check if Lighthouse is available;
      try {}
        execSync('npx lighthouse --version', { stdio: 'pipe' }
});
      } catch (error) {}
        this.log('Lighthouse not found, installing...');
        execSync('npm install -g lighthouse', { stdio: 'pipe' }
});
      };
      // Run Lighthouse audit (simplified - would need a running server);
      this.log('Lighthouse audit requires a running server - skipping for now');
      return {}
        audited: false,
        reason: 'No running server available for audit'
      };
    } catch (error) {}
      this.log(`Lighthouse audit failed: ${error.message}`);
      return { audited: false, error: error.message };
    };
  };
  async generateReport() {}
    const report = {}
      timestamp: new Date().toISOString(),
      processName: this.processName,
      seo: await this.checkSEO(),
      accessibility: await this.checkAccessibility(),
      performance: await this.checkPerformance(),
      lighthouse: await this.runLighthouseAudit(),
      environment: {}
        NODE_ENV: process.env.NODE_ENV,
        checkSEO: this.checkSEO,
        checkAccessibility: this.checkAccessibility,
        checkPerformance: this.checkPerformance,
        lighthouseAudit: this.lighthouseAudit;
      };
    };
    const reportFile = path.join(__dirname, '../../logs/pm2/seo-accessibility-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`SEO & Accessibility report generated: ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
    try {}
      const report = await this.generateReport();
      const totalIssues = (report.seo.totalIssues || 0) + 
                         (report.accessibility.totalIssues || 0) + 
                         (report.performance.totalIssues || 0);
      if (totalIssues === 0) {}
        this.log('SEO & Accessibility check completed - no issues found');
      } else {}
        this.log(`SEO & Accessibility check completed - found ${totalIssues} issues`);
      };
    } catch (error) {}
      this.log(`SEO & Accessibility check error: ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const seoAccessibility = new SEOAccessibility();
  seoAccessibility.start().catch(console.error);
};

