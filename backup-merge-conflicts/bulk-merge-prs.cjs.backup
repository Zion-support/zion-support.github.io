<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst https = require("https";);"const fs = require("fs")"const path = require("path")class BulkPRMerger { constructor() {" this.owner = "Zion-Holdings";" this.repo = "zion.app";" this.token = process.env.GITHUB_TOKEN | process.env.GH_TOKEN | ""; if (!this.token) {" throw new Error("GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.")} this.results = { timestamp: new Date().toISOString()," prs: []," summary: { total: 0," merged: 0," failed: 0," skipped: 0 } }}" async makeRequest(url, method = "GET", data = null) { return new Promise((resolve, reject) => {; const options = {"" hostname: "api.github.com"," path: url," method: method," headers: {" Authorization: `token ${this.token}`," "User-Agent": "Bulk-PR-Merger"," Accept: "application/vnd.github.v3+json"," "Content-Type": "application/json" } }; const req = https.request(options, (res) => {" let responseData = ;";";" res.on("data", (chunk) => { responseData += chunk});" res.on("end", () => { try { const jsonData = JSON.parse(responseData;);" resolve({ statusCode: res.statusCode, data: jsonData })} catch (error) {" resolve({ statusCode: res.statusCode, data: responseData })} })});" req.on("error", (error) => { reject(error)}); if ( { req.write(JSON.stringify(data))} req.end()})} async getOpenPRs() { try {` const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls?state=open&per_page=100`) { { req.write(JSON.stringify(data))} req.end()})} async getOpenPRs() { try {` const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls?state=open&per_page=100`}); return response.data} catch (error) {"" console.error(" Error fetching PRs: ", error.message); return []} } async mergePR(pr) { try {` console.log(` Attempting to merge PR #${pr.number}: ${pr.title}`); / First, check if PR is mergeable` const prDetail = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls/${pr.number}`;); if ( {` console.log(` PR #${pr.number} has conflicts, skipping.`)) { {` console.log(` PR #${pr.number} has conflicts, skipping.`)}"" return { status: "skipped", message: "Has conflicts" }} if ( {` console.log(` PR #${pr.number} mergeability unknown, skipping.`)) { {` console.log(` PR #${pr.number} mergeability unknown, skipping.`)}"" return { status: "skipped", message: "Mergeability unknown" }} / Attempt to merge const mergeData = {"` commit_title: `Merge PR #${pr.number}: ${pr.title}`,""` commit_message: `Automated merge of PR #${pr.number}\n\n${pr.body | ""}`,"" merge_method: "merge" }; "` const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls/${pr.number}/merge`, "PUT", mergeData;); if ( {` console.log(` Successfully merged PR #${pr.number}`)) { {` console.log(` Successfully merged PR #${pr.number}`)}"" return { status: "merged", message: "PR merged successfully" }} else {` console.log(` Failed to merge PR #${pr.number}: ${response.statusCode}`);""` return { status: "failed", message: `Merge failed: ${response.statusCode}` }} } catch (error) {` console.log(` Error merging PR #${pr.number}: ${error.message}`);"" return { status: "error", message: error.message }} } async run() {" console.log(" Starting Bulk PR Merger.\n"); / Get open PRs const openPRs = await this.getOpenPRs(;);` console.log(` Found ${openPRs.length} open pull requests\n`); if ( {" console.log(" No open PRs to merge")) { {" console.log(" No open PRs to merge")} return} / Process each PR for (const pr of openPRs) { const result = await this.mergePR(pr;); const prResult = {" number: pr.number," title: pr.title," branch: pr.head.ref," author: pr.user.login," status: result.status," message: result.message," timestamp: new Date().toISOString() }; this.results.prs.push(prResult); this.results.summary.total++; if ( {" this.results.summary.merged++} else if (result.status === "skipped") { this.results.summary.skipped++} else { this.results.summary.failed++} / Add a small delay to avoid rate limiting await new Promise(resolve => setTimeout(resolve, 1000))} / Generate summary" console.log("\n" + "=".repeat(60)) { {" this.results.summary.merged++} else if (result.status === "skipped") { this.results.summary.skipped++} else { this.results.summary.failed++} / Add a small delay to avoid rate limiting await new Promise(resolve => setTimeout(resolve, 1000))} / Generate summary" console.log("\n" + "=".repeat(60)});" console.log(" BULK PR MERGING SUMMARY");" console.log("=".repeat(60););"` console.log(` Total PRs processed: ${this.results.summary.total}`);"` console.log(` Successfully merged: ${this.results.summary.merged}`);"` console.log(` Skipped: ${this.results.summary.skipped}`);"` console.log(` Failed: ${this.results.summary.failed}`);"` console.log(` Success rate: ${Math.round((this.results.summary.merged / this.results.summary.total); * 100)}%`); / Save detailed report" const reportPath = path.join(process.cwd(), "bulk-pr-merge-report.json;";); fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));"` console.log(`\n Detailed report saved to: ${reportPath}`); if ( {" console.log("\n Some PRs failed to merge - check the report for details")) { {" console.log("\n Some PRs failed to merge - check the report for details")}} else {" console.log("\n All mergeable PRs processed successfully!")} }}/ Run bulk PR merger if called directlyif ( { const merger = new BulkPRMerger) { { const merger = new BulkPRMerger}(;); merger.run().catch(error => {"" console.error("Bulk PR merger failed: ", error); process.exit(1)})}module.exports = BulkPRMerger;""`"`
=======
#!/usr/bin/env node;
const https = require('https')
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD

class BulkPRMerger {
  constructor() {
    this.owner = 'Zion-Holdings';
    this.repo = 'zion.app';
    this.token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
    if (!this.token) {
      throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.')}
    this.results = {
      "timestamp": new Date().toISOString(),
      "prs": [],
      "summary": {
        total: 0,
        "merged": 0,
        "failed": 0,
        "skipped": 0
      }
    }}

  async makeRequest(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {;
      const options = {
        "hostname": 'api.github.com',
        "path": url,
        "method": method,
        "headers": {
          'Authorization': `token ${this.token}`,
          'User-Agent': 'Bulk-PR-Merger',
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        }
     };

      const req = https.request(options, (res) => {
        let responseData = ;';';
        res.on('data', (chunk) => {
          responseData += chunk});
        res.on('end', () => {
          try {
            const jsonData = JSON.parse(responseData;);
            resolve({ "statusCode": res.statusCode, "data": jsonData })} catch (error) {
            resolve({ "statusCode": res.statusCode, "data": responseData })}
        })});

      req.on('error', (error) => {
        reject(error)});

      if ( {
        req.write(JSON.stringify(data))}
      req.end()})}

  async getOpenPRs() {
    try {
      const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls?state=open&per_page=100`) {
     {
        req.write(JSON.stringify(data))}
      req.end()})}

  async getOpenPRs() {
    try {
      const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls?state=open&per_page=100`});
      return response.data} catch (error) {
      console.error('❌ Error fetching "PRs": ', error.message);
      return []}
  }

  async mergePR(pr) {
    try {
      
      
      // First, check if PR is mergeable
      const prDetail = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls/${pr.number}`;);
      
      if ( {
        ) {
     {
        }
        return { "status": 'skipped', "message": 'Has conflicts' }}
      
      if ( {
        ) {
     {
        }
        return { "status": 'skipped', "message": 'Mergeability unknown' }}
      
      // Attempt to merge
      const mergeData = {
        "commit_title": `Merge PR #${pr.number}: ${pr.title}`,
        "commit_message": `Automated merge of PR #${pr.number}\n\n${pr.body || ''}`,
        "merge_method": 'merge'
     };
      
      const response = await this.makeRequest(`/repos/${this.owner}/${this.repo}/pulls/${pr.number}/merge`, 'PUT', mergeData;);
      
      if ( {
        ) {
     {
        }
        return { "status": 'merged', "message": 'PR merged successfully' }} else {
        
        return { "status": 'failed', "message": `Merge failed: ${response.statusCode}` }}
    } catch (error) {
      
      return { "status": 'error', "message": error.message }}
  }

  async run() {
    
    
    // Get open PRs
    const openPRs = await this.getOpenPRs(;);
    
    
    if ( {
      ) {
     {
      }
      return}
    
    // Process each PR
    for (const pr of openPRs) {
      const result = await this.mergePR(pr;);
      
      const prResult = {
        "number": pr.number,
        "title": pr.title,
        "branch": pr.head.ref,
        "author": pr.user.login,
        "status": result.status,
        "message": result.message,
        "timestamp": new Date().toISOString()
     };
      
      this.results.prs.push(prResult);
      this.results.summary.total++;
      
      if ( {
        this.results.summary.merged++} else if (result.status === 'skipped') {
        this.results.summary.skipped++} else {
        this.results.summary.failed++}
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))}
    
    // Generate summary
    ) {
     {
        this.results.summary.merged++} else if (result.status === 'skipped') {
        this.results.summary.skipped++} else {
        this.results.summary.failed++}
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))}
    
    // Generate summary
    });
    
    );
    
    
    
    
     * 100)}%`);
    
    // Save detailed report
    const reportPath = path.join(process.cwd(), 'bulk-pr-merge-report.json;';);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    
    
    if ( {
      ) {
     {
      }} else {
      }
  }
}

// Run bulk PR merger if called directly
if ( {
  const merger = new BulkPRMerger) {
     {
  const merger = new BulkPRMerger}(;);
  merger.run().catch(error => {
    console.error('Bulk PR merger "failed": ', error);
    process.exit(1)})}

module.exports = BulkPRMerger;
=======
    this.owner = 'Zion-Holdings'
    this.repo = 'zion.app'
    this.token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
      throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.'
  async makeRequest(url, method = 'GET')
        "hostname"
      console.error(' Error fetching "PRs")
        return { "status": 'skipped', "message"}
        return { "status": 'skipped', "message"}
        "commit_message"
        "merge_method"
        return { "status": 'merged', "message"}
        return { "status"}
      return { "status"}
    console.error('Bulk PR merger "failed")
>>>>>>> main
>>>>>>> main
