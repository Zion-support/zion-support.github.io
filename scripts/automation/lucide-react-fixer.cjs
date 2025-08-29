#!/usr/bin/env node

/**
 * Lucide React Icon Fixer Automation
 * Specialized automation for fixing Lucide React icon import issues
 * Runs every 20 minutes as part of PM2 automation system
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class LucideReactFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.fixesApplied = 0;
    this.errorsFixed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async run() {
    this.log('🚀 Starting Lucide React Icon Fixer Automation');
    
    try {
      // Step 1: Fix invalid Lucide React icon imports
      await this.fixInvalidLucideImports();
      
      // Step 2: Remove unused icon imports
      await this.removeUnusedIconImports();
      
      // Step 3: Fix duplicate icon imports
      await this.fixDuplicateIconImports();
      
      // Step 4: Fix missing icon imports
      await this.fixMissingIconImports();
      
      // Step 5: Generate report
      await this.generateReport();
      
      this.log(`✅ Lucide React Icon Fixer completed successfully!`);
      this.log(`📊 Summary: ${this.fixesApplied} fixes applied, ${this.errorsFixed} errors resolved`);
      
    } catch (error) {
      this.log(`❌ Error in Lucide React Icon Fixer: ${error.message}`, 'ERROR');
      await this.generateErrorReport(error);
    }
  }

  async fixInvalidLucideImports() {
    this.log('🔧 Fixing invalid Lucide React icon imports...');
    
    try {
      const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix specific invalid icon names
        const iconFixes = {
          'UserHeart': 'Heart',
          'UserEdit2': 'UserEdit',
          'UserSearch2': 'Search',
          'UserList2': 'Users2',
          'UserSettings2': 'Settings2',
          'UserStar2': 'Star',
          'Device': 'Smartphone',
          'Desktop': 'Monitor'
        };
        
        for (const [invalidIcon, validIcon] of Object.entries(iconFixes)) {
          if (content.includes(invalidIcon)) {
            content = content.replace(new RegExp(invalidIcon, 'g'), validIcon);
            modified = true;
            this.fixesApplied++;
            this.log(`🔄 Fixed invalid icon: ${invalidIcon} → ${validIcon} in ${file}`);
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all invalid icon imports: ${error.message}`, 'WARN');
    }
  }

  async removeUnusedIconImports() {
    this.log('🧹 Removing unused icon imports...');
    
    try {
      const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Find Lucide React import statements
        const importRegex = /import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];?/g;
        let match;
        
        while ((match = importRegex.exec(content)) !== null) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          for (const imp of imports) {
            const iconName = imp.replace(/\s+as\s+\w+/, '').trim();
            
            // Check if icon is actually used in the file
            const usageRegex = new RegExp(`\\b${iconName}\\b`, 'g');
            const matches = content.match(usageRegex);
            
            // Count actual usage (excluding import statement)
            let actualUsage = 0;
            if (matches) {
              actualUsage = matches.length - 1; // Subtract 1 for the import
            }
            
            if (actualUsage > 0) {
              usedImports.push(imp);
            } else {
              this.log(`🗑️  Removing unused icon: ${iconName} from ${file}`);
            }
          }
          
          if (usedImports.length !== imports.length) {
            if (usedImports.length === 0) {
              // Remove entire import if no icons are used
              content = content.replace(match[0], '');
            } else {
              // Update import with only used icons
              const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
              content = content.replace(match[0], newImport);
            }
            modified = true;
            this.fixesApplied++;
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not remove all unused icon imports: ${error.message}`, 'WARN');
    }
  }

  async fixDuplicateIconImports() {
    this.log('🔧 Fixing duplicate icon imports...');
    
    try {
      const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Find all Lucide React import statements
        const importLines = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];?/g) || [];
        
        if (importLines.length > 1) {
          // Consolidate all imports into one
          const allImports = [];
          
          importLines.forEach(line => {
            const importMatch = line.match(/import\s+{([^}]+)}/);
            if (importMatch) {
              allImports.push(...importMatch[1].split(',').map(imp => imp.trim()));
            }
          });
          
          // Remove duplicates and sort
          const uniqueImports = [...new Set(allImports)].sort();
          const consolidatedImport = `import { ${uniqueImports.join(', ')} } from 'lucide-react';`;
          
          // Remove all old import lines
          importLines.forEach(line => {
            content = content.replace(line, '');
          });
          
          // Add consolidated import at the top
          const firstImportIndex = content.indexOf('import');
          if (firstImportIndex !== -1) {
            content = content.slice(0, firstImportIndex) + consolidatedImport + '\n' + content.slice(firstImportIndex);
          }
          
          modified = true;
          this.fixesApplied++;
          this.log(`🔄 Consolidated ${importLines.length} icon imports in ${file}`);
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all duplicate icon imports: ${error.message}`, 'WARN');
    }
  }

  async fixMissingIconImports() {
    this.log('📥 Fixing missing icon imports...');
    
    try {
      const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Check if file uses Lucide icons but doesn't import them
        if (content.includes('lucide-react') || content.includes('from \'lucide-react\'')) {
          // Already has imports
          continue;
        }
        
        // Find potential icon usage patterns
        const iconUsagePatterns = [
          /<(\w+Icon)\b/g,
          /<(\w+)\s+className=/g,
          /(\w+)\s*\(/g
        ];
        
        const potentialIcons = new Set();
        
        iconUsagePatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(content)) !== null) {
            const iconName = match[1];
            // Check if it looks like a Lucide icon name
            if (this.isLikelyLucideIcon(iconName)) {
              potentialIcons.add(iconName);
            }
          }
        });
        
        if (potentialIcons.size > 0) {
          // Add import statement
          const importStatement = `import { ${Array.from(potentialIcons).join(', ')} } from 'lucide-react';`;
          
          // Find the best place to insert the import
          const firstImportIndex = content.indexOf('import');
          if (firstImportIndex !== -1) {
            content = content.slice(0, firstImportIndex) + importStatement + '\n' + content.slice(firstImportIndex);
          } else {
            // No imports found, add at the top
            content = importStatement + '\n\n' + content;
          }
          
          modified = true;
          this.fixesApplied++;
          this.log(`📥 Added missing icon imports for: ${Array.from(potentialIcons).join(', ')} in ${file}`);
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all missing icon imports: ${error.message}`, 'WARN');
    }
  }

  isLikelyLucideIcon(name) {
    // Common Lucide icon naming patterns
    const iconPatterns = [
      /^[A-Z][a-z]+$/, // PascalCase
      /^[A-Z][a-z]+[A-Z][a-z]+$/, // PascalCase with multiple words
      /^[A-Z][a-z]+[0-9]+$/, // PascalCase with numbers
      /^[A-Z][a-z]+[A-Z][a-z]+[0-9]+$/ // PascalCase with multiple words and numbers
    ];
    
    return iconPatterns.some(pattern => pattern.test(name)) && 
           name.length > 2 && 
           name.length < 30;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      automation: 'Lucide React Icon Fixer',
      duration: Date.now() - this.startTime,
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      status: 'completed',
      summary: `Fixed ${this.errorsFixed} Lucide React icon errors with ${this.fixesApplied} automated fixes`
    };
    
    const reportPath = path.join(this.reportsDir, 'lucide-react-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      automation: 'Lucide React Icon Fixer',
      status: 'error',
      error: error.message,
      stack: error.stack,
      duration: Date.now() - this.startTime
    };
    
    const reportPath = path.join(this.reportsDir, 'lucide-react-fixer-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
    
    this.log(`❌ Error report generated: ${reportPath}`);
  }
}

// Main execution
if (require.main === module) {
  const fixer = new LucideReactFixer();
  fixer.run().catch(console.error);
}

module.exports = LucideReactFixer;