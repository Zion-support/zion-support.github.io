

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours;
async function runSmartDependencyFixer() {
  try {


    );
;
    const issues = {;
      outdated: [],;
      vulnerabilities: [],;
      conflicts: [],;
      missing: [],;
      fixed: [],}}).toString();
      const outdatedData = JSON.parse(outdatedOutput);
      issues.outdated = Object.keys(outdatedData).map(pkg => ({;
        name: pkg,;
        current: outdatedData[pkg].current,;
        latest: outdatedData[pkg].latest,;
        wanted: outdatedData[pkg].wanted,}));
      console.log(📊 Found ${issues.outdated.length} outdated packages)}).toString();
      const auditData = JSON.parse(auditOutput);
      if (auditData.vulnerabilities) {;
        issues.vulnerabilities = Object.keys(auditData.vulnerabilities).map(;
          pkg => ({;
            name: pkg,;
            severity: auditData.vulnerabilities[pkg].severity,;
            title: auditData.vulnerabilities[pkg].title,;
            via: auditData.vulnerabilities[pkg].via,});
        );

        )}
    } catch (error) {;
      console.log('✅ No security vulnerabilities found')}
;
    // Step 3: Check for dependency conflicts;
    console.log('🔍 Step 3: Checking for dependency conflicts...');
    try {;
      const lsOutput = execSync('npm ls --json' { stdio: 'pipe' }).toString();
      const lsData = JSON.parse(lsOutput);
      if (lsData.problems) {;
        issues.conflicts = lsData.problems.filter(;
          problem =>;
            problem.includes('conflict') ||;
            problem.includes('missing') ||;
            problem.includes('peer');
        );console.log(📊 Found ${issues.conflicts.length} dependency conflicts)}
    } catch (error) {;
      console.log('✅ No dependency conflicts found')}

    console.log('🔍 Step 4: Checking for missing packages...'`);
    try {;
      const checkOutput = execSync('npm check --json' {;
        stdio: 'pipe',}).toString();
      const checkData = JSON.parse(checkOutput);
      if (checkData.missing) {;
        issues.missing = checkData.missing;console.log(`📊 Found ${issues.missing.length} missing packages)}


    );
    try {;
      execSync('npm install' { stdio: 'inherit' });
      console.log('✅ npm install completed successfully')};

    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log(✅ Dependency fixer report saved to ${reportPath});
;
    console.log('✅ Smart dependency fixer completed successfully')} catch (error) {;
    console.error('❌ Smart dependency fixer failed:', error.message)}

}
;
async function autoFixDependencyIssues(issues) {;
  const fixedIssues = [];


    console.log('🔧 Attempting to fix security vulnerabilities...'`);
    try {;
      execSync('npm audit fix' { stdio: 'inherit' });
      fixedIssues.push({;
        type: 'vulnerabilities',;
        message: 'Applied npm audit fix',})}

  }
;
  // Fix outdated packages (only minor and patch updates);
  if (issues.outdated.length > 0) {;
    console.log('🔧 Attempting to update outdated packages...');
    const safeUpdates = issues.outdated.filter(pkg => {;
      const current = pkg.current.split('.');

      execSync('npm install' { stdio: 'inherit' });
      fixedIssues.push({;
        type: 'missing',;
        message: 'Reinstalled all packages',});

      console.log('⚠️  Could not install missing packages')}
  }

    console.log('🔧 Attempting to fix peer dependency issues...');
    try {;
      execSync('npm install --legacy-peer-deps' { stdio: 'inherit' });
      fixedIssues.push({;
        type: 'peerDependencies',;
        message: 'Fixed peer dependency issues with legacy flag',});

      console.log('⚠️  Could not fix peer dependency issues')}
  }
;
  return fixedIssues}
;
async function verifyDependencyFixes(issues) {;
  console.log('🔍 Verifying that dependency issues have been resolved...');

      console.log('✅ Security vulnerabilities resolved')} else {;
      console.log('⚠️  Some security vulnerabilities remain')}

    const lsOutput = execSync('npm ls --json' { stdio: 'pipe' }).toString();
    const lsData = JSON.parse(lsOutput);
    if (!lsData.problems || lsData.problems.length === 0) {;
      console.log('✅ Dependency conflicts resolved')} else {;
      console.log('⚠️  Some dependency conflicts remain')}

    }).toString();
    const checkData = JSON.parse(checkOutput);
    if (!checkData.missing || checkData.missing.length === 0) {;
      console.log('✅ Missing packages resolved')} else {;
      console.log('⚠️  Some missing packages remain')}

  )}
;
module.exports = { runSmartDependencyFixer };
