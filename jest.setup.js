<<<<<<< HEAD


=======
<<<<<<< HEAD
// Jest setup file
import '@testing-library/jest-dom';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
import "@testing-library/jest-dom";
>>>>>>> origin/main



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

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
<<<<<<< HEAD
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
=======
>>>>>>> origin/main
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

});
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
