#!/usr/bin/env node
import fs from 'fs';
import {glob} from 'glob';
let totalFixes = 0;
let filesProcessed = 0;
// Fix Layout import conflicts

  let fixedContent = content;
  let changes = 0;
  // Check if both Layout component and Layout icon are imported
  const hasLayoutComponent =

  return { "content": fixedContent, changes }}
// Process individual file
function processFile(filePath) {
  try {

  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];
  const excludeDirs = ['node_modules',
    '.next',
      'build'
    'dist',
      'scripts'
    'automation',
      'automation_backup'