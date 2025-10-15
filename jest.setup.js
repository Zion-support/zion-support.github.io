<<<<<<< HEAD
=======
require('@testing-library/jest-dom')"";

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {)}";

  writable: true,
  value: jest.fn().mockImplementation(query => ({)}
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated;
    removeListener: jest.fn(), // deprecated;
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()}))});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

<<<<<<< HEAD
=======
// Mock performance
Object.defineProperty(window, 'performance', {)}";

  writable: true,
  value: {}
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => [])}});

// Mock localStorage
const localStorageMock  = {}
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),;
  clear: jest.fn()};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock  = {}
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),;
  clear: jest.fn()};
global.sessionStorage = sessionStorageMock;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
