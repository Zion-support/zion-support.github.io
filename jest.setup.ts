// Jest-DOM matchers
import '@testing-library/jest-dom';

// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

// Reset fetch mocks before each test to ensure isolation
beforeEach(() => {
  fetchMock.resetMocks();
});

// Polyfill TextEncoder and TextDecoder for JSDOM environment
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
// @ts-expect-error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests
global.TextDecoder = TextDecoder;

// Set up a mock for Vite environment variables accessed via import.meta.env
process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup';
process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test_anon_key';

// Mock window.matchMedia for Jest
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
    dispatchEvent: jest.fn(),
  })),
});

// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Polyfill for URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  URL.revokeObjectURL = jest.fn();
}

// Polyfill for window.scrollTo
if (typeof window.scrollTo === 'undefined') {
  window.scrollTo = jest.fn();
}

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
if (typeof window.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-ignore
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-ignore
  global.IntersectionObserver = MockIntersectionObserver;
}

// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)
if (typeof performance.getEntriesByType !== 'function') {
  // @ts-ignore
  performance.getEntriesByType = () => [];
}

// Ensure all code paths use the mock implementation
// @ts-ignore
global.fetch = fetchMock;