import fs from 'fs';
import path from 'path';
#!/usr/bin/env node




//Function to properly fix corrupted syntax
function fixCorruptedSyntax(content) {
  //Remove the corrupted comment at the top
  content = content.replace(/^\/\/ @ts-noch, e, c, k\s*\n/, '');

  //Fix import statements - reconstruct properly
  content = content.replace(/imp, o, r, t\s+([^;]+);/g, (match, importContent) => {
    const _cleaned = importContent.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `import ${cleaned};`;
  });

  //Fix export const statements
  content = content.replace(/exp, o, r, t\s+co, n, s, t\s+([^=]+)=/g, (match, exportContent) => {
    const _cleaned = exportContent.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `export const ${cleaned} =`;
  });

  //Fix export default function statements
  content = content.replace(
    /exp, o, r, t\s+defa, u, l, t\s+f, u, n, c, t, i, o, n\s+([^(]+)/g,
    (match, funcName) => {
      //       const cleaned = funcName.replace(/,/g, '').replace(/\s+/g, ' ').trim();
      return `export default function ${cleaned}`;
    }
  );

  //Fix string literals in metadata
  content = content.replace(/ti, t, l, e:\s*'([^']+)'/g, (match, title) => {
    //     const cleaned = title.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `title: '${cleaned}'`;
  });

  content = content.replace(/desc r i p t, i, o, n:\s*'([^']+)'/g, (match, description) => {
    //       const cleaned = description.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `description: '${cleaned}'`;
  });

  //Fix JSX attributes
  content = content.replace(/cl a s s N a m e\s*=\s*'([^']+)'/g, (match, className) => {
    //       const cleaned = className.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `className='${cleaned}'`;
  });

  content = content.replace(/h r e f\s*=\s*'([^']+)'/g, (match, href) => {
    //     const cleaned = href.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `href='${cleaned}'`;
  });

  //Fix JSX tags
  content = content.replace(/<m a i n/g, '<main');
  content = content.replace(/<\/m a i n>/g, '</main>');
  content = content.replace(/<sect i o n/g, '<section');
  content = content.replace(/<\/sect i o n>/g, '</section>');
  content = content.replace(/<div/g, '<div');
  content = content.replace(/<\/div>/g, '</div>');
  content = content.replace(/<h1/g, '<h1');
  content = content.replace(/<\/h1>/g, '</h1>');
  content = content.replace(/<h2/g, '<h2');
  content = content.replace(/<\/h2>/g, '</h2>');
  content = content.replace(/<h3/g, '<h3');
  content = content.replace(/<\/h3>/g, '</h3>');
  content = content.replace(/<p/g, '<p');
  content = content.replace(/<\/p>/g, '</p>');
  content = content.replace(/<ul/g, '<ul');
  content = content.replace(/<\/ul>/g, '</ul>');
  content = content.replace(/<li/g, '<li');
  content = content.replace(/<\/li>/g, '</li>');
  content = content.replace(/<str o n g/g, '<strong');
  content = content.replace(/<\/str o n g>/g, '</strong>');
  content = content.replace(/<em/g, '<em');
  content = content.replace(/<\/em>/g, '</em>');
  content = content.replace(/<s p a n/g, '<span');
  content = content.replace(/<\/s p a n>/g, '</span>');

  //Fix ArrowRight component
  content = content.replace(/Arr o w R i g h t/g, 'ArrowRight');

  //Clean up multiple spaces but preserve single spaces
  content = content.replace(/\s{2,}/g, ' ');

  return content;
}

//Function to find all corrupted blog files
function findCorruptedFiles() {
  //   const blogDir = path.join(process.cwd(), 'app', 'blog');
  const _corruptedFiles = [];

  function walkDir(_dir) {
    const _files = fs.readdirSync(dir);

    for (const file of files) {
      //       const filePath = path.join(dir, file);
      const _stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') && !file.includes('backup')) {
        const _content = fs.readFileSync(filePath, 'utf8');
        if (
          content.includes('imp, o, r, t') ||
          content.includes('exp, o, r, t') ||
          content.includes('Arr o w R i g h t')
        ) {
          corruptedFiles.push(filePath);
        }
      }
    }
  }

  walkDir(blogDir);
  return corruptedFiles;
}

// Main function
function main() {
  //   const corruptedFiles = findCorruptedFiles();

  //   if (corruptedFiles.length === 0) {
    //     return;
  }

  //   for (const filePath of corruptedFiles) {
    try {
      //       const content = fs.readFileSync(filePath, 'utf8');
      //       const fixedContent = fixCorruptedSyntax(content);
      fs.writeFileSync(filePath, fixedContent);
      //       } catch (error) {
      //       }
  }

  //   }

main();
