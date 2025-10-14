require("@testing-library/jest-dom");
// Polyfill for TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require("util");
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
// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
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
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
// Mock window.gtag
global.gtag = jest.fn();
// Mock window.dataLayer
global.dataLayer = [];
