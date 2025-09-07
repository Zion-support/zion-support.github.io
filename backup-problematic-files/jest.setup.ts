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
    addListener: jest && jest.fn(), // deprecated;
    removeListener: jest && jest.fn(), // deprecated;
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
// Jest setup file for testing environment;
import '@testing - library / jest - dom';
;
// Mock global objects that might not be available in test environment;
global.ResizeObserver = jest.fn ().mock_implementation (() => ({)
  observe: jest.fn (),
  unobserve: jest.fn (),
  disconnect: jest.fn (), }));}));
// Mock window.match_media;
Object.define_property (window, 'match_media', {
  writable: true,)
  value: jest.fn ().mock_implementation (query => ({,
    onchange: null,)
    add_listener: jest.fn (), // deprecated;
    remove_listener: jest.fn (), // deprecated;
    addEventListener: jest.fn (),
    removeEventListener: jest.fn (),
    dispatch_event: jest.fn (),
  })),
});
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
global && global.IntersectionObserver = jest && jest.fn().mockImplementation(() => ({
=======
global && global.IntersectionObserver = jest && jest.fn().mockImplementation(() => ({)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
      typeof args[0] === 'string' &&')
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
<<<<<<< HEAD
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
=======
afterAll(() => {
  console && console.error = originalConsoleError;
  console && console.warn = originalConsoleWarn;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Mock IntersectionObserver;
global.IntersectionObserver = jest.fn ().mock_implementation (() => ({)
  disconnect: jest.fn (),
}));
// Mock console methods to reduce noise in tests;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
before_all (() => {
  console.error = (...args: any[]) => {
    // Check condition;
if ()
    ) {) {
  $2;
    originalConsoleError.call (console, ...args);
  console.warn = (...args: any[]) => {
    // Check condition;
    originalConsoleWarn.call (console, ...args);
after_all (() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
<<<<<<< HEAD
});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
