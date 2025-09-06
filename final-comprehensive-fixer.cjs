#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting final comprehensive fixer...');

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
        from: /connection: ProviderConnection;/,
        to: "connection: ProviderConnection,"
      },
      {
        from: /action: string;/,
        to: "action: string,"
      }
    ]
  },
  {
    file: '/workspace/lib/integrations/fileStore.ts',
    replacements: [
      {
        from: /connections: \[\];/,
        to: "connections: [],"
      },
      {
        from: /logs: \[\];/,
        to: "logs: [],"
      },
      {
        from: /overrides: \[\];/,
        to: "overrides: [],"
      },
      {
        from: /events: \[\]\};/,
        to: "events: []};"
      }
    ]
  },
  {
    file: '/workspace/pages/api/admin/pitch/generate.ts',
    replacements: [
      {
        from: /'Problem & Opportunity';/,
        to: "'Problem & Opportunity',"
      }
    ]
  },
  {
    file: '/workspace/pages/api/ai/operator.ts',
    replacements: [
      {
        from: /const bucket = ipToRequests\[ip\] \|\| \{ timestamps: \[\] \},/,
        to: "const bucket = ipToRequests[ip] || { timestamps: [] };"
      },
      {
        from: /bucket\.timestamps = bucket\.timestamps\.filter\(ts => now - ts < RATE_LIMIT_WINDOW_MS\);/,
        to: "bucket.timestamps = bucket.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);"
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

console.log('🎉 Final comprehensive fixing completed!');