<<<<<<< HEAD
require("@testing-library/jest-dom");
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/"
      pathname: "/"
      query: {}
      asPath: "/"
      push: jest.fn()
      pop: jest.fn()
      reload: jest.fn()
      back: jest.fn()
      prefetch: jest.fn().mockResolvedValue(undefined)
      beforePopState: jest.fn()
      events: {
        on: jest.fn()
        off: jest.fn()
        emit: jest.fn()
      }
      isFallback: false
    }
  }
}));
// Mock Next.js Image component
jest.mock("next/image", () => {
  return function MockImage({ src, alt, ...props }) {
=======
import "@testing-library/jest-dom";

// Mock Next && Next.js router
jest && jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest && jest.fn(),
      pop: jest && jest.fn(),
      reload: jest && jest.fn(),
      back: jest && jest.fn(),
      prefetch: jest && jest.fn().mockResolvedValue(undefined),
      beforePopState: jest && jest.fn(),
      events: {
        on: jest && jest.fn(),
        off: jest && jest.fn(),
        emit: jest && jest.fn(),
      },
      isFallback: false,
    };
  },
}));

<<<<<<< HEAD
// Mock Next && Next.js Image component
jest && jest.mock("next/image", () => {
  return function MockedImage({ src, alt, ...props }) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return <img src={src} alt={alt} {...props} />;
  }
=======
// Mock Next.js Image component
jest.mock("next/image", () => {
  const React = require("react");
  return function MockImage({ src, alt, ...props }) {
    return React.createElement("img", { src, alt, ...props });
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
});
<<<<<<< HEAD
// Mock Next.js Link component
jest.mock("next/link", () => {
  const React = require("react");
  return function MockLink({ children, href, ...props }) {
<<<<<<< HEAD
    return <a href={href} {...props}>{children}</a>;
  }
=======

// Mock Next && Next.js Link component
jest && jest.mock("next/link", () => {
  return function MockedLink({ children, href, ...props }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
=======
    return React.createElement("a", { href, ...props }, children);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true
  value: jest.fn().mockImplementation(query => ({
<<<<<<< HEAD
    matches: false
    media: query
    onchange: null
    addListener: jest.fn()
    removeListener: jest.fn()
    addEventListener: jest.fn()
    removeEventListener: jest.fn()
=======
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    dispatchEvent: jest.fn()
  }))
});
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
<<<<<<< HEAD
};
<<<<<<< HEAD

// Global test setup,
=======
}
// Global test setup
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
beforeEach(() => {
  jest.clearAllMocks();
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
});
=======
<<<<<<< HEAD
// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});
<<<<<<< HEAD
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
=======
<<<<<<< HEAD
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
=======
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn(),})),});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();
<<<<<<< HEAD
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
});
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
