#!/usr/bin/env node;
const fs = require('fs');
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

class AppImportsFixer {}
  constructor() {}
    this.projectRoot = process.cwd();

#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');

class AppImportsFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.appPath = path.join(this.projectRoot, 'src/App.tsx')};
  log(message) {}
    console.log(`[${new Date().toISOString()}] ${message}`)};
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    this.appPath = path.join(this.projectRoot, 'src/App.tsx')};
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
  log(message) {}
<<<<<<< HEAD
    console.log(`[${new Date().toISOString()}] ${message})};
=======
    console.log(`[${new Date().toISOString()}] ${message})}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  checkFileExports(filePath) {}
    try {}
      if (!fs.existsSync(filePath)) {}

      const hasDefault = content.includes('export default');
      const namedExports = [];
      
      // Check for named exports;
      const exportMatches = content.match(/export\s+(?:function|const|class)\s+(\w+)/g);
      if (exportMatches) {}
      const hasDefault = content.includes('export default')
      const namedExports = []
      // Check for named exports
      const exportMatches = content.match(/export\s+(?:function|const|class)\s+(\w+)/g)
  if($2) {}
        exportMatches.forEach(match => {})
          const nameMatch = match.match(/export\s+(?:function|const|class)\s+(\w+)/);
          if (nameMatch) {}
<<<<<<< HEAD
            namedExports.push(nameMatch[1])};
        })};
    
    let content = fs.readFileSync(this.appPath, 'utf8');
    
    
    let content = fs.readFileSync(this.appPath, 'utf8');
    
    // Define the pages to check;
const pages = [{ "name": 'HomePage', "path": './pages/HomePage' },];
=======
<<<<<<< HEAD
            namedExports.push(nameMatch[1])}
        })}

=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    
    let content = fs.readFileSync(this.appPath, utf8');
    
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
            namedExports.push(nameMatch[1])};
        })};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      return { "exists": true, hasDefault, "hasNamed": namedExports }} catch (error) {}
      return { "exists": false, "hasDefault": false, "hasNamed": [] }};
  };
  fixAppImports() {}
    this.log('Fixing App.tsx imports...');
    
    let content = fs.readFileSync(this.appPath, 'utf8');
    
    // Define the pages to check;
      return { "exists": false, "hasDefault": false, "hasNamed": [] }}
  }
  fixAppImports($2) {}
    this.log('Fixing App.tsx imports...')
    let content = fs.readFileSync(this.appPath, 'utf8')
    let content = fs.readFileSync(this.appPath, 'utf8')
    // Define the pages to check
=======
<<<<<<< HEAD
    let content = fs.readFileSync(this.appPath, 'utf8');
>>>>>>> origin/chore/fix-lint-and-merge
=======
    
    let content = fs.readFileSync(this.appPath, 'utf8');
    
<<<<<<< HEAD
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
    // Define the pages to check;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    // Define the pages to check;
>>>>>>> merged-prs-20250907-203621
    const pages = [{ "name": 'HomePage', "path": './pages/HomePage' },]
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      { "name": 'ServicesPage', "path": './pages/ServicesPage' },
      { "name": 'SolutionsPage', "path": './pages/SolutionsPage' },
      { "name": 'AboutPage', "path": './pages/AboutPage' },
      { "name": 'ContactPage', "path": './pages/ContactPage' },
      { "name": 'BlogPage', "path": './pages/BlogPage' },
      { "name": 'NotFoundPage', "path": './pages/NotFoundPage' },
      { "name": 'ComprehensiveServicesPage', "path": './pages/ComprehensiveServicesPage' },
      { "name": 'Sitemap', "path": './pages/Sitemap' },
      { "name": 'ComprehensiveSitemap', "path": './pages/ComprehensiveSitemap' },
      { "name": 'Support', "path": './pages/Support' },
      { "name": 'Training', "path": './pages/Training' },
      { "name": 'Helpdesk', "path": './pages/Helpdesk' },
      { "name": 'RevolutionaryServicesPage', "path": './pages/RevolutionaryServicesPage' },
      { "name": 'NewServicesShowcase2025', "path": './pages/NewServicesShowcase2025' },
      { "name": 'EnhancedNewServices2025', "path": './pages/EnhancedNewServices2025' },
      { "name": 'PricingPage', "path": './pages/PricingPage' },
      { "name": 'AISolutions', "path": './pages/services/AISolutions' },
      { "name": 'QuantumComputing', "path": './pages/services/QuantumComputing' },
      { "name": 'Cybersecurity', "path": './pages/services/Cybersecurity' };
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    ];

    // Check each page and fix imports;
    pages.forEach(page => {})

      const exports = this.checkFileExports(filePath);
      
      if (exports.exists) {}
        let importStatement;
        if (exports.hasDefault) {}
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.default })));`} else if (exports.hasNamed.includes(page.name)) {`}
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.${page.name} })));`} else if (exports.hasNamed.length > 0) {`}
          // Use the first named export;
<<<<<<< HEAD
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.${exports.hasNamed[0]} })));`} else {`}
=======
          importStatement = `const ${page.name} = lazy(() => import(${page.path}').then(module => ({ "default: module.${exports.hasNamed[0]} })));`} else {`}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          // Fallback to default;
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.default || module.${page.name} })));`};
        // Replace the import statement;
        const regex = new RegExp(`const ${page.name} = lazy\\(.*?\\);`, 'g');
        content = content.replace(regex, importStatement);
        
        this.log(`Fixed import for ${page.name}: ${exports.hasDefault ? 'default' : 'named'} export`)} else {`}
        this.log(`"Warning": ${page.path}.tsx does not exist`)};
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
        this.log(`Fixed import for ${page.name}: ${exports.hasDefault ? 'default : named'} export`)} else {`}
        this.log(`"Warning: ${page.path}.tsx does not exist`)}
=======
<<<<<<< HEAD
=======
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> merged-prs-20250907-203621
        this.log(`Fixed import for ${page.name}: ${exports.hasDefault ? 'default' : 'named'} export`)} else {`}
        this.log(`"Warning": ${page.path}.tsx does not exist`)};
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      if (exports.exists) {}
        let importStatement;

<<<<<<< HEAD
        this.log(`"Warning": ${page.path}.tsx does not exist`)};"
    }
});

    // Write the fixed content back;
    fs.writeFileSync(this.appPath, content);
    this.log('App.tsx imports fixed successfully!')};
  async run() {}
    this.log('Starting App Imports Fixer...');
    
    try {}
      this.fixAppImports();
      this.log('App Imports Fixer completed successfully!')} catch (error) {}
      this.log(`Error in App Imports "Fixer": ${error.message}`);
    fs.writeFileSync(this.appPath, content);"

      throw error};
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new AppImportsFixer();
  automation.run();
    .then(() => {}
      console.log('App Imports Fixer completed successfully!');
      process.exit(0)}
});
    .catch(error => {})
      console.error('App Imports Fixer "failed": ', error);
      process.exit(1)})};
module.exports = AppImportsFixer;
