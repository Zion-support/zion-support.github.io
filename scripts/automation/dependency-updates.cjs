

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours;
async function runDependencyUpdates() {
  try {

      execSync('npm outdated' { stdio: 'inherit' })} catch (error) {;
      console.log('✅ All dependencies are up to date'`);
      return}

    try {

      execSync('npm audit --audit-level=moderate' { stdio: 'inherit' });
      console.log('✅ No security vulnerabilities found');

        console.log('✅ Security vulnerabilities fixed')} catch (fixError) {;
        console.log('❌ Could not fix security vulnerabilities')}
    }

    // Update minor and patch versions;
    console.log('🔄 Updating minor and patch versions...');
    try {;
      execSync('npm update' { stdio: 'inherit' });
      console.log('✅ Minor and patch updates completed');

    // Check for major version updates;
    console.log('🔍 Checking for major version updates...');
    try {;
      const outdatedOutput = execSync('npm outdated --json' {;
        encoding: 'utf8',});
      const outdated = JSON.parse(outdatedOutput);
;
      const majorUpdates = Object.entries(outdated).filter((['pkg', 'info']) => {;
        const current = info.current.split('.')[0];
        const latest = info.latest.split('.')[0];
        return current !== latest});
;
      if (majorUpdates.length > 0) {;
        console.log('⚠️  Major version updates available:');
        majorUpdates.forEach(([`pkg`, `info`]) => {console.log(  - ${pkg}: ${info.current} → ${info.latest})})}
;
    // Install dependencies;
    console.log('📦 Installing updated dependencies...');
    execSync('npm install' { stdio: 'inherit' });
;

    // Run tests to ensure nothing broke;
    console.log('🧪 Running tests after updates...');
    try {;
      execSync('npm test' { stdio: 'inherit' });
      console.log('✅ Tests passed after updates');

  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start continuous dependency updates:', error);
  process.exit(1)});
