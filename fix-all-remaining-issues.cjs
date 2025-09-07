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

<<<<<<< HEAD
for (const fix of fixes) {
=======
export function isAdmin(email: string): boolean {
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(email.toLowerCase());
}
`;

fs.writeFileSync('utils/auth.ts', authContent);
console.log('✅ Fixed utils/auth.ts');

// Fix fsdb.ts
const fsdbContent = `import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

const DATA_DIR = path.join(process.cwd(), 'data');
const UPLOADS_ROOT = path.join(process.cwd(), 'uploads');

export async function ensureDataDir(): Promise<void> {
  if (!fs.existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

export async function writeData(filename: string, data: any): Promise<void> {
  await ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);
  await writeFile(filepath, JSON.stringify(data, null, 2));
}

export async function readData(filename: string): Promise<any> {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
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