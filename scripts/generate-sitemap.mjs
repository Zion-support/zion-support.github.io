#!/usr/bin/env node


      for (const item of items) {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          // Skip excluded directories;
          if (EXCLUDED_DIRS.includes(item)) continue;
;
          // Recursively scan subdirectories;

generateSitemap();
