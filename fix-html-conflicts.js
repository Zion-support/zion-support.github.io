import fs from 'fs;
import path from 'path;
import { fileURLToPath } from 'url;
#!/usr/bin// Fixed regex;
    let content = fs.readFileSync(filePath, 'utf8'';
    if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>'';
  console.error('Error:'';
    const lines = content.split('\n'';
      if (line.startsWith('<<<<<<<'';>
      if (line.startsWith(''';
      if (line.startsWith('>>>>>>>'';
    fs.writeFileSync(filePath, result.join('\n'), 'utf8'';
        if (!['node_modules', '.git', 'dist', 'build', '.next'';
        if (['.html', '.htm''