/**
 * ESM Polyfill for Next.js 15 + React 19 build compatibility
 * Fixes 'Module not found: ESM packages need to be imported' errors
 */

// Force proper ESM resolution for problematic packages
if (typeof window = $2;
    const originalResolveFilename = $2;
    Module._resolveFilename = function (request: string, parent: any, isMain: boolean, options: any) {
      // Map lodash imports to lodash-es
      if (request.startsWith('lodash/')) {
        const lodashModule = request.replace($2);
        try {
          return originalResolveFilename.call(this, lodashModule, parent, isMain, options)
        } catch (e) {
          // Fallback to original if lodash-es module doesn't exist
          return originalResolveFilename.call(this, request, parent, isMain, options)
        }
      }
      
      // Map lodash to lodash-es
      if (request === 'lodash') {
        try {
          return originalResolveFilename.call(this, 'lodash-es', parent, isMain, options)
        } catch (e) {
          return originalResolveFilename.call(this, request, parent, isMain, options)
        }
      }
      
      return originalResolveFilename.call(this, request, parent, isMain, options)
    }
  } catch (error: unknown) {
    // Ignore errors in serverless environments where Module might not be available
    const errorMessage = $2;
    console.debug('ESM polyfill: Unable to patch Module._resolveFilename:', errorMessage)
  }
}

// Client-side compatibility fixes
if (typeof window !== 'undefined') {
  // Ensure proper module resolution for dynamic imports
  const globalObj = $2;
  const originalImport = $2;
  if (originalImport) {
    globalObj.require = function(id: string) {
      // Map lodash imports to lodash-es for client-side
      if (id.startsWith('lodash/')) {
        const esmModule = id.replace($2);
        try {
          return originalImport(esmModule)
        } catch (e) {
          return originalImport(id)
        }
      }
      
      if (id = $2;