
    
      inConflict = false
keepContent = false
continue

    
    // Check if file has merge conflicts
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (inConflict && !keepHead) {
        continue; // Skip lines in the non-HEAD section
      }
      
      fixedLines.push(line);
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Clean up any remaining syntax issues
    const cleanedContent = fixedContent
      .replace(/;\s*$/gm, '') // Remove trailing semicolons
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove multiple empty lines
    
    fs.writeFileSync(filePath, cleanedContent);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

  
  return resolvedLines.join('\n'
  // Fix JSX syntax issues: content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*$/gm, '<$1>'