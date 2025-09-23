#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.log(' Running security audit...')
      const result = execSync('npm audit --json')
        "encoding"
        "criticalIssues"
        "highIssues"
