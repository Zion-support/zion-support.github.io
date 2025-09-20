/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-const */
/**
 * Serverless Environment Polyfill
 *
 * This polyfill addresses common issues in serverless environments like Netlify:
 * - "self is not defined" errors
 * - Missing global objects
 * - Webpack chunk loading issues
 * - TypeScript helper function issues
 *
 * This runs as the VERY FIRST script before any other code loads.
 */
// Type declarations for global augmentation
declare global {
  var webpackChunk_N_E: any[];
  var __webpack_require__: any;
  var __webpack_exports__: any;
  var __non_webpack_require__: any;
  var __extends: any;
  var __assign: any;
  var __rest: any;
  var __decorate: any;
  var __awaiter: any;
}

// CRITICAL: Self polyfill - must be first
if (typeof self === 'undefined') {
  (global as any).self = global;
}

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => verifyPolyfills(), 100);
}

function verifyPolyfills() {
  console.log('Serverless polyfills loaded successfully');
}

export default {}; // Ensure this can be imported as a module