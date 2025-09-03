
// Get automation interval from environment variable (default: 15 minutes);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 900000 // 15 minutes;
async function runConsoleErrorFixer() {
  try {'
    // // // console.log(`🔧 Running console error fixer at ${new Date().toISOString()}`);
    // Build the project first;

  , error.message);
    // // // // // // // console.log(`🔧 Running console error fixer at ${new Date().toISOString()  }`);
    // Build the project first;

  '⚠️  Build failed but continuing...');
      // // // // // // // console.log('
  'Build error:,

  , error.message);
      return;
    // Check if dist folder exists;
    const distPath = path.join(process.cwd(),;
  'dist');

    const buildConsoleStatements = findConsoleStatements(distPath);
    if (buildConsoleStatements.length > 0) {'
      // // // console.log(`⚠️  Found ${buildConsoleStatements.length} console statements in build output:`);
      buildConsoleStatements.forEach(stmt => {`
        // // // console.log(`  - ${stmt.file}:${stmt.line}: ${stmt.statement}`)})} else {

      // // // console.log(`⚠️  Found ${errorPatterns.length} potential error patterns:`);
      errorPatterns.forEach(pattern => {`
        // // // console.log(`  - ${pattern.file}:${pattern.line}: ${pattern.pattern}`)})} else {

  '⚠️  Linting found issues, checking for console errors...');
      const lintOutput = error.message;
      if (lintOutput.includes('
  'console.')) {
        // // // console.log('
  '⚠️  Console statements detected in linting output');

    const buildConsoleStatements = findConsoleStatements(distPath);
    if (buildConsoleStatements.length > 0) {'
      // // // // // // // console.log(`⚠️  Found ${buildConsoleStatements.length} console statements in build output:`);
      buildConsoleStatements.forEach(stmt => {`
        // // // // // // // console.log(`  - ${stmt.file}:${stmt.line}: ${stmt.statement}`)})} else {

      // // // // // // // console.log(`⚠️  Found ${errorPatterns.length} potential error patterns:`);
      errorPatterns.forEach(pattern => {`
        // // // // // // // console.log(`  - ${pattern.file}:${pattern.line}: ${pattern.pattern}`)})} else {

  '⚠️  Linting found issues, checking for console errors...');
      const lintOutput = error.message;
      if (lintOutput.includes('
  'console.')) {

    }
    // Generate console error fixer report;
    // // // // // // // console.log('
  '📊 Generating console error fixer report...');
    // Generate console error fixer report;
  status: 'completed}


  '📊 Generating console error fixer report...');
    const reportPath = path.join(process.cwd(),;
  'console-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    // // // console.log(`✅ Console error fixer report saved to ${reportPath}`);

  '❌ Continuous console error fixer failed:', error.message);

    // Don;
  't exit, just log the error and continue;
function findConsoleStatements(dir) {;
  const consoleStatements = [];
  function scanDirectory(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);
      for (const item of items) {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);

          scanDirectory(fullPath)} else if (item.endsWith('.js;

  ') || item.endsWith('.jsx;
  ') || item.endsWith('.ts;
  ') || item.endsWith('.tsx;

            const content = fs.readFileSync(fullPath, 'utf8;
  ');
            const lines = content.split('\n;
  ');

              if (line.includes('console.;
  ')) {;
                const match = line.match(/console\.\w+/);


      // Skip directories that can;
  't be accessed;
  scanDirectory(dir);
  return consoleStatements;
function findErrorPatterns(dir) {;
  const errorPatterns = [];
  function scanDirectory(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);
      for (const item of items) {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);

          scanDirectory(fullPath)} else if (item.endsWith('.js;

  ') || item.endsWith('.jsx;
  ') || item.endsWith('.ts;
  ') || item.endsWith('.tsx;

            const content = fs.readFileSync(fullPath, 'utf8;
  ');
            const lines = content.split('\n;
  ');
            lines.forEach((line, index) => {;
              // Check for common error patterns;

                'throw new Error;

            // Skip files that can,
  t be read  } catch (error) {  


  '];
              patterns.forEach(pattern => {;
                if (line.includes(pattern)) {;
                  errorPatterns.push({;
                    file: path.relative(process.cwd(), fullPath),;
                    line: index + 1,;
                    pattern: pattern})})})} catch (error) {;
            // Skip files that can,;
  t be read} catch (error) {;

      // Skip directories that can;


  // // // console.log(`🚀 Starting continuous console error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // Run initial console error fixer;
  await runConsoleErrorFixer();
  // Set up continuous execution;

  // // // // // // // console.log(`✅ Continuous console error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)}

  // // // // // // // console.log('🛑 Received SIGINT, shutting down gracefully...;
  ');
  // // // console.log(`✅ Continuous console error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown;`
process.on('SIGINT;

  // // // console.log('🛑 Received SIGINT, shutting down gracefully...;
  ');
  process.exit(0)});

process.on('SIGTERM;

  // // // // // // // console.log('🛑 Received SIGTERM, shutting down gracefully...;
  ');
  // // // console.log('🛑 Received SIGTERM, shutting down gracefully...;
  ');
  process.exit(0)});
// Start the continuous console error fixer;

  // // // // // // // console.error('❌ Failed to start continuous console error fixer: , error);
  // // // console.error('❌ Failed to start continuous console error fixer:', error);

  process.exit(1)})}}}}}}}}}}}}}}}}}}}}}}}}})));

