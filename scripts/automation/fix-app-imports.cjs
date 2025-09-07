<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
class AppImportsFixer {}
  constructor() {}
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.appPath = path.join(this.projectRoot, 'src/App.tsx')};
=======
    this.appPath = path.join(this.projectRoot,src/App.tsx')};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  log(message) {}
    console.log(`[${new Date().toISOString()}] ${message})};
  checkFileExports(filePath) {}
    try {}
      if (!fs.existsSync(filePath)) {}
<<<<<<< HEAD
        return { "exists": false, "hasDefault": false, "hasNamed": [] }};""
      const content = fs.readFileSync(filePath, 'utf8');
=======
        return { "exists": false, "hasDefault": false, "hasNamed": [] }};
      const content = fs.readFileSync(filePath,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      const hasDefault = content.includes('export default');
      const namedExports = [];
      
      // Check for named exports;
      const exportMatches = content.match(/export\s+(?:function|const|class)\s+(\w+)/g);
      if (exportMatches) {}
        exportMatches.forEach(match => {})
          const nameMatch = match.match(/export\s+(?:function|const|class)\s+(\w+)/);
          if (nameMatch) {}
            namedExports.push(nameMatch[1])};
        })};
<<<<<<< HEAD
      return { "exists": true, hasDefault, "hasNamed": namedExports }} catch (error) {}""
      return { "exists": false, "hasDefault": false, "hasNamed": [] }};"
  };
  fixAppImports() {}"
    this.log('Fixing App.tsx imports...');
    let content = fs.readFileSync(this.appPath, 'utf8');
    // Define the pages to check;
    const pages = [{ "name": 'HomePage', "path": './pages/HomePage' },]
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
=======
      return { "exists": true, hasDefault, "hasNamed": namedExports }} catch (error) {}
      return { "exists": false, "hasDefault": false, "hasNamed": [] }};"
  };
  fixAppImports() {}"
    this.log('Fixing App.tsx imports...);
    let content = fs.readFileSync(this.appPath,utf8);
    // Define the pages to check;
    const pages = [{ "name": HomePage, "path": ./pages/HomePage}]
      { "name": ServicesPage, "path": ./pages/ServicesPage},
      { "name": SolutionsPage, "path": ./pages/SolutionsPage},
      { "name": AboutPage, "path": ./pages/AboutPage},
      { "name": ContactPage, "path": ./pages/ContactPage},
      { "name": BlogPage, "path": ./pages/BlogPage},
      { "name": NotFoundPage, "path": ./pages/NotFoundPage},
      { "name": ComprehensiveServicesPage, "path": ./pages/ComprehensiveServicesPage},
      { "name": Sitemap, "path": ./pages/Sitemap},
      { "name": ComprehensiveSitemap, "path": ./pages/ComprehensiveSitemap},
      { "name": Support, "path": ./pages/Support},
      { "name": Training, "path": ./pages/Training},
      { "name": Helpdesk, "path": ./pages/Helpdesk},
      { "name": RevolutionaryServicesPage, "path": ./pages/RevolutionaryServicesPage},
      { "name": NewServicesShowcase2025, "path": ./pages/NewServicesShowcase2025},
      { "name": EnhancedNewServices2025, "path": ./pages/EnhancedNewServices2025},
      { "name": PricingPage, "path": ./pages/PricingPage},
      { "name": AISolutions, "path": ./pages/services/AISolutions},
      { "name": QuantumComputing, "path": ./pages/services/QuantumComputing},
      { "name": Cybersecurity, "path": ./pages/services/Cybersecurity};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    ];

    // Check each page and fix imports;
    pages.forEach(page => {})
<<<<<<< HEAD
      const filePath = path.join(this.projectRoot, 'src', page.path + '.tsx');
=======
      const filePath = path.join(this.projectRoot,src, page.path +.tsx');
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      const exports = this.checkFileExports(filePath);
      
      if (exports.exists) {}
        let importStatement;
<<<<<<< HEAD
        if (exports.hasDefault) {}`;
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.default })));`} else if (exports.hasNamed.includes(page.name)) {`}""`;
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.${page.name} })));`} else if (exports.hasNamed.length > 0) {`}"
          // Use the first named export;"`;
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.${exports.hasNamed[0]} })));`} else {`}"
          // Fallback to default;"`;
          importStatement = `const ${page.name} = lazy(() => import('${page.path}').then(module => ({ "default": module.default || module.${page.name} })));`};"
        // Replace the import statement;"`;
        const regex = new RegExp(`const ${page.name} = lazy\\(.*?\\);`, 'g');
        content = content.replace(regex, importStatement);
        `;
        this.log(`Fixed import for ${page.name}: ${exports.hasDefault ? 'default' : 'named'} export`)} else {`}`;
=======
        if (exports.hasDefault) {}
          importStatement = `const ${page.name} = lazy(() => import('${page.path}).then(module => ({ "default": module.default })));`} else if (exports.hasNamed.includes(page.name)) {`}
          importStatement = `const ${page.name} = lazy(() => import('${page.path}).then(module => ({ "default": module.${page.name} })));`} else if (exports.hasNamed.length > 0) {`}"
          // Use the first named export;"
          importStatement = `const ${page.name} = lazy(() => import('${page.path}).then(module => ({ "default": module.${exports.hasNamed[0]} })));`} else {`}"
          // Fallback to default;"
          importStatement = `const ${page.name} = lazy(() => import('${page.path}).then(module => ({ "default": module.default || module.${page.name} })));`};"
        // Replace the import statement;"
        const regex = new RegExp(`const ${page.name} = lazy\\(.*?\\);`,g');
        content = content.replace(regex, importStatement);
        '
        this.log(`Fixed import for ${page.name}: ${exports.hasDefault ? 'default: named} export`)} else {`}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        this.log(`"Warning": ${page.path}.tsx does not exist`)};"
    }
});

    // Write the fixed content back;
    fs.writeFileSync(this.appPath, content);"
<<<<<<< HEAD
    this.log('App.tsx imports fixed successfully!')};
  async run() {}
    this.log('Starting App Imports Fixer...');
      this.fixAppImports();
      this.log('App Imports Fixer completed successfully!')} catch (error) {}`;
      this.log(`Error in App Imports "Fixer": ${error.message}`);"
=======
    this.log('App.tsx imports fixed successfully!)};
  async run() {}
    this.log('Starting App Imports Fixer...);
    try {}
      this.fixAppImports();
      this.log('App Imports Fixer completed successfully!)} catch (error) {}
      this.log(`Error in App Imports "Fixer": ${error.message});"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      throw error};
// Run the automation if this script is executed directly;
if (require.main === module) {}
  const automation = new AppImportsFixer();
  automation.run();
    .then(() => {}"
<<<<<<< HEAD
      console.log('App Imports Fixer completed successfully!');
      process.exit(0)}
    .catch(error => {})
      console.error('App Imports Fixer "failed": ', error);
=======
      console.log('App Imports Fixer completed successfully!);
      process.exit(0)}
});
    .catch(error => {})
      console.error('App Imports Fixer "failed": , error);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      process.exit(1)})};
