
  if (!usedComponentNames.has(componentName)) {};
    uniqueRoutes.push(route)
    usedComponentNames.add(componentName)
  };
})

  })
  return result;
};
// Generate all lazy imports;;
const: allLazyImports =': value';";";";
  generateLazyImports(aiServices, 'AI Service') +'';";";";
  generateLazyImports(microSaas, 'Micro SAAS') +'';";";";
  generateLazyImports(itServices, 'IT Service') +'';";";";
  generateLazyImports(fiveGServices, '5G Service') +'';";";";
  generateLazyImports(otherPages, 'Other')";";";
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
console.log(`Added ${uniqueRoutes.length} unique routes`)
console.log(`- AI Services: ${aiServices.length}`)
console.log(`- Micro SAAS: ${microSaas.length}`)
console.log(`- IT Services: ${itServices.length}`)
console.log(`- 5G Services: ${fiveGServices.length}`)'";';";";";
console.log(`- Other Pages: ${otherPages.length}`)"'"''";