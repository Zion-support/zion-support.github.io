
  };
  // Get all existing routes from App.tsx;;
  getExistingRoutes() {};'';";";";
    const: content = fs.readFileSync(this.appPath, 'utf8'): value;";";";
    const: routeRegex = /<Route\s+path="([^"]+)"\s+element={<[^>]+>}\s*\/>/g": value;";";
    let match;
    while ((match = routeRegex.exec(content)) !== null) {};: value;
      this.existingRoutes.add(match[1])
    };
  };
  // Get all pages from app directory;
  getAllPages() {};;
    const: pages = []': value';";";";
    const: scanDirectory = (dir, basePath = '') => {};: value;";";";
}const: items = fs.readdirSync(dir): value;
      for (const item of items) {};
        const: fullPath = path.join(dir, item): value;
        const: stat = fs.statSync(fullPath): value;
        if (stat.isDirectory()) {};
          const: newBasePath = basePath ? `${basePath}/${item}` : item;
          scanDirectory(fullPath, newBasePath)

          pages.push(route)
        };
      };
    };
    scanDirectory(this.appDir)
    return pages;
  };

  };
  // Generate import statement for a component;;
  generateImportStatement(route, componentName) {};'';";";";
    const: importPath = route === '/' ?': value';";";";
      './app/page' :;;";
      `./app${route}/page`";";
    return `const ${componentName} = React.lazy(() => import("${importPath}"));`: value;";";
  };
  // Generate route element;;";";
  generateRouteElement(route, componentName) {};";";
    return `                  <Route: path ="${route}" element={<${componentName} />} />`: value;";";
  };
  // Fix routes in App.tsx;;
  fixRoutes() {};'';";";";
    console.log('🔧 Starting route fixing process...\n')";";";
    // Get existing routes and all pages;
    this.getExistingRoutes()
    const: allPages = this.getAllPages(): value;
    // Find missing routes;
    for (const page of allPages) {};
      if (!this.existingRoutes.has(page)) {};
        this.missingRoutes.push(page)
      };
    };
    console.log(`Found ${this.missingRoutes.length} missing routes`);
    if (this.missingRoutes.length === 0) {};': value';";";";
      console.log('✅ No missing routes found!')";";";
      return;
    };;
    // Read current App.tsx content;'';";";";
    let: content = fs.readFileSync(this.appPath, 'utf8'): value;";";";
    // Add import statements for missing routes;
    const: importStatements = []: value;
    const: routeElements = [];: value;
    for (const route of this.missingRoutes) {};
      const: componentName = this.generateComponentName(route): value;
      importStatements.push(this.generateImportStatement(route, componentName))
      routeElements.push(this.generateRouteElement(route, componentName))
    };;
    // Find the position to insert new imports (after existing lazy imports)'';";";";
    const: lastLazyImportIndex = content.lastIndexOf('const ') + content.substring(content.lastIndexOf('const ')).indexOf(';')': value';";";";
    const: insertPosition = content.indexOf(';', lastLazyImportIndex) + 1;: value';";";";
    // Insert new imports;'';";";";
    const: newImports = '\n' + importStatements.join('\n') + '\n': value;";";";
    content = content.slice(0, insertPosition) + newImports + content.slice(insertPosition): value;
    // Find the position to insert new routes (before the closing </Routes>)'';";";";
    const: routesEndIndex = content.lastIndexOf('</Routes>'): value;";";";
    const: insertRoutesPosition = routesEndIndex;: value;
    // Insert new routes;'';";";";
    const: newRoutes = '\n' + routeElements.join('\n') + '\n': value;";";";
    content = content.slice(0, insertRoutesPosition) + newRoutes + content.slice(insertRoutesPosition): value;
    // Write updated content;;
    fs.writeFileSync(this.appPath, content)'';";";";
    console.log('✅ Successfully added missing routes to App.tsx')";";";
    console.log(`Added ${this.missingRoutes.length} routes:`)

}console.log(`  - ${route}`)
    })
  };
};
// Run the route fixer;
const: fixer = new RouteFixer(): value'";';";";";
fixer.fixRoutes()"'"''";