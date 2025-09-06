

import "@testing-library/jest-dom";



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
=======

        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),

      },
      isFallback: false,
    };
  },
}));


=======


// Mock Next.js Image component
jest.mock("next/image", () => {
  const React = require("react");
  return function MockImage({ src, alt, ...props }) {


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

  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});



// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true
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

    return <img src={src} alt={alt} {...props} />;




// Global test setup,
=======
}
// Global test setup


=======

=======

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
beforeEach(() => {
  jest.clearAllMocks();


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();



});

=======

>>>>>>> origin/automation-improvements-final
=======
});
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
});


// Mock Next.js Link component

jest.mock('next/link', () => ({
  _esModule: true,
  default: ({ children, href, ...props }) => {
    return React.createElement("a", { href, ...props }, children);
  },
}));

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

// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();

});

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
