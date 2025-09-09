        stdio: 'pipe;
  '});
      this.log(`Staged ${files.length} files`)} catch (error) {;
      this.log(`Error staging files: ${error.message}`);
  async createCommit(message, files) {;
    try {;
      const commitMessage = `🔧 ${message}\n\nFiles changed:\n${files.map(f => `- ${f}`).join('\n;
  ')}`;
      execSync(`git commit -m '${commitMessage}'` {;
        cwd: this.projectRoot,;

        stdio: 'pipe;
  '});
      this.commitsMade++;
      this.log(`✅ Created commit: ${message}`);

      this.log(`Error creating commit: ${error.message}`);

      return false;
  async analyzeChanges(files) {;
    const changes = {;
      added: [],;
      modified: [],;
      deleted: [],;
      renamed: [],;
      other: []}

  ') {

        changes.added.push(fileName)} else if (status === 'M;
  ') {;
        changes.modified.push(fileName)} else if (status === 'D;

        changes.deleted.push(fileName)} else if (status === 'R;
  ') {;
        changes.renamed.push(fileName)} else {;
        changes.other.push(fileName)});

    return changes;

      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {

        fs.mkdirSync(logsDir { recursive: true });
      // Check git status;
      this.log('📋 Checking git status...;
  ');
      const gitStatus = await this.checkGitStatus();

        this.log('✨ No changes to commit;
  ');
        return;
      this.log(`📁 Found ${gitStatus.files.length} changed files`);
      // Analyze changes;
      const changes = await this.analyzeChanges(gitStatus.files);`
      this.log('🔍 Analyzing changes...;
  ');

      this.log('📦 Staging all changes...;
  ');

      await this.stageFiles(gitStatus.files.map(f => f.file));
      // Generate commit message;
      const commitMessage = await this.generateCommitMessage(changes);
      this.log(`💬 Commit message: ${commitMessage}`);
      // Create commit;

  ');
        this.filesChanged = gitStatus.files.length} else {;

        this.log('❌ Failed to create commit;
  `);
      const duration = Date.now() - this.startTime;

      this.log(`❌ Error running auto commit fixes: ${error.message}`);

      process.exit(1);
// Run the auto commit fixes;
const autoCommit = new AutoCommitFixes();
