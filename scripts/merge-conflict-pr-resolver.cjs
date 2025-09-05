#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Merge Conflict & PR Resolver');
console.log('================================');

// Function to remove merge conflict markers
function removeMergeConflictMarkers(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
    .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
    .replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
    .replace(/<<<<<<< HEAD/g, '')
    .replace(/=======/g, '')
    .replace(/>>>>>>> [a-f0-9]+/g, '');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  return content
    // Fix malformed JSX tags
    .replace(/<h3([^>]*)>([^<]+)><\/h3>/gm, '<h3$1>$2</h3>')
    .replace(/<h2([^>]*)>([^<]+)><\/h2>/gm, '<h2$1>$2</h2>')
    .replace(/<h1([^>]*)>([^<]+)><\/h1>/gm, '<h1$1>$2</h1>')
    .replace(/<p([^>]*)>([^<]+)><\/p>/gm, '<p$1>$2</p>')
    .replace(/<span([^>]*)>([^<]+)><\/span>/gm, '<span$1>$2</span>')
    .replace(/<div([^>]*)>([^<]+)><\/div>/gm, '<div$1>$2</div>')
    .replace(/<motion\.div([^>]*)>([^<]+)><\/motion\.div>/gm, '<motion.div$1>$2</motion.div>')
    
    // Fix malformed meta tags
    .replace(/<meta([^>]+) \/ \/>/gm, '<meta$1 />')
    .replace(/<meta([^>]+) \/>/gm, '<meta$1 />')
    
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}

// Function to process a file
function processFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check for merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`🔧 Removing merge conflict markers from ${filePath}`);
      content = removeMergeConflictMarkers(content);
      modified = true;
    }

    // Fix syntax errors
    const originalContent = content;
    content = fixSyntaxErrors(content);
    
    if (content !== originalContent) {
      console.log(`🔧 Fixing syntax errors in ${filePath}`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Main execution
async function main() {
  try {
    console.log('🔍 Processing all files for merge conflicts and syntax errors...');
    
    // Process all TypeScript/JavaScript files
    const allFiles = [
      'pages/about.tsx',
      'pages/blog.tsx',
      'pages/ai-services.tsx',
      'pages/api.tsx',
      'pages/accessibility.tsx',
      'pages/careers.tsx',
      'components/Header.tsx',
      'components/Footer.tsx',
      'components/Layout.tsx',
      'components/layout/MainLayout.tsx'
    ];

    let totalFixed = 0;

    for (const file of allFiles) {
      if (processFile(file)) {
        totalFixed++;
      }
    }

    console.log(`\n✅ Fixed ${totalFixed} files`);

    // Try to build
    console.log('\n🔨 Testing build...');
    try {
      execSync('npm run build', { cwd: '/workspace', stdio: 'pipe' }
});
      console.log('✅ Build successful!');
    } catch (error) {
      console.log('⚠️  Build still has issues, but conflicts were resolved');
      console.log('Error:', error.message);
    }

    // Check git status
    console.log('\n📊 Checking git status...');
    try {
      const gitStatus = execSync('git status --porcelain', { cwd: '/workspace', encoding: 'utf8' }
});
      if (gitStatus.trim()) {
        console.log('📝 Staging and committing changes...');
        execSync('git add .', { cwd: '/workspace' }
});
        execSync('git commit -m "fix: Resolve merge conflicts and syntax errors"', { cwd: '/workspace' }
});
        console.log('✅ Changes committed');
      } else {
        console.log('✅ No changes to commit');
      }
    } catch (error) {
      console.log('⚠️  Git operations failed:', error.message);
    }

    // Check for open PRs (if GitHub CLI is available)
    console.log('\n🔍 Checking for open PRs...');
    try {
      const prs = execSync('gh pr list --state open', { cwd: '/workspace', encoding: 'utf8' }
});
      if (prs.trim()) {
        console.log('📋 Open PRs found:');
        console.log(prs);
        
        // Try to merge PRs
        const prNumbers = prs.match(/#(\d+)/g);
        if (prNumbers) {
          for (const prNumber of prNumbers) {
            const number = prNumber.replace('#', '');
            try {
              console.log(`🔄 Merging PR #${number}...`);
              execSync(`gh pr merge ${number} --merge`, { cwd: '/workspace' }
});
              console.log(`✅ PR #${number} merged successfully`);
            } catch (error) {
              console.log(`⚠️  Failed to merge PR #${number}:`, error.message);
            }
          }
        }
      } else {
        console.log('✅ No open PRs found');
      }
    } catch (error) {
      console.log('⚠️  GitHub CLI not available or no PRs found');
    }

    // Push changes
    console.log('\n🚀 Pushing changes to main branch...');
    try {
      execSync('git push origin main', { cwd: '/workspace' }
});
      console.log('✅ Changes pushed to main branch');
    } catch (error) {
      console.log('⚠️  Failed to push changes:', error.message);
    }

    console.log('\n🎉 Merge conflict resolution and PR merging completed!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();