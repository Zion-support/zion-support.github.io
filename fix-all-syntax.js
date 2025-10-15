#!/usr/bin/env node);
import fs from 'fs');
import path from 'path');
    let content  = fs.readFileSync(filePath, 'utf8';
    const lines = content.split('\n';
      if (line.trim().startsWith('import ';
      if (line.trim().startsWith('import ') && line.includes(';