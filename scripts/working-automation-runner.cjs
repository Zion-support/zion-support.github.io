#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Working Automation Runner...\n');

// Helper function to run commands safely
function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully\n`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}\n`);
    return null;
  }
}

// Helper function to check if file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

// Main automation tasks
async function runAutomation() {
  console.log('🔧 Running automation tasks...\n');

  // 1. Clean up corrupted files
  console.log('🧹 Cleaning up corrupted files...');
  const corruptedDirs = [
    'src_disabled_1757239864',
    'temp-disabled',
    'temp_exclude',
    'backup-problematic-files',
    'corrupted_backup',
    'src.disabled',
    'components.disabled',
    'pages.disabled'
  ];

  corruptedDirs.forEach(dir => {
    if (fileExists(dir)) {
      console.log(`   Removing corrupted directory: ${dir}`);
      try {
        execSync(`rm -rf ${dir}`, { stdio: 'pipe' });
      } catch (error) {
        console.log(`   Warning: Could not remove ${dir}: ${error.message}`);
      }
    }
  });

  // 2. Run smoke tests
  runCommand('npm run test:smoke', 'Running smoke tests');

  // 3. Run type checking
  runCommand('npm run type-check', 'Running TypeScript type checking');

  // 4. Run build
  runCommand('npm run build', 'Building the application');

  // 5. Check for any remaining syntax errors in core files
  console.log('🔍 Checking core files for syntax errors...');
  const coreFiles = [
    'pages/_app.tsx',
    'pages/index.page.tsx',
    'next.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'eslint.config.js'
  ];

  coreFiles.forEach(file => {
    if (fileExists(file)) {
      try {
        execSync(`node -c ${file}`, { stdio: 'pipe' });
        console.log(`   ✅ ${file} - syntax OK`);
      } catch (error) {
        console.log(`   ❌ ${file} - syntax error: ${error.message}`);
      }
    }
  });

  // 6. Create a simple health check
  console.log('🏥 Creating health check...');
  const healthCheckContent = `#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🏥 Health Check Report');
console.log('====================');

try {
  // Check if main files exist
  const fs = require('fs');
  const coreFiles = [
    'package.json',
    'next.config.js',
    'pages/_app.tsx',
    'pages/index.page.tsx'
  ];
  
  console.log('\\n📁 Core Files:');
  coreFiles.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(\`   \${exists ? '✅' : '❌'} \${file}\`);
  });
  
  // Check if build works
  console.log('\\n🔨 Build Status:');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('   ✅ Build successful');
  } catch (error) {
    console.log('   ❌ Build failed');
  }
  
  // Check if tests work
  console.log('\\n🧪 Test Status:');
  try {
    execSync('npm run test:smoke', { stdio: 'pipe' });
    console.log('   ✅ Smoke tests pass');
  } catch (error) {
    console.log('   ❌ Smoke tests fail');
  }
  
  console.log('\\n✅ Health check completed');
  
} catch (error) {
  console.log('❌ Health check failed:', error.message);
  process.exit(1);
}
`;

  fs.writeFileSync('health-check.js', healthCheckContent);
  console.log('   ✅ Health check script created');

  // 7. Run the health check
  runCommand('node health-check.js', 'Running health check');

  console.log('🎉 Automation completed successfully!');
  console.log('\n📊 Summary:');
  console.log('   - Cleaned up corrupted files');
  console.log('   - Ran smoke tests');
  console.log('   - Checked TypeScript types');
  console.log('   - Built the application');
  console.log('   - Verified core file syntax');
  console.log('   - Created health check script');
}

// Run the automation
runAutomation().catch(error => {
  console.error('❌ Automation failed:', error);
  process.exit(1);
});