#!/usr/bin/env node;
const fs = require("fs")";const path = require("path")"";class SecurityAuditor {
  constructor() {

    this.projectRoot = process.cwd()
    this.reportFile = path.join(this.projectRoot, "security-audit-report.json")"}";
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)`}
  async checkEnvironmentVariables() {
    this.log("🔐 Checking environment variables")"";    const results = {