#!/usr/bin/env node

/**
 * Duplicate Identifier Fixer - PM2 Automation Script
 * 
 * This script specifically targets and fixes duplicate identifier errors:
 * - Duplicate imports in the same file
 * - Duplicate identifiers across imports
 * - Unused imports that cause conflicts
 * - Import statement cleanup
 * 
 * Runs every 10 minutes to continuously fix duplicate identifier issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class DuplicateIdentifierFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'duplicate-identifier-fixer-report.json');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
  }

  async run() {
    console.log('🚀 Starting Duplicate Identifier Fixer...');
    
    try {
      // Step 1: Find files with duplicate identifier issues
      const problematicFiles = await this.findProblematicFiles();
      
      // Step 2: Fix each file systematically
      for (const file of problematicFiles) {
        await this.fixFile(file);
      }
      
      // Step 3: Generate report
      await this.generateReport();
      
      console.log(`✅ Duplicate Identifier Fixer completed! Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files.`);
      
    } catch (error) {
      console.error('❌ Error in Duplicate Identifier Fixer:', error);
      await this.generateErrorReport(error);
    }
  }

  async findProblematicFiles() {
    console.log('🔍 Finding files with duplicate identifier issues...');
    
    const problematicFiles = [];
    const tsxFiles = glob.sync('src/**/*.{ts,tsx,js,jsx}');
    
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common duplicate identifier patterns
        if (this.hasDuplicateIdentifierIssues(content)) {
          problematicFiles.push(file);
        }
        
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    console.log(`Found ${problematicFiles.length} files with potential duplicate identifier issues`);
    return problematicFiles;
  }

  hasDuplicateIdentifierIssues(content) {
    // Check for multiple import statements with the same source
    const importLines = content.match(/import\s+.*?from\s+['"][^'"]+['"]/g) || [];
    const importSources = importLines.map(line => {
      const match = line.match(/from\s+['"]([^'"]+)['"]/);
      return match ? match[1] : null;
    }).filter(Boolean);
    
    // Check for duplicate sources
    const uniqueSources = new Set(importSources);
    if (importSources.length !== uniqueSources.size) {
      return true;
    }
    
    // Check for duplicate identifiers in the same import statement
    const braceImports = content.match(/import\s*{([^}]+)}\s+from/g) || [];
    for (const braceImport of braceImports) {
      const match = content.match(new RegExp(braceImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s+from\\s+[\'"]([^\'"]+)[\'"]'));
      if (match) {
        const importPath = match[1];
        const fullImport = content.match(new RegExp(`import\\s*{([^}]+)}\\s+from\\s+['"]${importPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`));
        if (fullImport) {
          const identifiers = fullImport[1].split(',').map(id => id.trim());
          const uniqueIds = new Set(identifiers);
          if (identifiers.length !== uniqueIds.size) {
            return true;
          }
        }
      }
    }
    
    return false;
  }

  async fixFile(filePath) {
    try {
      console.log(`🔧 Fixing ${filePath}...`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix 1: Consolidate multiple import statements from the same source
      content = this.consolidateImports(content);
      
      // Fix 2: Remove duplicate identifiers in brace imports
      content = this.removeDuplicateIdentifiers(content);
      
      // Fix 3: Clean up unused imports
      content = this.cleanupUnusedImports(content);
      
      // Fix 4: Fix specific known issues (like in Enterprise.tsx)
      content = this.fixSpecificKnownIssues(content, filePath);
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.filesProcessed++;
        this.errorsFixed++;
      }
      
    } catch (error) {
      console.log(`⚠️ Could not fix ${filePath}: ${error.message}`);
    }
  }

  consolidateImports(content) {
    const importLines = content.match(/import\s+.*?from\s+['"][^'"]+['"]/g) || [];
    const importGroups = new Map();
    
    // Group imports by source
    for (const importLine of importLines) {
      const match = importLine.match(/from\s+['"]([^'"]+)['"]/);
      if (match) {
        const source = match[1];
        if (!importGroups.has(source)) {
          importGroups.set(source, []);
        }
        importGroups.get(source).push(importLine);
      }
    }
    
    // Consolidate imports from the same source
    for (const [source, imports] of importGroups) {
      if (imports.length > 1) {
        const allIdentifiers = new Set();
        
        for (const importLine of imports) {
          if (importLine.includes('{')) {
            const braceMatch = importLine.match(/import\s*{([^}]+)}/);
            if (braceMatch) {
              const identifiers = braceMatch[1].split(',').map(id => id.trim());
              identifiers.forEach(id => allIdentifiers.add(id));
            }
          } else if (importLine.includes('import')) {
            const defaultMatch = importLine.match(/import\s+(\w+)/);
            if (defaultMatch) {
              allIdentifiers.add(defaultMatch[1]);
            }
          }
        }
        
        // Create consolidated import
        const consolidatedImport = `import { ${Array.from(allIdentifiers).join(', ')} } from '${source}'`;
        
        // Replace all imports from this source with the consolidated one
        for (const importLine of imports) {
          content = content.replace(importLine, '');
        }
        
        // Add the consolidated import at the top
        const importIndex = content.indexOf('import');
        if (importIndex !== -1) {
          content = content.slice(0, importIndex) + consolidatedImport + '\n' + content.slice(importIndex);
        }
      }
    }
    
    return content;
  }

  removeDuplicateIdentifiers(content) {
    const braceImports = content.match(/import\s*{([^}]+)}\s+from\s+['"][^'"]+['"]/g) || [];
    
    for (const braceImport of braceImports) {
      const match = braceImport.match(/import\s*{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
      if (match) {
        const identifiers = match[1].split(',').map(id => id.trim());
        const uniqueIdentifiers = [];
        const seen = new Set();
        
        for (const identifier of identifiers) {
          const cleanId = identifier.replace(/\s+as\s+.+/, '').trim();
          if (!seen.has(cleanId)) {
            seen.add(cleanId);
            uniqueIdentifiers.push(identifier);
          }
        }
        
        if (uniqueIdentifiers.length !== identifiers.length) {
          const newImport = `import { ${uniqueIdentifiers.join(', ')} } from '${match[2]}'`;
          content = content.replace(braceImport, newImport);
        }
      }
    }
    
    return content;
  }

  cleanupUnusedImports(content) {
    const lines = content.split('\n');
    const newLines = [];
    
    for (const line of lines) {
      if (line.includes('import') && line.includes('{')) {
        const importMatch = line.match(/import\s*{([^}]+)}\s+from/);
        if (importMatch) {
          const identifiers = importMatch[1].split(',').map(id => id.trim());
          const usedIdentifiers = [];
          
          for (const identifier of identifiers) {
            const cleanId = identifier.replace(/\s+as\s+.+/, '').trim();
            // Check if the identifier is actually used in the content
            if (this.isIdentifierUsed(content, cleanId, line)) {
              usedIdentifiers.push(identifier);
            }
          }
          
          if (usedIdentifiers.length > 0) {
            const fromPath = line.match(/from\s+['"]([^'"]+)['"]/)?.[1] || '';
            const newImportLine = `import { ${usedIdentifiers.join(', ')} } from '${fromPath}'`;
            newLines.push(newImportLine);
          }
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
    
    return newLines.join('\n');
  }

  isIdentifierUsed(content, identifier, importLine) {
    // Skip the import line itself when checking for usage
    const contentWithoutImport = content.replace(importLine, '');
    
    // Check if the identifier is used in the content
    // This is a basic check - in a real scenario you might want more sophisticated analysis
    return contentWithoutImport.includes(identifier);
  }

  fixSpecificKnownIssues(content, filePath) {
    // Fix specific issues found in Enterprise.tsx and similar files
    
    // Fix 1: Remove non-existent lucide-react icons
    const nonExistentIcons = [
      'UserHeart', 'UserEdit2', 'UserSearch2', 'UserList2', 'UserSettings2', 
      'UserShield2', 'UserStar2', 'Device', 'Desktop'
    ];
    
    for (const icon of nonExistentIcons) {
      const regex = new RegExp(`\\b${icon}\\b`, 'g');
      if (content.includes(icon)) {
        content = content.replace(regex, '');
        // Also remove from import statements
        content = content.replace(new RegExp(`,\\s*${icon}\\s*,?`, 'g'), ',');
        content = content.replace(new RegExp(`^\\s*${icon}\\s*,?\\s*$`, 'gm'), '');
      }
    }
    
    // Fix 2: Remove duplicate identifiers
    const duplicatePatterns = [
      { pattern: /UserHeart,\s*\n\s*UserHeart,/g, replacement: 'UserHeart,' },
      { pattern: /Eye,\s*\n\s*Eye,/g, replacement: 'Eye,' },
      { pattern: /Database,\s*\n\s*Database,/g, replacement: 'Database,' },
      { pattern: /HardDrive,\s*\n\s*HardDrive,/g, replacement: 'HardDrive,' },
      { pattern: /Network,\s*\n\s*Network,/g, replacement: 'Network,' },
      { pattern: /Wifi,\s*\n\s*Wifi,/g, replacement: 'Wifi,' },
      { pattern: /Bluetooth,\s*\n\s*Bluetooth,/g, replacement: 'Bluetooth,' },
      { pattern: /Radio,\s*\n\s*Radio,/g, replacement: 'Radio,' },
      { pattern: /Signal,\s*\n\s*Signal,/g, replacement: 'Signal,' },
      { pattern: /Antenna,\s*\n\s*Antenna,/g, replacement: 'Antenna,' },
      { pattern: /Orbit,\s*\n\s*Orbit,/g, replacement: 'Orbit,' },
      { pattern: /Star,\s*\n\s*Star,/g, replacement: 'Star,' },
      { pattern: /Navigation,\s*\n\s*Navigation,/g, replacement: 'Navigation,' },
      { pattern: /Moon,\s*\n\s*Moon,/g, replacement: 'Moon,' },
      { pattern: /Sun,\s*\n\s*Sun,/g, replacement: 'Sun,' },
      { pattern: /Binary,\s*\n\s*Binary,/g, replacement: 'Binary,' },
      { pattern: /Lock,\s*\n\s*Lock,/g, replacement: 'Lock,' },
      { pattern: /Brain,\s*\n\s*Brain,/g, replacement: 'Brain,' }
    ];
    
    for (const { pattern, replacement } of duplicatePatterns) {
      content = content.replace(pattern, replacement);
    }
    
    // Fix 3: Clean up empty import braces
    content = content.replace(/import\s*{\s*}\s*from\s+['"][^'"]+['"]/g, '');
    
    // Fix 4: Clean up trailing commas in imports
    content = content.replace(/,\s*}/g, '}');
    
    return content;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      status: 'completed',
      summary: `Fixed ${this.errorsFixed} duplicate identifier errors in ${this.filesProcessed} files in ${((Date.now() - this.startTime) / 1000).toFixed(2)} seconds`
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportFile}`);
  }

  async generateErrorReport(error) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      status: 'error',
      error: error.message,
      stack: error.stack
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`❌ Error report generated: ${this.reportFile}`);
  }
}

// Run the automation
const fixer = new DuplicateIdentifierFixer();
fixer.run().catch(console.error);