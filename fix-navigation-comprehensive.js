#!/usr/bin/env node

import fs from 'fs';

function fixNavigationFile() {
  try {
    let content = fs.readFileSync('app/components/Navigation.tsx', 'utf8');
    let modified = false;
    
    // Fix all the remaining issues systematically
    
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
    const mapPatterns = [
      /(\w+\.map\([^)]+\)\s*\(\s*<\/\w+>)/g,
      /(\w+\.slice\([^)]+\)\.map\([^)]+\)\s*\(\s*<\/\w+>)/g
    ];
    
    mapPatterns.forEach(pattern => {
      const newContent = content.replace(pattern, (match) => {
        if (match.includes('map(')) {
          return match.replace(/(\w+\.(?:slice\([^)]+\)\.)?map\([^)]+\))\s*\(\s*<\/\w+>/, '$1\n                    {');
        }
        return match;
      });
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix specific pattern: onClick with comma
    const onClickComma = /onClick=\{([^}]+)\},\s*className=/g;
    const newContent3 = content.replace(onClickComma, 'onClick={$1} className=');
    if (newContent3 !== content) {
      content = newContent3;
      modified = true;
    }
    
    // Fix specific pattern: key with comma
    const keyComma = /key=\{([^}]+)\},\s*to=/g;
    const newContent4 = content.replace(keyComma, 'key={$1} to=');
    if (newContent4 !== content) {
      content = newContent4;
      modified = true;
    }
    
    // Fix specific pattern: to with comma
    const toComma = /to=\{([^}]+)\},\s*className=/g;
    const newContent5 = content.replace(toComma, 'to={$1} className=');
    if (newContent5 !== content) {
      content = newContent5;
      modified = true;
    }
    
    // Fix malformed JSX structure
    const malformedJSX = /(\w+\.map\([^)]+\)\s*\(\s*<\/\w+>)/g;
    const newContent6 = content.replace(malformedJSX, (match) => {
      return match.replace(/(\w+\.map\([^)]+\))\s*\(\s*<\/\w+>/, '$1\n                    {');
    });
    if (newContent6 !== content) {
      content = newContent6;
      modified = true;
    }
    
    // Fix extra closing tags in Link components
    const extraClosingTags = /<\/Link>\s*<\/Link>/g;
    const newContent7 = content.replace(extraClosingTags, '</Link>');
    if (newContent7 !== content) {
      content = newContent7;
      modified = true;
    }
    
    // Fix specific pattern: View All services with extra closing tags
    const viewAllPattern = /(View All [^<]+<\/Link>)\s*<\/Link>/g;
    const newContent8 = content.replace(viewAllPattern, '$1');
    if (newContent8 !== content) {
      content = newContent8;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync('app/components/Navigation.tsx', content, 'utf8');
      console.log('Fixed Navigation.tsx comprehensively');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error fixing Navigation.tsx:', error.message);
    return false;
  }
}

fixNavigationFile();