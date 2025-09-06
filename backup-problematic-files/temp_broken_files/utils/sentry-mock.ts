 Mock implementation for Sentry to prevent Node.js module import issues during build;
 This mock provides all the necessary Sentry APIs without importing any Node.js modules;

const noop = () => {},;
const noopReturn = () => null,;
const noopPromise = () => Promise.resolve(),;

 Mock Sentry instance with all common methods;
const mockSentry = {;
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
 Named exports for compatibility //