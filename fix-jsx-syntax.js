import fs from 'fs';

      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    return false;
