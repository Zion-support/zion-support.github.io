
=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
=======

=======

const fs = require('fs');
const path = require('path');
const glob = require('glob');
class ImportExtensionFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.fixesApplied = 0};
  log(message) {}
    console.log(`[${new Date().toISOString()}] ${message}`)};
  async fixImportExtensions() {}
    this.log('Fixing import extensions...');
    // Find all TypeScript and JavaScript files;
    const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { "cwd": this.projectRoot }
});
=======

});
    for (const file of files) {}
      const filePath = path.join(this.projectRoot, file);"

      let modified = false;
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
    try {}
      await this.fixImportExtensions();
      this.log("Import Extension Fixer completed successfully!");
      this.log(`Fixed ${this.fixesApplied} files`)} catch (error) {`}
      this.log(`Error in Import Extension "Fixer": ${error.message}`);
=======
      if (modified) {}
        this.fixesApplied++};
    };
  async run() {}"

      throw error};
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new ImportExtensionFixer();

=======
  automation.run();
    .then(() => {}"

      process.exit(1)})};

=======
module.exports = ImportExtensionFixer;
=======
module.exports = ImportExtensionFixer;
=======


