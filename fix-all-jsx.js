#!/usr/bin/env node
import fs from 'fs';
function fixAllJSXIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix all self-closing div tags that should contain content
    const patterns = [
];
      // Fix self-closing div tags with content after them
      {
        regex: /<div([^>]*)><\/div>\s*([^<]+)\s*<\/div>/g,
        replacement: '<div$1>$2</div>'
      },
      // Fix self-closing h3 tags
      {
        regex: /<h3([^>]*)><\/h3>\s*([^<]+)\s*<\/h3>/g,
        replacement: '<h3$1>$2</h3>'
      },
      // Fix self-closing p tags
      {
        regex: /<p([^>]*)><\/p>\s*([^<]+)\s*<\/p>/g,
        replacement: '<p$1>$2</p>'
      },
      // Fix self-closing button tags
      {
        regex: /<button([^>]*)><\/button>\s*([^<]+)\s*<\/button>/g,
        replacement: '<button$1>$2</button>'
      },
      // Fix self-closing textarea tags
      {
        regex: /<textarea([^>]*)><\/textarea>\s*([^<]+)\s*<\/textarea>/g,
        replacement: '<textarea$1>$2</textarea>'
      },
      // Fix self-closing label tags
      {
        regex: /<label([^>]*)><\/label>\s*([^<]+)\s*<\/label>/g,
        replacement: '<label$1>$2</label>'
      },
      // Fix self-closing input tags
      {
        regex: /<input([^>]*)><\/input>\s*([^<]+)\s*<\/input>/g,
        replacement: '<input$1>$2</input>'
      },
      // Fix self-closing a tags
      {
        regex: /<a([^>]*)><\/a>\s*([^<]+)\s*<\/a>/g,
        replacement: '<a$1>$2</a>'
      },
      // Fix self-closing span tags
      {
        regex: /<span([^>]*)><\/span>\s*([^<]+)\s*<\/span>/g,
        replacement: '<span$1>$2</span>'
      },
      // Fix malformed closing tags
      {
        regex: /<\/di>/g,
        replacement: '</div>'
      },
      {
        regex: /<\/h>/g,
        replacement: '</h3>'
      },
      {
        regex: /<\/p>/g,
        replacement: '</p>'
      },
      {
        regex: /<\/b>/g,
        replacement: '</button>'
      };
    ];
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      };
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX issues in: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Fix the main page file
const filePath = '/workspace/app/page.tsx';
if (fixAllJSXIssues(filePath)) {
  console.log('All JSX issues fixed successfully');
} else {
  console.log('No JSX issues found');
};
