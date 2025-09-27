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
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn().mockReturnValue([
      {
        type: 'navigate',
        loadEventEnd: 1000,
        domContentLoadedEventEnd: 800,
        firstPaint: 500,
        firstContentfulPaint: 600,
      }
    ]),
    getEntriesByName: jest.fn(() => []),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
    memory: {
      usedJSHeapSize: 1000000,
      totalJSHeapSize: 2000000,
      jsHeapSizeLimit: 4000000
    }
  }
});

// Mock window.performance
Object.defineProperty(window, 'performance', {
  value: global.performance,
  writable: true,
});

// Mock PerformanceObserver
global.PerformanceObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn(() => [])
}));

// Mock performance API
Object.defineProperty(global, 'performance', {
  value: {
    ...global.performance,
    getEntriesByType: jest.fn().mockReturnValue([]),
    mark: jest.fn(),
    measure: jest.fn(),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
    now: jest.fn().mockReturnValue(Date.now()),
    navigation: {
      loadEventEnd: 1000,
      loadEventStart: 500,
      domContentLoadedEventEnd: 800,
      domContentLoadedEventStart: 600,
      responseEnd: 400,
      responseStart: 200,
      requestStart: 100,
      fetchStart: 0
    }
  },
  writable: true
});

// Mock PerformanceObserver
global.PerformanceObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn().mockReturnValue([])
}));

// Mock window.scrollTo to prevent test warnings
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn()
});

// Setup testing library matchers
import '@testing-library/jest-dom';