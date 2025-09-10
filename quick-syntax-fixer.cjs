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
=======#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
      let content = fs.readFileSync(filePath, 'utf8')
        .replace(/(\w+):\s*([^,]+),/g, '$"1"
        .replace(/(\w+):\s*([^,]+);\s*}/g, '$"1"
        .replace(/(\w+):\s*([^,]+);\s*]/g, '$"1"


