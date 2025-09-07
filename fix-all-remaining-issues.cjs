#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all remaining syntax issues...');

// Fix specific files with known issues
const fixes = [
  {
    file: '/workspace/app/services/automation/page.tsx',
    find: '      <//',
    replace: '      </ul>'
  },
  {
    file: '/workspace/app/services/consulting/page.tsx',
    find: '      <//',
    replace: '      </ul>'
  },
  {
    file: '/workspace/pages/api/admin/pitch/export.ts',
    find: '    return res.status(200).json({ url })\n  }',
    replace: 'export default function handler(req, res) {\n  return res.status(200).json({ url });\n}'
  },
  {
    file: '/workspace/pages/api/admin/pitch/rewrite.ts',
    find: "import { ensureAdminFromApi } from '../../../../utils/auth',;",
    replace: "import { ensureAdminFromApi } from '../../../../utils/auth';"
  },
  {
    file: '/workspace/pages/api/admin/pitch/rewrite.ts',
    find: "import OpenAI from 'openai',;",
    replace: "import OpenAI from 'openai';"
  },
  {
    file: '/workspace/pages/api/admin/tokens/config.ts',
    find: '  return res.status(405).json({ error: "Method not allowed" })',
    replace: '  return res.status(405).json({ error: "Method not allowed" });\n}'
  }
];

let fixedCount = 0;

for (const fix of fixes) {
  try {
    if (fs.existsSync(fix.file)) {
      let content = fs.readFileSync(fix.file, 'utf8');
      
      if (content.includes(fix.find)) {
        content = content.replace(fix.find, fix.replace);
        fs.writeFileSync(fix.file, content, 'utf8');
        console.log(`✅ Fixed: ${fix.file}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.log(`❌ Error fixing ${fix.file}: ${error.message}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);