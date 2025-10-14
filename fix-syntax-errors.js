
// Function to fix common syntax errors
function fixSyntaxErrors(content) {}
  let fixed = content;
  
  // Fix malformed import statements with fixed = fixed.replace(/import\s+([^']+)'([^']+)/g, "import $1 from '$2';\n");
  fixed = fixed.replace(/import\s+([^']+)'([^']+)/g, "import $1 from '$2';\n");
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import\s+[^;]+(?!;)\n/g, (match) => {}
    if (!match.trim().endsWith(';')) {}
      return match.trim() + ';\n';
    }
    return match;
  });
  
  // Fix unterminated string literals in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"([^,}\n]*)/g, (match, key, value, rest) => {}
    if (rest.includes('"') && !rest.includes('",')) {}
      return `${key}: "${value}",`;
    }
    return match;
  });
  
  // Fix unterminated string literals with missing closing quotes
  fixed = fixed.replace(/(\w+):\s*"([^"]*)(?![^"]*")/g, (match, key, value) => {}
    if (!value.endsWith('"')) {}
      return `${key}: "${value}"`;
    }
    return match;
  });
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*(?=\w+:)/g, '$1: "$2",');
