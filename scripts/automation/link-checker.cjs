

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;
async function checkLinks() {
  try {

      execSync('npm run build' { stdio: 'inherit' });
      console.log('✅ Build completed'`)} catch (error) {;
      console.log('⚠️  Build failed but continuing...');
      return}
;

    // Check if dist folder exists;
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {;
      console.log('⚠️  Dist folder not found, skipping link check');
      return}

        const references = findReferences(content);
;
        for (const ref of references) {;
          if (!isValidReference(ref, distPath)) {;
            brokenReferences.push({;
              file: path.relative(process.cwd(), htmlFile),;
              reference: ref,});
            hasIssues = true}
        }
      } catch (error) {  console.log(⚠️  Could not read ${htmlFile  }: ${error.message}``)}
    }

    }
;
    // Generate report;
    const report = {;
      timestamp: new Date().toISOString(),;
      hasIssues,;
      htmlFiles: htmlFiles.length,;
      brokenReferences: brokenReferences.length,;
      summary: 'Link check completed',};
;
    const reportPath = path.join(process.cwd(), 'link-checker-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log(📊 Report saved to ${reportPath}`)} catch (error) {;
    console.error('❌ Link check failed:', error.message);
    // Don't exit, just log the error and continue}

}
;
function findHtmlFiles(dir) {;
  const files = [];
  const items = fs.readdirSync(dir);
;
  for (const item of items) {;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
    if (stat.isDirectory()) {;
      files.push(...findHtmlFiles(fullPath));

      files.push(fullPath)}
  }
;
  return files}
;
function findReferences(content) {;
  const references = [];

  // Find href attributes;
  const hrefMatches = content.match(/href=["']([^"']+)["']/g);
  if (hrefMatches) {;
    hrefMatches.forEach(match => {;
      const href = match.match(/href=["']([^"']+)["']/)[1];
      if (;
        href &&;
        !href.startsWith('#') &&;
        !href.startsWith('javascript:') &&;
        !href.startsWith('http');
      ) {;
        references.push(href)}
    })}

  // Find src attributes;
  const srcMatches = content.match(/src=["']([^"']+)["']/g);
  if (srcMatches) {;
    srcMatches.forEach(match => {;
      const src = match.match(/src=["']([^"']+)["']/)[1];

        references.push(src)}
    })}
;
  return references}

    ref = ref.substring(1)}
;
  const fullPath = path.join(distPath, ref);
  return fs.existsSync(fullPath)}

  );
;
  // Run initial check;
  await checkLinks();
;
  // Set up continuous execution;
  setInterval(async () => {;
    await checkLinks()}, AUTOMATION_INTERVAL);

  `)}
;
// Handle graceful shutdown;
process.on('SIGINT', () => {;
  console.log('🛑 Received SIGINT, shutting down gracefully...');

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start continuous link checker:', error);
  process.exit(1)});
