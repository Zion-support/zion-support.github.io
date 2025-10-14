// Learn more: https://github.com/testing-library/jest-dom
require('@testing-library/jest-dom');

// Polyfills for Node.js environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

<<<<<<< HEAD
// Mock CSS imports
jest.mock('react-lazy-load-image-component/src/effects/blur.css', () => ({}));

// Mock react-lazy-load-image-component
jest.mock('react-lazy-load-image-component', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require('react');
  return {
    LazyLoadImage: ({ children, ...props }) => {
      // Filter out non-DOM props
      const { ...domProps } = props;
      return React.createElement('img', domProps, children);
    },
  };
});

Object.defineProperty(window, "matchMedia", {
=======
// Mock window.matchMediaObject.defineProperty(window, "matchMedia", {
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
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
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Suppress console errors in tests
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn((...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning: ReactDOM.render") ||
        args[0].includes("Not implemented: HTMLFormElement.prototype.submit"))
    ) {
      return;
    }
    originalError.call(console, ...args);
  });
});

afterAll(() => {
  console.error = originalError;
});