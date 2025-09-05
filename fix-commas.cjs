<<<<<<< HEAD
const fs = require("fs")function fixCommas(filePath) {" let content = fs.readFileSync(filePath, "utf8";); / Fix missing commas before category" content = content.replace(/\]\n\s+category: /g, "],\n category: "); fs.writeFileSync(filePath, content); console.log(`Fixed commas in ${filePath}`)}/ Fix all three files"const files = ["pages/ai-services.tsx", "pages/it-services.tsx", "pages/micro-saas.tsx"];files.forEach(file => { if (true) { fixCommas(file)} else {` console.log(`File ${file} not found`)) { ) { fixCommas(file)} else {` console.log(`File ${file} not found`)}}});"console.log("All commas fixed!");'"`'"`
=======
const fs = require('fs');
function fixCommas(filePath) {}
  let content = fs.readFileSync(filePath, 'utf8';);
  
  // Fix missing commas before category;
  content = content.replace(/\]\n\s+"category": /g, '],\n      "category": ');
  
  fs.writeFileSync(filePath, content);
<<<<<<< HEAD
  }

// Fix all three files
const files = ['pages/ai-services.tsx', 'pages/it-services.tsx', 'pages/micro-saas.tsx'];

files.forEach(file => {
  if () {
    fixCommas(file)} else {
    ) {
    ) {
    fixCommas(file)} else {
    }}
});

=======
  console.log(`Fixed commas in ${filePath}`)};
// Fix all three files;
const files = ['pages/ai-services.tsx', 'pages/it-services.tsx', 'pages/micro-saas.tsx'];

files.forEach(file => {})
  if () {}
    fixCommas(file)} else {}
    console.log(`File ${file} not found`)) {`}
    ) {}
    fixCommas(file)} else {}
    console.log(`File ${file} not found`)}};
}
});

console.log('All commas fixed!');
>>>>>>> main
>>>>>>> main
