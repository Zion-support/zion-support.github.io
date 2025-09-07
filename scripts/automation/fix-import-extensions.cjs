<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');


<<<<<<< HEAD
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();

const fs = require('fs');
const path = require('path');
const glob = require('glob');
class ImportExtensionFixer {}
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');
<<<<<<< HEAD

class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  constructor() {}
    this.projectRoot = process.cwd();
    this.fixesApplied = 0};
  log(message) {}
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    

});
    
<<<<<<< HEAD
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    
=======
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
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
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
=======
<<<<<<< HEAD
    console.log(`[${new Date().toISOString()}] ${message}`)};
  async fixImportExtensions() {}
    this.log('Fixing import extensions...');
<<<<<<< HEAD
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    
<<<<<<< HEAD
=======
<<<<<<< HEAD

});
    
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
    
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    for (const file of files) {}
      const filePath = path.join(this.projectRoot, file);"

      let modified = false;
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
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
<<<<<<< HEAD
=======
=======
>>>>>>> merged-prs-20250907-203621


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      if (content !== originalContent) {}
        fs.writeFileSync(filePath, content);
        modified = true;
        this.log(`Fixed import extensions in ${file}`)};
      if (modified) {}
        this.fixesApplied++};
    };
  async run() {}
<<<<<<< HEAD
    this.log('Starting Import Extension Fixer...');
    try {}
      await this.fixImportExtensions();
=======
<<<<<<< HEAD
    this.log(Starting Import Extension Fixer...');

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
    this.log('Starting Import Extension Fixer...');
<<<<<<< HEAD
    try {}
      await this.fixImportExtensions();
=======
<<<<<<< HEAD
    try {}
      await this.fixImportExtensions();
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    
    try {}
      await this.fixImportExtensions();
      
<<<<<<< HEAD
      this.log("Import Extension Fixer completed successfully!");
=======
<<<<<<< HEAD
    
    try {}
      await this.fixImportExtensions();
      
      this.log("Import Extension Fixer completed successfully!");
content = content.replace(/from\s+['"]([^'"]+)\.ts['"]/g, "from '$1'")
  if($2) {}
        fs.writeFileSync(filePath, content)
        modified = true
        this.log(`Fixed import extensions in ${file}`)}
  if($2) {}
        this.fixesApplied++}
    }
  }
  async run() {}
    this.log('Starting Import Extension Fixer...')
    try {}
      await this.fixImportExtensions()
    try {}
      await this.fixImportExtensions()
      this.log("Import Extension Fixer completed successfully!")
=======
<<<<<<< HEAD

=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      this.log(Import Extension Fixer completed successfully!);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      this.log("Import Extension Fixer completed successfully!");
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      this.log(`Fixed ${this.fixesApplied} files`)} catch (error) {`}
      this.log(`Error in Import Extension "Fixer": ${error.message}`);
=======
      if (modified) {}
        this.fixesApplied++};
    };
  async run() {}"

<<<<<<< HEAD
      throw error};
=======
<<<<<<< HEAD
      throw error}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new ImportExtensionFixer();
  automation.run();
    .then(() => {}"

      process.exit(1)})};
module.exports = ImportExtensionFixer;

module.exports = ImportExtensionFixer;



module.exports = ImportExtensionFixer;

<<<<<<< HEAD


=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      throw error};
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new ImportExtensionFixer();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> merged-prs-20250907-203621
  automation.run();
    .then(() => {}"

      process.exit(1)})};
<<<<<<< HEAD

module.exports = ImportExtensionFixer;
module.exports = ImportExtensionFixer;
module.exports = ImportExtensionFixer;



=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
module.exports = ImportExtensionFixer;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
module.exports = ImportExtensionFixer;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
module.exports = ImportExtensionFixer;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
