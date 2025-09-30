#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs").promises;"const path = require("path");class IntelligentGitWorkflow { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "git-workflow.log");" this.configFile = path.join(this.projectRoot, "logs", "git-workflow-config.json");" this.workflowHistoryFile = path.join(this.projectRoot, "logs", "git-workflow-history.json"); this.config = {" autoMerge: process.env.AUTO_MERGE === "true"," conflictResolution: process.env.CONFLICT_RESOLUTION === "intelligent"," branchCleanup: process.env.BRANCH_CLEANUP === "true"," prAutomation: process.env.PR_AUTOMATION === "true"," codeReviewAI: process.env.CODE_REVIEW_AI === "true"," branchStrategy: process.env.BRANCH_STRATEGY | "gitflow"," protectedBranches: ["main", "master", "develop"]," autoCommit: process.env.AUTO_COMMIT === "true"," commitMessageTemplate: process.env.COMMIT_MESSAGE_TEMPLATE | "feat: {type} - {description}", maxRetries: parseInt(process.env.MAX_RETRIES) | 3," mergeStrategy: process.env.MERGE_STRATEGY | "recursive" }; this.workflowHistory = []; this.currentWorkflow = null; this.ensureLogsDirectory(); } async ensureLogsDirectory() { try {" await fs.mkdir(path.join(this.projectRoot, "logs"), { recursive: true }); await this.loadConfiguration(); await this.loadWorkflowHistory(); } catch (error) {" console.log("Logs directory already exists"); } }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}`; console.log(logMessage); " fs.appendFile(this.logFile, logMessage + "\n").catch(console.error); } async loadConfiguration() { try {" const config = await fs.readFile(this.configFile, "utf8"); this.config = { .this.config, .JSON.parse(config) };" this.log(" Git workflow configuration loaded"); } catch (error) {" this.log(" Using default Git workflow configuration"); await this.saveConfiguration(); } } async saveConfiguration() { try { await fs.writeFile(this.configFile, JSON.stringify(this.config, null, 2)); } catch (error) {"` this.log(` Failed to save configuration: ${error.message}`, "ERROR"); } } async loadWorkflowHistory() { try {" const history = await fs.readFile(this.workflowHistoryFile, "utf8"); this.workflowHistory = JSON.parse(history);` this.log(` Loaded ${this.workflowHistory.length} workflow records`); } catch (error) {" this.log(" No workflow history found, starting fresh"); this.workflowHistory = []; } } async saveWorkflowHistory() { try { await fs.writeFile(this.workflowHistoryFile, JSON.stringify(this.workflowHistory, null, 2)); } catch (error) {"` this.log(` Failed to save workflow history: ${error.message}`, "ERROR"); } } async initialize() {" this.log(" Initializing Intelligent Git Workflow."); try {" / Check if we"re in a git repository" await this.runGitCommand("git rev-parse --git-dir");" this.log(" Git repository detected"); / Set up git configuration if needed await this.setupGitConfiguration(); " this.log(" Intelligent Git Workflow is ready"); } catch (error) {"` this.log(` Git workflow initialization failed: ${error.message}`, "ERROR"); throw error; } } async setupGitConfiguration() { try { / Set up git user if not configured" const userName = await this.runGitCommand("git config user.name").catch(() => "");" const userEmail = await this.runGitCommand("git config user.email").catch(() => ""); if (!userName) {" await this.runGitCommand("git config user.name "AI Git Workflow"");" this.log(" Set git user name"); } if (!userEmail) {"" await this.runGitCommand("git config user.email "ai-workflow@example.com"");" this.log(" Set git user email"); } / Set up merge strategy"` await this.runGitCommand(`git config merge.tool "vscode"`);"` await this.runGitCommand(`git config merge.conflictstyle "diff3"`); } catch (error) {"` this.log(` Git configuration setup warning: ${error.message}`, "WARN"); } } async runGitCommand(command, options = {}) { try { const result = execSync(command, { " encoding: "utf8", cwd: this.projectRoot, .options }); return result.trim(); } catch (error) {` throw new Error(`Git command failed: ${command} - ${error.message}`); } }" async createBranch(branchName, baseBranch = "main") {` this.log(` Creating branch: ${branchName} from ${baseBranch}`); try { const workflow = { id: this.generateWorkflowId()," type: "create_branch", branchName, baseBranch, startTime: new Date().toISOString()," status: "in_progress", steps: [] }; this.currentWorkflow = workflow; / Check if branch already exists" const existingBranches = await this.runGitCommand("git branch -a"); if (existingBranches.includes(branchName)) {` throw new Error(`Branch ${branchName} already exists`); } / Switch to base branch` await this.runGitCommand(`git checkout ${baseBranch}`); workflow.steps.push({" step: "Checkout base branch"," status: "completed", timestamp: new Date().toISOString() }); / Pull latest changes" await this.runGitCommand("git pull origin " + baseBranch); workflow.steps.push({" step: "Pull latest changes"," status: "completed", timestamp: new Date().toISOString() }); / Create new branch` await this.runGitCommand(`git checkout -b ${branchName}`); workflow.steps.push({" step: "Create new branch"," status: "completed", timestamp: new Date().toISOString() }); / Push new branch to remote` await this.runGitCommand(`git push -u origin ${branchName}`); workflow.steps.push({" step: "Push branch to remote"," status: "completed", timestamp: new Date().toISOString() }); " workflow.status = "completed"; workflow.endTime = new Date().toISOString(); this.workflowHistory.push(workflow); await this.saveWorkflowHistory();` this.log(` Branch ${branchName} created successfully`); } catch (error) {"` this.log(` Branch creation failed: ${error.message}`, "ERROR"); if (this.currentWorkflow) {" this.currentWorkflow.status = "failed"; this.currentWorkflow.error = error.message; this.currentWorkflow.endTime = new Date().toISOString(); this.workflowHistory.push(this.currentWorkflow); await this.saveWorkflowHistory(); } throw error; } }" async commitChanges(files = [], message = null, type = "feat") {` this.log(` Committing changes.`); try { const workflow = { id: this.generateWorkflowId()," type: "commit_changes", files, message, startTime: new Date().toISOString()," status: "in_progress", steps: [] }; this.currentWorkflow = workflow; / Check git status" const status = await this.runGitCommand("git status --porcelain"); if (!status.trim()) {" this.log(" No changes to commit"); return; } / Add files if (files.length > 0) { for (const file of files) {` await this.runGitCommand(`git add ${file}`); } } else {" await this.runGitCommand("git add ."); } workflow.steps.push({" step: "Add files to staging"," status: "completed"," files: files.length > 0 ? files : "all", timestamp: new Date().toISOString() }); / Generate commit message if not provided if (!message) { message = await this.generateCommitMessage(files, type); } / Commit changes"` await this.runGitCommand(`git commit -m "${message}"`); workflow.steps.push({" step: "Commit changes"," status: "completed", message, timestamp: new Date().toISOString() }); " workflow.status = "completed"; workflow.endTime = new Date().toISOString(); this.workflowHistory.push(workflow); await this.saveWorkflowHistory();` this.log(` Changes committed: ${message}`); } catch (error) {"` this.log(` Commit failed: ${error.message}`, "ERROR"); if (this.currentWorkflow) {" this.currentWorkflow.status = "failed"; this.currentWorkflow.error = error.message; this.currentWorkflow.endTime = new Date().toISOString(); this.workflowHistory.push(this.currentWorkflow); await this.saveWorkflowHistory(); } throw error; } } async generateCommitMessage(files, type) { try { / Analyze changed files to generate meaningful commit message" const status = await this.runGitCommand("git status --porcelain");" const lines = status.split("\n").filter(line => line.trim()); " const addedFiles = lines.filter(line => line.startsWith("A")).length;" const modifiedFiles = lines.filter(line => line.startsWith("M")).length;" const deletedFiles = lines.filter(line => line.startsWith("D")).length; " let description = "";` if (addedFiles > 0) description += `add ${addedFiles} file(s)`;"` if (modifiedFiles > 0) description += `${description ? ", " : ""}modify ${modifiedFiles} file(s)`;"` if (deletedFiles > 0) description += `${description ? ", " : ""}delete ${deletedFiles} file(s)`; / Generate commit message based on template const message = this.config.commitMessageTemplate" .replace("{type}", type)" .replace("{description}", description); return message; } catch (error) {` return `${type}: Automated commit`; } } async pushChanges(branchName = null) {` this.log(` Pushing changes.`); try { const workflow = { id: this.generateWorkflowId()," type: "push_changes", branchName: branchName | await this.getCurrentBranch(), startTime: new Date().toISOString()," status: "in_progress", steps: [] }; this.currentWorkflow = workflow; / Get current branch if not specified const currentBranch = branchName | await this.getCurrentBranch(); / Push changes` await this.runGitCommand(`git push origin ${currentBranch}`); workflow.steps.push({" step: "Push to remote"," status: "completed", branch: currentBranch, timestamp: new Date().toISOString() }); " workflow.status = "completed"; workflow.endTime = new Date().toISOString(); this.workflowHistory.push(workflow); await this.saveWorkflowHistory();` this.log(` Changes pushed to ${currentBranch}`); } catch (error) {"` this.log(` Push failed: ${error.message}`, "ERROR"); if (this.currentWorkflow) {" this.currentWorkflow.status = "failed"; this.currentWorkflow.error = error.message; this.currentWorkflow.endTime = new Date().toISOString(); this.workflowHistory.push(this.currentWorkflow); await this.saveWorkflowHistory(); } throw error; } } async getCurrentBranch() { try {" return await this.runGitCommand("git branch --show-current"); } catch (error) {" return "main"; } }" async mergeBranch(sourceBranch, targetBranch = "main", options = {}) {` this.log(` Merging ${sourceBranch} into ${targetBranch}.`); try { const workflow = { id: this.generateWorkflowId()," type: "merge_branch", sourceBranch, targetBranch, startTime: new Date().toISOString()," status: "in_progress", steps: [] }; this.currentWorkflow = workflow; / Switch to target branch` await this.runGitCommand(`git checkout ${targetBranch}`); workflow.steps.push({" step: "Checkout target branch"," status: "completed", branch: targetBranch, timestamp: new Date().toISOString() }); / Pull latest changes` await this.runGitCommand(`git pull origin ${targetBranch}`); workflow.steps.push({" step: "Pull latest changes"," status: "completed", timestamp: new Date().toISOString() }); / Check for conflicts before merge const conflicts = await this.checkForConflicts(sourceBranch, targetBranch); if (conflicts.length > 0) {"` this.log(` Potential conflicts detected: ${conflicts.join(", ")}`); " if (this.config.conflictResolution === "intelligent") { await this.resolveConflictsIntelligently(conflicts, workflow); } else {"` throw new Error(`Conflicts detected: ${conflicts.join(", ")}`); } } / Perform merge` await this.runGitCommand(`git merge ${sourceBranch} --no-ff`); workflow.steps.push({" step: "Merge branches"," status: "completed", source: sourceBranch, target: targetBranch, timestamp: new Date().toISOString() }); / Push merged changes` await this.runGitCommand(`git push origin ${targetBranch}`); workflow.steps.push({" step: "Push merged changes"," status: "completed", timestamp: new Date().toISOString() }); " workflow.status = "completed"; workflow.endTime = new Date().toISOString(); this.workflowHistory.push(workflow); await this.saveWorkflowHistory();` this.log(` Successfully merged ${sourceBranch} into ${targetBranch}`); } catch (error) {"` this.log(` Merge failed: ${error.message}`, "ERROR"); if (this.currentWorkflow) {" this.currentWorkflow.status = "failed"; this.currentWorkflow.error = error.message; this.currentWorkflow.endTime = new Date().toISOString(); this.workflowHistory.push(this.currentWorkflow); await this.saveWorkflowHistory(); } throw error; } } async checkForConflicts(sourceBranch, targetBranch) { try { / Get the merge base` const mergeBase = await this.runGitCommand(`git merge-base ${sourceBranch} ${targetBranch}`); / Get changed files in both branches` const sourceFiles = await this.runGitCommand(`git diff --name-only ${mergeBase} ${sourceBranch}`);` const targetFiles = await this.runGitCommand(`git diff --name-only ${mergeBase} ${targetBranch}`); " const sourceFileList = sourceFiles.split("\n").filter(f => f.trim());" const targetFileList = targetFiles.split("\n").filter(f => f.trim()); / Find common files that have been modified const commonFiles = sourceFileList.filter(file => targetFileList.includes(file)); return commonFiles; } catch (error) {"` this.log(` Conflict check failed: ${error.message}`, "WARN"); return []; } } async resolveConflictsIntelligently(conflicts, workflow) {` this.log(` Resolving conflicts intelligently.`); try { for (const file of conflicts) {` this.log(` Resolving conflicts in ${file}.`); / Try to resolve conflicts automatically const resolution = await this.autoResolveConflicts(file); if (resolution.resolved) { workflow.steps.push({" step: "Resolve conflicts"," status: "completed", file, method: resolution.method, timestamp: new Date().toISOString() });` this.log(` Conflicts in ${file} resolved using ${resolution.method}`); } else { workflow.steps.push({" step: "Resolve conflicts"," status: "failed", file, error: resolution.error, timestamp: new Date().toISOString() }); "` this.log(` Failed to resolve conflicts in ${file}: ${resolution.error}`, "ERROR");` throw new Error(`Conflict resolution failed for ${file}`); } } } catch (error) {"` this.log(` Intelligent conflict resolution failed: ${error.message}`, "ERROR"); throw error; } } async autoResolveConflicts(file) { try { / Read the conflicted file" const content = await fs.readFile(file, "utf8"); / Check if file has conflict markers" if (!content.includes("") | !content.includes(">>>>>>")) {" return { resolved: true, method: "no_conflicts" }; } / Simple conflict resolution strategies" const lines = content.split("\n"); const resolvedLines = []; let inConflict = false;" let conflictType = ""; for (let i = 0; i < lines.length; i++) { const line = lines[i]; " if (line.startsWith("<<<<<<<")) { inConflict = true;" conflictType = "start"; continue;" } else if (line.startsWith("")) {" conflictType = "separator"; continue;" } else if (line.startsWith(">>>>>>")) { inConflict = false;" conflictType = "end"; continue; } if (!inConflict) { resolvedLines.push(line);" } else if (conflictType === "separator") { / Use the version after the separator (incoming changes) resolvedLines.push(line); } } / Write resolved content" await fs.writeFile(file, resolvedLines.join("\n")); / Add resolved file to git` await this.runGitCommand(`git add ${file}`); " return { resolved: true, method: "auto_merge" }; } catch (error) { return { resolved: false, error: error.message }; } }" async createPullRequest(sourceBranch, targetBranch = "main", title = null, description = null) {` this.log(` Creating pull request from ${sourceBranch} to ${targetBranch}.`); try { const workflow = { id: this.generateWorkflowId()," type: "create_pull_request", sourceBranch, targetBranch, startTime: new Date().toISOString()," status: "in_progress", steps: [] }; this.currentWorkflow = workflow; / Generate PR title if not provided if (!title) { title = await this.generatePRTitle(sourceBranch); } / Generate PR description if not provided if (!description) { description = await this.generatePRDescription(sourceBranch, targetBranch); } / Create PR using GitHub CLI or API const prUrl = await this.createPRViaAPI(sourceBranch, targetBranch, title, description); workflow.steps.push({" step: "Create pull request"," status: "completed", title, url: prUrl, timestamp: new Date().toISOString() }); " workflow.status = "completed"; workflow.endTime = new Date().toISOString(); this.workflowHistory.push(workflow); await this.saveWorkflowHistory();` this.log(` Pull request created: ${prUrl}`); } catch (error) {"` this.log(` Pull request creation failed: ${error.message}`, "ERROR"); if (this.currentWorkflow) {" this.currentWorkflow.status = "failed"; this.currentWorkflow.error = error.message; this.currentWorkflow.endTime = new Date().toISOString(); this.workflowHistory.push(this.currentWorkflow); await this.saveWorkflowHistory(); } throw error; } } async generatePRTitle(sourceBranch) { try { / Get recent commits` const commits = await this.runGitCommand(`git log --oneline -5 ${sourceBranch}`);" const commitLines = commits.split("\n").filter(line => line.trim()); if (commitLines.length > 0) { const firstCommit = commitLines[0];" return firstCommit.substring(firstCommit.indexOf(" ") + 1); } ` return `Merge ${sourceBranch}`; } catch (error) {` return `Merge ${sourceBranch}`; } } async generatePRDescription(sourceBranch, targetBranch) { try { / Get changed files` const changedFiles = await this.runGitCommand(`git diff --name-only ${targetBranch}.${sourceBranch}`);" const fileList = changedFiles.split("\n").filter(f => f.trim()); / Get commit count` const commitCount = await this.runGitCommand(`git rev-list --count ${targetBranch}.${sourceBranch}`);` let description = `# Changes\n\n`;` description += `- **Files changed:** ${fileList.length}\n`;` description += `- **Commits:** ${commitCount}\n\n`; if (fileList.length > 0) {` description += `# Modified Files\n\n`; fileList.forEach(file => {` description += `- ${file}\n`; }); } ` description += `\n# Automated PR\n\nThis pull request was created automatically by the AI Git Workflow system.`; return description; } catch (error) {` return `Automated pull request from ${sourceBranch} to ${targetBranch}`; } } async createPRViaAPI(sourceBranch, targetBranch, title, description) { / This is a simplified implementation / In a real scenario, you would use the GitHub API or GitHub CLI try { / Try using GitHub CLI if available"` const result = await this.runGitCommand(`gh pr create --title "${title}" --body "${description}" --base ${targetBranch} --head ${sourceBranch}`); return result; } catch (error) { / Fallback to manual creation"` this.log(` GitHub CLI not available, manual PR creation required`, "WARN");` return `https:/github.com/your-repo/compare/${targetBranch}.${sourceBranch}`; } } async cleanupBranches() {` this.log(` Cleaning up branches.`); try { const workflow = { id: this.generateWorkflowId()," type: "cleanup_branches", startTime: new Date().toISOString()," status: "in_progress", steps: [] }; this.currentWorkflow = workflow; / Get all branches" const allBranches = await this.runGitCommand("git branch -a");" const branchList = allBranches.split("\n").filter(b => b.trim()); / Get merged branches" const mergedBranches = await this.runGitCommand("git branch --merged main");" const mergedList = mergedBranches.split("\n").filter(b => b.trim()); / Find branches to delete const branchesToDelete = branchList.filter(branch => {" const branchName = branch.replace("*", "").trim(); return !this.config.protectedBranches.includes(branchName) mergedList.includes(branchName) &&" branchName !== "main" && branchName !== "master"; }); / Delete merged branches for (const branch of branchesToDelete) {" const branchName = branch.replace("*", "").trim(); try {` await this.runGitCommand(`git branch -d ${branchName}`); workflow.steps.push({" step: "Delete merged branch"," status: "completed", branch: branchName, timestamp: new Date().toISOString() });` this.log(` Deleted merged branch: ${branchName}`); } catch (error) {"` this.log(` Could not delete branch ${branchName}: ${error.message}`, "WARN"); } } " workflow.status = "completed"; workflow.endTime = new Date().toISOString(); this.workflowHistory.push(workflow); await this.saveWorkflowHistory();` this.log(` Branch cleanup completed`); } catch (error) {"` this.log(` Branch cleanup failed: ${error.message}`, "ERROR"); if (this.currentWorkflow) {" this.currentWorkflow.status = "failed"; this.currentWorkflow.error = error.message; this.currentWorkflow.endTime = new Date().toISOString(); this.workflowHistory.push(this.currentWorkflow); await this.saveWorkflowHistory(); } throw error; } } async runCodeQualityChecks() {` this.log(` Running code quality checks.`); try { const workflow = { id: this.generateWorkflowId()," type: "code_quality_checks", startTime: new Date().toISOString()," status: "in_progress", steps: [] }; this.currentWorkflow = workflow; / Run linting try {" await this.runGitCommand("npm run lint"); workflow.steps.push({" step: "Lint check"," status: "passed", timestamp: new Date().toISOString() }); } catch (error) { workflow.steps.push({" step: "Lint check"," status: "failed", error: error.message, timestamp: new Date().toISOString() }); } / Run type checking try {" await this.runGitCommand("npm run type-check"); workflow.steps.push({" step: "Type check"," status: "passed", timestamp: new Date().toISOString() }); } catch (error) { workflow.steps.push({" step: "Type check"," status: "failed", error: error.message, timestamp: new Date().toISOString() }); } / Run tests try {" await this.runGitCommand("npm run test:smoke"); workflow.steps.push({" step: "Test run"," status: "passed", timestamp: new Date().toISOString() }); } catch (error) { workflow.steps.push({" step: "Test run"," status: "failed", error: error.message, timestamp: new Date().toISOString() }); } " workflow.status = "completed"; workflow.endTime = new Date().toISOString(); this.workflowHistory.push(workflow); await this.saveWorkflowHistory();` this.log(` Code quality checks completed`); } catch (error) {"` this.log(` Code quality checks failed: ${error.message}`, "ERROR"); if (this.currentWorkflow) {" this.currentWorkflow.status = "failed"; this.currentWorkflow.error = error.message; this.currentWorkflow.endTime = new Date().toISOString(); this.workflowHistory.push(this.currentWorkflow); await this.saveWorkflowHistory(); } throw error; } } generateWorkflowId() {` return `workflow_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`; } async getWorkflowStatus(workflowId) { const workflow = this.workflowHistory.find(w => w.id === workflowId); if (!workflow) {` throw new Error(`Workflow ${workflowId} not found`); } return workflow; } async getWorkflowHistory(type = null) { if (type) { return this.workflowHistory.filter(w => w.type === type); } return this.workflowHistory; } async run() { try { await this.initialize();" this.log(" Intelligent Git Workflow is ready"); / Keep the process alive" process.on("SIGINT", async () => {" this.log(" Shutting down Git Workflow."); process.exit(0); }); } catch (error) {"` this.log(` Fatal error: ${error.message}`, "ERROR"); process.exit(1); } }}/ Run the git workflowif (require.main === module) { const gitWorkflow = new IntelligentGitWorkflow(); gitWorkflow.run();}module.exports = IntelligentGitWorkflow;""`"`
#!/usr/bin/env node;
;#!/usr/bin/env node;
/**
 * Intelligent Git Workflow Automation;
 * Advanced Git automation with intelligent conflict resolution, auto-merge, and code review;
 * Features: Smart branching, conflict resolution, PR automation, code quality checks;
 */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
    this.logFile = path.join(this.projectRoot, 'logs', 'git-workflow.log')
    this.configFile = path.join(this.projectRoot, 'logs', 'git-workflow-config.json')
    this.workflowHistoryFile = path.join(this.projectRoot, 'logs', 'git-workflow-history.json')
      autoMerge: process.env.AUTO_MERGE === 'true'
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'intelligent'
      branchCleanup: process.env.BRANCH_CLEANUP === 'true'
      prAutomation: process.env.PR_AUTOMATION === 'true'
      codeReviewAI: process.env.CODE_REVIEW_AI === 'true'
      branchStrategy: process.env.BRANCH_STRATEGY || 'gitflow'
      protectedBranches: ['main', 'master', 'develop']
      autoCommit: process.env.AUTO_COMMIT === 'true'
      commitMessageTemplate: process.env.COMMIT_MESSAGE_TEMPLATE || 'feat: {type} - {description}'
      mergeStrategy: process.env.MERGE_STRATEGY || 'recursive'
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🔄 Starting Intelligent Git Workflow Automation...');
class IntelligentGitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = {
      autoCommit: process.env.AUTO_COMMIT === 'true',
      autoMerge: process.env.AUTO_MERGE === 'intelligent',
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'ai-powered',
      branchStrategy: process.env.BRANCH_STRATEGY || 'smart',
    };
    this.workflowData = this.loadWorkflowData();
  }
  loadWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
      await this.loadConfiguration();
      await this.loadWorkflowHistory();
    } catch (error) {
    }
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }
  async loadConfiguration() {
      console.log('📚 Creating new workflow data file...');
    }
    return {
      lastCommit: null,
      branchHistory: [],
      mergeHistory: [],
      conflictHistory: [],
      performance: {},
    };
  }
  saveWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    fs.writeFileSync(dataFile, JSON.stringify(this.workflowData, null, 2));
  }
  async runWorkflow() {
    console.log('🚀 Starting intelligent Git workflow...');
 cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
      this.log('📝 Using default Git workflow configuration');
      await this.saveConfiguration();
    }
  }
  async saveConfiguration() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = status.trim().length > 0;
      return {
        hasChanges,
        status: status.trim(),
        files: status.trim() ? status.trim().split('\n') : [],
      };
    } catch (error) {
      console.log('⚠️  Not a Git repository or Git not available');
      return { hasChanges: false, status: '', files: [] };
    }
  }
  async saveConfiguration() {
    try {
      await fs.writeFile(this.configFile, JSON.stringify(this.config, null, 2));
 HEAD
 cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
      this.log(`❌ Failed to save configuration: ${error.message}`, 'ERROR');
    }
  }
  async loadWorkflowHistory() {
    try {
      const history = await fs.readFile(this.workflowHistoryFile, 'utf8');
      this.workflowHistory = JSON.parse(history);
      this.log(`📚 Loaded ${this.workflowHistory.length} workflow records`);
    } catch (error) {
      this.log('📚 No workflow history found, starting fresh');
      this.workflowHistory = [];
    }
  }
  async saveWorkflowHistory() {
    try {
      await fs.writeFile(this.workflowHistoryFile, JSON.stringify(this.workflowHistory, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save workflow history: ${error.message}`, 'ERROR');
    }
  }

  shouldAutoCommit(changes) {
    if (!this.config.autoCommit) return false;
    // Don't auto-commit if there are too many changes
    if (changes.linesAdded > 500 || changes.linesDeleted > 200) {
    console.log('⚠️  Too many changes for auto-commit'),
    return false
  }
    // Don't auto-commit if there are test failures
    if (changes.types.tests > 0) {
      console.log('🧪 Test changes detected, skipping auto-commit');
      return false;
    }
    // Auto-commit for small fixes and documentation
    if (changes.types.fixes > 0 || changes.types.documentation > 0) {
      return true;
    }
    // Auto-commit for small feature additions
    if (changes.types.features > 0 && changes.linesAdded < 100) {
      return true;
    }
    return false;
  }
  async initialize() {
    this.log('🚀 Initializing Intelligent Git Workflow...');
    try {
      // Check if we're in a git repository
      await this.runGitCommand('git rev-parse --git-dir');
      this.log('✅ Git repository detected');
      // Set up git configuration if needed
      await this.setupGitConfiguration();
      this.log('🎯 Intelligent Git Workflow is ready');

  async intelligentCommit(changes) {
    console.log('💾 Performing intelligent commit...');
    try {
      // Stage all changes
      execSync('git add .', { stdio: 'inherit' });
      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(changes);
      // Create commit
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
      console.log(`✅ Committed: ${commitMessage}`);
      // Update workflow data
      this.workflowData.lastCommit = {
        message: commitMessage,
        timestamp: new Date().toISOString(),
        changes: changes,
      };
    } catch (error) {
      this.log(`❌ Git workflow initialization failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  async setupGitConfiguration() {
    try {
      // Set up git user if not configured
      const userName = await this.runGitCommand('git config user.name').catch(() => '');
      const userEmail = await this.runGitCommand('git config user.email').catch(() => '');
      if (!userName) {
        await this.runGitCommand('git config user.name "AI Git Workflow"');
        this.log('📝 Set git user name');
      }
      if (!userEmail) {
        await this.runGitCommand('git config user.email "ai-workflow@example.com"');
        this.log('📝 Set git user email');
      }
      // Set up merge strategy
      await this.runGitCommand(`git config merge.tool "vscode"`);
      await this.runGitCommand(`git config merge.conflictstyle "diff3"`);
    } catch (error) {
      this.log(`⚠️ Git configuration setup warning: ${error.message}`, 'WARN');

  generateCommitMessage(changes) {
    const timestamp = new Date().toISOString().split('T')[0];
    // Determine commit type
    let type = 'feat';
    if (changes.types.fixes > 0) type = 'fix';
    else if (changes.types.refactoring > 0) type = 'refactor';
    else if (changes.types.documentation > 0) type = 'docs';
    else if (changes.types.tests > 0) type = 'test';
    // Generate description
    let description = '';
    if (changes.types.fixes > 0) {
      description = 'Fix issues and improve stability';
    } else if (changes.types.features > 0) {
      description = 'Add new features and enhancements';
    } else if (changes.types.refactoring > 0) {
      description = 'Refactor code for better maintainability';
    } else if (changes.types.documentation > 0) {
      description = 'Update documentation and comments';
    } else {
      description = 'Update codebase';
    }
  }
  async runGitCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        ...options 
      });
      return result.trim();
    } catch (error) {
      throw new Error(`Git command failed: ${command} - ${error.message}`);
    }
  }
  async createBranch(branchName, baseBranch = 'main') {
    this.log(`🌿 Creating branch: ${branchName} from ${baseBranch}`);
    try {
      const workflow = {
        id: this.generateWorkflowId(),
        type: 'create_branch',
        branchName,
        baseBranch,
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      };
      this.currentWorkflow = workflow;
      // Check if branch already exists
      const existingBranches = await this.runGitCommand('git branch -a');
      if (existingBranches.includes(branchName)) {
        throw new Error(`Branch ${branchName} already exists`);
      }
      // Switch to base branch
      await this.runGitCommand(`git checkout ${baseBranch}`);
      workflow.steps.push({
        step: 'Checkout base branch',
        status: 'completed',
        timestamp: new Date().toISOString()
      });
      // Pull latest changes
      await this.runGitCommand('git pull origin ' + baseBranch);
      workflow.steps.push({
        step: 'Pull latest changes',
        status: 'completed',
        timestamp: new Date().toISOString()
      });
      // Create new branch
      await this.runGitCommand(`git checkout -b ${branchName}`);
      workflow.steps.push({
        step: 'Create new branch',
        status: 'completed',
        timestamp: new Date().toISOString()
      });
      // Push new branch to remote
      await this.runGitCommand(`git push -u origin ${branchName}`);
      workflow.steps.push({
        step: 'Push branch to remote',
        status: 'completed',
        timestamp: new Date().toISOString()
      });
      workflow.status = 'completed';
      workflow.endTime = new Date().toISOString();
      this.workflowHistory.push(workflow);
      await this.saveWorkflowHistory();
      this.log(`✅ Branch ${branchName} created successfully`);
    } catch (error) {
      this.log(`❌ Branch creation failed: ${error.message}`, 'ERROR');
      if (this.currentWorkflow) {
        this.currentWorkflow.status = 'failed';
        this.currentWorkflow.error = error.message;
        this.currentWorkflow.endTime = new Date().toISOString();
        this.workflowHistory.push(this.currentWorkflow);
        await this.saveWorkflowHistory();
      }
      throw error;
    }
  }
  async commitChanges(files = [], message = null, type = 'feat') {
    this.log(`💾 Committing changes...`);
    try {
      const workflow = {
        id: this.generateWorkflowId(),
        type: 'commit_changes',
        files,
        message,
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      };
      this.currentWorkflow = workflow;
      // Check git status
      const status = await this.runGitCommand('git status --porcelain');
      if (!status.trim()) {
        this.log('ℹ️ No changes to commit');
        return;
      }
      // Add files
      if (files.length > 0) {
        for (const file of files) {
          await this.runGitCommand(`git add ${file}`);

  async intelligentMerge() {
    console.log('🔀 Checking for merge opportunities...');
    try {
      // Get current branch
      const currentBranch = execSync('git branch --show-current', {
        encoding: 'utf8',
      }).trim();
      // Get all branches
      const branches = execSync('git branch -r', { encoding: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'));
      // Find mergeable branches
      const mergeableBranches = await this.findMergeableBranches(
        currentBranch,
        branches
      );
      if (mergeableBranches.length > 0) {
        console.log(`🔀 Found ${mergeableBranches.length} mergeable branches`);
        for (const branch of mergeableBranches) {
          await this.performIntelligentMerge(branch);
        }
      } else {
        await this.runGitCommand('git add .');
      }
      workflow.steps.push({
        step: 'Add files to staging',
        status: 'completed',
        files: files.length > 0 ? files : 'all',
        timestamp: new Date().toISOString()
      });
      // Generate commit message if not provided
      if (!message) {
        message = await this.generateCommitMessage(files, type);
      }
      // Commit changes
      await this.runGitCommand(`git commit -m "${message}"`);
      workflow.steps.push({
        step: 'Commit changes',
        status: 'completed',
        message,
        timestamp: new Date().toISOString()
      });
      workflow.status = 'completed';
      workflow.endTime = new Date().toISOString();
      this.workflowHistory.push(workflow);
      await this.saveWorkflowHistory();
      this.log(`✅ Changes committed: ${message}`);
    } catch (error) {
      this.log(`❌ Commit failed: ${error.message}`, 'ERROR');
      if (this.currentWorkflow) {
        this.currentWorkflow.status = 'failed';
        this.currentWorkflow.error = error.message;
        this.currentWorkflow.endTime = new Date().toISOString();
        this.workflowHistory.push(this.currentWorkflow);
        await this.saveWorkflowHistory();
      }
      throw error;
    }
  }
  async generateCommitMessage(files, type) {
    try {
      // Analyze changed files to generate meaningful commit message
      const status = await this.runGitCommand('git status --porcelain');
      const lines = status.split('\n').filter(line => line.trim());
      const addedFiles = lines.filter(line => line.startsWith('A')).length;
      const modifiedFiles = lines.filter(line => line.startsWith('M')).length;
      const deletedFiles = lines.filter(line => line.startsWith('D')).length;
      let description = '';
      if (addedFiles > 0) description += `add ${addedFiles} file(s)`;
      if (modifiedFiles > 0) description += `${description ? ', ' : ''}modify ${modifiedFiles} file(s)`;
      if (deletedFiles > 0) description += `${description ? ', ' : ''}delete ${deletedFiles} file(s)`;
      // Generate commit message based on template
      const message = this.config.commitMessageTemplate
        .replace('{type}', type)
        .replace('{description}', description);
      return message;
    } catch (error) {
      return `${type}: Automated commit`;
    }
  }
  async pushChanges(branchName = null) {
    this.log(`📤 Pushing changes...`);
    try {
      const workflow = {
        id: this.generateWorkflowId(),
        type: 'push_changes',
        branchName: branchName || await this.getCurrentBranch(),
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      };
      this.currentWorkflow = workflow;
      // Get current branch if not specified
      const currentBranch = branchName || await this.getCurrentBranch();
      // Push changes
      await this.runGitCommand(`git push origin ${currentBranch}`);
      workflow.steps.push({
        step: 'Push to remote',
        status: 'completed',
        branch: currentBranch,
        timestamp: new Date().toISOString()
      });
      workflow.status = 'completed';
      workflow.endTime = new Date().toISOString();
      this.workflowHistory.push(workflow);
      await this.saveWorkflowHistory();
      this.log(`✅ Changes pushed to ${currentBranch}`);
    } catch (error) {
      this.log(`❌ Push failed: ${error.message}`, 'ERROR');
      if (this.currentWorkflow) {
        this.currentWorkflow.status = 'failed';
        this.currentWorkflow.error = error.message;
        this.currentWorkflow.endTime = new Date().toISOString();
        this.workflowHistory.push(this.currentWorkflow);
        await this.saveWorkflowHistory();
      }
      throw error;
    }
  }
  async getCurrentBranch() {
    try {
      return await this.runGitCommand('git branch --show-current');
    } catch (error) {
      return 'main';
    }
  }
  async mergeBranch(sourceBranch, targetBranch = 'main', options = {}) {
    this.log(`🔄 Merging ${sourceBranch} into ${targetBranch}...`);
    try {
      const workflow = {
        id: this.generateWorkflowId(),
        type: 'merge_branch',
        sourceBranch,
        targetBranch,
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      };
      this.currentWorkflow = workflow;
      // Switch to target branch
      await this.runGitCommand(`git checkout ${targetBranch}`);
      workflow.steps.push({
        step: 'Checkout target branch',
        status: 'completed',
        branch: targetBranch,
        timestamp: new Date().toISOString()
      });
      // Pull latest changes
      await this.runGitCommand(`git pull origin ${targetBranch}`);
      workflow.steps.push({
        step: 'Pull latest changes',
        status: 'completed',
        timestamp: new Date().toISOString()
      });
      // Check for conflicts before merge
      const conflicts = await this.checkForConflicts(sourceBranch, targetBranch);
      if (conflicts.length > 0) {
        this.log(`⚠️ Potential conflicts detected: ${conflicts.join(', ')}`);
        if (this.config.conflictResolution === 'intelligent') {
          await this.resolveConflictsIntelligently(conflicts, workflow);
        } else {
          throw new Error(`Conflicts detected: ${conflicts.join(', ')}`);
    } catch (error) {
      console.log('⚠️  Merge check failed:', error.message);
    }
  }
  async findMergeableBranches(currentBranch, branches) {
    const mergeable = [];
    for (const branch of branches) {
      try {
        // Check if branch can be merged
        const mergeBase = execSync(
          `git merge-base ${currentBranch} ${branch}`,
          { encoding: 'utf8' }
        ).trim();
        const currentCommit = execSync(`git rev-parse ${currentBranch}`, {
          encoding: 'utf8',
        }).trim();
        const branchCommit = execSync(`git rev-parse ${branch}`, {
          encoding: 'utf8',
        }).trim();
        // If branch is ahead of current branch
        if (branchCommit !== currentCommit && mergeBase === currentCommit) {
          mergeable.push(branch);
        }
      }
      // Perform merge
      await this.runGitCommand(`git merge ${sourceBranch} --no-ff`);
      workflow.steps.push({
        step: 'Merge branches',
        status: 'completed',
        source: sourceBranch,
        target: targetBranch,
        timestamp: new Date().toISOString()
      });
      // Push merged changes
      await this.runGitCommand(`git push origin ${targetBranch}`);
      workflow.steps.push({
        step: 'Push merged changes',
        status: 'completed',
        timestamp: new Date().toISOString()
      });
      workflow.status = 'completed';
      workflow.endTime = new Date().toISOString();
      this.workflowHistory.push(workflow);
      await this.saveWorkflowHistory();
      this.log(`✅ Successfully merged ${sourceBranch} into ${targetBranch}`);
    } catch (error) {
      this.log(`❌ Merge failed: ${error.message}`, 'ERROR');
      if (this.currentWorkflow) {
        this.currentWorkflow.status = 'failed';
        this.currentWorkflow.error = error.message;
        this.currentWorkflow.endTime = new Date().toISOString();
        this.workflowHistory.push(this.currentWorkflow);
        await this.saveWorkflowHistory();
      }
      throw error;
    }
  }
  async checkForConflicts(sourceBranch, targetBranch) {
    try {
      // Get the merge base
      const mergeBase = await this.runGitCommand(`git merge-base ${sourceBranch} ${targetBranch}`);
      // Get changed files in both branches
      const sourceFiles = await this.runGitCommand(`git diff --name-only ${mergeBase} ${sourceBranch}`);
      const targetFiles = await this.runGitCommand(`git diff --name-only ${mergeBase} ${targetBranch}`);
      const sourceFileList = sourceFiles.split('\n').filter(f => f.trim());
      const targetFileList = targetFiles.split('\n').filter(f => f.trim());
      // Find common files that have been modified
      const commonFiles = sourceFileList.filter(file => targetFileList.includes(file));
      return commonFiles;
    } catch (error) {
      this.log(`⚠️ Conflict check failed: ${error.message}`, 'WARN');
      return [];
 HEAD
 7c5570ce863aceb5500c5da6ecbea653a552cacd
 HEAD
          conflictType = 'separator';
          continue;
        } else if (line.startsWith('>>>>>>')) {
          inConflict = false;
          conflictType = 'end';
          continue;
        }
        if (!inConflict) {
          resolvedLines.push(line);
        } else if (conflictType === 'separator') {
          // Use the version after the separator (incoming changes)
          resolvedLines.push(line);const { execSync } = require('child_process');
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Starting Intelligent Git Workflow Automation...');

class IntelligentGitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = {
      autoCommit: process.env.AUTO_COMMIT === 'true',
      autoMerge: process.env.AUTO_MERGE === 'intelligent',
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'ai-powered',
      branchStrategy: process.env.BRANCH_STRATEGY || 'smart',
    };
    this.workflowData = this.loadWorkflowData();
  }

  loadWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    try {
      if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      }
    } catch (error) {
      console.log('📚 Creating new workflow data file...');
    }
    return {
      lastCommit: null,
      branchHistory: [],
      mergeHistory: [],
      conflictHistory: [],
      performance: {},
    };
  }

  saveWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    fs.writeFileSync(dataFile, JSON.stringify(this.workflowData, null, 2));
  }

  async runWorkflow() {
    console.log('🚀 Starting intelligent Git workflow...');

    try {
      // Check Git status
      const status = await this.checkGitStatus();

      if (status.hasChanges) {
        console.log('📝 Changes detected, analyzing...');

        // Analyze changes
        const changes = await this.analyzeChanges();

        // Determine if auto-commit should happen
        if (this.shouldAutoCommit(changes)) {
          await this.intelligentCommit(changes);
        }
      }

      // Check for merge opportunities
      if (this.config.autoMerge) {
        await this.intelligentMerge();
      }

      // Update workflow data
      this.updateWorkflowData();
      this.saveWorkflowData();

      console.log('✅ Git workflow completed successfully!');
    } catch (error) {
      console.error('❌ Git workflow failed:', error.message);
      this.handleWorkflowError(error);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = status.trim().length > 0;

      return {
        hasChanges,
        status: status.trim(),
        files: status.trim() ? status.trim().split('\n') : [],
      };
    } catch (error) {
      console.log('⚠️  Not a Git repository or Git not available');
      return { hasChanges: false, status: '', files: [] };
    }
  }

  async analyzeChanges() {
    try {
      const diff = execSync('git diff --cached', { encoding: 'utf8' });
      const diffStats = execSync('git diff --cached --stat', {
        encoding: 'utf8',
      });

      const changes = {
        files: [],
        linesAdded: 0,
        linesDeleted: 0,
        types: {
          features: 0,
          fixes: 0,
          refactoring: 0,
          documentation: 0,
          tests: 0,
        },
      };

      // Parse diff stats
      const statLines = diffStats.split('\n');
      statLines.forEach(line => {
        if (line.includes('|')) {
          const parts = line.split('|');
          const fileName = parts[0].trim();
          const stats = parts[1].trim();

          changes.files.push({
            name: fileName,
            stats: stats,
          });

          // Count lines
          const match = stats.match(/(\d+)\s+(\+|\-)/);
          if (match) {
            if (match[2] === '+') {
              changes.linesAdded += parseInt(match[1]);
            } else {
              changes.linesDeleted += parseInt(match[1]);
            }
          }
        }
      });

      // Analyze change types
      changes.files.forEach(file => {
        const fileName = file.name.toLowerCase();
        if (fileName.includes('test') || fileName.includes('spec')) {
          changes.types.tests++;
        } else if (fileName.includes('readme') || fileName.includes('doc')) {
          changes.types.documentation++;
        } else if (fileName.includes('fix') || fileName.includes('bug')) {
          changes.types.fixes++;
        } else if (fileName.includes('refactor')) {
          changes.types.refactoring++;
        } else {
          changes.types.features++;
        }
      });

      return changes;
    } catch (error) {
      console.log('⚠️  Could not analyze changes:', error.message);
      return { files: [], linesAdded: 0, linesDeleted: 0, types: {} };
    }
  }

  shouldAutoCommit(changes) {
    if (!this.config.autoCommit) return false;

    // Don't auto-commit if there are too many changes
    if (changes.linesAdded > 500 || changes.linesDeleted > 200) {
    console.log('⚠️  Too many changes for auto-commit'),
    return false
  }

    // Don't auto-commit if there are test failures
    if (changes.types.tests > 0) {
      console.log('🧪 Test changes detected, skipping auto-commit');
      return false;
    }

    // Auto-commit for small fixes and documentation
    if (changes.types.fixes > 0 || changes.types.documentation > 0) {
      return true;
    }

    // Auto-commit for small feature additions
    if (changes.types.features > 0 && changes.linesAdded < 100) {
      return true;
    }

    return false;
  }

  async intelligentCommit(changes) {
    console.log('💾 Performing intelligent commit...');

    try {
      // Stage all changes
      execSync('git add .', { stdio: 'inherit' });

      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(changes);

      // Create commit
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

      console.log(`✅ Committed: ${commitMessage}`);

      // Update workflow data
      this.workflowData.lastCommit = {
        message: commitMessage,
        timestamp: new Date().toISOString(),
        changes: changes,
      };
    } catch (error) {
      console.error('❌ Commit failed:', error.message);
      throw error;
    }
  }

  generateCommitMessage(changes) {
    const timestamp = new Date().toISOString().split('T')[0];

    // Determine commit type
    let type = 'feat';
    if (changes.types.fixes > 0) type = 'fix';
    else if (changes.types.refactoring > 0) type = 'refactor';
    else if (changes.types.documentation > 0) type = 'docs';
    else if (changes.types.tests > 0) type = 'test';

    // Generate description
    let description = '';
    if (changes.types.fixes > 0) {
      description = 'Fix issues and improve stability';
    } else if (changes.types.features > 0) {
      description = 'Add new features and enhancements';
    } else if (changes.types.refactoring > 0) {
      description = 'Refactor code for better maintainability';
    } else if (changes.types.documentation > 0) {
      description = 'Update documentation and comments';
    } else {
      description = 'Update codebase';
    }

    // Add file count
    const fileCount = changes.files.length;
    if (fileCount > 0) {
      description += ` (${fileCount} files)`;
    }

    return `${type}: ${description} [${timestamp}]`;
  }

  async intelligentMerge() {
    console.log('🔀 Checking for merge opportunities...');

    try {
      // Get current branch
      const currentBranch = execSync('git branch --show-current', {
        encoding: 'utf8',
      }).trim();

      // Get all branches
      const branches = execSync('git branch -r', { encoding: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'));

      // Find mergeable branches
      const mergeableBranches = await this.findMergeableBranches(
        currentBranch,
        branches
      );

      if (mergeableBranches.length > 0) {
        console.log(`🔀 Found ${mergeableBranches.length} mergeable branches`);

        for (const branch of mergeableBranches) {
          await this.performIntelligentMerge(branch);
        }
      } else {
        console.log('✅ No merge opportunities found');
      }
    } catch (error) {
      console.log('⚠️  Merge check failed:', error.message);
    }
  }

  async findMergeableBranches(currentBranch, branches) {
    const mergeable = [];

    for (const branch of branches) {
      try {
        // Check if branch can be merged
        const mergeBase = execSync(
          `git merge-base ${currentBranch} ${branch}`,
          { encoding: 'utf8' }
        ).trim();
        const currentCommit = execSync(`git rev-parse ${currentBranch}`, {
          encoding: 'utf8',
        }).trim();
        const branchCommit = execSync(`git rev-parse ${branch}`, {
          encoding: 'utf8',
        }).trim();

        // If branch is ahead of current branch
        if (branchCommit !== currentCommit && mergeBase === currentCommit) {
          mergeable.push(branch);
        }
      } catch (error) {
        // Skip branches that can't be checked
      }
 cursor/integrate-build-improve-and-re-verify-8f7d
    }
  }
  async resolveConflictsIntelligently(conflicts, workflow) {
    this.log(`🧠 Resolving conflicts intelligently...`);
    try {
      for (const file of conflicts) {
        this.log(`🔧 Resolving conflicts in ${file}...`);
        // Try to resolve conflicts automatically
        const resolution = await this.autoResolveConflicts(file);
        if (resolution.resolved) {
          workflow.steps.push({
            step: 'Resolve conflicts',
            status: 'completed',
            file,
            method: resolution.method,
            timestamp: new Date().toISOString()
          });
          this.log(`✅ Conflicts in ${file} resolved using ${resolution.method}`);
        } else {
          workflow.steps.push({
            step: 'Resolve conflicts',
            status: 'failed',
            file,
            error: resolution.error,
            timestamp: new Date().toISOString()
          });
          this.log(`❌ Failed to resolve conflicts in ${file}: ${resolution.error}`, 'ERROR');
          throw new Error(`Conflict resolution failed for ${file}`);
        }
      }
    } catch (error) {
      this.log(`❌ Intelligent conflict resolution failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  async autoResolveConflicts(file) {
    try {
      // Read the conflicted file
      const content = await fs.readFile(file, 'utf8');
      // Check if file has conflict markers
      if (!content.includes('') || !content.includes('>>>>>>')) {
        return { resolved: true, method: 'no_conflicts' };
      }
      // Simple conflict resolution strategies
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictType = '';
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('<<<<<<<')) {
          inConflict = true;
          conflictType = 'start';
          continue;
        } else if (line.startsWith('')) {
          conflictType = 'separator';
          continue;
        } else if (line.startsWith('>>>>>>')) {
          inConflict = false;
          conflictType = 'end';
          continue;
        }
        if (!inConflict) {
          resolvedLines.push(line);
        } else if (conflictType === 'separator') {
          // Use the version after the separator (incoming changes)
          resolvedLines.push(line);const { execSync } = require('child_process');
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Starting Intelligent Git Workflow Automation...');

class IntelligentGitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = {
      autoCommit: process.env.AUTO_COMMIT === 'true',
      autoMerge: process.env.AUTO_MERGE === 'intelligent',
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'ai-powered',
      branchStrategy: process.env.BRANCH_STRATEGY || 'smart',
    };
    this.workflowData = this.loadWorkflowData();
  }

  loadWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    try {
      if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      }
    } catch (error) {
      console.log('📚 Creating new workflow data file...');
    }
    return {
      lastCommit: null,
      branchHistory: [],
      mergeHistory: [],
      conflictHistory: [],
      performance: {},
    };
  }

  saveWorkflowData() {
    const dataFile = path.join(
      this.projectRoot,
      'logs',
      'git-workflow-data.json'
    );
    fs.writeFileSync(dataFile, JSON.stringify(this.workflowData, null, 2));
  }

  async runWorkflow() {
    console.log('🚀 Starting intelligent Git workflow...');

    try {
      // Check Git status
      const status = await this.checkGitStatus();

      if (status.hasChanges) {
        console.log('📝 Changes detected, analyzing...');

        // Analyze changes
        const changes = await this.analyzeChanges();

        // Determine if auto-commit should happen
        if (this.shouldAutoCommit(changes)) {
          await this.intelligentCommit(changes);
        }
      }

      // Check for merge opportunities
      if (this.config.autoMerge) {
        await this.intelligentMerge();
      }

      // Update workflow data
      this.updateWorkflowData();
      this.saveWorkflowData();

      console.log('✅ Git workflow completed successfully!');
    } catch (error) {
      console.error('❌ Git workflow failed:', error.message);
      this.handleWorkflowError(error);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const hasChanges = status.trim().length > 0;

      return {
        hasChanges,
        status: status.trim(),
        files: status.trim() ? status.trim().split('\n') : [],
      };
    } catch (error) {
      console.log('⚠️  Not a Git repository or Git not available');
      return { hasChanges: false, status: '', files: [] };
    }
  }

  async analyzeChanges() {
    try {
      const diff = execSync('git diff --cached', { encoding: 'utf8' });
      const diffStats = execSync('git diff --cached --stat', {
        encoding: 'utf8',
      });

      const changes = {
        files: [],
        linesAdded: 0,
        linesDeleted: 0,
        types: {
          features: 0,
          fixes: 0,
          refactoring: 0,
          documentation: 0,
          tests: 0,
        },
      };

      // Parse diff stats
      const statLines = diffStats.split('\n');
      statLines.forEach(line => {
        if (line.includes('|')) {
          const parts = line.split('|');
          const fileName = parts[0].trim();
          const stats = parts[1].trim();

          changes.files.push({
            name: fileName,
            stats: stats,
          });

          // Count lines
          const match = stats.match(/(\d+)\s+(\+|\-)/);
          if (match) {
            if (match[2] === '+') {
              changes.linesAdded += parseInt(match[1]);
            } else {
              changes.linesDeleted += parseInt(match[1]);
            }
          }
        }
      });

      // Analyze change types
      changes.files.forEach(file => {
        const fileName = file.name.toLowerCase();
        if (fileName.includes('test') || fileName.includes('spec')) {
          changes.types.tests++;
        } else if (fileName.includes('readme') || fileName.includes('doc')) {
          changes.types.documentation++;
        } else if (fileName.includes('fix') || fileName.includes('bug')) {
          changes.types.fixes++;
        } else if (fileName.includes('refactor')) {
          changes.types.refactoring++;
        } else {
          changes.types.features++;
        }
      });

      return changes;
    } catch (error) {
      console.log('⚠️  Could not analyze changes:', error.message);
      return { files: [], linesAdded: 0, linesDeleted: 0, types: {} };
    }
  }

  shouldAutoCommit(changes) {
    if (!this.config.autoCommit) return false;

    // Don't auto-commit if there are too many changes
    if (changes.linesAdded > 500 || changes.linesDeleted > 200) {
    console.log('⚠️  Too many changes for auto-commit'),
    return false
  }

    // Don't auto-commit if there are test failures
    if (changes.types.tests > 0) {
      console.log('🧪 Test changes detected, skipping auto-commit');
      return false;
    }

    // Auto-commit for small fixes and documentation
    if (changes.types.fixes > 0 || changes.types.documentation > 0) {
      return true;
    }

    // Auto-commit for small feature additions
    if (changes.types.features > 0 && changes.linesAdded < 100) {
      return true;
    }

    return false;
  }

  async intelligentCommit(changes) {
    console.log('💾 Performing intelligent commit...');

    try {
      // Stage all changes
      execSync('git add .', { stdio: 'inherit' });

      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(changes);

      // Create commit
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

      console.log(`✅ Committed: ${commitMessage}`);

      // Update workflow data
      this.workflowData.lastCommit = {
        message: commitMessage,
        timestamp: new Date().toISOString(),
        changes: changes,
      };
    } catch (error) {
      console.error('❌ Commit failed:', error.message);
      throw error;
    }
  }

  generateCommitMessage(changes) {
    const timestamp = new Date().toISOString().split('T')[0];

    // Determine commit type
    let type = 'feat';
    if (changes.types.fixes > 0) type = 'fix';
    else if (changes.types.refactoring > 0) type = 'refactor';
    else if (changes.types.documentation > 0) type = 'docs';
    else if (changes.types.tests > 0) type = 'test';

    // Generate description
    let description = '';
    if (changes.types.fixes > 0) {
      description = 'Fix issues and improve stability';
    } else if (changes.types.features > 0) {
      description = 'Add new features and enhancements';
    } else if (changes.types.refactoring > 0) {
      description = 'Refactor code for better maintainability';
    } else if (changes.types.documentation > 0) {
      description = 'Update documentation and comments';
    } else {
      description = 'Update codebase';
    }

    // Add file count
    const fileCount = changes.files.length;
    if (fileCount > 0) {
      description += ` (${fileCount} files)`;
    }

    return `${type}: ${description} [${timestamp}]`;
  }

  async intelligentMerge() {
    console.log('🔀 Checking for merge opportunities...');

    try {
      // Get current branch
      const currentBranch = execSync('git branch --show-current', {
        encoding: 'utf8',
      }).trim();

      // Get all branches
      const branches = execSync('git branch -r', { encoding: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'));

      // Find mergeable branches
      const mergeableBranches = await this.findMergeableBranches(
        currentBranch,
        branches
      );

      if (mergeableBranches.length > 0) {
        console.log(`🔀 Found ${mergeableBranches.length} mergeable branches`);

        for (const branch of mergeableBranches) {
          await this.performIntelligentMerge(branch);
        }
      } else {
        console.log('✅ No merge opportunities found');
      }
    } catch (error) {
      console.log('⚠️  Merge check failed:', error.message);
    }
  }

  async findMergeableBranches(currentBranch, branches) {
    const mergeable = [];

    for (const branch of branches) {
      try {
        // Check if branch can be merged
        const mergeBase = execSync(
          `git merge-base ${currentBranch} ${branch}`,
          { encoding: 'utf8' }
        ).trim();
        const currentCommit = execSync(`git rev-parse ${currentBranch}`, {
          encoding: 'utf8',
        }).trim();
        const branchCommit = execSync(`git rev-parse ${branch}`, {
          encoding: 'utf8',
        }).trim();

        // If branch is ahead of current branch
        if (branchCommit !== currentCommit && mergeBase === currentCommit) {
          mergeable.push(branch);
        }
      } catch (error) {
        // Skip branches that can't be checked
      }
    }

    return mergeable;
  }
  async performIntelligentMerge(branch) {
    console.log(`🔀 Attempting to merge ${branch}...`);
    try {
      // Check for conflicts first
      const mergeCheck = execSync(`git merge --no-commit --no-ff ${branch}`, {
        encoding: 'utf8',
      });
      // If no conflicts, complete the merge
      execSync(`git commit -m "Merge ${branch} [auto-merge]"`, {
        stdio: 'inherit',
      });
      console.log(`✅ Successfully merged ${branch}`);
      // Update workflow data
      this.workflowData.mergeHistory.push({
        branch: branch,
        timestamp: new Date().toISOString(),
        success: true,
      });
    } catch (error) {
      console.log(`⚠️  Merge failed for ${branch}:`, error.message);
      // Handle conflicts if configured
      if (this.config.conflictResolution === 'ai-powered') {
        await this.handleMergeConflicts(branch);
      }
      // Update workflow data
      this.workflowData.mergeHistory.push({
        branch: branch,
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
      });
    }
  }
  async handleMergeConflicts(branch) {
    console.log(
      `🤖 Attempting AI-powered conflict resolution for ${branch}...`
    );
    try {
      // Get conflicted files
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictedFiles = status
        .split('\n')
        .filter(
          line =>
            line.includes('UU') || line.includes('AA') || line.includes('DD')
        )
        .map(line => line.split(' ').pop());
      for (const file of conflictedFiles) {
        await this.resolveFileConflict(file);
      }
      // Complete the merge
      execSync(`git commit -m "Merge ${branch} [ai-resolved conflicts]"`, {
        stdio: 'inherit',
      });
      console.log(`✅ AI resolved conflicts for ${branch}`);
    } catch (error) {
      console.log(
        `❌ AI conflict resolution failed for ${branch}:`,
        error.message
      );
      // Abort the merge
      execSync('git merge --abort', { stdio: 'inherit' });
    }
  }

  async resolveFileConflict(filePath) {
    console.log(`🔧 Resolving conflict in ${filePath}...`);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const resolvedLines = [];

      let inConflict = false;
      let conflictType = '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('<<<<<<<')) {
    inConflict = true,
    conflictType = 'ours'
          conflictType = 'theirs';
    inConflict = false,
    conflictType = ''
  } else if (!inConflict) {
          resolvedLines.push(line);
        } else if (inConflict && conflictType === 'ours') {
          // Keep our version for now (simple strategy)
          resolvedLines.push(line);
        }
        // Skip their version
      }
;
      // Write resolved content;
      fs.writeFileSync(filePath, resolvedLines.join('\n'));
      // Add resolved file
      execSync(`git add ${filePath}`, { stdio: 'inherit' });
      console.log(`✅ Resolved conflict in ${filePath}`);
    } catch (error) {
      console.log(
        `❌ Failed to resolve conflict in ${filePath}:`,
        error.message
      );
    }
  }

  updateWorkflowData() {
    this.workflowData.lastUpdated = new Date().toISOString();

    // Update performance metrics
    const now = new Date().toISOString();
    this.workflowData.performance[now] = {
      commits: this.workflowData.mergeHistory.filter(m => m.success).length,
      conflicts: this.workflowData.conflictHistory.length,
      merges: this.workflowData.mergeHistory.length,
    };
  }
