<<<<<<< HEAD
<<<<<<< HEAD
require('@testing-library/jest-dom');
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b



=======
<<<<<<< HEAD
require('@testing-library/jest-dom');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
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

// Jest setup file
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
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
    };
  },
}));

<<<<<<< HEAD
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
    _esModule: true,
    default: ({ children, href, ...props }) => {
      return React.createElement("a", { href, ...props }, children);
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

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======



=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
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
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
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
