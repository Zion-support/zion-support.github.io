<<<<<<< HEAD
#!/''usr/bin/env'' node;
const fs = require('fs');
const path = require('path');
const { execSync } = require(`child_process`);

console.log(``🔗 Starting continuous link checker automation...`);
=======
#!/'usr/bin/env' node;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
;
console.log(`'🔗 Starting continuous link checker automation...');
;
// Get automation interval from environment variable (default: 30 minutes);
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;

async function checkLinks() {;
  try {;
    console.log(`🔗 Running link check at ${new Date().toISOString()});
;
    // Build the project first;
    console.log(`'📦 Building project...');
    try {;
=======

console.log(`🔗 Starting continuous link checker automation...`);
>>>>>>> main

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;
async function checkLinks() {
  try {
<<<<<<< HEAD
    console.log(`🔗 Running link check at ${new Date().toISOString()});

    // Build the project first;
    console.log(``📦 Building project...`);
    try {
      execSync(`npm run build`, { stdio: 'inherit' });
      console.log('✅ Build completed'`);
    } catch (error) {  
      console.log('⚠️  Build failed but continuing...');
      return;
      }

=======
    console.log(`🔗 Running link check at ${new Date().toISOString()});`);
`);
    // Build the project first`);
    console.log(`📦 Building project...`);
    try {
>>>>>>> main
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed'`);
    } catch (error) {;
      console.log('⚠️  Build failed but continuing...');
      return;
    }
;
>>>>>>> main
    // Check if dist folder exists;
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {;
      console.log('⚠️  Dist folder not found, skipping link check');
      return;
    }
<<<<<<< HEAD

    // Check for index.html;
    const indexHtmlPath = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      console.log(`⚠️  index.html not found in build output`);
      return;
    }

    console.log(`✅ index.html found in build output`);

    // Find all HTML files;
    const htmlFiles = findHtmlFiles(distPath);console.log(📄 Found ${htmlFiles.length} HTML files to check);

    // Check for broken references;
    let hasIssues = false;
    const brokenReferences = [];

    for (const htmlFile of htmlFiles) {
      try {
        const content = fs.readFileSync(htmlFile, `utf8`);
=======
;
    // Check for index.html;
    const indexHtmlPath = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {;
      console.log('⚠️  index.html not found in build output');
      return;
    }
;
    console.log('✅ index.html found in build output');
;
    // Find all HTML files;
    const htmlFiles = findHtmlFiles(distPath);console.log(📄 Found ${htmlFiles.length} HTML files to check);
;
    // Check for broken references;
    let hasIssues = false;
    const brokenReferences = [];
;
    for (const htmlFile of htmlFiles) {;
      try {;
        const content = fs.readFileSync(htmlFile, 'utf8');
>>>>>>> main
        const references = findReferences(content);
;
        for (const ref of references) {;
          if (!isValidReference(ref, distPath)) {;
            brokenReferences.push({;
              file: path.relative(process.cwd(), htmlFile),;
              reference: ref,;
            });
            hasIssues = true;
          }
        }
      } catch (error) {  console.log(⚠️  Could not read ${htmlFile  }: ${error.message}``);
      }
    }
<<<<<<< HEAD

    if (brokenReferences.length > 0) {
      console.log(``⚠️  Broken references found:`);
      brokenReferences.forEach(ref => {console.log(`  - ${ref.file}: ${ref.reference});
      });
    }

    if (!hasIssues) {
      console.log(``✅ No broken references found`);
    }

    // Generate report;
    const report = {
      timestamp: new Date().toISOString(),
      hasIssues,
      htmlFiles: htmlFiles.length,
      brokenReferences: brokenReferences.length,
      summary: `Link check completed`,
    };

    const reportPath = path.join(process.cwd(), `link-checker-report.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log(📊 Report saved to ${reportPath}`);
  } catch (error) {  
    console.error(`❌ Link check failed:`, error.message);
    // Don`t exit, just log the error and continue;
    }
=======
<<<<<<< HEAD
;
    if (brokenReferences.length > 0) {;
      console.log(`'⚠️  Broken references found:');
      brokenReferences.forEach(ref => {console.log(`  - ${ref.file}: ${ref.reference});
      });
    }
;
    if (!hasIssues) {;
      console.log(`'✅ No broken references found');
=======

    if (brokenReferences.length > 0) {
      console.log(`⚠️  Broken references found:`);
      brokenReferences.forEach(ref => {console.log(`  - ${ref.file}: ${ref.reference});
      });`);
    }`);
`);
    if (!hasIssues) {`);
      console.log(`✅ No broken references found`);
>>>>>>> main
    }
