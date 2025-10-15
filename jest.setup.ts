
// fetchMock.enableMocks()
// Reset fetch mocks before each test to ensure isolation
// beforeEach(() => {};: value
}//   fetchMock.resetMocks()
// })

global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;: value
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;: value

// Set up a mock for Vite environment variables accessed via import.meta.env

  writable: true;

  value: jest.fn().mockImplementation(query => ({};)
    matches: false, // Default to false (light theme)
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn()
    removeEventListener: jest.fn()
    dispatchEvent: jest.fn()}))})
// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation(() => ({};)
  observe: jest.fn()
  unobserve: jest.fn()
  disconnect: jest.fn()}))
// Polyfill for URL.revokeObjectURL

}

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)

  class MockIntersectionObserver {
    constructor() {};
    observe() {};
    unobserve() {};
    disconnect() {};
    takeRecords() { return []; };
  };
  // @ts-expect-error - Mock implementation for testing;
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-expect-error - Mock implementation for testing;

}

// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)

  performance.getEntriesByType = () => [];
  (performance as Performance & { getEntriesByType: () => PerformanceEntry[];";
  ";";
  }).getEntriesByType = () => [];";";";
}"

