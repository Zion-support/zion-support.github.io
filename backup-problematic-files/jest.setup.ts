<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
global && global.ResizeObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),}));}));
// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
global.ResizeObserver = (global as any).ResizeObserver || (() => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
}));
=======
<<<<<<< HEAD:jest.setup.ts
// Jest setup file for testing environment
import '@testing-library/jest-dom';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
:jest.setup.ts
// Jest setup file for testing environment
import '@testing-library/jest-dom';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Jest.setup utility
export const Jest.setup = () => {
  // Implementation here
  return null;
};
<<<<<<< HEAD



// Mock global objects that might not be available in test environment


=======

:backup-problematic-files/jest.setup.ts
// Mock global objects that might not be available in test environment
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn()
  unobserve: jest.fn()
  disconnect: jest.fn(),}));}));
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
global && global.IntersectionObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),
<<<<<<< HEAD

}));

const originalConsoleError = console && console.error;
const originalConsoleWarn = console && console.warn;


=======
}));
const originalConsoleError = console && console.error;
const originalConsoleWarn = console && console.warn;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
beforeAll(() => {
  console && console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    originalConsoleError && originalConsoleError.call(console, ...args);
  };
  console && console.warn = (...args: any[]) => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    originalConsoleWarn && originalConsoleWarn.call(console, ...args);
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
});
afterAll(() => {
  console && console.error = originalConsoleError;
  console && console.warn = originalConsoleWarn;

});
<<<<<<< HEAD
=======

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
