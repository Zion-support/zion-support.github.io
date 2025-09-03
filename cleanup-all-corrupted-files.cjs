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

  async findCorruptedFiles(dir) {
  const corruptedFiles = []
    if (!fs.existsSync(dir)) {
  return corruptedFiles;}
    
    const files = fs.readdirSync(dir)
    for (const file of files) {
  const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") {
  const subDirCorrupted = await this.findCorruptedFiles(filePath)
        corruptedFiles.push(...subDirCorrupted);} else if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
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
  fs.unlinkSync(filePath)
      this.log(`✅ Deleted corrupted file: ${path.basename(filePath)}`)
      this.cleanedFiles++;} catch (error) {
  this.log(`❌ Error cleaning file ${path.basename(filePath)}: ${error.message}`)
      this.errors.push({ file: filePath, error: error.message });}
  }

  async run() {
  this.log("🚀 Starting comprehensive corrupted files cleanup...")
    try {
  const pagesDir = path.join(this.projectRoot, "pages")
      const componentsDir = path.join(this.projectRoot, "components")
      const srcDir = path.join(this.projectRoot, "src")
      const allCorruptedFiles = []
      // Check pages directory
      const pagesCorrupted = await this.findCorruptedFiles(pagesDir)
      allCorruptedFiles.push(...pagesCorrupted)
      // Check components directory
      const componentsCorrupted = await this.findCorruptedFiles(componentsDir)
      allCorruptedFiles.push(...componentsCorrupted)
      // Check src directory
      const srcCorrupted = await this.findCorruptedFiles(srcDir)
      allCorruptedFiles.push(...srcCorrupted)
      this.log(`Found ${allCorruptedFiles.length} corrupted files to clean`)
      for (const file of allCorruptedFiles) {
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
const cleaner = new AllCorruptedFilesCleaner()
cleaner.run().catch(console.error)