;
    // Generate report;
    const report = {;
      timestamp: new Date().toISOString(),;
      hasIssues,;
      htmlFiles: htmlFiles.length,;
      brokenReferences: brokenReferences.length,;
      summary: 'Link check completed',;
    };
;
    const reportPath = path.join(process.cwd(), 'link-checker-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log(📊 Report saved to ${reportPath}`);
  } catch (error) {;
    console.error('❌ Link check failed:', error.message);
    // Don't exit, just log the error and continue;
  }
>>>>>>> main
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
<<<<<<< HEAD
    } else if (item.endsWith(`.html')) {
=======
    } else if (item.endsWith('.html')) {;
>>>>>>> main
      files.push(fullPath);
    }
  }
;
  return files;
}
;
function findReferences(content) {;
  const references = [];
<<<<<<< HEAD

=======
;
>>>>>>> main
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
        references.push(href);
      }
    });
  }
<<<<<<< HEAD

=======
;
>>>>>>> main
  // Find src attributes;
  const srcMatches = content.match(/src=["']([^"']+)["']/g);
  if (srcMatches) {;
    srcMatches.forEach(match => {;
      const src = match.match(/src=["']([^"']+)["']/)[1];
<<<<<<< HEAD
      if (
        src &&
        !src.startsWith('data:') &&
        !src.startsWith('blob:') &&
        !src.startsWith(`http`)
      ) {
=======
      if (;
        src &&;
        !src.startsWith('data:') &&;
        !src.startsWith('blob:') &&;
        !src.startsWith('http');
      ) {;
>>>>>>> main
        references.push(src);
      }
    });
  }
;
  return references;
}
<<<<<<< HEAD

function isValidReference(ref, distPath) {
  if (ref.startsWith(`/`)) {
=======
;
function isValidReference(ref, distPath) {;
  if (ref.startsWith('/')) {;
>>>>>>> main
    ref = ref.substring(1);
  }
;
  const fullPath = path.join(distPath, ref);
  return fs.existsSync(fullPath);
}
<<<<<<< HEAD
;
// Main continuous loop;
async function runContinuous() {;
  console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals';
=======

// Main continuous loop;
async function runContinuous() {
<<<<<<< HEAD
  console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`
  );

  // Run initial check;
  await checkLinks();

  // Set up continuous execution;
  setInterval(async () => {
    await checkLinks();
  }, AUTOMATION_INTERVAL);

  console.log( ✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes;
  `);
}

// Handle graceful shutdown;
process.on(`SIGINT`, () => {
  console.log(`🛑 Received SIGINT, shutting down gracefully...');
=======
  console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
>>>>>>> main
  );
;
  // Run initial check;
  await checkLinks();
;
  // Set up continuous execution;
  setInterval(async () => {;
    await checkLinks();
  }, AUTOMATION_INTERVAL);
<<<<<<< HEAD
;
  console.log( ✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes;
=======
`);
  console.log( ✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
>>>>>>> main
  `);
}
;
// Handle graceful shutdown;
process.on('SIGINT', () => {;
  console.log('🛑 Received SIGINT, shutting down gracefully...');
>>>>>>> main
  process.exit(0);
});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});
<<<<<<< HEAD

// Start the continuous link checker;
runContinuous().catch(error => {
=======
;
// Start the continuous link checker;
runContinuous().catch(error => {;
>>>>>>> main
  console.error('❌ Failed to start continuous link checker:', error);
  process.exit(1);
});
