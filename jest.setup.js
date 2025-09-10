require('@testing-library/jest-dom');

// Mock Next.js Image to plain img
jest.mock('next/image', () => {
  const React = require('react');
  return function MockedImage(props) {
    const { src, alt, ...rest } = props || {};
    return React.createElement('img', { src, alt, ...rest });
  };
});

// Mock Next.js Link to anchor
jest.mock('next/link', () => {
  const React = require('react');
  return ({ children, href, ...rest }) => React.createElement('a', { href, ...rest }, children);
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

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
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
