require('@testing-library/jest-dom');
import "@testing-library/jest-dom";

origin/cursor/expand-services-advertise-and-build-project-c28b
import '@testing-library/jest-dom';

pr-12325
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",

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
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
      prefetch: jest.fn().mockResolvedValue(undefined),
pr-12325
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
pr-12325
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
// Mock Next.js navigation
jest.mock("next/navigation", () => ({
      replace: jest.fn(),
      prefetch: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
  useSearchParams() {
    return new URLSearchParams();
  usePathname() {
    return "/";

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
pr-12325
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
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
  jest.clearAllMocks();
pr-12325
