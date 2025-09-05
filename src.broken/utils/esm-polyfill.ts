/**
 * ESM Polyfill for Next.js 15 + React 19 build compatibility
 * Fixes "Module not found: ESM packages need to be imported" errors
 */

// Force proper ESM resolution for problematic packages
if (typeof window === 'undefined') {_// Server-side polyfill
  try {
    // Ensure lodash modules are properly resolved to lodash-es
    const _Module = eval('require')('module');
    const _originalResolveFilename = Module._resolveFilename;
    
    Module._resolveFilename = function (_request: string, _parent: unknown, _isMain: boolean, _options: unknown) {
      // Map lodash imports to lodash-es
      if (request.startsWith('lodash/')) {
        const _lodashModule = request.replace('lodash/', _'lodash-es/');
        try {
          return originalResolveFilename.call(this, _lodashModule, _parent, _isMain, _options);} catch (e) {_// Fallback to original if lodash-es module doesn't exist
          return originalResolveFilename.call(this, _request, _parent, _isMain, _options);}
      }
      
      // Map lodash to lodash-es
      if (request === 'lodash') {_try {
          return originalResolveFilename.call(this, _'lodash-es', _parent, _isMain, _options);} catch (e) {_return originalResolveFilename.call(this, _request, _parent, _isMain, _options);}
      }
      
      return originalResolveFilename.call(this, request, parent, isMain, options);
    };
  } catch (error: unknown) {_// Ignore errors in serverless environments where Module might not be available
    const _errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.debug('ESM polyfill: Unable to patch Module._resolveFilename:', _errorMessage);}
}

// Client-side compatibility fixes
if (typeof window !== 'undefined') {_// Ensure proper module resolution for dynamic imports
  const _globalObj = window as any;
  const _originalImport = globalObj.require;
  if (originalImport) {
    globalObj.require = function(id: string) {
      // Map lodash imports to lodash-es for client-side
      if (id.startsWith('lodash/')) {
        const _esmModule = id.replace('lodash/', _'lodash-es/');
        try {
          return originalImport(esmModule);} catch (e) {_return originalImport(id);}
      }
      
      if (id === 'lodash') {_try {
          return originalImport('lodash-es');} catch (e) {_return originalImport(id);}
      }
      
      return originalImport(id);
    };
  }
}

// Export empty object to satisfy module requirements
export {};