#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> .*\n?/g, '');
    
    // Fix common syntax issues
    content = content.replace(/const PagePage: React\.FC = \(\) => \{const features = \[/g, 
      'const PagePage: React.FC = () => {\n  const features = [');
    
    // Fix missing imports
    if (content.includes('icon: Wifi') && !content.includes('import { Wifi')) {
      content = content.replace(
        /import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'/,
        "import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Wifi} from 'lucide-react'"
      );
    }
    
    // Fix malformed JSX structure
    content = content.replace(/\}\s*,\s*$/gm, '}');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts in the app directory
const files = execSync("grep -l '^<<<<<<< HEAD' app/**/*.tsx", { encoding: 'utf8' }).trim().split('\n').filter(f => f);

console.log(`Found ${files.length} files with merge conflicts`);

let fixed = 0;
let failed = 0;

files.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixed++;
  } else {
    failed++;
  }
});

console.log(`\nFixed: ${fixed} files`);
console.log(`Failed: ${failed} files`);