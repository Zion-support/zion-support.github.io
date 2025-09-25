// Jest setup for safe tests
import '@testing-library/jest-dom';

// Make setup idempotent if loaded multiple times
if (!global.__JEST_SETUP_INITIALIZED__) {
  // Mock Next.js Image only if available in this workspace (guard for non-Next setups)
  try {
    require.resolve('next/image')
    jest.mock('next/image', () => ({
      __esModule: true,
      default: function MockImage() {
        return null
      }
    }))
  } catch (error) {
    // not a Next.js environment; skip mock
  }

  // matchMedia mock
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })

  // Observers
  global.IntersectionObserver = class IntersectionObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  }

  global.ResizeObserver = class ResizeObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  }

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