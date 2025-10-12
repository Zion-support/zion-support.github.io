require("@testing-library/jest-dom");

// Polyfill for TextEncoder/TextDecoder;
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

<<<<<<< HEAD
// Mock window.matchMedia
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
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
=======
// Mock window.matchMedia;
});

// Mock IntersectionObserver;
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

<<<<<<< HEAD
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
=======
// Mock ResizeObserver;
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

<<<<<<< HEAD
// Mock window.gtag
global.gtag = jest.fn();

// Mock window.dataLayer
global.dataLayer = [];
=======
// Mock window.gtag;
});

// Mock window.dataLayer;
});
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
