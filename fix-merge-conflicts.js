
    
      inConflict = false
keepContent = false
continue

    
    if (inConflict && !keepContent) {}
      continue

    
    resolvedLines.push(line)

  
  return resolvedLines.join('\n'
  // Fix JSX syntax issues: content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*$/gm, '<$1>'