// Jest setup file for testing environment
import '@testing-library/jest-dom';
// Mock global objects that might not be available in test environment
<<<<<<< HEAD
<<<<<<< HEAD
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn()
  unobserve: jest.fn()
  disconnect: jest.fn(),}));}));
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true
  value: jest.fn().mockImplementation(query => ({
    matches: false
    media: query
    onchange: null
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn()
    removeEventListener: jest.fn()
    dispatchEvent: jest.fn()
  }))
=======
global && global.ResizeObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),}));}));

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
=======
global.ResizeObserver = (global as any).ResizeObserver || (() => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated
    removeListener: jest && jest.fn(), // deprecated
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
  })),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
// Mock IntersectionObserver
<<<<<<< HEAD
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn()
  unobserve: jest.fn()
  disconnect: jest.fn()
=======
global && global.IntersectionObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}));
<<<<<<< HEAD
// Mock console methods to reduce noise in tests
<<<<<<< HEAD
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
=======
const originalConsoleError = console && console.error;
const originalConsoleWarn = console && console.warn;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
beforeAll(() => {
  console && console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
<<<<<<< HEAD
    originalConsoleError.call(console, ...args);
  }
  console.warn = (...args: any[]) => {
=======
    originalConsoleError && originalConsoleError.call(console, ...args);
  };
  
  console && console.warn = (...args: any[]) => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
<<<<<<< HEAD
    originalConsoleWarn.call(console, ...args);
  }
=======
    originalConsoleWarn && originalConsoleWarn.call(console, ...args);
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
afterAll(() => {
  console && console.error = originalConsoleError;
  console && console.warn = originalConsoleWarn;
});
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
