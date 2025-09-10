
const { execSync } = require("child_process")
const fs = require("fs")
class $1 {
  constructor() {
  this.projectRoot = process.cwd(),,
}
  async deploy() {
  console.log("🚀 Starting auto deployment...")