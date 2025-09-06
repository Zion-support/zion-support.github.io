<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;

=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
=======
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this && this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs && testDirs.forEach(dir => { if (fs && fs.existsSync(dir)) { const files = fs && fs.readdirSync(dir); const testFiles = files && files.filter(file => file && file.includes('.test.') || file && file.includes('.spec.') ); testFilesFound += testFiles && testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this && this.results,summary: { testFilesFound: this && this.checkTestFiles(),testScriptExists: this && this.checkPackageJsonScripts() } fs && fs.writeFileSync('test-report && report.json',JSON && JSON.stringify(report,null,2)); } } if (require && require.main === module) { const runner = new TestRunner(); runner && runner.generateReport()} module && module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this && this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs && testDirs.forEach(dir => { if (fs && fs.existsSync(dir)) { const files = fs && fs.readdirSync(dir); const testFiles = files && files.filter(file => file && file.includes('.test.') || file && file.includes('.spec.') ); testFilesFound += testFiles && testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this && this.results,summary: { testFilesFound: this && this.checkTestFiles(),testScriptExists: this && this.checkPackageJsonScripts() } fs && fs.writeFileSync('test-report && report.json',JSON && JSON.stringify(report,null,2)); } } if (require && require.main === module) { const runner = new TestRunner(); runner && runner.generateReport()} module && module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this && this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs && testDirs.forEach(dir => { if (fs && fs.existsSync(dir)) { const files = fs && fs.readdirSync(dir); const testFiles = files && files.filter(file => file && file.includes('.test.') || file && file.includes('.spec.') ); testFilesFound += testFiles && testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this && this.results,summary: { testFilesFound: this && this.checkTestFiles(),testScriptExists: this && this.checkPackageJsonScripts() } fs && fs.writeFileSync('test-report && report.json',JSON && JSON.stringify(report,null,2)); } } if (require && require.main === module) { const runner = new TestRunner(); runner && runner.generateReport()} module && module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this && this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs && testDirs.forEach(dir => { if (fs && fs.existsSync(dir)) { const files = fs && fs.readdirSync(dir); const testFiles = files && files.filter(file => file && file.includes('.test.') || file && file.includes('.spec.') ); testFilesFound += testFiles && testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this && this.results,summary: { testFilesFound: this && this.checkTestFiles(),testScriptExists: this && this.checkPackageJsonScripts() } fs && fs.writeFileSync('test-report && report.json',JSON && JSON.stringify(report,null,2)); } } if (require && require.main === module) { const runner = new TestRunner(); runner && runner.generateReport()} module && module.exports = TestRunner;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/test-runner.js
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
#!/usr/bin/env node
const fs = // // require('fs');
const path = // // require('path');
class TestRunner {
  constructor() {
    this.results = {
      "unit": { passed: 0, "failed": 0 },
      "integration": { passed: 0, "failed": 0 },
      "e2e": { passed: 0, "failed": 0 }
  }
  checkTestFiles() {
    const testDirs = ['__tests__', 'src/__tests__', 'tests'];
    let testFilesFound = 0;
    testDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        const testFiles = files.filter(file => 
          file.includes('.test.') || file.includes('.spec.')
        );
        testFilesFound += testFiles.length;
      }
    });
    if (testFilesFound === 0) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      console.log('⚠️ No test files found');
    } else {
      console.log(`✅ Found ${testFilesFound} test files`);
    }
    return testFilesFound;
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      console.log('⚠️ No test files found')} else {
      console.log(`✅ Found ${testFilesFound} test files`)}
    return testFilesFound}
  checkPackageJsonScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.test) {
        console.log('⚠️ No test script found in package.json');
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        return false;
      }
      console.log('✅ Test script found in package.json');
      return true;
    } catch (error) {
      console.log('❌ Error reading package.json:', error.message);
      return false;
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        return false}
      console.log('✅ Test script found in package.json');
      return true} catch (error) {
      console.log('❌ Error reading package."json": ', error.message);
      return false}
  }
  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "results": this.results,
      "summary": {
        testFilesFound: this.checkTestFiles(),
        "testScriptExists": this.checkPackageJsonScripts()
      }
    fs.writeFileSync('test-report.json', JSON.stringify(report, null, 2));
    console.log('Test report generated');
  }

