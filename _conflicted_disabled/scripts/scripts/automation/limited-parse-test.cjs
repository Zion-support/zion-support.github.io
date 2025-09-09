#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔧 Limited Parse Test Starting...');

try {
  console.log('Running npm run type-check with limited output...');
  const output = execSync('npm run type-check 2>&1 | head -1000', {
    encoding: 'utf8',
    maxBuffer: 1 * 1024 * 1024 // 1MB buffer
  });
  
  console.log('Command completed, output length:', output.length);
  console.log('First 500 characters:', output.substring(0, 500));
  
  console.log('Starting to parse errors...');
  
  // Parse errors without fixing
  const errors = [];
  const lines = output.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  console.log(`Processing ${lines.length} lines...`);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (i % 100 === 0) {
      console.log(`Processing line ${i}/${lines.length}`);
    }
    
    // Look for error lines that start with src/ and contain error TS
    if (line.startsWith('src/') && line.includes('error TS')) {
      console.log(`🔍 Found error line: ${line}`);
      
      // Simple pattern: src/file.tsx(line,col): error TS1234: message
      const fileMatch = line.match(/src\/([^:]+):(\d+):(\d+):\s+error\s+TS(\d+):\s*(.+)/);
      
      if (fileMatch) {
        const [, filePath, lineNum, colNum, errorCode, message] = fileMatch;
        
        errors.push({
          type: 'typescript',
          message: message.trim(),
          fullLine: line,
          file: `src/${filePath}`,
          lineNumber: parseInt(lineNum),
          columnNumber: parseInt(colNum),
          errorCode: errorCode
        });
        
        console.log(`✅ Parsed error: ${message.trim()}`);
      } else {
        console.log(`⚠️ Could not parse error line: ${line}`);
      }
    }
  }
  
  console.log(`📊 Total errors parsed: ${errors.length}`);
  console.log('Limited parse test completed successfully');
  
} catch (error) {
  console.log('Command failed with error:');
  console.log('stderr:', error.stderr ? error.stderr.substring(0, 200) : 'none');
  console.log('stdout:', error.stdout ? error.stdout.substring(0, 200) : 'none');
  console.log('message:', error.message);
}