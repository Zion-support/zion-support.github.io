const fs = require('fs');
const path = require('path');

function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import paths based on directory depth
    if (filePath.includes('/pages/auto/')) {
      content = content.replace(
        /import Layout from '\.\.\/components\/layout\/Layout'/g,
        'import Layout from \'../../components/layout/Layout\''
      );
    } else if (filePath.includes('/pages/admin/') || 
               filePath.includes('/pages/auth/') ||
               filePath.includes('/pages/automation/') ||
               filePath.includes('/pages/automations/') ||
               filePath.includes('/pages/blog/') ||
               filePath.includes('/pages/case-studies/') ||
               filePath.includes('/pages/chat-content/') ||
               filePath.includes('/pages/client/') ||
               filePath.includes('/pages/dashboard/') ||
               filePath.includes('/pages/docs/') ||
               filePath.includes('/pages/enterprise/') ||
               filePath.includes('/pages/governance/') ||
               filePath.includes('/pages/help/') ||
               filePath.includes('/pages/industries/') ||
               filePath.includes('/pages/jobs/') ||
               filePath.includes('/pages/learn/') ||
               filePath.includes('/pages/messages/') ||
               filePath.includes('/pages/partners/') ||
               filePath.includes('/pages/proposals/') ||
               filePath.includes('/pages/protocol/') ||
               filePath.includes('/pages/reports/') ||
               filePath.includes('/pages/resources/') ||
               filePath.includes('/pages/settings/') ||
               filePath.includes('/pages/social/') ||
               filePath.includes('/pages/solutions/') ||
               filePath.includes('/pages/summit/') ||
               filePath.includes('/pages/talent/') ||
               filePath.includes('/pages/whitepaper/') ||
               filePath.includes('/pages/zion/') ||
               filePath.includes('/pages/zl/')) {
      content = content.replace(
        /import Layout from '\.\.\/components\/layout\/Layout'/g,
        'import Layout from \'../../components/layout/Layout\''
      );
    } else if (filePath.includes('/pages/')) {
      content = content.replace(
        /import Layout from '\.\.\/components\/layout\/Layout'/g,
        'import Layout from \'../components/layout/Layout\''
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') && !file.endsWith('.d.ts')) {
      fixImportPaths(filePath);
    }
  }
}

walkDir('/workspace/pages');
console.log('All import paths fixed!');