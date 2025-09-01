#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationInterval = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes default
    this.fixesApplied = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [TypeScriptErrorFixer] ${message}`);
  }

  async run() {
    this.log('Starting TypeScript error fixing automation...');
    
    try {
      // Step 1: Fix type annotations
      await this.fixTypeAnnotations();
      
      // Step 2: Fix import/export issues
      await this.fixImportExportIssues();
      
      // Step 3: Fix interface and type definitions
      await this.fixInterfaceDefinitions();
      
      // Step 4: Fix React component types
      await this.fixReactComponentTypes();
      
      // Step 5: Fix generic type issues
      await this.fixGenericTypes();
      
      // Step 6: Fix any type usage
      await this.fixAnyTypes();
      
      this.log(`TypeScript error fixing completed. Applied ${this.fixesApplied} fixes.`);
      
    } catch (error) {
      this.log(`Error during TypeScript error fixing: ${error.message}`);
    }
  }

  async fixTypeAnnotations() {
    this.log('Fixing type annotations...');
    
    const files = glob.sync('**/*.{ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix missing return types
        newContent = newContent.replace(
          /function\s+(\w+)\s*\([^)]*\)\s*{/g,
          'function $1(...args: any[]): any {'
        );
        
        // Fix arrow function types
        newContent = newContent.replace(
          /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g,
          'const $1 = (...args: any[]): any => {'
        );
        
        // Fix parameter types
        newContent = newContent.replace(
          /\(([^)]*)\)\s*=>/g,
          (match, params) => {
            if (!params.includes(':')) {
              return `(${params.split(',').map(p => p.trim() + ': any').join(', ')}) =>`;
            }
            return match;
          }
        );
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing type annotations in ${file}: ${error.message}`);
      }
    }
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...');
    
    const files = glob.sync('**/*.{ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix default export issues
        if (content.includes('export default') && !content.includes('export {')) {
          const exportMatch = content.match(/export default\s+(\w+)/);
          if (exportMatch) {
            const componentName = exportMatch[1];
            if (!content.includes(`export { ${componentName} }`)) {
              newContent = content.replace(
                `export default ${componentName}`,
                `export { ${componentName} }\nexport default ${componentName}`
              );
              modified = true;
            }
          }
        }
        
        // Fix React import issues
        if (content.includes('React.') && !content.includes("import React")) {
          newContent = "import React from 'react';\n" + newContent;
          modified = true;
        }
        
        // Fix missing type imports
        if (content.includes('useState') && !content.includes("import { useState }")) {
          newContent = newContent.replace(
            "import React from 'react'",
            "import React, { useState } from 'react'"
          );
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, newContent);
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing import/export in ${file}: ${error.message}`);
      }
    }
  }

  async fixInterfaceDefinitions() {
    this.log('Fixing interface definitions...');
    
    const files = glob.sync('**/*.{ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix interface property types
        newContent = newContent.replace(
          /interface\s+(\w+)\s*{([^}]*)}/g,
          (match, interfaceName, properties) => {
            const fixedProperties = properties
              .split('\n')
              .map(line => {
                if (line.includes(':') && !line.includes(': ')) {
                  return line.replace(':', ': ');
                }
                if (line.includes(';') && !line.includes(';')) {
                  return line.replace(';', ';');
                }
                return line;
              })
              .join('\n');
            return `interface ${interfaceName} {\n${fixedProperties}\n}`;
          }
        );
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing interface definitions in ${file}: ${error.message}`);
      }
    }
  }

  async fixReactComponentTypes() {
    this.log('Fixing React component types...');
    
    const files = glob.sync('**/*.{ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix React.FC type
        newContent = newContent.replace(
          /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\([^)]*\)\s*=>/g,
          'const $1: React.FC = (props) =>'
        );
        
        // Fix component props interface
        newContent = newContent.replace(
          /interface\s+(\w+)Props\s*{/g,
          'interface $1Props {\n  // Add your props here\n'
        );
        
        // Fix useState types
        newContent = newContent.replace(
          /useState\s*\(\s*([^)]+)\s*\)/g,
          (match, value) => {
            if (!value.includes('<')) {
              return `useState<typeof ${value}>(${value})`;
            }
            return match;
          }
        );
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing React component types in ${file}: ${error.message}`);
      }
    }
  }

  async fixGenericTypes() {
    this.log('Fixing generic types...');
    
    const files = glob.sync('**/*.{ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix Array type
        newContent = newContent.replace(
          /Array<([^>]+)>/g,
          '$1[]'
        );
        
        // Fix Promise type
        newContent = newContent.replace(
          /Promise<([^>]+)>/g,
          'Promise<$1>'
        );
        
        // Fix generic function types
        newContent = newContent.replace(
          /function\s+(\w+)<T>/g,
          'function $1<T = any>'
        );
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing generic types in ${file}: ${error.message}`);
      }
    }
  }

  async fixAnyTypes() {
    this.log('Fixing any types...');
    
    const files = glob.sync('**/*.{ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Replace any with more specific types where possible
        newContent = newContent.replace(
          /:\s*any\b/g,
          ': unknown'
        );
        
        // Fix any in function parameters
        newContent = newContent.replace(
          /\(([^)]*)\)\s*=>/g,
          (match, params) => {
            return params.replace(/:\s*any\b/g, ': unknown');
          }
        );
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing any types in ${file}: ${error.message}`);
      }
    }
  }
}

// Run the automation
const fixer = new TypeScriptErrorFixer();
fixer.run().catch(console.error);