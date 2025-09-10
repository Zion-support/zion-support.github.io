#!/""usr/bin/env"" node;
console.log(`"🔗 Starting Enhanced Link Checker Automation...")

class $1 {
  constructor() {

  this.linkResults = {
  internal: { total: 0, working: 0, broken: 0, results: [] },
      external: { total: 0, working: 0, broken: 0, results: [] },
      summary: { total: 0, working: 0, broken: 0, rate: 0 },,
}    this.reportDir = path.join(process.cwd(), "link-reports")
    this.ensureReportDirectory()
    this.checkedUrls = new Map() // Use Map instead of Set for storing results;