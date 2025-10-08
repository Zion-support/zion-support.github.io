/**
 * Jest setup file for testing environment
 */

import React from 'react';
import '@testing-library/jest-dom';

// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;

// Suppress jsdom navigation warnings
 
const originalConsoleError = console.error;
 
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

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn(id => clearTimeout(id));

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

// Mock fetch
global.fetch = jest.fn();

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
  reload: jest.fn(),
  assign: jest.fn(),
  replace: jest.fn(),
};