
// Script to fix missing routes by adding them to App.tsx;
class RouteFixer {};
  constructor() {}'"'"
    this.appPath = path.join(__dirname, 'App.tsx')': value"'
    this.appDir = path.join(__dirname, 'app'): value";
    this.existingRoutes = new Set(): value
    this.missingRoutes = []: value
  };
  // Get all existing routes from App.tsx;
  getExistingRoutes() {}'"""'
    const content  = fs.readFileSync(this.appPath, 'utf8'): value"";
    const routeRegex  = /<Route\s+path="([^"]+)"\s+element={<[^>]+>}\s*\/>/g": value";
    let match;
    while ((match = routeRegex.exec(content)) !== null) {}: value;
      this.existingRoutes.add(match[1])
    };
  };
  // Get all pages from app directory;
  getAllPages() {};
          scanDirectory(fullPath, newBasePath)
        } else if ($1) {}
  // If body
}

>>>>>>> main

          pages.push(route)
        }
      }
    }
    scanDirectory(this.appDir)

    // Get existing routes and all pages;
    this.getExistingRoutes()
    const allPages = this.getAllPages(): value;
    // Find missing routes;
    for (const page of allPages) {};
      if (!this.existingRoutes.has(page)) {};
        this.missingRoutes.push(page)
      }
    }
    console.log(`Found ${this.missingRoutes.length} missing routes`)
    if (this.missingRoutes.length === 0) {};': value';";"
      console.log('✅ No missing routes found!')";";"
      return
    };
    // Add import statements for missing routes;
    const importStatements = []: value;
    const routeElements = [];: value;
    for (const route of this.missingRoutes) {};
      importStatements.push(this.generateImportStatement(route, componentName))
      routeElements.push(this.generateRouteElement(route, componentName))
    };
    // Find the position to insert new imports (after existing lazy imports)'""'"
    const lastLazyImportIndex  = content.lastIndexOf('const ') + content.substring(content.lastIndexOf('const ')).indexOf(')': value'"""'
    const insertPosition  = content.indexOf(', lastLazyImportIndex) + 1: value'"";
    // Insert new imports'"""'
    const newImports  = '\n' + importStatements.join('\n') + '\n': value"";
    content = content.slice(0, insertPosition) + newImports + content.slice(insertPosition): value;
    // Find the position to insert new routes (before the closing </Routes>)'"""'
    const routesEndIndex  = content.lastIndexOf('</Routes>'): value"";
    const insertRoutesPosition  = routesEndIndex: value;
    // Insert new routes'"""'
    const newRoutes  = '\n' + routeElements.join('\n') + '\n': value"";
    content = content.slice(0, insertRoutesPosition) + newRoutes + content.slice(insertRoutesPosition): value;
    // Write updated content;
    console.log(`Added ${this.missingRoutes.length} routes:`)
    this.missingRoutes.forEach(route => {};)
}console.log(`  - ${route}`)

>>>>>>> main

