>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-c10a
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLint() {
    try {
      this.log('Starting lint automation...');
      
      // Run ESLint
      this.log('Running ESLint...');
      execSync('npm run lint', { "stdio": 'pipe' });
      this.log('ESLint completed successfully');
      
      // Run type checking
      this.log('Running TypeScript type check...');
      execSync('npm run type-check', { "stdio": 'pipe' });
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-c10a
}

module.exports = LintAutomation;
=======
