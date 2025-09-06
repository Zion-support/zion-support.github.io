import "@testing-library/jest-dom";

require('@testing-library/jest-dom');

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
ursor/automate-test-improve-and-merge-code-646c
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn()
      }
    };
  }
}));

ursor/automate-test-improve-and-merge-code-646c
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
    }
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
    dispatchEvent: jest.fn()
  }))
});

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
ursor/automate-test-improve-and-merge-code-646c
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
  jest.clearAllMocks();
});
});
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
// Mock matchMedia
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
>>>>>>> main
    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn()}))});
>>>>>>> main
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn()}))});

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
});
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
