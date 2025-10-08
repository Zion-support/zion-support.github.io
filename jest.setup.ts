import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

// Extend Jest matchers for testing-library
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toHaveTextContent(text: string | RegExp): R;
    }
  }
}

//Polyfill for react-router-dom in Jest environment
if (typeof (global as Record<string, unknown>).TextEncoder === 'undefined') {
  (global as Record<string, unknown>).TextEncoder = TextEncoder;
}

if (typeof (global as Record<string, unknown>).TextDecoder === 'undefined') {
  (global as Record<string, unknown>).TextDecoder =
    TextDecoder as unknown as typeof globalThis.TextDecoder;
}

// Mock PerformanceObserver for tests
global.PerformanceObserver = class PerformanceObserver {
  constructor(callback: PerformanceObserverCallback) {
    this.callback = callback;
  }
  callback: PerformanceObserverCallback;
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
} as unknown as typeof PerformanceObserver;

// Mock performance API methods if not available
if (typeof performance !== 'undefined') {
  if (!performance.getEntriesByName) {
    performance.getEntriesByName = () => [];
  }
  if (!performance.getEntriesByType) {
    performance.getEntriesByType = () => [];
  }
}
