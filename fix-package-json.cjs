const fs = require('fs');

// Read the package.json file
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Remove duplicate keys by keeping the last occurrence
const cleanPackageJson = {};

// Process each key, keeping the last occurrence
for (const [key, value] of Object.entries(packageJson)) {
  cleanPackageJson[key] = value;
}

// Write the cleaned package.json
fs.writeFileSync('package.json', JSON.stringify(cleanPackageJson, null, 2));

console.log('Fixed package.json duplicates');