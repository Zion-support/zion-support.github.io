#!/usr/bin/env node

import fs from 'fs';

function fixFooterFile() {
  try {
    let content = fs.readFileSync('app/components/Footer.tsx', 'utf8');
    let modified = false;
    
    // Fix commas in JSX attributes
    const commaInAttrs = /(\w+)\s*,\s*(\w+)\s*=/g;
    const newContent = content.replace(commaInAttrs, '$1 $2=');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Fix specific pattern: to with comma
    const toComma = /to=\{([^}]+)\},\s*className=/g;
    const newContent2 = content.replace(toComma, 'to={$1} className=');
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Fix specific pattern: key with comma
    const keyComma = /key=\{([^}]+)\},\s*to=/g;
    const newContent3 = content.replace(keyComma, 'key={$1} to=');
    if (newContent3 !== content) {
      content = newContent3;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync('app/components/Footer.tsx', content, 'utf8');
      console.log('Fixed Footer.tsx');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error fixing Footer.tsx:', error.message);
    return false;
  }
}

fixFooterFile();