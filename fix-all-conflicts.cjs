#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔧 Starting comprehensive merge conflict fix...');

function fixMergeConflicts(content) {
  let fixed = content;
  let changes = 0;

  // Remove merge conflict markers and keep the HEAD version
