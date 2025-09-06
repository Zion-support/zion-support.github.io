// Jest setup file for testing environment
import '@testing-library/jest-dom';

// Mock global objects that might not be available in test environment
global && global.ResizeObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),}));}));

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated
    removeListener: jest && jest.fn(), // deprecated
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
  })),
});

// Mock IntersectionObserver
global && global.IntersectionObserver = jest && jest.fn().mockImplementation(() => ({
  observe: jest && jest.fn(),
  unobserve: jest && jest.fn(),
  disconnect: jest && jest.fn(),
}));

// Mock console methods to reduce noise in tests
const originalConsoleError = console && console.error;
const originalConsoleWarn = console && console.warn;

beforeAll(() => {
  console && console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalConsoleError && originalConsoleError.call(console, ...args);
  };
  
  console && console.warn = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalConsoleWarn && originalConsoleWarn.call(console, ...args);
  };
});

afterAll(() => {
  console && console.error = originalConsoleError;
  console && console.warn = originalConsoleWarn;
});