<<<<<<< HEAD
if (require.main === module) {
  const runner = new TestRunner();
<<<<<<< HEAD
=======
  runner.generateReport();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
<<<<<<< HEAD

=======
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  runner.generateReport();
}
module.exports = TestRunner;
  runner.generateReport()}
module.exports = TestRunner;
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
if (require && require.main === module) {
  const runner = new TestRunner();
  runner && runner.generateReport();
}
module && module.exports = TestRunner;
  runner && runner.generateReport()}
module && module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this && this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs && testDirs.forEach(dir => { if (fs && fs.existsSync(dir)) { const files = fs && fs.readdirSync(dir); const testFiles = files && files.filter(file => file && file.includes('.test.') || file && file.includes('.spec.') ); testFilesFound += testFiles && testFiles.length} }); if (testFilesFound === 0) { console && console.log('⚠️ No test files found')} else { console && console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.test) { console && console.log('⚠️ No test script found in package && package.json'); return false} console && console.log('✅ Test script found in package && package.json'); return true} catch (error) { console && console.log('❌ Error reading package && package.json:',error && error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this && this.results,summary: { testFilesFound: this && this.checkTestFiles(),testScriptExists: this && this.checkPackageJsonScripts() } fs && fs.writeFileSync('test-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Test report generated')} } if (require && require.main === module) { const runner = new TestRunner(); runner && runner.generateReport()} module && module.exports = TestRunner;
  runner && runner.generateReport()}
module && module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this && this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs && testDirs.forEach(dir => { if (fs && fs.existsSync(dir)) { const files = fs && fs.readdirSync(dir); const testFiles = files && files.filter(file => file && file.includes('.test.') || file && file.includes('.spec.') ); testFilesFound += testFiles && testFiles.length} }); if (testFilesFound === 0) { console && console.log('⚠️ No test files found')} else { console && console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.test) { console && console.log('⚠️ No test script found in package && package.json'); return false} console && console.log('✅ Test script found in package && package.json'); return true} catch (error) { console && console.log('❌ Error reading package && package.json:',error && error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this && this.results,summary: { testFilesFound: this && this.checkTestFiles(),testScriptExists: this && this.checkPackageJsonScripts() } fs && fs.writeFileSync('test-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Test report generated')} } if (require && require.main === module) { const runner = new TestRunner(); runner && runner.generateReport()} module && module.exports = TestRunner;
  runner && runner.generateReport()}
module && module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this && this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs && testDirs.forEach(dir => { if (fs && fs.existsSync(dir)) { const files = fs && fs.readdirSync(dir); const testFiles = files && files.filter(file => file && file.includes('.test.') || file && file.includes('.spec.') ); testFilesFound += testFiles && testFiles.length} }); if (testFilesFound === 0) { console && console.log('⚠️ No test files found')} else { console && console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json','utf8')); if (!packageJson && packageJson.scripts.test) { console && console.log('⚠️ No test script found in package && package.json'); return false} console && console.log('✅ Test script found in package && package.json'); return true} catch (error) { console && console.log('❌ Error reading package && package.json:',error && error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this && this.results,summary: { testFilesFound: this && this.checkTestFiles(),testScriptExists: this && this.checkPackageJsonScripts() } fs && fs.writeFileSync('test-report && report.json',JSON && JSON.stringify(report,null,2)); console && console.log('Test report generated')} } if (require && require.main === module) { const runner = new TestRunner(); runner && runner.generateReport()} module && module.exports = TestRunner;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
