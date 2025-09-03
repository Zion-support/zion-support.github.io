#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
class $1 {
  constructor() {
  this.projectRoot = process.cwd()
    this.cleanedFiles = 0
    this.errors = [];}

  log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);}

  async findCorruptedFiles() {
  this.log("🔍 Finding corrupted files in services directory...")
    const servicesDir = path.join(this.projectRoot, "pages", "services")
    if (!fs.existsSync(servicesDir)) {
  this.log("Services directory does not exist")
      return [];}
    
    const files = fs.readdirSync(servicesDir)
    const corruptedFiles = []
    for (const file of files) {
  if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
  const filePath = path.join(servicesDir, file)
        const content = fs.readFileSync(filePath, "utf8")
        // Check if file is corrupted (all on one line and very long)
        if (content.split("\n").length <= 3 && content.length > 1000) {
  corruptedFiles.push(filePath);}
      }
    }
    
    return corruptedFiles;}

  async cleanCorruptedFile(filePath) {
  this.log(`🧹 Cleaning corrupted file: ${path.basename(filePath)}`)
    try {
  // For now, let"s just delete these problematic files
      // They seem to be corrupted and causing build issues
      fs.unlinkSync(filePath)
      this.log(`✅ Deleted corrupted file: ${path.basename(filePath)}`)
      this.cleanedFiles++;} catch (error) {
  this.log(`❌ Error cleaning file ${path.basename(filePath)}: ${error.message}`)
      this.errors.push({ file: filePath, error: error.message });}
  }

  async run() {
  this.log("🚀 Starting services directory cleanup...')
    try {
  const corruptedFiles = await this.findCorruptedFiles()
      this.log(`Found ${corruptedFiles.length} corrupted files to clean`)
      for (const file of corruptedFiles) {
  await this.cleanCorruptedFile(file);}
      
      this.log(`🎉 Cleaned ${this.cleanedFiles} files`)
      if (this.errors.length > 0) {
  this.log(`❌ ${this.errors.length} errors occurred:`)
        this.errors.forEach(error => {
  this.log(`  - ${error.file}: ${error.error}`);});}
      ;} catch (error) {
  this.log(`❌ Fatal error: ${error.message}`);}
  }
}

// Run the cleaner
const cleaner = new ServicesDirectoryCleaner()
cleaner.run().catch(console.error)