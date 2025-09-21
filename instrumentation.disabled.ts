// This file is disabled to avoid build issues
// Server-side instrumentation for Next.js

// Import server polyfills FIRST to handle client-side globals in server context
// Immediately define self for webpack chunk loading
if (
  typeof global !== 'undefined' &&
  typeof (global as any).self === 'undefined'
) {
  (global as any).self = global;
}
if (
  typeof globalThis !== 'undefined' &&
  typeof (globalThis as any).self === 'undefined'
) {
  (globalThis as any).self = globalThis;
}

// Conditionally import Sentry to avoid Node.js dependencies in browser
let Sentry: any = null;
let onRequestError: any = null;

// Only import Sentry in server environment
if (typeof window === 'undefined') {
  try {
    Sentry = require('@sentry/nextjs');
    onRequestError = Sentry?.onRequestError;
  } catch (error) {
    console.warn('Sentry not available:', error);
  }
}

export async function register() {
  // Server-side registration logic
  if (typeof window === 'undefined') {
    // Initialize server-side monitoring
    console.log('Server-side instrumentation registered');
  }
}

export async function onRequest(req: any, res: any) {
  // Handle request-level instrumentation
  if (onRequestError) {
    try {
      onRequestError(req, res);
    } catch (error) {
      console.warn('Error in request instrumentation:', error);
    }
  }
}