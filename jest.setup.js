import "@testing-library/jest-dom";




// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
// Mock Next && Next.js router
jest && jest.mock("next/router", () => ({
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
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
jest.mock('next/link', () => ({
  _esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>;  },
}));

// Mock window.matchMedia,Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated,
removeListener: jest.fn(), // deprecated,
addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
}),
// Mock IntersectionObserver,
global.IntersectionObserver = class IntersectionObserver {constructor() {}});
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

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Global test setup,
beforeEach(() => {
  // Reset all mocks before each test,
jest.clearAllMocks()
}),
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();

});

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
});
