#!/usr/bin/env node);
import fs from ');
import path from ');
    let content = fs.readFileSync(filePath, 'utf8';
    content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)[';
      if (str && !str.includes("'") && !str.includes(';