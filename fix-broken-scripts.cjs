#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing broken automation scripts...');

// List of broken scripts to fix
const brokenScripts = [
  'enhanced-automation-suite.cjs',
  'final-automation-suite.cjs',
  'comprehensive-syntax-fixer.cjs',
  'comprehensive-syntax-fix.cjs',
  'security-audit-enhanced.cjs'
];

// Function to fix common syntax errors
function fixScript(scriptPath) {
  try {
    let content = fs.readFileSync(scriptPath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content.replace(/this\.results = \{;/g, 'this.results = {};');
    content = content.replace(/#!\/usr\/bin\/env node\n/g, '#!/usr/bin/env node\n');
    content = content.replace(/#!\/usr\/bin\/env node;/g, '#!/usr/bin/env node');
    content = content.replace(/^\s*}\s*$/gm, '}');
    content = content.replace(/\.toISOString\(\)}\] \$\{message\}`\)\}/g, '.toISOString()}] ${message}`)}');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common JavaScript syntax issues
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/{\s*;/g, '{');
    content = content.replace(/}\s*;/g, '}');
    
    // Ensure proper shebang
    if (!content.startsWith('#!/usr/bin/env node')) {
      content = '#!/usr/bin/env node\n' + content;
    }
    
    // Clean up extra semicolons
    content = content.replace(/;;+/g, ';');
    
    if (content !== originalContent) {
      fs.writeFileSync(scriptPath, content, 'utf8');
      console.log(`✅ Fixed: ${scriptPath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${scriptPath}:`, error.message);
    return false;
  }
}

// Fix all broken scripts
let fixedCount = 0;
for (const script of brokenScripts) {
  const scriptPath = path.join('/workspace', script);
  if (fs.existsSync(scriptPath)) {
    if (fixScript(scriptPath)) {
      fixedCount++;
    }
  } else {
    console.log(`⚠️  Script not found: ${script}`);
  }
}

console.log(`\n🎉 Fixed ${fixedCount} scripts`);

// Create a simple working automation script
const workingScript = `#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Running comprehensive automation...');

// Function to run a command safely
function runCommand(command, description) {
  try {
    console.log(\`🔄 \${description}...\`);
    const result = execSync(command, { cwd: '/workspace', stdio: 'pipe' });
    console.log(\`✅ \${description} completed\`);
    return { success: true, output: result.toString() };
  } catch (error) {
    console.log(\`❌ \${description} failed: \${error.message}\`);
    return { success: false, error: error.message };
  }
}

// Main automation tasks
async function runAutomation() {
  const results = [];
  
  // Run linting
  results.push(runCommand('npm run lint:fix', 'Linting'));
  
  // Run type checking
  results.push(runCommand('npm run type-check', 'Type checking'));
  
  // Run tests
  results.push(runCommand('npm run test:smoke', 'Smoke tests'));
  
  // Run build
  results.push(runCommand('npm run build', 'Build'));
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    results: results,
    summary: {
      total: results.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length
    }
  };
  
  fs.writeFileSync('/workspace/automation-report.json', JSON.stringify(report, null, 2));
  console.log('📄 Report saved to automation-report.json');
  
  console.log(\`\\n📊 Summary: \${report.summary.successful}/\${report.summary.total} tasks completed successfully\`);
}

runAutomation().catch(console.error);
`;

fs.writeFileSync('/workspace/working-automation-suite.cjs', workingScript, 'utf8');
console.log('✅ Created working-automation-suite.cjs');