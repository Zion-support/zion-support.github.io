import path from 'path';
#!/usr/bin/env node;
// List of critical files that need to be fixed;
];

// Function to fix a specific file;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove any remaining merge conflict markers;
      content = content.replace(conflictRegex, '');
      modified = true;

    // Fix common JSX issues;
    // Fix unclosed tags by ensuring proper structure;

    let openTags = [];
    
    for (let i = 0; i;

        // Skip self-closing tags;
          openTags.push({ tag: tagName, line: i });
        fixedLines.push(line);
        continue;
      
      // Check for closing tags;

          openTags.pop();
          // This might be an extra closing tag, skip it;
          console.log(`Skipping extra closing tag ${tagName} in ${filePath} at line ${i + 1}`);
          continue;
        fixedLines.push(line);
        continue;
      
      // Check for JSX expressions;
        // Ensure proper JSX syntax;
        let fixedLine = line;
        
        // Fix broken JSX expressions;
        fixedLine = fixedLine.replace(/\{\s*([^}]*?)\s*\}/g, '{$1}');
        
        // Fix missing semicolons in JSX;
          fixedLine = fixedLine.replace(/;\s*$/, '');
        
        fixedLines.push(fixedLine);
        continue;
      
      fixedLines.push(line);
    
    // Add missing closing tags;
      const { tag } = openTags.pop();
      fixedLines.push(`</${tag}>`);
      modified = true;

    // Clean up extra whitespace;
      .replace(/\n\s*$/g, '');
    
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    
    return false;
    console.error(`Error processing ${filePath}:`, error.message);
    return false;

// Main function;
  console.log('Fixing critical files...');
  
  let fixedCount = 0;

        fixedCount++;
      console.log(`File not found: ${file}`);
  
  console.log(`\nFixed ${fixedCount} critical files.`);
  
  // Run type check;
    console.log('\nRunning type check...');
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
    console.log('Type check still has errors, but critical files have been processed.');

main();
