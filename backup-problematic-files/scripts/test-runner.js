>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
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
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
      console.log('⚠️ No test files found')} else {
      console.log(`✅ Found ${testFilesFound} test files`)}
    return testFilesFound}
  checkPackageJsonScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.test) {
        console.log('⚠️ No test script found in package.json');
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/test-runner.js
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
}
if (require.main === module) {
  const runner = new TestRunner();
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
