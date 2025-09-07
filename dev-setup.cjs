const { execSync } = require('child_process');

console.log('🛠️ Setting up development environment...');

try {
  console.log('📦 Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  console.log('🔧 Setting up git hooks...');
  execSync('npm run precommit', { stdio: 'inherit' });
  
  console.log('✅ Development environment setup completed!');
  console.log('🚀 You can now run: npm run dev');
} catch (error) {
  console.error('❌ Development setup failed:', error.message);
  process.exit(1);
}