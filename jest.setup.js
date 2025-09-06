<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import "@testing-library/jest-dom";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
        emit: jest.fn(),
      },
<<<<<<< HEAD
      isFallback: false
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    };
  }
}));

<<<<<<< HEAD
=======
// Mock Next.js Image component
<<<<<<< HEAD
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  }
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>;
  }
}));
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
    _esModule: true,
    default: ({ children, href, ...props }) => {
      return React.createElement("a", { href, ...props }, children);
    },
  };
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
=======
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
>>>>>>> main
=======
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
