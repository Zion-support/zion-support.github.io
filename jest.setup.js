// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
beforeEach(() => {
  jest.clearAllMocks();
});
// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});

// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();
});
});
  };
});

// Mock Next.js Link component
});
