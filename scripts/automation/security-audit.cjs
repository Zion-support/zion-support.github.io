

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours;
async function runSecurityAudit() {
  try {

    try {
      execSync(`npm audit --audit-level=moderate` { stdio: 'inherit' });
      console.log('✅ Security audit completed - no issues found'`);

        execSync('npm audit fix --audit-level=moderate' { stdio: 'inherit' });

        console.log('✅ Security issues auto-fixed')} catch (fixError) {;
        console.log('❌ Could not auto-fix security issues');
        // Don't exit, just log the error and continue}
    }

    // Check for known vulnerabilities in dependencies;
    console.log('📦 Checking for known vulnerabilities...');
    try {;
      execSync('npm audit --json' { stdio: 'pipe' });
      console.log('✅ No known vulnerabilities found');

    // Check for outdated packages with security implications;
    console.log('🔄 Checking for outdated packages...');
    try {;
      execSync('npm outdated' { stdio: 'inherit' });

    // Run security scan if available;
    console.log('🔍 Running additional security scans...');
    try {;
      if (fs.existsSync('security-scan.js')) {;
        execSync('node security-scan.js' { stdio: 'inherit' })}

  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

  console.error('❌ Failed to start continuous security audit:', error);
  process.exit(1)});
