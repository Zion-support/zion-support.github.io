// Jest setup file
// Add any global test setup here

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
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
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver for performance monitor tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}));

// Mock Performance API
Object.defineProperty(global, 'performance', {
  value: {
    getEntriesByType: jest.fn().mockReturnValue([
      {
        type: 'navigate',
        loadEventEnd: 1000,
        domContentLoadedEventEnd: 800,
        firstPaint: 500,
        firstContentfulPaint: 600,
      }
    ]),
    mark: jest.fn(),
    measure: jest.fn(),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
    now: jest.fn().mockReturnValue(1000),
  },
  writable: true,
});

// Mock window.performance
Object.defineProperty(window, 'performance', {
  value: global.performance,
  writable: true,
});

// Setup testing library matchers
import '@testing-library/jest-dom';