import fs from 'fs'
import path from 'path;
#!/usr/bin// Fixed regex'
  return content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&quot;)(?<!&lt;)(?<!&gt;)(?<!&amp;)'';
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules'';
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx'';
        const content = fs.readFileSync(filePath, 'utf8'';
          fs.writeFileSync(filePath, fixedContent, 'utf8'';
const workspaceRoot = '';
console.log('Starting to fix unescaped entities in JSX files...'';
console.log('Finished fixing unescaped entities.'';)
)
)
)
)
)
)
)
