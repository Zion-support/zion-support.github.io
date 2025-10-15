<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function jest.setup.tsPage() {
  return (
    <>
      <Helmet>
        <title>Jest.Setup.Ts - Zion Tech Group</title>
        <meta name="description" content="Jest.Setup.Ts services and solutions from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Jest.Setup.Ts
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Jest.Setup.Ts services and solutions for your business needs.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
=======
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
>>>>>>> 82730201b6fc9753a1b36a2b09669d51935f2624
