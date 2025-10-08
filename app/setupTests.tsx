/**
 * Jest setup file for testing environment
 */

import '@testing-library/_jest-dom';

// Suppress jsdom navigation warnings
// eslint-disable-next-line no-console
const originalConsoleError = console.error;
// eslint-disable-next-line no-console
console.error = (...args) => {
  const message = args[0]?.toString?.() || args[0]?.message || '';
  if (message.includes('Not implemented: navigation') || 
      message.includes('navigation (except hash changes)')) {
    return;
  }
  originalConsoleError(...args);
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: _jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: _jest.fn(), // deprecated
    removeListener: _jest.fn(), // deprecated
    addEventListener: _jest.fn(),
    removeEventListener: _jest.fn(),
    dispatchEvent: _jest.fn(),
  })),
});

// Mock requestAnimationFrame
global.requestAnimationFrame = _jest.fn(cb => setTimeout(cb, 0));
global.cancelAnimationFrame = _jest.fn(id => clearTimeout(id));

// Mock localStorage
const localStorageMock = {
  getItem: _jest.fn(),
  setItem: _jest.fn(),
  removeItem: _jest.fn(),
  clear: _jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock sessionStorage
const sessionStorageMock = {
  getItem: _jest.fn(),
  setItem: _jest.fn(),
  removeItem: _jest.fn(),
  clear: _jest.fn(),
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

// Mock fetch
global.fetch = _jest.fn();

// Mock console methods for cleaner test output
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;

console.warn = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleWarn(...args);
};

console.info = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleInfo(...args);
};

// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
  
  constructor(public callback: PerformanceObserverCallback) {}
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};

// Suppress JSDOM navigation warnings

console.error = (...args) => {
  if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {
    return; // Suppress JSDOM navigation warnings
  }
  originalConsoleError.apply(console, args);
};

// Mock window.location
delete (window as unknown as Record<string, unknown>).location;
(window as unknown as Record<string, unknown>).location = {
  href: 'http://localhost:3000',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/',
  search: '',
  hash: '',
  reload: _jest.fn(),
  assign: _jest.fn(),
  replace: _jest.fn(),
};