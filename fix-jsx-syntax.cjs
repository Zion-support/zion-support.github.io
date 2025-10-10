#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the page.tsx file
const filePath = '/workspace/app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Fixing JSX syntax errors...');

// Fix self-closing tags that contain content
// Pattern: <tag></tag>content</tag> -> <tag>content</tag>
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/\1>/g, '<$1$2>$3</$1>');

// Fix self-closing tags with content inside
// Pattern: <tag></tag>content -> <tag>content</tag>
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)(?=<)/g, '<$1$2>$3</$1>');

// Fix malformed closing tags like </di> -> </div>
content = content.replace(/<\/di>/g, '</div>');
content = content.replace(/<\/h>/g, '</h3>');

// Fix self-closing section tags that contain content
content = content.replace(/<section([^>]*?)><\/section>([\s\S]*?)(?=<section|<\/main>|$)/g, (match, attrs, innerContent) => {
  // Find the matching closing section tag
  const lines = innerContent.split('\n');
  let result = `<section${attrs}>\n`;
  let depth = 0;
  let inSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('</section>') && depth === 0) {
      result += line + '\n';
      break;
    } else if (line.includes('<section')) {
      depth++;
      result += line + '\n';
    } else if (line.includes('</section>')) {
      depth--;
      result += line + '\n';
    } else {
      result += line + '\n';
    }
  }
  
  return result;
});

// Fix self-closing div tags that contain content
content = content.replace(/<div([^>]*?)><\/div>([\s\S]*?)(?=<div|<\/div>|$)/g, (match, attrs, innerContent) => {
  // Check if this div should contain content
  if (innerContent.trim() && !innerContent.includes('</div>')) {
    return `<div${attrs}>${innerContent}</div>`;
  }
  return match;
});

// Fix self-closing p tags that contain content
content = content.replace(/<p([^>]*?)><\/p>([\s\S]*?)(?=<p|<\/p>|$)/g, (match, attrs, innerContent) => {
  if (innerContent.trim() && !innerContent.includes('</p>')) {
    return `<p${attrs}>${innerContent}</p>`;
  }
  return match;
});

// Fix self-closing h1, h2, h3, etc. tags that contain content
content = content.replace(/<(h[1-6])([^>]*?)><\/\1>([\s\S]*?)(?=<\1|<\/\1>|$)/g, (match, tag, attrs, innerContent) => {
  if (innerContent.trim() && !innerContent.includes(`</${tag}>`)) {
    return `<${tag}${attrs}>${innerContent}</${tag}>`;
  }
  return match;
});

// Fix self-closing a tags that contain content
content = content.replace(/<a([^>]*?)><\/a>([\s\S]*?)(?=<a|<\/a>|$)/g, (match, attrs, innerContent) => {
  if (innerContent.trim() && !innerContent.includes('</a>')) {
    return `<a${attrs}>${innerContent}</a>`;
  }
  return match;
});

// Fix self-closing article tags that contain content
content = content.replace(/<article([^>]*?)><\/article>([\s\S]*?)(?=<article|<\/article>|$)/g, (match, attrs, innerContent) => {
  if (innerContent.trim() && !innerContent.includes('</article>')) {
    return `<article${attrs}>${innerContent}</article>`;
  }
  return match;
});

// Write the fixed content back to the file
fs.writeFileSync(filePath, content, 'utf8');

console.log('JSX syntax fixes applied successfully!');