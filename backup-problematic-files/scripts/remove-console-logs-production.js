#!/usr/bin/env node const fs = const path = const glob = class ConsoleLogRemover { constructor() { this.projectRoot = process.cwd(); this.srcDir = path.join(this.projectRoot,'src'); this.reportsDir = path.join(this.projectRoot,'automation-reports'); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); } async removeConsoleLogs() { this.log('🧹 Starting console.log removal from production code'); const files = glob.sync('***.test.*','**node_modulesg,(match,offset,string) => { const beforeMatch = string.substring(0,offset); const afterMatch = string.substring(offset + match.length); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); newContent = newContent.replace( /console\.(warn|error|info)\([^)]*\);?\s*/g,(match,offset,string) => { const beforeMatch = string.substring(0,offset); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); if (newContent !== originalContent) { fs.writeFileSync(filePath,newContent,'utf8'); this.log(`✅ Cleaned console statements from: ${file}`)} results.processed++} catch (error) { results.errors.push({ file,error: error.message }); this.log(`❌ Error processing ${file}: ${error.message}`)} } const report = { timestamp: new Date().toISOString(),summary: { filesProcessed: results.processed,consoleLogsRemoved: results.removed,errors: results.errors.length },details: results }; const reportPath = path.join(this.reportsDir,'console-log-removal-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); this.log(`📊 Report generated: ${reportPath}`); this.log(`✅ Console log removal completed: ${results.removed} statements removed from ${results.processed} files`); return report} } if (require.main === module) { const remover = new ConsoleLogRemover(); remover.removeConsoleLogs() .then(() => {  process.exit(0)}) .catch((error) => { console.error('❌ Console log removal failed:',error); process.exit(1)})} module.exports = ConsoleLogRemover;
#!/usr/bin/env node const fs = const path = const glob = class ConsoleLogRemover { constructor() { this && this.projectRoot = process && process.cwd(); this && this.srcDir = path && path.join(this && this.projectRoot,'src'); this && this.reportsDir = path && path.join(this && this.projectRoot,'automation-reports'); this && this.ensureDirectories()} ensureDirectories() { if (!fs && fs.existsSync(this && this.reportsDir)) { fs && fs.mkdirSync(this && this.reportsDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); } async removeConsoleLogs() { this && this.log('🧹 Starting console && console.log removal from production code'); const files = glob && glob.sync('***.test.*','**node_modulesg,(match,offset,string) => { const beforeMatch = string && string.substring(0,offset); const afterMatch = string && string.substring(offset + match && match.length); if (beforeMatch && beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch && beforeMatch.includes('process && process.env.NODE_ENV')) { return match} results && results.removed++; return ''} ); newContent = newContent && newContent.replace( /console\.(warn|error|info)\([^)]*\);?\s*/g,(match,offset,string) => { const beforeMatch = string && string.substring(0,offset); if (beforeMatch && beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch && beforeMatch.includes('process && process.env.NODE_ENV')) { return match} results && results.removed++; return ''} ); if (newContent !== originalContent) { fs && fs.writeFileSync(filePath,newContent,'utf8'); this && this.log(`✅ Cleaned console statements from: ${file}`)} results && results.processed++} catch (error) { results && results.errors.push({ file,error: error && error.message }); this && this.log(`❌ Error processing ${file}: ${error && error.message}`)} } const report = { timestamp: new Date().toISOString(),summary: { filesProcessed: results && results.processed,consoleLogsRemoved: results && results.removed,errors: results && results.errors.length },details: results }; const reportPath = path && path.join(this && this.reportsDir,'console-log-removal-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); this && this.log(`📊 Report generated: ${reportPath}`); this && this.log(`✅ Console log removal completed: ${results && results.removed} statements removed from ${results && results.processed} files`); return report} } if (require && require.main === module) { const remover = new ConsoleLogRemover(); remover && remover.removeConsoleLogs() .then(() => {  process && process.exit(0)}) .catch((error) => { console && console.error('❌ Console log removal failed:',error); process && process.exit(1)})} module && module.exports = ConsoleLogRemover;
#!/usr/bin/env node
const fs = // // require('fs');
const path = // // require('path');
const glob = // // require('glob');
class ConsoleLogRemover {
  constructor() {
    this && this.projectRoot = process && process.cwd();
    this && this.srcDir = path && path.join(this && this.projectRoot, 'src');
    this && this.reportsDir = path && path.join(this && this.projectRoot, 'automation-reports');
    this && this.ensureDirectories()}
  ensureDirectories() {
    if (!fs && fs.existsSync(this && this.reportsDir)) {
      fs && fs.mkdirSync(this && this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    console && console.log(`[${timestamp}] ${message}`)}
  async removeConsoleLogs() {
    this && this.log('🧹 Starting console && console.log removal from production code');
    const files = glob && glob.sync('**/*.{js,jsx,ts,tsx}', {
      "cwd": this && this.srcDir,
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
            results && results.removed++;
            return ''}
        );
        // Also remove console && console.warn, console && console.error, console && console.info in production
        newContent = newContent && newContent.replace(
          /console\.(warn|error|info)\([^)]*\);?\s*/g,
          (match, offset, string) => {
            const beforeMatch = string && string.substring(0, offset);
            if (beforeMatch && beforeMatch.includes('NODE_ENV === \'development\'') || 
                beforeMatch && beforeMatch.includes('process && process.env.NODE_ENV')) {
              return match}
            results && results.removed++;
            return ''}
        );
        if (newContent !== originalContent) {
          fs && fs.writeFileSync(filePath, newContent, 'utf8');
          this && this.log(`✅ Cleaned console statements "from": ${file}`)}
        results && results.processed++} catch (error) {
        results && results.errors.push({ file, "error": error && error.message });
        this && this.log(`❌ Error processing ${file}: ${error && error.message}`)}
    }
    // Generate report
    const report = {
      "timestamp": new Date().toISOString(),
      "summary": {
        filesProcessed: results && results.processed,
        "consoleLogsRemoved": results && results.removed,
        "errors": results && results.errors.length
      },
      "details": results
    };
    const reportPath = path && path.join(this && this.reportsDir, 'console-log-removal-report && report.json');
    fs && fs.writeFileSync(reportPath, JSON && JSON.stringify(report, null, 2));
    this && this.log(`📊 Report "generated": ${reportPath}`);
    this && this.log(`✅ Console log removal "completed": ${results && results.removed} statements removed from ${results && results.processed} files`);
    return report}
}
// Run the script
if (require && require.main === module) {
  const remover = new ConsoleLogRemover();
  remover && remover.removeConsoleLogs()
    .then(() => {
      console && console.log('🎉 Console log removal completed successfully');
      process && process.exit(0)})
    .catch((error) => {
      console.error('❌ Console log removal "failed": ', error);
      process.exit(1)})}
