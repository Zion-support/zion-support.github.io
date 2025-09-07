const { execSync } = require('child_process');

console.log('🚀 Starting deployment process...');

try {
  console.log('📦 Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('🧪 Running tests...');
  execSync('npm test -- --passWithNoTests', { stdio: 'inherit' });
  
  console.log('🔍 Running lint check...');
  execSync('npm run lint', { stdio: 'inherit' });
  
  console.log('✅ Deployment preparation completed successfully!');
} catch (error) {
  console.error('❌ Deployment preparation failed:', error.message);
  process.exit(1);
}