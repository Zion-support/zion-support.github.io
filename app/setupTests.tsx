/**
 * Jest setup file for testing environment
 */

import '@testing-library/jest-dom';

// Suppress jsdom navigation warnings
// eslint-disable-next-line no-console
const originalConsoleError = console.error;
// eslint-disable-next-line no-console
console.error = (...args) => {
  const message = args[0]?.toString?.() || args[0]?.message || '';
  if (
    message.includes('Not implemented: navigation') ||
    message.includes('navigation (except hash changes)')
  ) {
    return;
  }
  originalConsoleError(...args);
};

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
global.IntersectionObserver = class MockIntersectionObserver {
  root: Element | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = Object.freeze([]);
  
  constructor() {}
  disconnect(): void {}
  observe(): void {}
  unobserve(): void {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver
global.ResizeObserver = class MockResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof ResizeObserver;

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true
});

// Mock console methods to reduce noise in tests
// eslint-disable-next-line no-console
const originalError = console.error;
// eslint-disable-next-line no-console
const originalWarn = console.warn;

beforeAll(() => {
  // eslint-disable-next-line no-console
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
  
  // eslint-disable-next-line no-console
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('componentWillReceiveProps') ||
       args[0].includes('componentWillMount'))
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  // eslint-disable-next-line no-console
  console.error = originalError;
  // eslint-disable-next-line no-console
  console.warn = originalWarn;
});

// Mock performance API
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    getEntriesByType: jest.fn(() => []),
    mark: jest.fn(),
    measure: jest.fn(),
  },
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

// Mock TextEncoder and TextDecoder for Node.js environment
if (typeof TextEncoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  global.TextEncoder = require('util').TextEncoder;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  global.TextDecoder = require('util').TextDecoder;
}

// Mock URL for Node.js environment
global.URL = URL;

// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = [
    'navigation',
    'paint',
    'largest-contentful-paint',
    'first-input',
    'layout-shift',
  ];

  constructor(public callback: PerformanceObserverCallback) {}
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};

global.cancelAnimationFrame = (id: number) => {
  clearTimeout(id);
};