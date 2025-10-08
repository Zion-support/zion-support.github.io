import fs from 'fs';
import { glob } from 'glob';
#!/usr/bin/env node




// Patterns to replace
const replacements = [
  // Fix duplicate React imports
  {
    from: /\s*/g,
    to: "",
  },
  {
    from: /\s*\n/g,
    to: "",
  },

  // Fix Metadata type issues
  { from: /export const metadata: Metadata =/g, to: 'const metadata = {' },
  { from: /: Metadata =/g, to: ' = {' },

  // Fix Link component props
  { from: /<Link\s+href=/g, to: '<Link to=' },

  // Fix Image component - replace with regular img
  { from: /import Image from 'react';/g, to: '' },
  { from: /<Image\s+/g, to: '<img ' },
  { from: /\/>/g, to: ' />' },

  // Fix dynamic imports that weren't properly converted
  { from: /dynamic\(\(\) => import\(['"]([^'"]+)['"]\)/g, to: "lazy(() => import('$1')" },
  {
    from: /dynamic\(\(\) => import\(['"]([^'"]+)['"]\),\s*\{[^}]*\}/g,
    to: "lazy(() => import('$1').catch(() => ({ default: () => <div>Loading...</div> })))",
  },
];

// Function to process a file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    replacements.forEach(({ from, to }) => {
      if (typeof from === 'string') {
        if (content.includes(from)) {
          content = content.replace(
            new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
            to
          );
          modified = true;
        }
      } else if (from instanceof RegExp) {
        if (from.test(content)) {
          content = content.replace(from, to);
          modified = true;
        }
      }
    });

    // Additional cleanup for Image components
    if (content.includes('<Image')) {
      // Replace Image component with img tag
      content = content.replace(/<Image\s+([^>]*?)\s*\/>/g, (match, props) => {
        // Extract props and convert to img attributes
        const _propMatches = props.match(/(\w+)=['"]([^'"]*)['"]/g);
        if (propMatches) {
          const imgProps = propMatches
            .map(prop =>
              prop
                .replace(/src=/g, 'src=')
                .replace(/alt=/g, 'alt=')
                .replace(/width=/g, 'width=')
                .replace(/height=/g, 'height=')
                .replace(/className=/g, 'class=')
            )
            .join(' ');
          return `<img ${imgProps} />`;
        }
        return match;
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }

    return false;
  } catch (error) {

    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const _files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  let _fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
