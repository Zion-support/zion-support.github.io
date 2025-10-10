#!/usr/bin/env node

const fs = require('fs');

function fixPageJsx() {
  const filePath = 'app/page.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix broken JSX tags
  const fixes = [
    // Fix broken closing tags
    { pattern: /<\/di>/g, replacement: '</div>' },
    { pattern: /<\/h>/g, replacement: '</h3>' },
    { pattern: /<\/a>/g, replacement: '</a>' },
    { pattern: /<\/p>/g, replacement: '</p>' },
    { pattern: /<\/section>/g, replacement: '</section>' },
    { pattern: /<\/main>/g, replacement: '</main>' },
    { pattern: /<\/article>/g, replacement: '</article>' },
    
    // Fix self-closing tags that should have content
    { pattern: /<h3[^>]*><\/h3>/g, replacement: (match) => {
      const className = match.match(/class="([^"]*)"/)?.[1] || '';
      return `<h3 className="${className}">Productivity & Business Tools</h3>`;
    }},
    
    { pattern: /<div[^>]*><\/div>/g, replacement: (match) => {
      if (match.includes('text-3xl')) {
        return '<div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝</div>';
      }
      if (match.includes('text-lg font-bold')) {
        return '<div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>';
      }
      if (match.includes('text-center')) {
        return '<div className="text-center"></div>';
      }
      if (match.includes('grid grid-cols')) {
        return '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>';
      }
      return match;
    }},
    
    { pattern: /<article[^>]*><\/article>/g, replacement: (match) => {
      return `<article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝</div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Writing Assistant</h3>
        <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
          Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.
        </p>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>
          <a href="/ai-writing-assistant" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
            Try Free →
          </a>
        </div>
      </article>`;
    }},
    
    { pattern: /<p[^>]*><\/p>/g, replacement: (match) => {
      return '<p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.</p>';
    }},
    
    { pattern: /<a[^>]*><\/a>/g, replacement: (match) => {
      return '<a href="/ai-writing-assistant" className="text-blue-400 hover:text-blue-300 font-medium text-sm">Try Free →</a>';
    }},
    
    // Fix unterminated regular expressions
    { pattern: /→\s*$/gm, replacement: '→' },
  ];
  
  fixes.forEach(fix => {
    if (typeof fix.replacement === 'function') {
      content = content.replace(fix.pattern, fix.replacement);
    } else {
      content = content.replace(fix.pattern, fix.replacement);
    }
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed page.tsx JSX errors');
}

fixPageJsx();