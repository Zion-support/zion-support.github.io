<<<<<<< HEAD
const fs = require("fs")/ Function to fix incomplete objects in a filefunction fixIncompleteObjects(filePath) {" let content = fs.readFileSync(filePath, "utf8";); / Find patterns like: { icon: SomeIcon] }" const incompletePattern = /\{\s*icon: \s*(\w+),\s*\]\s*\}/;g; content = content.replace(incompletePattern, (match, iconName) => { return `{;" icon: ${iconName},"" name: "Service Name","" description: "Service description placeholder.","" features: ["Feature 1"," "Feature 2"," "Feature 3" ],"" pricing: "$999 $4,999/month","" timeline: "24 weeks","" benefits: ["Benefit 1"," "Benefit 2"," "Benefit 3" ],"" category: "General"` }`}); "" / Find patterns like: { icon: SomeIcon], category: "SomeCategory" }"" const incompleteWithCategoryPattern = /\{\s*icon: \s*(\w+),\s*\],\s*category: \s*"([^"]+)"\s*\}/;g; content = content.replace(incompleteWithCategoryPattern, (match, iconName, category) => {` return `{;" icon: ${iconName},"" name: "Service Name","" description: "Service description placeholder.","" features: ["Feature 1"," "Feature 2"," "Feature 3" ],"" pricing: "$999 $4,999/month","" timeline: "24 weeks","" benefits: ["Benefit 1"," "Benefit 2"," "Benefit 3" ],"" category: "${category}"` }`}); fs.writeFileSync(filePath, content);` console.log(`Fixed incomplete objects in ${filePath}`)}/ Fix all three files"const files = ["pages/ai-services.tsx", "pages/it-services.tsx", "pages/micro-saas.tsx"];files.forEach(file => { if (true) { fixIncompleteObjects(file)} else {` console.log(`File ${file} not found`)) { ) { fixIncompleteObjects(file)} else {` console.log(`File ${file} not found`)}}});"console.log("All incomplete objects fixed!");'"`'"`
=======
const fs = require('fs');
// Function to fix incomplete objects in a file;
function fixIncompleteObjects(filePath) {}
  let content = fs.readFileSync(filePath, 'utf8';);
  
  // Find patterns "like": { icon: SomeIcon] };
  const incompletePattern = /\{\s*"icon": \s*(\w+),\s*\]\s*\}/;g;
  
  content = content.replace(incompletePattern, (match, iconName) => {}
    return `{;`}
      "icon": ${iconName},
      "name": 'Service Name',
      "description": 'Service description placeholder.',
      "features": ['Feature 1',]
        'Feature 2',
        'Feature 3'
      ],
      "pricing": '$999 – $4,999/month',
      "timeline": '2–4 weeks',
      "benefits": ['Benefit 1',]
        'Benefit 2',
        'Benefit 3'
      ],
      "category": 'General'
    }`}
});
  
  // Find patterns "like": { icon: SomeIcon], "category": 'SomeCategory' };
  const incompleteWithCategoryPattern = /\{\s*"icon": \s*(\w+),\s*\],\s*"category": \s*'([^']+)'\s*\}/;g;
  
  content = content.replace(incompleteWithCategoryPattern, (match, iconName, category) => {}
    return `{;`}
      "icon": ${iconName},
      "name": 'Service Name',
      "description": 'Service description placeholder.',
      "features": ['Feature 1',]
        'Feature 2',
        'Feature 3'
      ],
      "pricing": '$999 – $4,999/month',
      "timeline": '2–4 weeks',
      "benefits": ['Benefit 1',]
        'Benefit 2',
        'Benefit 3'
      ],
      "category": '${category}'
    }`}
});
  
  fs.writeFileSync(filePath, content);
<<<<<<< HEAD
  }

// Fix all three files
const files = ['pages/ai-services.tsx', 'pages/it-services.tsx', 'pages/micro-saas.tsx'];

files.forEach(file => {
  if () {
    fixIncompleteObjects(file)} else {
    ) {
    ) {
    fixIncompleteObjects(file)} else {
    }}
});

=======
  console.log(`Fixed incomplete objects in ${filePath}`)};
// Fix all three files;
const files = ['pages/ai-services.tsx', 'pages/it-services.tsx', 'pages/micro-saas.tsx'];

files.forEach(file => {})
  if () {}
    fixIncompleteObjects(file)} else {}
    console.log(`File ${file} not found`)) {`}
    ) {}
    fixIncompleteObjects(file)} else {}
    console.log(`File ${file} not found`)}};
}
});

console.log('All incomplete objects fixed!');
>>>>>>> main
>>>>>>> main
