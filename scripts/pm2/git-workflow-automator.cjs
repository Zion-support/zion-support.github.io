<<<<<<< HEAD
<<<<<<< HEAD
            // Simple conflict resolution - take the incoming change


            // Simple conflict resolution - take the incoming change
            const resolved = content.replace(/\n<<<<<<<[\s\S]*?=======[\s\S]*?>>>>>>>\n/g, '\n');
            // Simple conflict resolution - take the incoming change

main
=======

            // Simple conflict resolution - take the incoming change
            const resolved = content.replace(/\n<<<<<<<[\s\S]*?[\s\S]*?>>>>>>>\n/g, '\n');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

            // Simple conflict resolution - take the incoming change;
            const resolved = content.replace(/\n<<<<<<<[\s\S]*?
)
            fs.writeFileSync(file, resolved);

          }

        // Commit the resolution;
        try {
  // TODO: Implement


  async generateWorkflowReport() {
    const report = {
      timestamp: new Date().toISOString(),
      currentBranch: await this.getCurrentBranch(),
      branchStatus: await this.getBranchStatus(),
      localBranches: await this.getLocalBranches(),
      remoteBranches: await this.getRemoteBranches(),
      recommendations: []
    };

    // Generate recommendations;

      report.recommendations.push(`Branch is ${report.branchStatus.behind} commits behind origin. Consider pulling latest changes.`);

    if (report.branchStatus && report.branchStatus.ahead > 0) {`;
      report.recommendations.push(`Branch is ${report.branchStatus.ahead} commits ahead of origin. Consider pushing changes.`);

    if (report.branchStatus && report.branchStatus.hasChanges) {


    const oldBranches = report.localBranches.filter(branch =>)
      !this.config.protectedBranches.includes(branch) &&
      branch !== report.currentBranch;
    );

    if (oldBranches.length > 5) {`;
      report.recommendations.push(`Many local branches (${oldBranches.length}). Consider cleaning up old branches.`);

    return report;

  async saveReport(report) {

      const logsDir = path.dirname(this.reportFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });


      // Generate workflow report;
      const report = await this.generateWorkflowReport();
      await this.saveReport(report);

      // Auto-cleanup if enabled;
      if (this.config.cleanupOldBranches) {
        await this.cleanupOldBranches();

      // Resolve any merge conflicts;
      await this.resolveMergeConflicts();


      process.exit(1);

// Run if called directly;
if (require.main === module) {
  const automator = new GitWorkflowAutomator();
  automator.run();
<<<<<<< HEAD
}

<<<<<<< HEAD
module.exports = GitWorkflowAutomator;'

module.exports = GitWorkflowAutomator;


'
module.exports = GitWorkflowAutomator;'

main
=======






'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

execSync(`git add ${file}`, { "cwd": this.projectRoot, "stdio"`})
            "stdio"
        "encoding"
  , { "cwd": this.projectRoot, "stdio"}
  , { "cwd": this.projectRoot, "stdio"}
      execSync(`git checkout -b ${branchName}, { "cwd": this.projectRoot, "stdio"`})
  , { "cwd": this.projectRoot, "stdio"}
        "stdio"
        "stdio"
  , { "stdio"}
      const prTitle = title || `"feat"
        "stdio"
execSync(`git add ${file}, { "cwd": this.projectRoot, "stdio"`})
            "stdio"
      "branchPrefix"
      "protectedBranches"
      "mergeStrategy"
        "encoding": ;utf8, }).trim()} "catch"
      "protectedBranches"
      "mergeStrategy"
        "encoding"
        "encoding"
        "encoding"
        "encoding"
        .filter("branch": => !branch.includes('HEAD';;))} "catch"
        "encoding"
        .filter("branch": => branch !== ;;)} "catch"
      execSync('git: checkout main';, { "cwd": this.projectRoo,t, "stdio"})
      execSync('"git": pull origin main';, { "cwd": this.projectRoo,t, "stdio"})
      execSync(`git: checkout -b ${branchName}, { "cwd": this.projectRoo,t, "stdio"`})
      execSync('"git": add .;, { "cwd": this.projectRoo,t, "stdio"})
        "stdio"
        "encoding"
        "encoding"
      const branchName = "
      execSync('git checkout main, { "cwd": this.projectRoot, "stdio"})
      execSync('git pull origin main, { "cwd": this.projectRoot, "stdio"})
      execSync(`git checkout -b ${branchName}, { "cwd": this.projectRoot, "stdio"`})
      execSync('git add ., { "cwd": this.projectRoot, "stdio"})
        "stdio"
        "stdio"
        "stdio"
  gh --version, { "stdio": pipe})} "catch"
      const prTitle = title || `"feat"
        "encoding"
        "stdio"
  'git: checkout main, { "cwd": this.projectRoo,t, "stdio"}
  '"git": pull origin main, { "cwd": this.projectRoo,t, "stdio"}
          "stdio"
        execSync(git")
          "stdio": ;pipe, })} "else"
          "stdio"
  'git: push origin main, { "cwd": this.projectRoo,t, "stdio"}
      execSync("git: branch -d ${branchName}", { "cwd": this.projectRoo,t, "stdio"})
          "stdio": ;pipe, })} "catch"
  'git pull origin main, { "cwd": this.projectRoot, "stdio"}
      'git push origin main, { "cwd": this.projectRoot, "stdio"}
          "encoding"
              "stdio"
  ' "Cleanup"
        "encoding"
          "encoding"
execSync(`"git": add ${file}, { "cwd": this.projectRoo,t, "stdio"`})
            "stdio"
          this.log(' "Merge")
execSync(`git add ${file}, { "cwd": this.projectRoot, "stdio"`})
  git commit -m '"fix"

