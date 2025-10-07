#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

//Patterns to fix
const fixes = [
  //Fix ArrowRight -> Link mismatches
  {
    pattern: /<ArrowRight\s+([^>]*)>\s*([^<]*)<\/Link>/g,
    replacement: '<Link $1>$2</Link>'
  },
  //Fix Link -> ArrowRight mismatches  
  {
    pattern: /<Link\s+([^>]*)>\s*([^<]*)<\/ArrowRight>/g,
    replacement: '<Link $1>$2</Link>'
  },
  //Fix unclosed ArrowRight tags
  {
    pattern: /<ArrowRight\s+([^>]*)>\s*([^<]*)(?!<\/ArrowRight>)/g,
    replacement: '<Link $1>$2</Link>'
  },
  //Fix unclosed Link tags that should be ArrowRight
  {
    pattern: /<Link\s+([^>]*)>\s*([^<]*)(?!<\/Link>)/g,
    replacement: (match, attrs, content) => {
      //Only fix if it looks like it should be a Link (has href)
      if (attrs.includes('href')) {
        return `<Link ${attrs}>${content}</Link>`;
      }
      return match;
    }
  }
];

//Get all TypeScript/JSX files
const files = await glob('**/*.{ts,tsx,js,jsx}', {
  ignore: [
    'node_modules/**',
    'dist/**',
    'build/**',
    '__tests__/**',
    '_app_disabled/**',
    '_conflicted_disabled/**',
    '_pages_api_disabled/**',
    '_pages_disabled/**',
    'admin-api-disabled/**',
    'api-disabled/**',
    'api.disabled/**',
    'api.disabled.temp/**',
    'api-backup/**',
    'apps.backup/**',
    'automation_backup/**',
    'ai-optimization-backups/**',
    'automation_logs/**',
    'all-automations-reports/**',
    'accessibility-reports/**',
    'app/blog/**',
    'corrupted-files-backup/**',
    'corrupted_backup/**',
    'corrupted_files_backup_2/**',
    'content/**',
    'contracts/**',
    'components_backup/**',
    'app/services/**',
    'app/guides/**',
    'data/**',
    'data_backup/**',
    'dao/**',
    'deployments/**',
    'disabled-api/**',
    'e2e/**',
    'factories/**',
    'src/pages/blog-disabled/**',
    'hooks/**',
    'lib_backup/**',
    'services/**',
    'middleware/**',
    'fix-*.jsx',
    'fix-*.ts',
    'jest.setup.*',
    'lib/integrations/**',
    'lint-target/**',
    'middleware.security.ts',
    'components/AutonomousEnterpriseBreakthroughBanner.tsx',
    'components/ConsensusIntelligenceBreakthroughBanner.tsx',
    'components/FeaturedServiceCard.tsx',
    'app/components/NewestContent2025Banner.tsx',
    'app/components/September30NewContent2025Banner.tsx',
    'app/components/UltimateBusinessIntelligence2025Banner.tsx',
    'app/components/UltimateBusinessIntelligenceShowcase2025.tsx',
    'app/contact/page.tsx',
    'app/enterprise/page.tsx',
    'app/not-found.tsx',
    'app/page-minimal.tsx',
    'app/page-optimized.tsx',
    'app/services-advertising/page.tsx',
    'fix_typescript_syntax_errors.jsx',
    'fix_utils_files.ts'
  ]
});

let fixedFiles = 0;
let totalFixes = 0;

console.log(`Found ${files.length} files to process...`);

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let fileFixes = 0;

    //Apply all fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });

    //Count fixes
    if (content !== originalContent) {
      const diff = (content.match(/<Link/g) || []).length - (originalContent.match(/<Link/g) || []).length;
      fileFixes += Math.abs(diff);
      
      if (fileFixes > 0) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed ${fileFixes} issues in ${file}`);
        fixedFiles++;
        totalFixes += fileFixes;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${totalFixes} JSX issues across ${fixedFiles} files.`);
