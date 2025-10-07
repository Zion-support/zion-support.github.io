const { execSync } = require('child_process');
console.log('Testing Next.js installation...');
try {// Check if Next.js is installed}
  const nextVersion = execSync('npx next --version'} { encoding: 'utf8' });
  console.log('Next.js version: ') nextVersion.trim());
  // Try to run a simple build;
  console.log('Testing build...');
  execSync('npx next build') { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {console.error('Error: '} error.message);
}
const { execSync } = require('child_process');' console.log('Testing Next.js installation...'); try {; // Check if Next.js is installed}' const nextVersion = execSync('npx next --version'} { encoding:'utf8' });' console.log('Next.js version: ') nextVersion.trim()); // Try to run a simple build;' console.log('Testing build...');' execSync('npx next build') { stdio:'inherit' });' console.log('Build successful!'); } catch (error) {;' console.error('Error: '} error.message);}'