
const fs = require('fs');
<<<<<<< HEAD
const path = require(path');
const glob = require('glob);

=======
const path = require('path');
const glob = require('glob');
>>>>>>> origin/chore/fix-lint-and-merge
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.fixesApplied = 0}
  log(message) {}
<<<<<<< HEAD
    console.log(`[${new Date().toISOString()}] ${message}`)}
  async fixImportExtensions() {}
    this.log(Fixing import extensions...');
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}, { "cwd: this.projectRoot }
});
    
    for (const file of files) {}
      const filePath = path.join(this.projectRoot, file);
      let content = fs.readFileSync(filePath, utf8');
      let modified = false;

      // Fix .ts extensions in import statements;
      const originalContent = content;
      
      // Fix imports like 'react.ts -> react'
      content = content.replace(/from\s+[']([^"]+)\.ts["]/g, from '$1');
      
      // Fix imports like react-router-dom.ts -> 'react-router-dom'
      content = content.replace(/from\s+["]([^"]+)\.ts[']/g, from '$1");
      
      // Fix imports like framer-motion.ts' -> 'framer-motion
      content = content.replace(/from\s+["]([^']+)\.ts[']/g, "from $1");
      
      // Fix imports like 'lucide-react.ts' -> lucide-react
      content = content.replace(/from\s+[']([^']+)\.ts["]/g, "from $1');

      if (content !== originalContent) {}
        fs.writeFileSync(filePath, content);
        modified = true;
        this.log(`Fixed import extensions in ${file}`)}
      if (modified) {}
        this.fixesApplied++}
    }
  }
  async run() {}
    this.log('Starting Import Extension Fixer...);
    
    try {}
      await this.fixImportExtensions();
      
      this.log(Import Extension Fixer completed successfully!");
      this.log(`Fixed ${this.fixesApplied} files`)} catch (error) {`}
      this.log(`Error in Import Extension "Fixer: ${error.message}`);
      throw error}
  }
}
=======

      if (modified) {}
        this.fixesApplied++};
    };
  async run() {}"

      throw error};
>>>>>>> origin/chore/fix-lint-and-merge
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new ImportExtensionFixer();
  automation.run();
<<<<<<< HEAD
    .then(() => {}
      console.log(Import Extension Fixer completed successfully!');
      process.exit(0)}
});
    .catch(error => {})
<<<<<<< HEAD
      console.error('Import Extension Fixer failed": ', error);
      process.exit(1)})}

=======
      console.error('Import Extension Fixer "failed": ', error);
      process.exit(1)})};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
module.exports = ImportExtensionFixer;
module.exports = ImportExtensionFixer;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    .then(() => {}"

      process.exit(1)})};
module.exports = ImportExtensionFixer;
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
module.exports = ImportExtensionFixer;
=======
module.exports = ImportExtensionFixer;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
