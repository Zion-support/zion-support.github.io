// Jest setup for safe tests
import '@testing-library/jest-dom';

// Optional: silence noisy console logs during CI tests
const originalError = global.console.error;
const originalWarn = global.console.warn;

beforeAll(() => {
  if (process.env.CI) {
    global.console.error = (...args) => {
      // allow test-related errors
      if (typeof args[0] === 'string' && args[0].includes('TestingLibraryElementError')) {
        return originalError(...args);
      }
    };
    global.console.warn = () => {};
  }
});

afterAll(() => {
  global.console.error = originalError;
  global.console.warn = originalWarn;
});
