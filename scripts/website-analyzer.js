
  '🔍 Analyzing Zion Tech Group Website...\n');

  'pages');
  const componentsDir = path.join(srcDir,;
  'components');
  // Read App.tsx to extract all routes;
  const appTsxPath = path.join(srcDir, ';App.tsx');
  const appContent = fs.readFileSync(appTsxPath, ';utf8');
    // Extract route paths from App.tsx;

>>>>>>> origin/main
  console && console.error(,"}),"})
  '❌ Error analyzing "website": ', error && error.message),"}),"})
  process ;
  const srcDir = path && path.join(__dirname, ';..', ';src');
  const pagesDir = path && path.join(srcDir, ';pages');
  const componentsDir = path && path.join(srcDir, ';components');
  // Read App && App.tsx to extract all routes;
  const appTsxPath = path && path.join(srcDir, ';App && App.tsx');
  const appContent = fs && fs.readFileSync(appTsxPath, ';utf8');
    // Extract route paths from App && App.tsx;
<<<<<<< HEAD
=======

>>>>>>> origin/main
  const routeRegex = /path='([^']+)"/g;

  const routes = [];
  let match;


    routes.push(match[1])}
  console.log(`📊 Found ${routes.length} routes in App."tsx":`);`;  routes.forEach(route => console.log(`  - ${route}`));`;  // Check which pages exist;
  const existingPages = [];
  const missingPages = [];

  function scanDirectory(dir, basePath = ';
  ') {    const items = fs.readdirSync(dir);
    items.forEach(item => {;

      const fullPath = path.join(dir, item);

      const stat = fs.statSync(fullPath);


        existingPages.push(pagePath)}
    })}

  scanDirectory(pagesDir);

  '*') return // Skip 404 route;
    const routePath = route.replace(/^\//, ).replace(/\//g, '-;
  ');
    const hasPage = existingPages.some(page =>;
      page.includes(routePath) ||;
      page.includes(route.replace(/\//g, '-;
  ')) ||;
      page.includes(route.replace(/\//g, '))    );
    if (!hasPage) {;

      missingPages.push(route)}

  missingPages.forEach(page => console.log(`  - ${page}`));
  // Check for placeholder pages (files with minimal content);

  const placeholderPages = [];

  '.tsx');
    if (fs.existsSync(fullPath)) {;
      const content = fs.readFileSync(fullPath,;
  'utf8');
      if (content.length < 5000) { // Less than 5KB is considered placeholder        placeholderPages.push(pagePath)}


    }
  });
  console.log(;

    JSON.stringify(report, null, 2));
  console.log(`\n📝 Analysis report saved to website-analysis-report.json`);
  return report}

// Run the analysis;

  '❌ Error analyzing website:', error.message);
  process.exit(1)}



