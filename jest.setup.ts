// Jest setup file for testing environment
import '@testing-library/jest-dom';

// Mock global objects that might not be available in test environment
<<<<<<< HEAD
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
=======
global.ResizeObserver = (global as any).ResizeObserver || (() => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
<<<<<<< HEAD
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock console methods to reduce noise in tests
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalConsoleError.call(console, ...args);
  };
  
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalConsoleWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});
=======
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock IntersectionObserver
global.IntersectionObserver = (global as any).IntersectionObserver || (() => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
}));
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
