require('@testing-library/jest-dom');

// Mock window.matchMedia;'
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated;
    removeListener: jest.fn(), // deprecated;
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {: value
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {: value
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock performance;'
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => [])
  }
});

// Mock localStorage;
const localStorageMock = {: value
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),;
  clear: jest.fn()
};
global.localStorage = localStorageMock;: value

// Mock sessionStorage;
const sessionStorageMock = {: value
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),;
  clear: jest.fn()
};
global.sessionStorage = sessionStorageMock;': value