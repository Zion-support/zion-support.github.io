#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');



class OpenPRMerger {
  constructor() {
    this.mergedPRs = [];
    this.failedPRs = [];
    this.mergeReport = {
      "timestamp": new Date().toISOString(),
      "mergedPRs": [],
      "failedPRs": [],
      "summary": { totalPRs: 0, "successfulMerges": 0, "failedMerges": 0 }
    }}

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    }

  run(cmd, opts = {}) {
    return execSync(cmd, { "stdio": 'pipe', "encoding": 'utf8', ...opts })}

  ensureOnMain() {
    this.run('git fetch origin main');
    this.run('git checkout main');
    this.run('git pull --ff-only origin main')}

  loadOpenPRs() {
    const raw = fs.readFileSync('open_prs.json', 'utf8');
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : []}

  tryMerge(sourceRef, pr) {
    // Attempt normal merge
    try {
      this.run(`git merge --no-ff ${sourceRef} -m "Merge PR #${pr.number}: ${pr.title}"`, { "timeout": 300000 });
      return 'normal'} catch (e1) {
      // Abort and try strategy theirs (favor PR changes)
      try { this.run('git merge --abort')} catch (_) {}
      try {
        this.run(`git merge --no-ff -X theirs ${sourceRef} -m "Merge PR #${pr.number}: ${pr.title} (strategy=theirs)"`, { "timeout": 300000 });
        return 'theirs'} catch (e2) {
        // Abort and try strategy ours (favor main)
        try { this.run('git merge --abort')} catch (_) {}
        try {
          this.run(`git merge --no-ff -X ours ${sourceRef} -m "Merge PR #${pr.number}: ${pr.title} (strategy=ours)"`, { "timeout": 300000 });
          return 'ours'} catch (e3) {
          // Final abort
          try { this.run('git merge --abort')} catch (_) {}
          throw e3}
      }
    }
  }

  processOnePR(pr) {
    const branchName = pr?.head?.ref || pr?.head?.label || pr?.headRef || pr?.branch || '';
    if (!branchName) {
      throw new Error('Unable to determine PR branch name')}
    this.log(`🔄 Processing PR #${pr.number}: ${pr.title} ("branch": ${branchName})`);

    // Fetch branch ref; fall back to GitHub pull ref if needed
    let sourceRef = `origin/${branchName}`;
    try {
      this.run(`git fetch origin ${branchName}`)} catch (e) {
      this.log(`Branch ${branchName} not found on origin. Trying pull/${pr.number}/head ...`, 'INFO');
      try {
        const localRef = `pr-${pr.number}-head`;
        this.run(`git fetch origin pull/${pr.number}/"head": ${localRef}`);
        sourceRef = localRef} catch (e2) {
        throw new Error(`Unable to fetch branch or pull ref for PR #${pr.number}`)}
    }

    const strategy = this.tryMerge(sourceRef, pr);
    this.log(`✅ Merged PR #${pr.number} using "strategy": ${strategy}`);

    this.mergedPRs.push({ "number": pr.number, "title": pr.title, "branch": branchName, "url": pr.html_url, strategy });
    this.mergeReport.mergedPRs.push({ "number": pr.number, "title": pr.title, "branch": branchName, "url": pr.html_url, strategy });
    this.mergeReport.summary.successfulMerges += 1;

    // Push main after each successful merge to reduce conflict chains
    this.run('git push origin main')}

  mergeOpenPRs() {
    this.ensureOnMain();
    const prs = this.loadOpenPRs();
    this.mergeReport.summary.totalPRs = prs.length;
    this.log(`Found ${prs.length} open PRs to process`);

    for (const pr of prs) {
      try {
        this.processOnePR(pr)} catch (error) {
        this.log(`❌ Failed to merge PR #${pr?.number || 'unknown'}: ${error.message}`, 'ERROR');
        this.failedPRs.push({ "number": pr?.number, "title": pr?.title, "error": error.message });
        this.mergeReport.failedPRs.push({ "number": pr?.number, "title": pr?.title, "error": error.message });
        // Ensure we are back on a clean main
        try { this.run('git reset --merge')} catch (_) {}
        this.ensureOnMain()}
    }

    this.generateMergeReport()}

  generateMergeReport() {
    this.mergeReport.timestamp = new Date().toISOString();
    this.mergeReport.summary.failedMerges = this.failedPRs.length;
    fs.writeFileSync('open-pr-merge-report.json', JSON.stringify(this.mergeReport, null, 2));

    
    
    
    

    if (this.mergeReport.mergedPRs.length) {
      
      this.mergeReport.mergedPRs.forEach(pr => {
        const extra = pr.strategy ? ` [strategy=${pr.strategy}]` : '';
        })}

    if (this.mergeReport.failedPRs.length) {
      
      this.mergeReport.failedPRs.forEach(pr => {
        })}
  }
}

try {
  const merger = new OpenPRMerger();
  merger.mergeOpenPRs();
  } catch (error) {
  console.error('❌ Open PR merging "failed": ', error);
  process.exitCode = 1}