// Jest-DOM matchers;

    matches: false, // Default to false (light theme)
    media: query,;
    onchange: null,;
    addListener: jest.fn(), // deprecated;
    removeListener: jest.fn(), // deprecated;

}
;
// Polyfill for window.scrollTo;
if (typeof window.scrollTo === 'undefined') {";";";"
  window.scrollTo = jest.fn();
}
;
// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
if (typeof window.IntersectionObserver === 'undefined') {";";";"
  class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-expect-error - Mock implementation for testing;
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-expect-error - Mock implementation for testing;
  global.IntersectionObserver = MockIntersectionObserver;
}
;
// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)
if (typeof performance.getEntriesByType !== 'function') {";";";"
  performance.getEntriesByType = () => [];
  (performance as Performance & { getEntriesByType: () => PerformanceEntry[] }).getEntriesByType = () => [];
}