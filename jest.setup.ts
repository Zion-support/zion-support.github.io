// Jest setup file for testing environment
import '@testing-library/jest-dom';

// Mock global objects that might not be available in test environment
global.ResizeObserver = (global as any).ResizeObserver || (() => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
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