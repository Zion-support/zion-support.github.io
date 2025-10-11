const { execSync } = require('child_process');

try {
  console.log('Starting build check...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}