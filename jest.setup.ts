// Polyfill fetch and enable fetch mocks
<<<<<<< HEAD
// import 'whatwg-fetch';

// Mock matchMedia
=======
import 'whatwg-fetch'
// import fetchMock from 'jest-fetch-mock'
// fetchMock.enableMocks()
// Reset fetch mocks before each test to ensure isolation
// beforeEach(() => {
//   fetchMock.resetMocks()
// })
// Polyfill TextEncoder and TextDecoder for JSDOM environment
// Set up a mock for Vite environment variables accessed via import.meta.env
process.env['VITE_REOWN_PROJECT_ID'] = 'test_project_id_from_jest_setup'
process.env['NEXT_PUBLIC_SUPABASE_URL'] = 'http://localhost:54321'
process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] = 'test_anon_key'

// Mock window.matchMedia for Jest
>>>>>>> origin/main
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
<<<<<<< HEAD
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
if (typeof window.IntersectionObserver === 'undefined') {
  window.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
}

// Mock performance.getEntriesByType
=======
    dispatchEvent: jest.fn()
  }))
})

// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))
// Polyfill for URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  URL.revokeObjectURL = jest.fn()
}

// Polyfill for window.scrollTo
if (typeof window.scrollTo === 'undefined') {
  window.scrollTo = jest.fn()
}

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

// @ts-expect-error - Mock implementation for testing
window.IntersectionObserver = MockIntersectionObserver
// @ts-expect-error - Mock implementation for testing
global.IntersectionObserver = MockIntersectionObserver

// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)
>>>>>>> origin/main
if (typeof performance.getEntriesByType !== 'function') {
  performance.getEntriesByType = jest.fn().mockReturnValue([]);
}

<<<<<<< HEAD
// Mock ResizeObserver
if (typeof window.ResizeObserver === 'undefined') {
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
}

// Mock scrollTo
window.scrollTo = jest.fn();

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
=======
// Ensure all code paths use the mock implementation
// global.fetch = fetchMock
>>>>>>> origin/main
