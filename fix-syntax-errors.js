#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import pkg from 'glob';
const { glob } = pkg;

// Common syntax fixes
const fixes = [
  // Fix unclosed button tags
  {
    pattern: /<button([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</button>')) {
        return `<button${attrs}>${content}</button>`;
      }
      return match;
    }
  },
  // Fix unclosed div tags
  {
    pattern: /<div([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</div>')) {
        return `<div${attrs}>${content}</div>`;
      }
      return match;
    }
  },
  // Fix unclosed span tags
  {
    pattern: /<span([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</span>')) {
        return `<span${attrs}>${content}</span>`;
      }
      return match;
    }
  },
  // Fix unclosed p tags
  {
    pattern: /<p([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</p>')) {
        return `<p${attrs}>${content}</p>`;
      }
      return match;
    }
  },
  // Fix unclosed a tags
  {
    pattern: /<a([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</a>')) {
        return `<a${attrs}>${content}</a>`;
      }
      return match;
    }
  },
  // Fix unclosed label tags
  {
    pattern: /<label([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</label>')) {
        return `<label${attrs}>${content}</label>`;
      }
      return match;
    }
  },
  // Fix unclosed Link tags
  {
    pattern: /<Link([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</Link>')) {
        return `<Link${attrs}>${content}</Link>`;
      }
      return match;
    }
  },
  // Fix unclosed ul tags
  {
    pattern: /<ul([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</ul>')) {
        return `<ul${attrs}>${content}</ul>`;
      }
      return match;
    }
  },
  // Fix unclosed motion.div tags
  {
    pattern: /<motion\.div([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</motion.div>')) {
        return `<motion.div${attrs}>${content}</motion.div>`;
      }
      return match;
    }
  },
  // Fix unclosed Select tags
  {
    pattern: /<Select([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</Select>')) {
        return `<Select${attrs}>${content}</Select>`;
      }
      return match;
    }
  },
  // Fix unclosed Button tags
  {
    pattern: /<Button([^>]*)>([^<]*?)(?=\s*$|\s*<[^/])/gm,
    replacement: (match, attrs, content) => {
      if (!match.includes('</Button>')) {
        return `<Button${attrs}>${content}</Button>`;
      }
      return match;
    }
  }
];

// Fix incomplete files
const incompleteFiles = [
  'src/pages/QuantumNeuralInterface2026.tsx',
  'src/pages/RevolutionaryServicesShowcase2026.tsx',
  'src/pages/RevolutionaryTechBreakthrough2033.tsx',
  'src/pages/RevolutionaryTechBlog2026.tsx',
  'src/pages/RevolutionaryTechBreakthrough2038.tsx',
  'src/pages/RevolutionaryTechShowcase2026.tsx',
  'src/pages/RevolutionaryTechShowcase2032.tsx',
  'src/pages/RevolutionaryTechShowcase2042.tsx',
  'src/pages/RevolutionaryTechBreakthrough2034.tsx',
  'src/pages/RevolutionaryTechBreakthrough2030.tsx',
  'src/pages/RevolutionaryTechBreakthrough2032.tsx',
  'src/pages/RevolutionaryTechBreakthrough2036.tsx',
  'src/pages/RevolutionaryTechBreakthrough2037.tsx',
  'src/pages/RevolutionaryTechBreakthrough2039.tsx',
  'src/pages/RevolutionaryTechBreakthrough2043.tsx',
  'src/pages/RevolutionaryTechBreakthrough2035.tsx',
  'src/pages/RevolutionaryTechBreakthrough2031.tsx',
  'src/pages/RevolutionaryTechBreakthrough2038.tsx',
  'src/pages/RevolutionaryTechBreakthrough2042.tsx',
  'src/pages/RevolutionaryTechBreakthrough2044.tsx',
  'src/pages/RevolutionaryTechBreakthrough2045.tsx',
  'src/pages/RevolutionaryTechBreakthrough2046.tsx',
  'src/pages/RevolutionaryTechBreakthrough2047.tsx',
  'src/pages/RevolutionaryTechBreakthrough2048.tsx',
  'src/pages/RevolutionaryTechBreakthrough2049.tsx',
  'src/pages/RevolutionaryTechBreakthrough2050.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Fix specific incomplete files
    if (incompleteFiles.some(f => filePath.includes(f))) {
      if (content.trim().length < 100) {
        content = `import React from 'react';

const ${path.basename(filePath, '.tsx')}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">${path.basename(filePath, '.tsx')}</h1>
        <p className="text-xl opacity-90">Coming soon...</p>
      </div>
    </div>
  );
};

export default ${path.basename(filePath, '.tsx')};`;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
async function main() {
  // Get all TypeScript/TSX files
  const files = await glob('src/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  for (const file of files) {
    fixFile(file);
    fixedCount++;
  }

  console.log(`Processed ${fixedCount} files`);
}

main().catch(console.error);