#!/usr/bin/env node

import fs from 'fs';

function fixNavigationFile() {
  try {
    let content = fs.readFileSync('app/components/Navigation.tsx', 'utf8');
    let modified = false;
    
    // Fix extra closing Link tags
    const extraLinkTags = /<\/Link>\s*<\/Link>/g;
    const newContent1 = content.replace(extraLinkTags, '</Link>');
    if (newContent1 !== content) {
      content = newContent1;
      modified = true;
    }
    
    // Fix commas in JSX attributes
    const commaInAttrs = /(\w+)\s*,\s*(\w+)\s*=/g;
    const newContent2 = content.replace(commaInAttrs, '$1 $2=');
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Fix map functions with closing tags
    const mapWithClosing = /(\w+\.map\([^)]+\)\s*\(\s*<\/\w+>)/g;
    const newContent3 = content.replace(mapWithClosing, (match, p1) => {
      return p1.replace(/(\w+\.map\([^)]+\))\s*\(\s*<\/\w+>/, '$1\n                    {');
    });
    if (newContent3 !== content) {
      content = newContent3;
      modified = true;
    }
    
    // Fix specific pattern: onClick with comma
    const onClickComma = /onClick=\{([^}]+)\},\s*className=/g;
    const newContent4 = content.replace(onClickComma, 'onClick={$1} className=');
    if (newContent4 !== content) {
      content = newContent4;
      modified = true;
    }
    
    // Fix specific pattern: key with comma
    const keyComma = /key=\{([^}]+)\},\s*to=/g;
    const newContent5 = content.replace(keyComma, 'key={$1} to=');
    if (newContent5 !== content) {
      content = newContent5;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync('app/components/Navigation.tsx', content, 'utf8');
      console.log('Fixed Navigation.tsx');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error fixing Navigation.tsx:', error.message);
    return false;
  }
}

fixNavigationFile();