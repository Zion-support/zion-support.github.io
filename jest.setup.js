<<<<<<< HEAD
require('@testing-library/jest-dom');
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
route: "/",
      pathname: "/",
      query: {},"
      asPath: "/",

// Jest setup file

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/';,
      pathname: '/';,
      query: {;},
      asPath: '/';,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd

      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
prefetch: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======
      prefetch: jest.fn(),
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      beforePopState: jest.fn(),
      events: {}
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
isFallback: false,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======
      push: jest.fn();,
      pop: jest.fn();,
      reload: jest.fn();,
      back: jest.fn();,
      prefetch: jest.fn();,
      prefetch: jest.fn().mockResolvedValue(undefined);,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
      prefetch: jest.fn().mockResolvedValue(undefined);,
pr-12325
      beforePopState: jest.fn();,
      events: {
        on: jest.fn();,
        off: jest.fn();,
        emit: jest.fn();,
      },
      isFallback: false;,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    };
}));

// Mock Next.js Image component
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

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
=======

// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {}
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
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
<<<<<<< HEAD

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
});

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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  jest.clearAllMocks();
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