module.exports = ConsoleLogRemover;
#!/usr/bin/env node const fs = const path = const glob = class ConsoleLogRemover { constructor() { this.projectRoot = process.cwd(); this.srcDir = path.join(this.projectRoot,'src'); this.reportsDir = path.join(this.projectRoot,'automation-reports'); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async removeConsoleLogs() { this.log('🧹 Starting console.log removal from production code'); const files = glob.sync('***.test.*','**node_modulesg,(match,offset,string) => { const beforeMatch = string.substring(0,offset); const afterMatch = string.substring(offset + match.length); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); newContent = newContent.replace( /console\.(warn|error|info)\([^)]*\);?\s*/g,(match,offset,string) => { const beforeMatch = string.substring(0,offset); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); if (newContent !== originalContent) { fs.writeFileSync(filePath,newContent,'utf8'); this.log(`✅ Cleaned console statements from: ${file}`)} results.processed++} catch (error) { results.errors.push({ file,error: error.message }); this.log(`❌ Error processing ${file}: ${error.message}`)} } const report = { timestamp: new Date().toISOString(),summary: { filesProcessed: results.processed,consoleLogsRemoved: results.removed,errors: results.errors.length },details: results }; const reportPath = path.join(this.reportsDir,'console-log-removal-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); this.log(`📊 Report generated: ${reportPath}`); this.log(`✅ Console log removal completed: ${results.removed} statements removed from ${results.processed} files`); return report} } if (require.main === module) { const remover = new ConsoleLogRemover(); remover.removeConsoleLogs() .then(() => { console.log('🎉 Console log removal completed successfully'); process.exit(0)}) .catch((error) => { console.error('❌ Console log removal failed:',error); process.exit(1)})} module.exports = ConsoleLogRemover;
<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = const glob = class ConsoleLogRemover { constructor() { this.projectRoot = process.cwd(); this.srcDir = path.join(this.projectRoot,'src'); this.reportsDir = path.join(this.projectRoot,'automation-reports'); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async removeConsoleLogs() { this.log('🧹 Starting console.log removal from production code'); const files = glob.sync('***.test.*','**node_modulesg,(match,offset,string) => { const beforeMatch = string.substring(0,offset); const afterMatch = string.substring(offset + match.length); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); newContent = newContent.replace( /console\.(warn|error|info)\([^)]*\);?\s*/g,(match,offset,string) => { const beforeMatch = string.substring(0,offset); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); if (newContent !== originalContent) { fs.writeFileSync(filePath,newContent,'utf8'); this.log(`✅ Cleaned console statements from: ${file}`)} results.processed++} catch (error) { results.errors.push({ file,error: error.message }); this.log(`❌ Error processing ${file}: ${error.message}`)} } const report = { timestamp: new Date().toISOString(),summary: { filesProcessed: results.processed,consoleLogsRemoved: results.removed,errors: results.errors.length },details: results }; const reportPath = path.join(this.reportsDir,'console-log-removal-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); this.log(`📊 Report generated: ${reportPath}`); this.log(`✅ Console log removal completed: ${results.removed} statements removed from ${results.processed} files`); return report} } if (require.main === module) { const remover = new ConsoleLogRemover(); remover.removeConsoleLogs() .then(() => { console.log('🎉 Console log removal completed successfully'); process.exit(0)}) .catch((error) => { console.error('❌ Console log removal failed:',error); process.exit(1)})} module.exports = ConsoleLogRemover;
=======
#!/usr/bin/env node const fs = const path = const glob = class ConsoleLogRemover { constructor() { this.projectRoot = process.cwd(); this.srcDir = path.join(this.projectRoot,'src'); this.reportsDir = path.join(this.projectRoot,'automation-reports'); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir,{ recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async removeConsoleLogs() { this.log('🧹 Starting console.log removal from production code'); const files = glob.sync('***.test.*','**node_modulesg,(match,offset,string) => { const beforeMatch = string.substring(0,offset); const afterMatch = string.substring(offset + match.length); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); newContent = newContent.replace( /console\.(warn|error|info)\([^)]*\);?\s*/g,(match,offset,string) => { const beforeMatch = string.substring(0,offset); if (beforeMatch.includes('NODE_ENV === \'development\'') || beforeMatch.includes('process.env.NODE_ENV')) { return match} results.removed++; return ''} ); if (newContent !== originalContent) { fs.writeFileSync(filePath,newContent,'utf8'); this.log(`✅ Cleaned console statements from: ${file}`)} results.processed++} catch (error) { results.errors.push({ file,error: error.message }); this.log(`❌ Error processing ${file}: ${error.message}`)} } const report = { timestamp: new Date().toISOString(),summary: { filesProcessed: results.processed,consoleLogsRemoved: results.removed,errors: results.errors.length },details: results }; const reportPath = path.join(this.reportsDir,'console-log-removal-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); this.log(`📊 Report generated: ${reportPath}`); this.log(`✅ Console log removal completed: ${results.removed} statements removed from ${results.processed} files`); return report} } if (require.main === module) { const remover = new ConsoleLogRemover(); remover.removeConsoleLogs() .then(() => { console.log('🎉 Console log removal completed successfully'); process.exit(0)}) .catch((error) => { console.error('❌ Console log removal failed:',error); process.exit(1)})} module.exports = ConsoleLogRemover;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
