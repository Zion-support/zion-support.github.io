#!/usr/bin/env node const fs = const path = const glob = class ConsoleLogRemover { constructor() { this.projectRoot = process.cwd(); this.srcDir = path.join(this.projectRoot,'src'); this.reportsDir = path.join(this.projectRoot,'automation-reports'); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); } async removeConsoleLogs() { this.log('🧹 Starting console.log removal from production code'); const files = glob.sync('***.test.*','**node_modulesg,(match,offset,string) => { const beforeMatch = string.substring(0,offset); const afterMatch = string.substring(offset + match.length); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); newContent = newContent.replace( /console\.(warn|error|info)\([^)]*\);?\s*/g,(match,offset,string) => { const beforeMatch = string.substring(0,offset); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); if (newContent !== originalContent) { fs.writeFileSync(filePath,newContent,'utf8'); this.log(`✅ Cleaned console statements from: ${file}`)} results.processed++} catch (error) { results.errors.push({ file,error: error.message }); this.log(`❌ Error processing ${file}: ${error.message}`)} } const report = { timestamp: new Date().toISOString(),summary: { filesProcessed: results.processed,consoleLogsRemoved: results.removed,errors: results.errors.length },details: results }; const reportPath = path.join(this.reportsDir,'console-log-removal-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); this.log(`📊 Report generated: ${reportPath}`); this.log(`✅ Console log removal completed: ${results.removed} statements removed from ${results.processed} files`); return report} } if (require.main === module) { const remover = new ConsoleLogRemover(); remover.removeConsoleLogs() .then(() => {  process.exit(0)}) .catch((error) => { console.error('❌ Console log removal failed:',error); process.exit(1)})} module.exports = ConsoleLogRemover;
#!/usr/bin/env node
const fs = // // require('fs');
const path = // // require('path');
const glob = // // require('glob');
class ConsoleLogRemover {
  constructor() {
    this.projectRoot = process.cwd();
    this.srcDir = path.join(this.projectRoot, 'src');
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}
  async removeConsoleLogs() {
    this.log('🧹 Starting console.log removal from production code');
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', {
      "cwd": this.srcDir,
      "ignore": ['**/*.test.*', '**/*.spec.*', '**/node_modules/**']
    });
    const results = {
      "processed": 0,
      "removed": 0,
      "errors": []
    };
    for (const file of files) {
      const filePath = path.join(this.srcDir, file);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        // Remove console.log statements that are not in development blocks
        let newContent = content.replace(
          /console\.log\([^)]*\);?\s*/g,
          (match, offset, string) => {
            // Check if this console.log is already in a development block
            const beforeMatch = string.substring(0, offset);
            const afterMatch = string.substring(offset + match.length);
            // If it's already wrapped in a development check, keep it
            if (beforeMatch.includes('NODE_ENV === \'development\'') || 
                beforeMatch.includes('process.env.NODE_ENV')) {
              return match}
            results.removed++;
            return ''}
        );
        // Also remove console.warn, console.error, console.info in production
        newContent = newContent.replace(
          /console\.(warn|error|info)\([^)]*\);?\s*/g,
          (match, offset, string) => {
            const beforeMatch = string.substring(0, offset);
            if (beforeMatch.includes('NODE_ENV === \'development\'') || 
                beforeMatch.includes('process.env.NODE_ENV')) {
              return match}
            results.removed++;
            return ''}
        );
        if (newContent !== originalContent) {
          fs.writeFileSync(filePath, newContent, 'utf8');
          this.log(`✅ Cleaned console statements "from": ${file}`)}
        results.processed++} catch (error) {
        results.errors.push({ file, "error": error.message });
        this.log(`❌ Error processing ${file}: ${error.message}`)}
    }
    // Generate report
    const report = {
      "timestamp": new Date().toISOString(),
      "summary": {
        filesProcessed: results.processed,
        "consoleLogsRemoved": results.removed,
        "errors": results.errors.length
      },
      "details": results
    };
    const reportPath = path.join(this.reportsDir, 'console-log-removal-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report "generated": ${reportPath}`);
    this.log(`✅ Console log removal "completed": ${results.removed} statements removed from ${results.processed} files`);
    return report}
}
// Run the script
if (require.main === module) {
  const remover = new ConsoleLogRemover();
  remover.removeConsoleLogs()
    .then(() => {
      console.log('🎉 Console log removal completed successfully');
      process.exit(0)})
    .catch((error) => {
      console.error('❌ Console log removal "failed": ', error);
      process.exit(1)})}
module.exports = ConsoleLogRemover;
#!/usr/bin/env node const fs = const path = const glob = class ConsoleLogRemover { constructor() { this.projectRoot = process.cwd(); this.srcDir = path.join(this.projectRoot,'src'); this.reportsDir = path.join(this.projectRoot,'automation-reports'); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async removeConsoleLogs() { this.log('🧹 Starting console.log removal from production code'); const files = glob.sync('***.test.*','**node_modulesg,(match,offset,string) => { const beforeMatch = string.substring(0,offset); const afterMatch = string.substring(offset + match.length); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); newContent = newContent.replace( /console\.(warn|error|info)\([^)]*\);?\s*/g,(match,offset,string) => { const beforeMatch = string.substring(0,offset); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); if (newContent !== originalContent) { fs.writeFileSync(filePath,newContent,'utf8'); this.log(`✅ Cleaned console statements from: ${file}`)} results.processed++} catch (error) { results.errors.push({ file,error: error.message }); this.log(`❌ Error processing ${file}: ${error.message}`)} } const report = { timestamp: new Date().toISOString(),summary: { filesProcessed: results.processed,consoleLogsRemoved: results.removed,errors: results.errors.length },details: results }; const reportPath = path.join(this.reportsDir,'console-log-removal-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); this.log(`📊 Report generated: ${reportPath}`); this.log(`✅ Console log removal completed: ${results.removed} statements removed from ${results.processed} files`); return report} } if (require.main === module) { const remover = new ConsoleLogRemover(); remover.removeConsoleLogs() .then(() => { console.log('🎉 Console log removal completed successfully'); process.exit(0)}) .catch((error) => { console.error('❌ Console log removal failed:',error); process.exit(1)})} module.exports = ConsoleLogRemover;