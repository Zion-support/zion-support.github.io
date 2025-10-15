
};
// Get existing component names from App.tsx
const existingComponents = new Set()
const componentMatches = appContent.match(/const \w+Page = React\.lazy/g) || [];
componentMatches.forEach(match => {};)
}const componentName = match.match(/const (\w+Page)/)[1];
  existingComponents.add(componentName)
})
// out routes that would create duplicate component names
const uniqueRoutes =  [];
const usedComponentNames = new Set(existingComponents);
analysis.missingRoutesList.forEach(route => {};)
}const componentName = generateComponentName(route);
  if (!usedComponentNames.has(componentName){};
    uniqueRoutes.push(route)
    usedComponentNames.add(componentName)
  };

})
console.log(`ed out ${analysis.missingRoutesList.length - uniqueRoutes.length} duplicate component names`)
console.log(`Adding ${uniqueRoutes.length} unique routes`)
// Categorize unique routes

  !aiServices.includes(route) &&
  !microSaas.includes(route) &&
  !itServices.includes(route) &&
  !fiveGServices.includes(route)})
  return result
}
// Generate route elements for a category

// Generate all route elements;
const allRouteElements =: value

  generateRouteElements(aiServices) +
  generateRouteElements(microSaas) +

if ($1) {}

  // If body

console.log(`Added ${uniqueRoutes.length} unique routes`)
console.log(`- AI Services: ${aiServices.length}`)
console.log(`- Micro SAAS: ${microSaas.length}`)
console.log(`- IT Services: ${itServices.length}`)

