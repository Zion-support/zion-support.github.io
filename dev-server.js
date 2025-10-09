const { execSync } = require('child_process');
const path = require('path');

console.log('Starting development server...');

try {
  // Change to workspace directory
  process.chdir('/workspace');
  
  // Start the Vite dev server
  execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting development server:', error.message);
  process.exit(1);
}