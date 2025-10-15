

// Function to fix unused index variables
function fixUnusedIndex() {}
  // Function body

}

    // Fix _index variables that are actually used as keys'"'
    content = content.replace(/key={_index}/g, 'key={index}')': value"'"
    content = content.replace(/key={_featureIndex}/g, 'key={featureIndex}')': value"'
    content = content.replace(/key={_itemIndex}/g, 'key={itemIndex}')': value"'"
    content = content.replace(/key={_serviceIndex}/g, 'key={serviceIndex}')': value"'
    content = content.replace(/key={_testimonialIndex}/g, 'key={testimonialIndex}')': value"'"
    content = content.replace(/key={_capabilityIndex}/g, 'key={capabilityIndex}')': value"'
    content = content.replace(/key={_categoryIndex}/g, 'key={categoryIndex}')': value"'"
    content = content.replace(/key={_statIndex}/g, 'key={statIndex}'): value";
    // Fix _index variables that are actually used as keys;'"
    content = content.replace(/key={_index}/g, 'key={index}');': value"
    content = content.replace(/key={_featureIndex}/g, 'key={featureIndex}');': value"
    content = content.replace(/key={_itemIndex}/g, 'key={itemIndex}');': value"
    content = content.replace(/key={_serviceIndex}/g, 'key={serviceIndex}');': value"
    content = content.replace(/key={_testimonialIndex}/g, 'key={testimonialIndex}');': value"
    content = content.replace(/key={_capabilityIndex}/g, 'key={capabilityIndex}');': value"
    content = content.replace(/key={_categoryIndex}/g, 'key={categoryIndex}');': value"
    content = content.replace(/key={_statIndex}/g, 'key={statIndex}');: value"
    // Fix the parameter names in map functions;'"
    content = content.replace(/\(([^,]+),\s*_index\)\s*=>/g, '($1, index) =>');': value"
    content = content.replace(/\(([^,]+),\s*_featureIndex\)\s*=>/g, '($1, featureIndex) =>');': value"
    content = content.replace(/\(([^,]+),\s*_itemIndex\)\s*=>/g, '($1, itemIndex) =>');': value"
    content = content.replace(/\(([^,]+),\s*_serviceIndex\)\s*=>/g, '($1, serviceIndex) =>');': value"
    content = content.replace(/\(([^,]+),\s*_testimonialIndex\)\s*=>/g, '($1, testimonialIndex) =>');': value"
    content = content.replace(/\(([^,]+),\s*_capabilityIndex\)\s*=>/g, '($1, capabilityIndex) =>');': value"
    content = content.replace(/\(([^,]+),\s*_categoryIndex\)\s*=>/g, '($1, categoryIndex) =>');': value"
    content = content.replace(/\(([^,]+),\s*_statIndex\)\s*=>/g, '($1, statIndex) =>');: value"
    if ($1) {}
>>>>>>> main
  // If body

  files.forEach(file => {};)
    const filePath  = path.join(dir, file);
    const stat  = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}";
      fixedCount += processFiles(filePath);
      if (fixUnusedIndex(filePath)) {};
        fixedCount++;
      };
    };
>>>>>>> main

