require('@testing-library/jest-dom');

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({,
  matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {
  return;
}
  // TODO: Implement
}
  disconnect() {
  return;
}
  // TODO: Implement
}
  observe() {
  return;
}
  // TODO: Implement
}
  unobserve() {
  return;
}
  // TODO: Implement
}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {
  return;
}
  // TODO: Implement
}
  disconnect() {
  return;
}
  // TODO: Implement
}
  observe() {
  return;
}
  // TODO: Implement
}
  unobserve() {
  return;
}
  // TODO: Implement
}
};

// Mock performance
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {,
  now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
  },
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;