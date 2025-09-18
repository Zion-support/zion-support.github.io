<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"console.log(" Fixing SearchBar type properties.");"const content = fs.readFileSync("components/SearchBar.tsx", "utf8";);"/ Add type property to all search results that don"t have itlet fixed = content.replace( /{\s*title: "([^"]+)",\s*description: "([^"]+)",\s*url: "([^"]+)",\s*category: "([^"]+)"\s*}/g,"" "{\n title: "$1",\n description: "$2",\n url: "$3",\n type: "service",\n category: "$4"\n }";);/ Also fix any remaining patternsfixed = fixed.replace(" /{\s*title: "([^"]+)",\s*description: "([^"]+)",\s*url: "([^"]+)"\s*}/g,"" "{\n title: "$1",\n description: "$2",\n url: "$3",\n type: "page"\n }");"fs.writeFileSync("components/SearchBar.tsx", fixed);"console.log(" Fixed SearchBar type properties");'"'"
=======
#!/usr/bin/env node;
const fs = require('fs')
<<<<<<< HEAD



const content = fs.readFileSync('components/SearchBar.tsx', 'utf8';);

// Add type property to all search results that don't have it
let fixed = content.replace(
  /{\s*"title": "([^"]+)",\s*"description": "([^"]+)",\s*"url": "([^"]+)",\s*"category": "([^"]+)"\s*}/g,
  '{\n    "title": "$1",\n    "description": "$2",\n    "url": "$3",\n    "type": "service",\n    "category": "$4"\n  }';);

// Also fix any remaining patterns
fixed = fixed.replace(
  /{\s*"title": "([^"]+)",\s*"description": "([^"]+)",\s*"url": "([^"]+)"\s*}/g,
  '{\n    "title": "$1",\n    "description": "$2",\n    "url": "$3",\n    "type": "page"\n  }'
);

fs.writeFileSync('components/SearchBar.tsx', fixed);
=======
console.log(' Fixing SearchBar type properties...')
const content = fs.readFileSync('components/SearchBar.tsx', 'utf8')
// Add type property to all search results that don'
  '{\n    "title": "$1",\n    "description": "$2",\n    "url": "$3",\n    "type": "service",\n    "category": "$4"}
  '{\n    "title": "$1",\n    "description": "$2",\n    "url": "$3",\n    "type": "page"}
>>>>>>> main
>>>>>>> main
