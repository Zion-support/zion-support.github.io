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

