const { execSync } = require('child_process');

console.log('🔍 Starting code quality check...');

try {
  console.log('🧹 Running lint...');
  execSync('npm run lint', { stdio: 'inherit' });
  
  console.log('🔧 Running type check...');
  execSync('npm run type-check', { stdio: 'inherit' });
  
  console.log('🧪 Running tests...');
  execSync('npm test -- --passWithNoTests', { stdio: 'inherit' });
  
  console.log('✅ Code quality check completed successfully!');
} catch (error) {
  console.error('❌ Code quality check failed:', error.message);
  process.exit(1);
}