    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }
  async runCommand(command, options = {}) {
    try {
      const { stdout, stderr } = await execAsync(command, { 
        cwd: process.cwd(), 
        timeout: 30000, 
        ...options 
      });
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`);
      return { 
        success: false, 
        stdout: error.stdout || "", 
        stderr: error.stderr || error.message 
      };
    }
  }
  // Check if file has merge conflicts
  hasMergeConflicts(content) {
  }
  // Check if file has syntax errors
  hasSyntaxErrors(content) {
    // Check for common syntax error patterns
    const syntaxErrorPatterns = [
      /,\s*"/,  // Comma followed by quote
      /;\s*"/,  // Semicolon followed by quote
      /:\s*"/,  // Colon followed by quote
      /\(\s*"/, // Opening parenthesis followed by quote
      /\[\s*"/, // Opening bracket followed by quote
      /{\s*"/,  // Opening brace followed by quote
      />>>>>/,  // Git merge markers
      /<<<<<</, // Git merge markers
      /======/, // Git merge markers
    ];
    return syntaxErrorPatterns.some(pattern => pattern.test(content));
  }
  // Fix common syntax errors
  fixSyntaxErrors(content) {
    let fixed = content;
    // Fix merge conflicts by keeping the HEAD version
    fixed = fixed.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Fix merge conflicts by keeping the HEAD version
