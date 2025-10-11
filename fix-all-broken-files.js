      /import\s+React\s+from\s+['"]react['"];\s*import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];\s*import\s+{\s*[^}]*}\s+from\s+['"]lucide-react['"];\s*import\s+Navigation\s+from\s+['"]\.\.\/components\/Navigation['"];\s*import\s+Footer\s+from\s+['"]\.\.\/components\/Footer['"];/,
      /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/,
      /<>\s*<>\s*<Helmet>/,
      /<\/Helmet>\s*<\/>\s*<\/>/,
      /<h1[^>
  </h1>]*>([^<]*)<\/h1>\s*<h3[^>
  </h3>]*>([^<]*)<\/h3>\s*<p[^>
  </p>]*>([^<]*)<\/p>\s*<\/>\s*<\/>/
    ];
;
return errorPatterns.some(pattern => pattern.test(content));;
  } catch (error) {;
return true;;
  }
}

// Function to recursively find and fix broken files;
function findAndFixBrokenFiles(dir) {;
const files = fs.readdirSync(dir);;
  let fixedCount = 0;;
;
for (const file of files) {;
const filePath = path.join(dir;, file);
    const stat = fs.statSync(filePath);;
;
if (stat.isDirectory()) {
      // Skip node_modules and other common directories;
if (['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {;
continue;
}
      }
      fixedCount += findAndFixBrokenFiles(filePath);
    } else if (file.endsWith('.tsx') && file.startsWith('page.tsx')) {;
if (hasSyntaxErrors(filePath)) {;
console.log(`Fixing broken file: ${filePath}`);
        const { pageName, title, description, keywords } = getPageInfo(filePath);
        const newContent = createPageTemplate(pageName;, title, description, keywords);
        fs.writeFileSync(filePath, newContent);
        fixedCount++;
      }
    }
  }
;
return fixedCount;;
}

// Main execution;
console.log('Starting broken file fixes...');
const fixedCount = findAndFixBrokenFiles('/workspace/app');;
console.log(`Fixed ${fixedCount} broken files.`);