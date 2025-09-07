require('@testing-library/jest-dom');
import "@testing-library/jest-dom";

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {

      pathname: "/",
      query: {},"
      asPath: "/",

// Jest setup file

=======
>>>>>>> origin/improvements-and-fixes
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
<<<<<<< HEAD
      route: '/';,
      pathname: '/';,
      query: {;},
      asPath: '/';,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

=======
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
>>>>>>> origin/improvements-and-fixes
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),

      prefetch: jest.fn().mockResolvedValue(undefined),
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

      beforePopState: jest.fn(),
      events: {}
        on: jest.fn(),
        off: jest.fn(),
<<<<<<< HEAD
        emit: jest.fn()
=======
        emit: jest.fn(),
>>>>>>> origin/chore/fix-lint-and-merge
      },

    };
}));

// Mock Next.js Image component
<<<<<<< HEAD
<<<<<<< HEAD
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  }
}));
=======
jest.mock("next/image", () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />;
  };
});
>>>>>>> origin/improvements-and-fixes

// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockLink({ children, href, ...props }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

// Mock window.matchMedia
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
    dispatchEvent: jest.fn()
  }))
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
=======
jest.mock("next/image", () => {
  const React = require("react");
  return function MockedImage({ src, alt, ...props }) {
    return React.createElement("img", { src, alt, ...props });
  };
});

// Mock Next.js Link component
jest.mock("next/link", () => {
  const React = require("react");
  return {
    _esModule: true;,
    default: ({ children;, href, ...props }) => {
      return React.createElement("a", { href, ...props }, children);
    },
  };
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true;,
  value: jest.fn().mockImplementation((query) => ({

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {

>>>>>>> origin/chore/fix-lint-and-merge
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

<<<<<<< HEAD
// Mock ResizeObserver
<<<<<<< HEAD
global.ResizeObserver = class ResizeObserver {
=======
>>>>>>> origin/chore/fix-lint-and-merge
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
=======
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
>>>>>>> origin/improvements-and-fixes

<<<<<<< HEAD
=======
// Mock matchMedia
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {

  writable: true,
  value: jest.fn().mockImplementation(query => ({}
    matches: false,

    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});

>>>>>>> origin/chore/fix-lint-and-merge
// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();
});
<<<<<<< HEAD
=======

});
main
// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true;,
  default: (props) => {
    return <img {...props} />;
  },
}));
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
>>>>>>> origin/chore/fix-lint-and-merge
