const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
class $1 {
  constructor() {
  this.projectRoot = process.cwd()
    this.startTime = new Date()
    this.results = {
  dependencyFix: { success: false, duration: 0, errors: [] },      typescriptFix: { success: false, duration: 0, errors: [] },
      healthCheck: { success: false, duration: 0, errors: [] },
      securityScan: { success: false, duration: 0, errors: [] },
      performanceOptimize: { success: false, duration: 0, errors: [] },