<<<<<<< HEAD

#!/usr/bin/env node
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4

<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
console.log('🔧 Final Syntax Fix');
<<<<<<< HEAD
console.log('==================');




// Function to fix specific syntax errors
=======
console.log(
// Function to fix specific syntax errors;)
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
function fixSpecificErrors(content) {
  return content;
    // Fix JSX closing tags;
<<<<<<< HEAD
    .replace(/<\$1>/g, '>')
    .replace(/<\/\$1>/g, '>')
    .replace(/<\$1/g, '<')
    .replace(/<\/\$1/g, '</')
    // Fix object literal syntax;
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    // Fix semicolons in wrong places;
    .replace(/;\s*$/gm, )
    .replace(/;\s*}/g, '}')']
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    // Fix array and object syntax;
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')']
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    // Fix empty objects and arrays;
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    // Fix trailing commas;
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    // Clean up extra semicolons;
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    // Clean up whitespace;
    .replace(/\n\s*\n\s*\n/g, '\n\n')
=======
    .replace(/<\$1>/g,>')
    .replace(/<\/\$1>/g,>')
    .replace(/<\$1/g,<')
    .replace(/<\/\$1/g,</)
    // Fix object literal syntax;
    .replace(/\{\s*$/gm,{)
    .replace(/\[\s*$/gm,[)
    .replace(/\(\s*$/gm,(')
    // Fix semicolons in wrong places;
    .replace(/;\s*$/gm, )
    .replace(/;\s*}/g, })]
    .replace(/;\s*]/g, ])
    .replace(/;\s*\)/g,))
    // Fix array and object syntax;
    .replace(/\[\s*\{\s*$/gm,[{)
    .replace(/\{\s*\[\s*$/gm,{[)]
    .replace(/\}\s*\]\s*$/gm, }])
    .replace(/\]\s*\}\s*$/gm, ]})
    // Fix empty objects and arrays;
    .replace(/\{\s*\}/g,{})
    .replace(/\[\s*\]/g,[])
    // Fix trailing commas;
    .replace(/,\s*}/g, })
    .replace(/,\s*]/g, ])
    .replace(/,\s*\)/g,))
    // Clean up extra semicolons;
    .replace(/;;+/g,;)
    .replace(/;\s*;/g,;)
    // Clean up whitespace;
    .replace(/\n\s*\n\s*\n/g,\n\n')
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    .replace(/\s+$/gm, );
}

// Files to fix;
const filesToFix = [
<<<<<<< HEAD
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/accessibility.tsx',
  'pages/careers.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Layout.tsx',
  'components/layout/MainLayout.tsx]
=======
  'pages/about.tsx,pages/blog.tsx,pages/ai-services.tsx,pages/api.tsx,pages/accessibility.tsx,pages/careers.tsx,components/Header.tsx,components/Footer.tsx,components/Layout.tsx,components/layout/MainLayout.tsx]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
];

let totalFixed = 0;




for (const file of filesToFix) {
  try {
  // TODO: Implement
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file});
      continue;
<<<<<<< HEAD

    let content = fs.readFileSync(file, 'utf8');
=======
    }
'
    let content = fs.readFileSync(file,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    const originalContent = content;
    
    content = fixSpecificErrors(content);
    
    if (content !== originalContent) {
<<<<<<< HEAD
      fs.writeFileSync(file, content);`;
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
  } catch (error) {`;
    console.log(`❌ Error fixing ${file}: ${error.message}`);
`;
=======
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file});
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message});
  }
}

>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
console.log(`\n✅ Fixed ${totalFixed} files`);
<<<<<<< HEAD


console.log('🎉 Final syntax fix completed!');

=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
