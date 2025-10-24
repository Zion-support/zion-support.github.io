// Script to fix missing routes by adding them to App.tsx
class RouteFixer {}
  constructor() {}"
    this.appPath = path.join(__dirname, 'App.tsx')'
    this.appDir = path.join(__dirname, 'app'
    const content  = fs.readFileSync(this.appPath, 'utf8'
    const pages  = []'
    const scanDirectory  = (dir, basePath = '
          const route  = basePath ? `/${basePath}` : '
    console.log('🔧 Starting route fixing process...\n'
    if (this.missingRoutes.length === 0) {};': value'
      console.log('✅ No missing routes found!'
    const lastLazyImportIndex  = content.lastIndexOf('const ') + content.substring(content.lastIndexOf('const ')).indexOf(')'
    const insertPosition  = content.indexOf('
    const newImports  = '\n' + importStatements.join('\n') + '\n'
    const routesEndIndex  = content.lastIndexOf('</Routes>'
    const newRoutes  = '\n' + routeElements.join('\n') + '\n'
    console.log('✅ Successfully added missing routes to App.tsx'