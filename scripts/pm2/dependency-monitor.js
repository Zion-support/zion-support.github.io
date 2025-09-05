
  async checkNodeVersion() {,
    try {,
      const nodeVersion = process.version,
      const npmVersion = execSync('npm --version', {,
        cwd: this.projectRoot,

      return { nodeVersion, npmVersion };
    } catch (error) {,
      return { error: error.message };
    };

