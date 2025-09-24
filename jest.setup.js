// Jest setup for safe tests
import '@testing-library/jest-dom';

// Make setup idempotent if loaded multiple times
if (!global.__JEST_SETUP_INITIALIZED__) {
  // Optional: silence noisy console logs during CI tests
  const jestSetupOriginalError = global.console.error;
  const jestSetupOriginalWarn = global.console.warn;

  beforeAll(() => {
    if (process.env.CI) {
      global.console.error = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('TestingLibraryElementError')) {
          return jestSetupOriginalError(...args);
        }
      };
      global.console.warn = () => {};
    }
  });

  afterAll(() => {
    global.console.error = jestSetupOriginalError;
    global.console.warn = jestSetupOriginalWarn;
  });

  // mark initialized
  // eslint-disable-next-line no-underscore-dangle
  global.__JEST_SETUP_INITIALIZED__ = true;
}
