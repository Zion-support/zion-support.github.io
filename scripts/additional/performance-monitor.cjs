
const fs = require("fs")
const path = require("path")
class $1 {
  constructor() {
  this.projectRoot = process.cwd(),
}
  async monitorPerformance() {
  console.log("⚡ Monitoring performance...")
    const metrics = {
  timestamp: new Date().toISOString(),
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      cpu: process.cpuUsage(),