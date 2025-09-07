<<<<<<< HEAD
=======

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

const fs = require('fs');
const path = require('path');
const glob = require('glob');
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.fixesApplied = 0};
  log(message) {}
<<<<<<< HEAD
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    

});
=======
    console.log(`[${new Date().toISOString()}] ${message}`)};
  async fixImportExtensions() {}
    this.log('Fixing import extensions...');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    for (const file of files) {}
      const filePath = path.join(this.projectRoot, file);"

      let modified = false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

      // Fix .ts extensions in import statements;
      const originalContent = content;

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
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
<<<<<<< HEAD
<<<<<<< HEAD
    try {}
      await this.fixImportExtensions();
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    
    try {}
      await this.fixImportExtensions();
      
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    
    try {}
      await this.fixImportExtensions();
      
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      this.log("Import Extension Fixer completed successfully!");
      this.log(`Fixed ${this.fixesApplied} files`)} catch (error) {`}
      this.log(`Error in Import Extension "Fixer": ${error.message}`);
      if (modified) {}
        this.fixesApplied++};
    };
  async run() {}"

      throw error};
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new ImportExtensionFixer();
<<<<<<< HEAD
=======

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  automation.run();
    .then(() => {}"

      process.exit(1)})};
<<<<<<< HEAD
module.exports = ImportExtensionFixer;

module.exports = ImportExtensionFixer;
module.exports = ImportExtensionFixer;
module.exports = ImportExtensionFixer;
module.exports = ImportExtensionFixer;


=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

module.exports = ImportExtensionFixer;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
module.exports = ImportExtensionFixer;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
module.exports = ImportExtensionFixer;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
