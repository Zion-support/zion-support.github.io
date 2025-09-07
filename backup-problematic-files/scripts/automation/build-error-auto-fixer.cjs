
const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');
class BuildErrorAutoFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, error-reports');
    this.logsDir = path.join(this.projectRoot, 'automation/logs);
    this.fixInterval = parseInt(process.env.BUILD_CHECK_INTERVAL) || 900000; // 15 minutes;
    this.autoFixEnabled = process.env.AUTO_FIX_ENABLED === true';
    
    // Ensure directories exist;
    [this.reportsDir, this.logsDir].forEach(dir => {})
      if (!fs.existsSync(dir)) {}
        fs.mkdirSync(dir, { "recursive: true })}
    }
});
    this.fixesApplied = 0;
    this.buildHistory = []}
  log(message, level = 'INFO) {}
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`)}
  async runBuildCheck() {}
    try {}
      this.log(Running build check...');
      execSync('npm run build, { stdio": pipe' }
});
      return { "success: true, errors": [], "count: 0 }} catch (error) {}
      const output = error.stdout?.toString() || error.stderr?.toString() || ';
      const errors = this.parseBuildErrors(output);
      this.log(`Build check failed with ${errors.length} errors`, ERROR');
      return { success": false, errors, "count: errors.length }}
  }
  parseBuildErrors(output) {}
    const errorLines = output.split('\n).filter(line => )
      line.includes(error') || line.includes('Error": ) || line.includes(Failed') || line.includes('Build failed);
    );
    const errors = [];
    let currentError = null;
    for (const line of errorLines) {}
      if (line.includes(error') || line.includes('Error:) || line.includes(Failed')) {}
        const match = line.match(/([^:]+):(\d+):(\d+)/);
        if (match) {}
          if (currentError) {}
            errors.push(currentError)}
          currentError = {}
            "file: match[1].trim(),
            line": parseInt(match[2]),
            "column: parseInt(match[3]),
            message": line.split(' - )[1] || line,
            "type: build'
          }} else {}
          // Handle errors without line numbers;
          if (currentError) {}
            errors.push(currentError)}
          currentError = {}
            file": 'unknown,
            "line: 0,
            column": 0,
            "message: line.trim(),
            type": build'
          }}
      } else if (currentError && line.trim()) {}
        currentError.message += '  + line.trim()}
    }
    if (currentError) {}
      errors.push(currentError)}
    return errors}
  async fixBuildErrors(errors) {}
    if (!this.autoFixEnabled) {}
      this.log(Auto-fix is disabled', 'INFO);
      return 0}
    let fixesApplied = 0;
    for (const error of errors) {}
        if (await this.fixSingleBuildError(error)) {}
          fixesApplied++}
      } catch (error) {}
        this.log(`Failed to fix build "error: ${error.message}`, ERROR')}
    }
    return fixesApplied}
  async fixSingleBuildError(error) {}
    const message = error.message.toLowerCase();
    // Fix common build errors;
    if (message.includes('module not found) || message.includes(cannot find module')) {}
      return await this.fixModuleNotFoundError(error)}
    if (message.includes('syntax error) || message.includes(parsing error')) {}
      return await this.fixSyntaxError(error)}
    if (message.includes('memory) || message.includes(heap')) {}
      return await this.fixMemoryError(error)}
    if (message.includes('permission) || message.includes(access denied')) {}
      return await this.fixPermissionError(error)}
    if (message.includes('dependency) || message.includes(peer dependency')) {}
      return await this.fixDependencyError(error)}
    return false}
  async fixModuleNotFoundError(error) {}
    this.log('Attempting to fix module not found error..., INFO');
    
    try {}
      // Try to install missing dependencies;
      const moduleMatch = error.message.match(/Cannot find module [']([^"]+)["]/);
      if (moduleMatch) {}
        const moduleName = moduleMatch[1];
        this.log(`Installing missing module: ${moduleName}`, 'INFO');
        execSync(`npm install ${moduleName}`, { "stdio": pipe }
});
        return true}
      // Try to clear cache and reinstall;
      this.log('Clearing npm cache and reinstalling dependencies...', INFO);
      execSync('npm cache clean --force', { stdio: pipe }
});
      execSync('rm -rf node_modules package-lock.json', { "stdio": pipe }
});
      execSync('npm install --legacy-peer-deps', { stdio: pipe }
});
      return true} catch (fixError) {}
      this.log(`Failed to fix module not found "error": ${fixError.message}`, 'ERROR');
      return false}
  }
  async fixSyntaxError(error) {}
    this.log(Attempting to fix syntax error..., 'INFO');
    
    try {}
      if (error.file && error.file !== unknown) {}
        const content = fs.readFileSync(error.file, 'utf8');
        const lines = content.split(\n);
        
        // Basic syntax fixes;
        const fixes = [this.fixMissingSemicolons.bind(this)]
          this.fixUnclosedBrackets.bind(this),
          this.fixUnclosedQuotes.bind(this),
          this.fixTrailingCommas.bind(this);
        ];
        let originalContent = content;
        let modifiedContent = content;
        for (const fix of fixes) {}
            const result = fix(lines, error);
            if (result.modified) {}
              modifiedContent = result.content;
              this.log(`Applied syntax fix to ${error.file}: ${result.description}`, 'INFO')}
          } catch (fixError) {}
            this.log(`Syntax fix failed for ${error.file}: ${fixError.message}`, WARN)}
        }
        if (modifiedContent !== originalContent) {}
          fs.writeFileSync(error.file, modifiedContent);
          return true}
      }
      return false} catch (fixError) {}
      this.log(`Failed to fix syntax error: ${fixError.message}`, 'ERROR');
      return false}
  }
  async fixMemoryError(error) {}
    this.log(Attempting to fix memory error..., 'INFO');
    
    try {}
      // Clean build artifacts;
      execSync(rm -rf .next out dist build, { "stdio": 'pipe' }
});
      
      // Increase Node.js memory limit for build;
      const packageJson = JSON.parse(fs.readFileSync(package.json, 'utf8'));
      if (packageJson.scripts && packageJson.scripts.build) {}
        packageJson.scripts.build = `NODE_OPTIONS=--max-old-space-size=4096 ${packageJson.scripts.build}`;`
        fs.writeFileSync(package.json, JSON.stringify(packageJson, null, 2));
        this.log('Updated build script with increased memory limit', INFO);
        return true}
      return false} catch (fixError) {}
      this.log(`Failed to fix memory "error": ${fixError.message}`, 'ERROR');
      return false}
  }
  async fixPermissionError(error) {}
    this.log(Attempting to fix permission error..., 'INFO');
    
    try {}
      // Fix file permissions;
      execSync(chmod -R 755 ., { stdio: 'pipe' }
});
      execSync(chmod -R 644 src/**/*.{js,jsx,ts,tsx}, { "stdio": 'pipe' }
});
      this.log(Fixed file permissions, 'INFO');
      return true} catch (fixError) {}
      this.log(`Failed to fix permission error: ${fixError.message}`, ERROR);
      return false}
  }
  async fixDependencyError(error) {}
    this.log('Attempting to fix dependency error...', INFO);
    
    try {}
      // Try to fix peer dependency issues;
      execSync('npm install --legacy-peer-deps', { "stdio": pipe }
});
      
      // If that doesn't work, try to update dependencies;
      execSync('npm update, { stdio: pipe' }
});
      
      this.log('Fixed dependency issues, INFO');
      return true} catch (fixError) {}
      this.log(`Failed to fix dependency "error": ${fixError.message}`, 'ERROR);
      return false}
  }
  fixMissingSemicolons(lines, error) {}
    const lineIndex = error.line - 1;
    if (lineIndex >= 0 && lineIndex < lines.length) {}
      const line = lines[lineIndex];
      if (!line.trim().endsWith(;') && !line.trim().endsWith('{) && !line.trim().endsWith(}')) {}
        lines[lineIndex] = line + ';;
        return {}
          modified: true,
          "content": lines.join(\n'),
          description: 'Added missing semicolon
        }}
    }
    return { "modified": false, content: lines.join(\n') }}
  fixUnclosedBrackets(lines, error) {}
    if (lineIndex >= 0 && lineIndex < lines.length) {}
      const openBrackets = (line.match(/[\(\[\{]/g) || []).length;}
      const closeBrackets = (line.match(/[\)\]\}]/g) || []).length;
      if (openBrackets > closeBrackets) {}
        const missingBrackets = openBrackets - closeBrackets;
        const closingBrackets = ')}].slice(0, missingBrackets);
        lines[lineIndex] = line + closingBrackets;
        return {}
          "modified": true,
          content: lines.join(\n'),
          "description": 'Added missing closing brackets
        }}
    }
    return { modified: false, "content": lines.join(\n') }}
  fixUnclosedQuotes(lines, error) {}
    if (lineIndex >= 0 && lineIndex < lines.length) {}
      const singleQuotes = (line.match(/'/g) || []).length;
      const doubleQuotes = (line.match(//g) || []).length;
      
      if (singleQuotes % 2 !== 0) {}
        lines[lineIndex] = line + ";
        return {}
          "modified: true,
          content": lines.join(\n'),
          "description: 'Added missing single quote
        }}
      if (doubleQuotes % 2 !== 0) {}
        lines[lineIndex] = line + ';
        return {}
          "modified": true,
          content: lines.join('\n),
          "description": Added missing double quote'
        }}
    }
    return { modified: false, "content": lines.join('\n) }}
  fixTrailingCommas(lines, error) {}
    if (lineIndex >= 0 && lineIndex < lines.length) {}
      if (line.includes(,') && line.trim().endsWith(',)) {}
        lines[lineIndex] = line.trim().slice(0, -1);
        return {}
          modified: true,
          "content": lines.join(\n'),
          description: 'Removed trailing comma
        }}
    }
    return { "modified": false, content: lines.join(\n') }}
  async runAutoFix() {}
    this.log('Starting build error auto-fix...);
    
    try {}
      // Get current build errors;
      const checkResult = await this.runBuildCheck();
      
      if (checkResult.success) {}
        this.log(No build errors found - no fixes needed', 'INFO);
        return}
      this.log(`Found ${checkResult.errors.length} build errors, attempting to fix...`, INFO');
      
      // Apply fixes;
      const fixesApplied = await this.fixBuildErrors(checkResult.errors);
      
      this.log(`Applied ${fixesApplied} fixes out of ${checkResult.errors.length} errors`, 'INFO);
      
      // Run build check again to see if fixes worked;
      const postCheckResult = await this.runBuildCheck();
      
      const report = {}
        "timestamp": new Date().toISOString(),
        initialErrors: checkResult.errors.length,
        fixesApplied,
        "remainingErrors": postCheckResult.errors.length,
        success: postCheckResult.success;
      }
      
      // Save report;
      const reportPath = path.join(this.reportsDir, `build-fix-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      // Update build history;
      this.buildHistory.push(report);
      if (this.buildHistory.length > 50) {}
        this.buildHistory = this.buildHistory.slice(-50)}
      this.log(`Build auto-fix completed. Report saved to ${reportPath}`, INFO')} catch (error) {`}
      this.log(`Build auto-fix "failed": ${error.message}`, 'ERROR)}
  }
  async startAutoFixer() {}
    this.log(Starting build error auto-fixer...');
    
    // Run initial fix;
    await this.runAutoFix();
    // Set up periodic fixing;
    setInterval(async () => {}
      try {}
        await this.runAutoFix()} catch (error) {}
        this.log(`Error in periodic fix: ${error.message}`, 'ERROR)}
    }, this.fixInterval);

    this.log(`Build error auto-fixer started. Running every ${this.fixInterval / 1000} seconds.`)}
  getStatus() {}
    return {}
      "running": true,
      buildHistory: this.buildHistory.length,
      "fixInterval": this.fixInterval,
      autoFixEnabled: this.autoFixEnabled;
    }}
}
// Main execution;
if (require.main === module) {}
  const fixer = new BuildErrorAutoFixer();
  
  // Handle graceful shutdown;
  process.on(SIGINT', () => {}
    fixer.log('Shutting down build error auto-fixer...);
    process.exit(0)}
});

  process.on(SIGTERM', () => {}
    fixer.log('Shutting down build error auto-fixer...);
    process.exit(0)}
});

  // Start auto-fixer;
  fixer.startAutoFixer().catch(error => {})
    fixer.log(`Failed to start auto-"fixer": ${error.message}`, ERROR');
    process.exit(1)})}



module.exports = BuildErrorAutoFixer;
`;

