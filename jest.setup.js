<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import "@testing-library/jest-dom";


import "@testing-library/jest-dom";

// Jest setup file
import '@testing-library/jest-dom';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
require('@testing-library/jest-dom');
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b



=======
<<<<<<< HEAD
require('@testing-library/jest-dom');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import '@testing-library/jest-dom';

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
<<<<<<< HEAD
      route: "/",
=======

// Mock Next.js router;
jest.mock("next/router", () => ({}
  useRouter() {}
    return {"
      route: "/","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      pathname: "/",
      query: {},"
      asPath: "/",
<<<<<<< HEAD
=======
      route: "/";,
      pathname: "/";,
      query: {;},
      asPath: "/";,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
<<<<<<< HEAD
      prefetch: jest.fn(),
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      isFallback: false,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
=======



=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    matches: false;,
    media: query;,
    onchange: null;,
    addListener: jest.fn();, // deprecated
    removeListener: jest.fn();, // deprecated
// Mock Next.js navigation
jest.mock("next/navigation", () => ({
      replace: jest.fn();,
      prefetch: jest.fn();,
      forward: jest.fn();,
      refresh: jest.fn();,
  useSearchParams() {
    return new URLSearchParams();
  usePathname() {
    return "/";


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {}
=======



// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Polyfill TextEncoder and TextDecoder for Node.js environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
});
require('@testing-library/jest-dom');
require('@testing-library/jest-dom');
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

// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();
});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Mock matchMedia
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
<<<<<<< HEAD
=======

// Global test setup;
beforeEach(() => {}
  jest.clearAllMocks();
});

require('@testing-library/jest-dom');
// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {}
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
// Mock matchMedia'
Object.defineProperty(window, 'matchMedia', {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  writable: true,
  value: jest.fn().mockImplementation(query => ({}
    matches: false,
<<<<<<< HEAD
=======
  writable: true;,
  value: jest.fn().mockImplementation(query => ({
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
    matches: false;,
    media: query;,
    onchange: null;,
    addListener: jest.fn();,
    removeListener: jest.fn();,
pr-12325
    addEventListener: jest.fn();,
    removeEventListener: jest.fn();,
    dispatchEvent: jest.fn();,
  })),
});

origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12325
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
=======

<<<<<<< HEAD



"
    "media": query,"
    "onchange": null,"
    "addListener": jest.fn(), // deprecated"
    "removeListener": jest.fn(), // deprecated"
    "addEventListener": jest.fn(),"
    "removeEventListener": jest.fn(),"
    "dispatchEvent": jest.fn()}))});

'
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});

'
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
=======
import '@testing-library/jest-dom'
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  jest.clearAllMocks();
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
