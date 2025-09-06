/** * ESM Polyfill for Next.js 15 + React 19 build compatibility * Fixes "Module not found: ESM packages need to be imported" errors */ //Force proper ESM resolution for problematic packages if (typeof window === 'undefined') {
  //Server-side polyfill try {
  //Ensure lodash modules are properly resolved to lodash-es Module. resolveFilename = function (request: string, parent: unknown, isMain: boolean, options: unknown) {
  //Map lodash imports to lodash-es if (request.startsWith ('lodash/') ) {
  if (originalImport) {
  globalObj.require = function (id: string) {
  //Map lodash imports to lodash-es for client-side if (id.startsWith ('lodash/') ) {
  
}return originalImport (id) 
}
}
}// Export empty object to satisfy module requirements export {
  
};
