#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolver automation...');

// Get automation interval from environment variable (default: 10 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 600000; // 10 minutes

async function runMergeConflictResolver() {
  try {
    console.log(`🔧 Running merge conflict resolver at ${new Date().toISOString()}`);
    
    const conflicts = {
      resolved: 0,
      found: 0,
      files: []
    };
    
    // Scan for merge conflicts
    console.log('🔍 Scanning for merge conflicts...');
    const conflictFiles = findMergeConflicts('./src');
    conflicts.found = conflictFiles.length;
    
    if (conflictFiles.length > 0) {
      console.log(`⚠️  Found ${conflictFiles.length} files with merge conflicts:`);
      conflictFiles.forEach(file => {
        console.log(`  - ${file}`);
        conflicts.files.push(file);
      });
      
      // Resolve merge conflicts
      console.log('🔧 Resolving merge conflicts...');
      conflicts.resolved = await resolveMergeConflicts(conflictFiles);
      
      console.log(`✅ Resolved ${conflicts.resolved} merge conflicts`);
    } else {
      console.log('✅ No merge conflicts found');
    }
    
    // Generate merge conflict resolver report
    console.log('📊 Generating merge conflict resolver report...');
    const report = {
      timestamp: new Date().toISOString(),
      conflicts: conflicts,
      summary: 'Merge conflict resolver completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'merge-conflict-resolver-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Merge conflict resolver report saved to ${reportPath}`);
    
    console.log('✅ Merge conflict resolver completed successfully');
    
  } catch (error) {
    console.error('❌ Merge conflict resolver failed:', error.message);
  }
}

function findMergeConflicts(dir) {
  const conflictFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.json') || item.endsWith('.md')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            
            // Check for merge conflict markers
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
              conflictFiles.push(path.relative(process.cwd(), fullPath));
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return conflictFiles;
}

async function resolveMergeConflicts(conflictFiles) {
  let resolvedCount = 0;
  
  for (const filePath of conflictFiles) {
    try {
      const fullPath = path.join(process.cwd(), filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers and keep the HEAD version by default
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, (match) => {
        // Extract the HEAD section
        const headMatch = match.match(/<<<<<<< HEAD([\s\S]*?)=======/);
        if (headMatch) {
          return headMatch[1].trim();
        }
        return '';
      });
      
      // Remove any remaining merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      
      // Clean up any empty lines that might be left
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Resolved merge conflicts in ${filePath}`);
        resolvedCount++;
      }
    } catch (error) {
      console.log(`⚠️  Could not resolve merge conflicts in ${filePath}: ${error.message}`);
    }
  }
  
  return resolvedCount;
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting merge conflict resolver with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial merge conflict resolver
  await runMergeConflictResolver();
  
  // Set up continuous execution
  setInterval(async () => {
    await runMergeConflictResolver();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Merge conflict resolver running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the merge conflict resolver
runContinuous().catch(error => {
  console.error('❌ Failed to start merge conflict resolver:', error);
  process.exit(1);
});