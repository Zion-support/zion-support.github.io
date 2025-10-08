import fs from 'fs';
import { glob } from 'glob';
#!/usr/bin/env node




async function removeProblematicIcons() {
  //Find all TypeScript/JavaScript files in src/components
  const _files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  //   for (const filePath of files) {
    try {
      let _content = fs.readFileSync(filePath, 'utf8');
      let _modified = false;

      //Remove all problematic icon usage patterns
      //Remove <span className="...">IconName</span>
      //       const spanRegex = /<span className="[^"]+">\w+<\/span>/g;
      content = content.replace(spanRegex, match => {
        modified = true;
        return '';
      });

      //Remove <div className="...">IconName</div>
      //       const divRegex = /<div className="[^"]+">\w+<\/div>/g;
      content = content.replace(divRegex, match => {
        modified = true;
        return '';
      });

      //Remove any remaining malformed JSX with angle brackets
      //       const malformedRegex = /<[^>]*>\w+<\/[^>]*>/g;
      content = content.replace(malformedRegex, match => {
        modified = true;
        return '';
      });

      //Clean up any empty lines that might have been created
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        //         }
    } catch (error) {
      //       }
  }

  //   }

// removeProblematicIcons().catch(console.error);
