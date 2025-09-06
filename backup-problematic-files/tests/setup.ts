
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {;
  observe() { /* do nothing */ }
  unobserve() { /* do nothing */ }
  disconnect() { /* do nothing */ }
};
;
// Mock window.scrollTo;
global.window.scrollTo = vi.fn(); // vi should be globally available;
;
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {;
  cleanup();
  vi.restoreAllMocks(); // Changed from jest to vi;
});

// -----------------------------------------------------------------------------;
// Jest - compatibility shim ------------------------------------------------------;
// -----------------------------------------------------------------------------;
// A lot of legacy test files still call `jest.fn ()`, `jest.mock ()` etc.  Rather;
// than refactor them all at once we map those calls to Vitest's equivalent;
// (`vi`).  The shim only runs in the test environment and has no effect on;
// production bundles.;
;
// deliberately attaching to global for test environment setup;

