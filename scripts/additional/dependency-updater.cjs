
const { execSync } = require('child_process');
const fs = require('fs');

class DependencyUpdater {
  constructor() {
    this.projectRoot = process.cwd()}

  async updateDependencies() {
    console.log('📦 Updating dependencies...');
    
    try {
      // Check for outdated packages
      console.log('🔍 Checking for outdated packages...');
      execSync('npm outdated' { stdio: 'inherit' });
      
      // Update packages
      console.log('⬆️ Updating packages...');
      execSync('npm update' { stdio: 'inherit' });
      
      // Audit for security issues
      console.log('🔒 Running security audit...');
      execSync('npm audit' { stdio: 'inherit' });
      
      // Fix security issues
      console.log('🛠️ Fixing security issues...');
      execSync('npm audit fix' { stdio: 'inherit' });
      
      console.log('✅ Dependencies updated successfully!')} catch (error) {
      console.error('❌ Dependency update failed:', error.message)}
  }
}

const updater = new DependencyUpdater();
updater.updateDependencies();
