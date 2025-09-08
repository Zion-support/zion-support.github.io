
// Get automation interval from environment variable (default: 30 minutes);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000 // 30 minutes;
async function checkLinks() {
  try {'
    // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    // Build the project first;


  '⚠️  Build failed but continuing...');
      return;
    // Check if dist folder exists;
    const distPath = path.join(process.cwd(),;
  'dist');

  '⚠️  Dist folder not found, skipping link check');
      return;
    // Check for index.html;
    const indexHtmlPath = path.join(distPath,;
  'index.html');

  '✅ index.html found in build output');
    // Find all HTML files;
    const htmlFiles = findHtmlFiles(distPath);
    // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);

  '✅ index.html found in build output');

    // Find all HTML files;
    const htmlFiles = findHtmlFiles(distPath);
    // // // // // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);
    // Check for broken references;
    let hasIssues = false;
    const brokenReferences = [];

        const references = findReferences(content);
        
        for (const ref of references) {
          if (!isValidReference(ref, distPath)) {
            brokenReferences.push({
              file: path.relative(process.cwd(), htmlFile),
              reference: ref})

  , error.message);
    // Don;
  't exit, just log the error and continue;
  summary: 'Link check completed}

  link-checker-report.json;
  `);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // // // console.error('❌ Link check failed: , error.message);
    // Don,;

  t exit, just log the error and continue;
function files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);


      files.push(fullPath);
    }
  }
  
  return files;
  {/* Removed stray closing brace */}

function findReferences(content) {
  const references = [];
  // Find href attributes;

  ']/g);
  if (hrefMatches) {;
    hrefMatches.forEach(match => {;
      const href = match.match(/href=[']([^';
  ']+)[']/)[1];
      if (href && !href.startsWith(;
  '#') && !href.startsWith(;
  'javascript: ') && !href.startsWith(;
  'http)) {;
        references.push(href)});
  // Find src attributes;
  const srcMatches = content.match(/src=[']([^']+)[';
  ']/g);
  if (srcMatches) {;
    srcMatches.forEach(match => {;
      const src = match.match(/src=[']([^';
  ']+)[']/)[1];
      if (src && !src.startsWith(;
  'data: ') && !src.startsWith(;
  'blob:') && !src.startsWith(;
  'http)) {;
        references.push(src)});

        references.push(src)})

  return references;


    ref = ref.substring(1);
  }
  
  const fullPath = path.join(distPath, ref);
  return fs.existsSync(fullPath);
// Main continuous loop;

  // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // Run initial check;
  await checkLinks();
  // Set up continuous execution;

  process.exit(0)})
process.on('
  'SIGTERM', () => {
  // // // // // // // console.log('
  '🛑 Received SIGTERM, shutting down gracefully...');
  // // // console.log('

  '🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});
// Start the continuous link checker;

  '❌ Failed to start continuous link checker:', error);

  process.exit(1)})}}}}}}}}}}}}}}}}}}}}}}

