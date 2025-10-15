import '@testing-library/jest-dom';

// Mock fetch globally
global.fetch = jest.fn();

// Reset fetch mocks before each test to ensure isolation
beforeEach(() => {
  (global.fetch as jest.Mock).mockClear();
});

// Polyfill TextEncoder and TextDecoder for JSDOM
global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;

// Set up a mock for Vite environment variables accessed via import.meta.env
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_APP_TITLE: 'Zion Tech Group',
        VITE_APP_DESCRIPTION: 'Advanced AI and IT Solutions',
        VITE_APP_URL: 'https://ziontechgroup.com',
        MODE: 'test',
        DEV: false,
        PROD: false
      }
    }
  },
  writable: true
});

// Mock matchMedia for responsive components
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false, // Default to false (light theme)
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

// Polyfill for URL.revokeObjectURL
if (!global.URL.revokeObjectURL) {
  global.URL.revokeObjectURL = jest.fn();
}

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
if (!window.IntersectionObserver) {
  class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-expect-error - Mock implementation for testing
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-expect-error - Mock implementation for testing
  global.IntersectionObserver = MockIntersectionObserver;
}

// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)
if (!performance.getEntriesByType) {
  performance.getEntriesByType = () => [];
  (performance as Performance & { getEntriesByType: () => PerformanceEntry[] })
    .getEntriesByType = () => [];
}
