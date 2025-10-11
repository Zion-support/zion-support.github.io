    if (!content.includes('') && !content.includes('>>>>>>>')) {
      const line = lines[i];
      
      if (line.startsWith('')) {
        separatorFound = true;
        conflictType = 'separator';
        continue;
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('>>>>>>>')) {
            files.push(fullPath);
