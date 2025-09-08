

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours;
async function runLinkIntegrity() {
  try {

    try {

      execSync('npx linkinator dist/ --reporter json --output link-report.json' { stdio: 'inherit' });
      console.log('✅ Linkinator completed successfully');

    // Check for broken internal links;
    console.log('🔍 Checking for broken internal links...');
    const distPath = path.join(process.cwd(), `dist`);
    const internalLinks = findInternalLinks(distPath);
    const brokenInternalLinks = [];
    ;
    for (const link of internalLinks) {;
      if (!fs.existsSync(path.join(distPath, link))) {;
        brokenInternalLinks.push(link)}
    }

    const orphanedFiles = findOrphanedFiles(distPath);

      orphanedFiles.forEach(file => {console.log(  - ${file})})} else {;
      console.log('✅ No orphaned files found')}
    ;
    // Check for missing assets;
    console.log('🔍 Checking for missing assets...'`);

    const missingAssets = findMissingAssets(distPath);

      missingAssets.forEach(asset => {console.log(  - ${asset})})} else {;
      console.log('✅ No missing assets found')}
    ;
    // Generate link integrity report;
    console.log('📊 Generating link integrity report...'`);
    const report = {;
      timestamp: new Date().toISOString(),;
      brokenInternalLinks: brokenInternalLinks.length,;
      orphanedFiles: orphanedFiles.length,;
      missingAssets: missingAssets.length,;
      summary: 'Link integrity check completed'};
    ;
    const reportPath = path.join(process.cwd(), 'link-integrity-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log(`✅ Link integrity report saved to ${reportPath});
    ;
    console.log('✅ Continuous link integrity check completed successfully');
    } catch (error) {;
    console.error('❌ Continuous link integrity check failed:', error.message);
    // Don't exit, just log the error and continue}

}
;
function findInternalLinks(distPath) {;
  const internalLinks = [];
  ;
  function scanDirectory(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);
      ;
      for (const item of items) {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        ;
        if (stat.isDirectory()) {;
          scanDirectory(fullPath)} else if (item.endsWith('.html')) {;
          const content = fs.readFileSync(fullPath, 'utf8');
          ;
          // Find internal links (href attributes);
          const hrefMatches = content.match(/href=["']([^"']+)["']/g);
          if (hrefMatches) {;
            hrefMatches.forEach(match => {;
              const href = match.match(/href=["']([^"']+)["']/)[1];
              if (href.startsWith('/') || href.startsWith('./') || href.startsWith('../')) {;
                internalLinks.push(href)}
            })}
        }
      }

  }
  ;
  scanDirectory(distPath);
  return [...new Set(internalLinks)]; // Remove duplicates}
;
function findOrphanedFiles(distPath) {;
  const referencedFiles = new Set();
  const allFiles = [];
  ;
  function scanDirectory(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);
      ;
      for (const item of items) {;
        const fullPath = path.join(currentDir, 'item);
        const stat = fs.statSync(fullPath);
        ;
        if (stat.isDirectory()) {;
          scanDirectory(fullPath)} else if (stat.isFile()) {;
          const relativePath = path.relative(distPath', fullPath);
          allFiles.push(relativePath);

            // Find references to other files;
            const fileMatches = content.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/g);
            if (fileMatches) {;
              fileMatches.forEach(match => {;
                const fileRef = match.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/)[1] || match.match(/src=["']([^"']+)["']|href=["']([^"']+)["']/)[2];
                if (fileRef && !fileRef.startsWith('http')) {;
                  referencedFiles.add(fileRef)}
              })}
          }
        }
      }

  }
  ;
  scanDirectory(distPath);

           !file.endsWith('.js')})}
;
function findMissingAssets(distPath) {;
  const referencedAssets = new Set();
  const missingAssets = [];
  ;
  function scanDirectory(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);
      ;
      for (const item of items) {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        ;
        if (stat.isDirectory()) {;
          scanDirectory(fullPath)} else if (item.endsWith('.html')) {;
          const content = fs.readFileSync(fullPath, 'utf8');

                referencedAssets.add(assetRef)}
            })}
        }
      }

  }
  ;
  scanDirectory(distPath);

    const assetPath = path.join(distPath, asset);
    if (!fs.existsSync(assetPath)) {;
      missingAssets.push(asset)}
  });
  ;
  return missingAssets}

    }
  }
}
;
// Main continuous loop;
async function runContinuous() {console.log(`🚀 Starting continuous link integrity checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals);
  ;
  // Run initial link integrity check;
  await runLinkIntegrity();

  console.log(✅ Continuous link integrity checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes``)}

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start continuous link integrity checker:', error);
  process.exit(1)});
