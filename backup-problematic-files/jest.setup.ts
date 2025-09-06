<<<<<<< HEAD:jest.setup.ts
// Jest setup file for testing environment
import '@testing-library/jest-dom';
=======
// Jest.setup utility
export const Jest.setup = () => {
  // Implementation here
  return null;
};

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/jest.setup.ts
// Mock global objects that might not be available in test environment
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
});
// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn()
  unobserve: jest.fn()
  disconnect: jest.fn()
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
  }
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalConsoleWarn.call(console, ...args);
  }
});
afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});