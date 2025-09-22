<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/scripts/test-runner.js
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
========
<<<<<<< HEAD:scripts/test-runner.js
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD:scripts/test-runner.js
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
=======
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
    testDirs && testDirs.forEach(dir => {
      if (fs && fs.existsSync(dir)) {
        const files = fs && fs.readdirSync(dir);
<<<<<<< HEAD
        const testFiles = files && files.filter(file =>
=======
        const testFiles = files && files.filter(file => 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          file && file.includes('.test.') || file && file.includes('.spec.')
=======
    testDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        const testFiles = files.filter(file => 
          file.includes('.test.') || file.includes('.spec.')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        );
        testFilesFound += testFiles.length;
      }
    });
    if (testFilesFound === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/scripts/test-runner.js
========
<<<<<<< HEAD
<<<<<<< HEAD:scripts/test-runner.js
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
      console.log('⚠️ No test files found');
      console && console.log('⚠️ No test files found');
    } else {
      console && console.log(`✅ Found ${testFilesFound} test files`);
    }
    return testFilesFound;
  }
<<<<<<<< HEAD:backup-problematic-files/scripts/test-runner.js
========
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
      console.log('⚠️ No test files found')} else {
      console.log(`✅ Found ${testFilesFound} test files`)}
=======
    }
    return testFilesFound;
  }
      console.log(' No test files found')} else {
      console.log(` Found ${testFilesFound} test files`)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<
      console.log('⚠️ No test files found');
    } else {
      console.log(`✅ Found ${testFilesFound} test files`);
    }
    return testFilesFound;
  }
<
      console.log('⚠️ No test files found')} else {
      console.log(`✅ Found ${testFilesFound} test files`)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return testFilesFound}
  checkPackageJsonScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.test) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log('⚠️ No test script found in package.json');
<<<<<<<< HEAD:backup-problematic-files/scripts/test-runner.js
========
<<<<<<< HEAD
<<<<<<< HEAD:scripts/test-runner.js
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
        return false;
      }
      console.log('✅ Test script found in package.json');
      console && console.log('⚠️ No test files found')} else {
      console && console.log(`✅ Found ${testFilesFound} test files`)}
    return testFilesFound}
  checkPackageJsonScripts() {
    try {
      const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json', 'utf8'));
      if (!packageJson && packageJson.scripts.test) {
        console && console.log('⚠️ No test script found in package && package.json');
        return false;
      }
    console && console.log('⚠️ No test script found in package && package.json'),
            return false
  }
      console && console.log('✅ Test script found in package && package.json');
      return true;
    } catch (error) {
      console && console.log('❌ Error reading package && package.json:', error && error.message);
      return false;
    }
<<<<<<<< HEAD:backup-problematic-files/scripts/test-runner.js
========
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
        return false}
      console && console.log('✅ Test script found in package && package.json');
      return true} catch (error) {
      console && console.log('❌ Error reading package."json": ', error && error.message);
=======
        console.log(' No test script found in package.json');
        return false;
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        console.log('⚠️ No test script found in package.json');
<
        return false;
      }
      console.log('✅ Test script found in package.json');
      return true;
    } catch (error) {
      console.log('❌ Error reading package.json:', error.message);
      return false;
    }
<
        return false}
      console.log('✅ Test script found in package.json');
      return true} catch (error) {
      console.log('❌ Error reading package."json": ', error.message);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
}
if (require.main === module) {
  const runner = new TestRunner();
<<<<<<<< HEAD:backup-problematic-files/scripts/test-runner.js
========
<<<<<<< HEAD:scripts/test-runner.js
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
if (require.main === module) {
  const runner = new TestRunner();
<
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  runner.generateReport();
}
module.exports = TestRunner;
  runner.generateReport()}
module.exports = TestRunner;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { } else { } return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) {  return false}  return true} catch (error) {  return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); } } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
#!/usr/bin/env node;
const fs = // // require('fs');
const path = // // require('path');
class TestRunner {
  // TODO: Implement
}
  constructor() {
    this && this.results = {
      "unit": { passed: 0, "failed": 0 },""
      "integration": { passed: 0, "failed": 0 },""
      "e2e": { passed: 0, "failed": 0 }"
  checkTestFiles() {"
    const testDirs = ['__tests__', 'src/__tests__', 'tests'];
    let testFilesFound = 0;
    testDirs && testDirs.forEach(dir => {)
      if (fs && fs.existsSync(dir)) {
        const files = fs && fs.readdirSync(dir);
        const testFiles = files && files.filter(file => )
          file && file.includes('.test.') || file && file.includes('.spec.')
        );
        testFilesFound += testFiles && testFiles.length;
    });
    if (testFilesFound === 0) {
    return testFilesFound;
      console.log(' No test files found')} else {
  // TODO: Implement
      console.log(` Found ${testFilesFound} test files`)}
    return testFilesFound}
  checkPackageJsonScripts() {
    try {
  // TODO: Implement
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.test) {
        console.log(' No test script found in package.json');
        return false;
      return false}
  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),""
      "results": this && this.results,""
      "summary": {"
        testFilesFound: this && this.checkTestFiles(),"
        "testScriptExists": this && this.checkPackageJsonScripts()"
      }"
    fs && fs.writeFileSync('test-report && report.json', JSON && JSON.stringify(report, null, 2));
    console && console.log('Test report generated');
  runner.generateReport();
module.exports = TestRunner;
  runner.generateReport()}
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
