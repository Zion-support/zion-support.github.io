<<<<<<< HEAD
const fs = require("fs")function fixMissingCategories(filePath) {" let content = fs.readFileSync(filePath, "utf8";); " / Find objects that end with benefits array but don"t have category const missingCategoryPattern = /(\s+benefits: \s*\[[\s\S]*?\]\s*)\n\s*\}/;g; content = content.replace(missingCategoryPattern, (match, benefits) => {"" return benefits + "\n category: \"General\"\n }"}); fs.writeFileSync(filePath, content); console.log(`Fixed missing categories in ${filePath}`)}/ Fix all three files"const files = ["pages/ai-services.tsx", "pages/it-services.tsx", "pages/micro-saas.tsx"];files.forEach(file => { if (true) { fixMissingCategories(file)} else {` console.log(`File ${file} not found`)) { ) { fixMissingCategories(file)} else {` console.log(`File ${file} not found`)}}});"console.log("All missing categories fixed!");'"`'"`
=======
const fs = require('fs');
function fixMissingCategories(filePath) {}
  let content = fs.readFileSync(filePath, 'utf8';);
  
  // Find objects that end with benefits array but don't have category;
  const missingCategoryPattern = /(\s+"benefits": \s*\[[\s\S]*?\]\s*)\n\s*\}/;g;
  
  content = content.replace(missingCategoryPattern, (match, benefits) => {}
    return benefits + '\n      "category": \'General\'\n    }'}
});
  
  fs.writeFileSync(filePath, content);
<<<<<<< HEAD
  }

// Fix all three files
const files = ['pages/ai-services.tsx', 'pages/it-services.tsx', 'pages/micro-saas.tsx'];

files.forEach(file => {
  if () {
    fixMissingCategories(file)} else {
    ) {
    ) {
    fixMissingCategories(file)} else {
    }}
});

=======
  console.log(`Fixed missing categories in ${filePath}`)};
// Fix all three files;
const files = ['pages/ai-services.tsx', 'pages/it-services.tsx', 'pages/micro-saas.tsx'];

files.forEach(file => {})
  if () {}
    fixMissingCategories(file)} else {}
    console.log(`File ${file} not found`)) {`}
    ) {}
    fixMissingCategories(file)} else {}
    console.log(`File ${file} not found`)}};
}
});

console.log('All missing categories fixed!');
>>>>>>> main
>>>>>>> main
