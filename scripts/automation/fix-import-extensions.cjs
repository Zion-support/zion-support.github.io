<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');
<<<<<<< HEAD
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======

const fs = require('fs');
const path = require('path');
const glob = require('glob');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    this.fixesApplied = 0};
  log(message) {}
<<<<<<< HEAD
    console.log(`[${new Date().toISOString()}] ${message}`)};
  async fixImportExtensions() {}
    this.log('Fixing import extensions...');
<<<<<<< HEAD
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
=======
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    for (const file of files) {}
      const filePath = path.join(this.projectRoot, file);"

      let modified = false;
<<<<<<< HEAD
      // Fix .ts extensions in import statements;
      const originalContent = content;
      // Fix imports like 'react.ts' -> 'react'
      content = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, "from '$1'");
      // Fix imports like 'react-router-dom.ts' -> 'react-router-dom'
      content = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, "from '$1'");
      // Fix imports like 'framer-motion.ts' -> 'framer-motion'
      content = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, "from '$1'");
      // Fix imports like 'lucide-react.ts' -> 'lucide-react'
      content = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, "from '$1'");
=======

      // Fix .ts extensions in import statements;
      const originalContent = content;

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      if (content !== originalContent) {}
        fs.writeFileSync(filePath, content);
        modified = true;
        this.log(`Fixed import extensions in ${file}`)};
      if (modified) {}
        this.fixesApplied++};
    };
  };
  async run() {}
    this.log('Starting Import Extension Fixer...');
<<<<<<< HEAD
    try {}
      await this.fixImportExtensions();
=======
    
    try {}
      await this.fixImportExtensions();
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      this.log("Import Extension Fixer completed successfully!");
      this.log(`Fixed ${this.fixesApplied} files`)} catch (error) {`}
      this.log(`Error in Import Extension "Fixer": ${error.message}`);
=======
      if (modified) {}
        this.fixesApplied++};
    };
  async run() {}"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      throw error};
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new ImportExtensionFixer();
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  automation.run();
    .then(() => {}"

      process.exit(1)})};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
module.exports = ImportExtensionFixer;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
module.exports = ImportExtensionFixer;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
module.exports = ImportExtensionFixer;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
