<<<<<<< HEAD
// Jest setup file for testing environment
import '@testing-library/jest-dom';
// Mock global objects that might not be available in test environment
<<<<<<< HEAD
=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
global && global.ResizeObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),}));}));
<<<<<<< HEAD
=======

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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
<<<<<<< HEAD
  value: jest && jest.fn().mockImplementation(query => ({
=======
  value: (query: string) => ({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated
    removeListener: jest && jest.fn(), // deprecated
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
=======
// Jest setup file for testing environment;
import '@testing - library / jest - dom';
;
// Mock global objects that might not be available in test environment;
global.ResizeObserver = jest.fn ().mock_implementation (() => ({
  observe: jest.fn (),
  unobserve: jest.fn (),
  disconnect: jest.fn (), }));}));
;
// Mock window.match_media;
Object.define_property (window, 'match_media', {
  writable: true,
  value: jest.fn ().mock_implementation (query => ({
    matches: false,
    media: query,
    onchange: null,
    add_listener: jest.fn (), // deprecated;
    remove_listener: jest.fn (), // deprecated;
    addEventListener: jest.fn (),
    removeEventListener: jest.fn (),
    dispatch_event: jest.fn (),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  })),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
<<<<<<< HEAD
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
<<<<<<< HEAD
});
=======
});
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;
// Mock IntersectionObserver;
global.IntersectionObserver = jest.fn ().mock_implementation (() => ({
  observe: jest.fn (),
  unobserve: jest.fn (),
  disconnect: jest.fn (),
}));
;
// Mock console methods to reduce noise in tests;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
;
before_all (() => {
  console.error = (...args: any[]) => {
    // Check condition
if (
    ) {) {
  $2
}
      return;
    }
    originalConsoleError.call (console, ...args);
  }
;
  console.warn = (...args: any[]) => {
    // Check condition
if (
    ) {) {
  $2
}
      return;
    }
    originalConsoleWarn.call (console, ...args);
  }
});
;
after_all (() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
