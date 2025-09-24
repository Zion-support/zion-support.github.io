// Ensure jest-dom matchers are available when tests run
try {
  require('@testing-library/jest-dom');
} catch (error) {
  // Non-fatal if not installed for minimal runs
}

// Mock Next.js Image to a simple function component without JSX here
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage() {
    return null;
  },
}));

// matchMedia mock
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

// Observers
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
};
global.ResizeObserver = class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
};
