// Jest-DOM matchers
import '@testing-library/jest-dom';

// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
// import fetchMock from 'jest-fetch-mock';
// fetchMock.enableMocks();

// Reset fetch mocks before each test to ensure isolation
// beforeEach(() => {
//   fetchMock.resetMocks();
// });

// Polyfill TextEncoder and TextDecoder for JSDOM environment
import { TextEncoder, TextDecoder } from 'util';
<<<<<<< HEAD
global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
=======
global.TextEncoder = TextEncoder as typeof globalThis.TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
>>>>>>> cursor/comprehensive-app-audit-and-update-f3ea

// Set up a mock for Vite environment variables accessed via import.meta.env
process.env['VITE_REOWN_PROJECT_ID'] = 'test_project_id_from_jest_setup';
process.env['NEXT_PUBLIC_SUPABASE_URL'] = 'http://localhost:54321';
process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] = 'test_anon_key';

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
  // @ts-expect-error - Mock implementation for testing
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-expect-error - Mock implementation for testing
  global.IntersectionObserver = MockIntersectionObserver;
}

// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)
if (typeof performance.getEntriesByType !== 'function') {
<<<<<<< HEAD
<<<<<<< HEAD
  performance.getEntriesByType = () => [];
=======
  (performance as Performance & { getEntriesByType: (type: string) => PerformanceEntry[] }).getEntriesByType = () => [];
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-145c
=======
  (performance as Performance & { getEntriesByType: () => PerformanceEntry[] }).getEntriesByType = () => [];
>>>>>>> cursor/comprehensive-app-audit-and-update-f3ea
}

// Ensure all code paths use the mock implementation
// global.fetch = fetchMock;
