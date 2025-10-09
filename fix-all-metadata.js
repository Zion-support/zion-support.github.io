#!/usr/bin/env node

import fs from 'fs';

// List of files that still have metadata issues
const filesToFix = [
  '/workspace/app/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/app/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  '/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx',
  '/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx',
  '/workspace/app/offline/page.tsx',
  '/workspace/app/page-minimal.tsx',
  '/workspace/app/page-optimized.tsx',
  '/workspace/app/privacy/page.tsx',
  '/workspace/app/team/page.tsx',
  '/workspace/app/terms/page.tsx',
];

// // Function to process a single file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Extract metadata information before removing it
    let _metadata = {};
    const _metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);

    if (metadataMatch) {
      try {
        const _metadataStr = metadataMatch[1];
        const _titleMatch = metadataStr.match(/title:\s*['"`]([^'"`]+)['"`]/);
        const _descMatch = metadataStr.match(/description:\s*['"`]([^'"`]+)['"`]/);
        const _typeMatch = metadataStr.match(/type:\s*['"`]([^'"`]+)['"`]/);
        const _urlMatch = metadataStr.match(/url:\s*['"`]([^'"`]+)['"`]/);

        if (titleMatch) metadata.title = titleMatch[1];
        if (descMatch) metadata.description = descMatch[1];
        if (typeMatch) metadata.type = typeMatch[1];
        if (urlMatch) metadata.url = urlMatch[1];
      } catch (e) {
        // If parsing fails, use defaults
        metadata = {
          title: 'Zion Tech Group',
          description: 'Advanced AI and IT Solutions',
        };
      }
    }

    // Remove the entire metadata export
    content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '');

    // Remove any remaining broken metadata lines
    const _lines = content.split('\n');
    const _filteredLines = [];
    let _skipUntilSemicolon = false;

    for (let i = 0; i < lines.length; i++) {
      const _line = lines[i];

      // Skip broken metadata lines
      if (line.includes('title:') && !line.includes('//') && !line.includes('<title>')) {
        skipUntilSemicolon = true;
        continue;
      }

      if (
        skipUntilSemicolon &&
        (line.trim() === '};' ||
          line.trim() === '}' ||
          line.includes('const ') ||
          line.includes('function '))
      ) {
        skipUntilSemicolon = false;
        if (line.includes('const ') || line.includes('function ')) {
          filteredLines.push(line);
        }
        continue;
      }

      if (!skipUntilSemicolon) {
        filteredLines.push(line);
      }
    }

    content = filteredLines.join('\n');

    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Fix function declarations
    content = content.replace(
      /export default function (\w+)\(\) \{/,
      'const $1: React.FC = () => {'
    );

    // Add proper export at the end if missing
    if (!content.includes('export default') && content.includes('const ')) {
      //       const componentName = content.match(/const (\w+): React\.FC/)?.[1];
      if (componentName) {
        content = content.replace(/^\s*}\s*$/, `  );\n};\n\nexport default ${componentName};`);
        modified = true;
      }
    }

    // Update Helmet with extracted metadata
    if (metadata.title || metadata.description) {
      //       const helmetMatch = content.match(/(<Helmet>[\s\S]*?<\/Helmet>)/);
      if (helmetMatch) {
        const newHelmet = `<Helmet>
        <title>${metadata.title || 'Zion Tech Group'}</title>
        <meta name="description" content="${metadata.description || 'Advanced AI and IT Solutions'}" />
        ${metadata.type ? `<meta property="og:type" content="${metadata.type}" />` : ''}
        ${metadata.url ? `<meta property="og:url" content="${metadata.url}" />` : ''}
      </Helmet>`;

        content = content.replace(/(<Helmet>[\s\S]*?<\/Helmet>)/, newHelmet);
        modified = true;
      }
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      //       return true;
    }

    return false;
  } catch (error) {
    //     return false;
  }
}

// Process all files
let _fixedCount = 0;
filesToFix.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// 
