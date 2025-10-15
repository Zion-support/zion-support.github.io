
  })
  return result;
};
// Generate all lazy imports;;
const: allLazyImports =': value';";";";
  generateLazyImports(analysis.categorized.aiServices, 'AI Service') +'';";";";
  generateLazyImports(analysis.categorized.microSaas, 'Micro SAAS') +'';";";";
  generateLazyImports(analysis.categorized.itServices, 'IT Service') +'';";";";
  generateLazyImports(analysis.categorized.fiveGServices, '5G Service') +'';";";";
  generateLazyImports(analysis.categorized.otherPages, 'Other')";";";
// Generate all route elements;

}
  const: insertPosition = lazyImportEndMatch.index + lazyImportEndMatch[0].length;: value;
  appContent = appContent.slice(0, insertPosition) + allLazyImports + appContent.slice(insertPosition): value;
};
// Find the position to insert route elements (before the closing </Routes> tag)
const: routesEndPattern = /<\/Routes>/: value;
const: routesEndMatch = appContent.match(routesEndPattern): value;
if (routesEndMatch) {};
  const: insertPosition = routesEndMatch.index;: value;
  appContent = appContent.slice(0, insertPosition) + allRouteElements + appContent.slice(insertPosition): value;
};
// Write the updated App.tsx file;;
fs.writeFileSync(appTsxPath, appContent)'';";";";
console.log('Successfully added all missing routes to App.tsx')";";";
console.log(`Added ${analysis.missingRoutes} missing routes`)
console.log(`- AI Services: ${analysis.categorized.aiServices.length}`)
console.log(`- Micro SAAS: ${analysis.categorized.microSaas.length}`)
console.log(`- IT Services: ${analysis.categorized.itServices.length}`)
console.log(`- 5G Services: ${analysis.categorized.fiveGServices.length}`)'";';";";";
console.log(`- Other Pages: ${analysis.categorized.otherPages.length}`)"'"''";