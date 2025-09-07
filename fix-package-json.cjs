const fs = require('fs');

function fixPackageJson() {
  try {
    let content = fs.readFileSync('package.json', 'utf8');
    
    // Parse the JSON
    let packageData;
    try {
      packageData = JSON.parse(content);
    } catch (error) {
      console.error('Error parsing package.json:', error.message);
      return;
    }
    
    // Remove duplicate keys by keeping only the first occurrence
    const cleanedData = {};
    const seenKeys = new Set();
    
    function cleanObject(obj) {
      if (typeof obj !== 'object' || obj === null) {
        return obj;
      }
      
      if (Array.isArray(obj)) {
        return obj.map(cleanObject);
      }
      
      const cleaned = {};
      for (const [key, value] of Object.entries(obj)) {
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          cleaned[key] = cleanObject(value);
        }
      }
      return cleaned;
    }
    
    const cleaned = cleanObject(packageData);
    
    // Write back to file
    fs.writeFileSync('package.json', JSON.stringify(cleaned, null, 2));
    console.log('Fixed package.json - removed duplicate keys');
  } catch (error) {
    console.error('Error fixing package.json:', error.message);
  }
}

fixPackageJson();