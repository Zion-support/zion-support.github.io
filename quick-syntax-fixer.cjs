<<<<<<< HEAD
        .replace(/^>>>>>>>.*$/gm, '')
        
        // Fix module.exports
        .replace(/module\.exports\s*=\s*{;/g, 'module.exports = {')
        // Fix constructor
        .replace(/constructor\s*\(\s*\)\s*{;/g, 'constructor() {')
        // Fix empty lines with semicolons
        .replace(/^\s*;\s*$/gm, '')
        // Fix multiple semicolons
        .replace(/;+/g, ';')
        // Fix semicolons before commas
        .replace(/;\s*,/g, ',');
      if (content !== originalContent) {;
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting Quick Syntax Fixer');
    
    const criticalFiles = [
      'src/components/ServiceCard.tsx',
      'utils/accessibility.ts',
      'utils/auth.ts',
      'utils/db.ts',
      'utils/supabase.ts',
      'utils/types.ts'
    ];

    for (const file of criticalFiles) {
      await this.fixFile(file);
    }

    this.log(`✅ Fixed ${fixedCount} critical files`);
    return { fixedFiles: this.fixedFiles };
  }
}

const fixer = new QuickSyntaxFixer();
fixer.run().catch(console.error);


module.exports = QuickSyntaxFixer;
=======
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
      let content = fs.readFileSync(filePath, 'utf8')
        .replace(/(\w+):\s*([^,]+),/g, '$"1"
        .replace(/(\w+):\s*([^,]+);\s*}/g, '$"1"
        .replace(/(\w+):\s*([^,]+);\s*]/g, '$"1"


