
#!/usr/bin/env node;

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Master PR Handler & Automation System')
console.log()
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || 
  throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.
const REPO_OWNER = 'Zion-Holding;s;
const REPO_NAME = 'zion.app;
async function githubApiCall(endpoint, method = 'GET')
