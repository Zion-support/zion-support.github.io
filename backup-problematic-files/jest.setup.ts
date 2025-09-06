<<<<<<< HEAD

// Mock global objects that might not be available in test environment
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn()
  unobserve: jest.fn()
  disconnect: jest.fn(),}));}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated
    removeListener: jest && jest.fn(), // deprecated
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
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
  })),
});
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
global && global.IntersectionObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),
<<<<<<< HEAD

}));

const originalConsoleError = console && console.error;
const originalConsoleWarn = console && console.warn;


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
beforeAll(() => {
  console && console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
<<<<<<< HEAD

    originalConsoleError && originalConsoleError.call(console, ...args);
  };
  console && console.warn = (...args: any[]) => {

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
<<<<<<< HEAD

    originalConsoleWarn && originalConsoleWarn.call(console, ...args);
  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
});
afterAll(() => {
  console && console.error = originalConsoleError;
  console && console.warn = originalConsoleWarn;
<<<<<<< HEAD

});
=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
