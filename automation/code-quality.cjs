#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log(' Code Quality Checker Starting...\n')
    "name"
        execSync('npx tsc --noEmit', { "stdio"})
    "name"
        execSync('npx eslint . --ext .ts,.tsx,.js,.jsx', { "stdio"})
    "name"
        execSync('npx prettier --check .', { "stdio"})
    "name"
    "name"
    "name"
            content.match(/^import\s+.*from\s+['"][^'')]
    "status"