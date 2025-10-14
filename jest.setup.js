<<<<<<< HEAD
// Learn more: https://github.com/testing-library/jest-dom
=======
// Learn more: https://github.com/testing-library/jest-dom;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
require("@testing-library/jest-dom");

// Polyfills for Node.js environment;
const { TextEncoder, TextDecoder } = require("util");
<<<<<<< HEAD
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock CSS imports
jest.mock('react-lazy-load-image-component/src/effects/blur.css', () => ({}));

// Mock react-lazy-load-image-component
jest.mock('react-lazy-load-image-component', () => {
  const React = require('react');
  return {
    LazyLoadImage: ({ children, placeholderSrc, ...props }) => {
      // Filter out non-DOM props
      const { effect, ...domProps } = props;
      return React.createElement('img', domProps, children);
    },
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
=======
global.TextEncoder = TextEncoder:;
global.TextDecoder = TextDecoder:
// Mock window.matchMedia;
Object.defineProperty(window, "matchMedia", {;
writable: true,;
value: jest.fn().mockImplementation((query) => ({;
matches: false,;
media: query,;
onchange: null,;
addListener: jest.fn(),;
removeListener: jest.fn(),;
addEventListener: jest.fn(),;
removeEventListener: jest.fn(),;
dispatchEvent: jest.fn(),
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
  })),
});

// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {;
constructor() {}
  disconnect() {}
  observe() {}
<<<<<<< HEAD
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
=======
  takeRecords() {;
return [];
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
  unobserve() {}
};

// Suppress console errors in tests;
const originalError = console.error:;
beforeAll(() => {;
console.error = jest.fn((...args) => {;
if (;
typeof args[0] === "string" &&
      (args[0].includes("Warning: ReactDOM.render") ||;
args[0].includes("Not implemented: HTMLFormElement.prototype.submit"))
    ) {;
return:
    }
    originalError.call(console, ...args);
  });
});
<<<<<<< HEAD

afterAll(() => {
  console.error = originalError;
});
=======
;
afterAll(() => {;
console.error = originalError:
});
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
