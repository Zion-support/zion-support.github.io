#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting absolute final fixer...');

// Fix specific remaining issues
const fixes = [
  {
    file: '/workspace/data/api-docs/v1.ts',
    replacements: [
      {
        from: /versions: \['v1'\]\}\]\}\]\s*\}\s*\]/,
        to: "versions: ['v1']}]}]\n    }\n  ]"
      }
    ]
  },
  {
    file: '/workspace/lib/integrations/connectors.ts',
    replacements: [
      {
        from: /action;/,
        to: "action,"
      },
      {
        from: /details\};/,
        to: "details};"
      }
    ]
  },
  {
    file: '/workspace/pages/api/analytics/events/track.ts',
    replacements: [
      {
        from: /ip: \(req\.headers\['x-forwarded-for'\] \|\| req\.socket\.remoteAddress \|\| ''\) as string\},/,
        to: "ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string};"
      }
    ]
  },
  {
    file: '/workspace/pages/api/applications.ts',
    replacements: [
      {
        from: /createdAtIso: now\},/,
        to: "createdAtIso: now};"
      },
      {
        from: /apps\.push\(app\);/,
        to: "apps.push(app);"
      }
    ]
  },
  {
    file: '/workspace/pages/api/auth/login.ts',
    replacements: [
      {
        from: /const \{ name, role \} = req\.body as \{ name: string, role: UserRole \},/,
        to: "const { name, role } = req.body as { name: string, role: UserRole };"
      }
    ]
  }
];

fixes.forEach(({ file, replacements }) => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let changed = false;
      
      replacements.forEach(({ from, to }) => {
        const newContent = content.replace(from, to);
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${path.basename(file)}`);
      }
    }
  } catch (error) {
    console.log(`⚠️ Could not fix ${path.basename(file)}:`, error.message);
  }
});

console.log('🎉 Absolute final fixing completed!');