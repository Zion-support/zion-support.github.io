#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changes = 0;

    // Fix missing closing tags for common patterns
    const patterns = [
      // Fix h1 tags missing closing tags
      {
        pattern: /<h1([^>]*)>([^<]+)<\/h1>/g,
        replacement: '<h1$1>$2</h1>'
      },
      // Fix h2 tags missing closing tags
      {
        pattern: /<h2([^>]*)>([^<]+)<\/h2>/g,
        replacement: '<h2$1>$2</h2>'
      },
      // Fix button tags missing closing tags
      {
        pattern: /<button([^>]*)>([^<]+)<\/button>/g,
        replacement: '<button$1>$2</button>'
      },
      // Fix span tags missing closing tags
      {
        pattern: /<span([^>]*)>([^<]+)<\/span>/g,
        replacement: '<span$1>$2</span>'
      },
      // Fix p tags missing closing tags
      {
        pattern: /<p([^>]*)>([^<]+)<\/p>/g,
        replacement: '<p$1>$2</p>'
      },
      // Fix div tags missing closing tags
      {
        pattern: /<div([^>]*)>([^<]+)<\/div>/g,
        replacement: '<div$1>$2</div>'
      },
      // Fix section tags missing closing tags
      {
        pattern: /<section([^>]*)>([^<]+)<\/section>/g,
        replacement: '<section$1>$2</section>'
      },
      // Fix article tags missing closing tags
      {
        pattern: /<article([^>]*)>([^<]+)<\/article>/g,
        replacement: '<article$1>$2</article>'
      },
      // Fix main tags missing closing tags
      {
        pattern: /<main([^>]*)>([^<]+)<\/main>/g,
        replacement: '<main$1>$2</main>'
      },
      // Fix header tags missing closing tags
      {
        pattern: /<header([^>]*)>([^<]+)<\/header>/g,
        replacement: '<header$1>$2</header>'
      },
      // Fix footer tags missing closing tags
      {
        pattern: /<footer([^>]*)>([^<]+)<\/footer>/g,
        replacement: '<footer$1>$2</footer>'
      },
      // Fix nav tags missing closing tags
      {
        pattern: /<nav([^>]*)>([^<]+)<\/nav>/g,
        replacement: '<nav$1>$2</nav>'
      },
      // Fix aside tags missing closing tags
      {
        pattern: /<aside([^>]*)>([^<]+)<\/aside>/g,
        replacement: '<aside$1>$2</aside>'
      },
      // Fix form tags missing closing tags
      {
        pattern: /<form([^>]*)>([^<]+)<\/form>/g,
        replacement: '<form$1>$2</form>'
      },
      // Fix input tags (self-closing)
      {
        pattern: /<input([^>]*)>([^<]+)<\/input>/g,
        replacement: '<input$1 />'
      },
      // Fix img tags (self-closing)
      {
        pattern: /<img([^>]*)>([^<]+)<\/img>/g,
        replacement: '<img$1 />'
      },
      // Fix br tags (self-closing)
      {
        pattern: /<br([^>]*)>([^<]+)<\/br>/g,
        replacement: '<br$1 />'
      },
      // Fix hr tags (self-closing)
      {
        pattern: /<hr([^>]*)>([^<]+)<\/hr>/g,
        replacement: '<hr$1 />'
      },
      // Fix meta tags (self-closing)
      {
        pattern: /<meta([^>]*)>([^<]+)<\/meta>/g,
        replacement: '<meta$1 />'
      },
      // Fix link tags (self-closing)
      {
        pattern: /<link([^>]*)>([^<]+)<\/link>/g,
        replacement: '<link$1 />'
      },
      // Fix area tags (self-closing)
      {
        pattern: /<area([^>]*)>([^<]+)<\/area>/g,
        replacement: '<area$1 />'
      },
      // Fix base tags (self-closing)
      {
        pattern: /<base([^>]*)>([^<]+)<\/base>/g,
        replacement: '<base$1 />'
      },
      // Fix col tags (self-closing)
      {
        pattern: /<col([^>]*)>([^<]+)<\/col>/g,
        replacement: '<col$1 />'
      },
      // Fix embed tags (self-closing)
      {
        pattern: /<embed([^>]*)>([^<]+)<\/embed>/g,
        replacement: '<embed$1 />'
      },
      // Fix source tags (self-closing)
      {
        pattern: /<source([^>]*)>([^<]+)<\/source>/g,
        replacement: '<source$1 />'
      },
      // Fix track tags (self-closing)
      {
        pattern: /<track([^>]*)>([^<]+)<\/track>/g,
        replacement: '<track$1 />'
      },
      // Fix wbr tags (self-closing)
      {
        pattern: /<wbr([^>]*)>([^<]+)<\/wbr>/g,
        replacement: '<wbr$1 />'
      }
    ];

    // Apply all patterns
    patterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        content = content.replace(pattern.pattern, pattern.replacement);
        changes += matches.length;
      }
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${filePath} (${changes} changes)`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJSXFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);