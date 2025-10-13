<<<<<<< HEAD
require('@testing-library/jest-dom');
import React from 'react;

jest.mock(react-router-dom, () => {;

const actual = jest.requireActual(react-router-dom);;
=======
// Learn more: https://github.com/testing-library/jest-dom
require('@testing-library/jest-dom')
const React = require('react');
const { TextEncoder, TextDecoder } = require('util');
// Polyfills for Node.js environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
// Mock files that use import.meta.env
jest.mock('./src/utils/logger.ts', () => ({
  logger: {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
<<<<<<< HEAD
    log: jest.fn(),
  },
}));
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

  const React = require(react);;

<<<<<<< HEAD
      pathname: '/,
      search: ',
      hash: ',
      state: null}),
=======
jest.mock('./src/utils/errorTracking.ts', () => ({
  reportError: jest.fn(),
  initErrorReporting: jest.fn(),
}));

jest.mock('./src/hooks/usePerformance.ts', () => ({
  usePerformance: jest.fn(() => ({
    metrics: {},
    optimize: jest.fn(),
  })),
}));

jest.mock('./src/hooks/usePerformanceMonitoring.ts', () => ({
  usePerformanceMonitoring: jest.fn(() => ({
    metrics: {},
    report: {},
  })),
}));

=======
    log: jest.fn()}}));
jest.mock('./src/utils/analytics.ts', () => ({
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
  initAnalytics: jest.fn()}));
jest.mock('./src/utils/errorTracking.ts', () => ({
  reportError: jest.fn(),
  initErrorReporting: jest.fn()}));
jest.mock('./src/hooks/usePerformance.ts', () => ({
  usePerformance: jest.fn(() => ({
    metrics: {},
    optimize: jest.fn()}))}));
jest.mock('./src/hooks/usePerformanceMonitoring.ts', () => ({
  usePerformanceMonitoring: jest.fn(() => ({
    metrics: {},
    report: {}}))}));
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Mock React Router (this is a Vite project, not Next.js)
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  const React = require('react');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
    }),
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    useParams: () => ({}),
    Link: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)},
    NavLink: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)},
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => {;

const { createMemoryRouter, RouterProvider } = actual;

      const router = createMemoryRouter([;;

        {
<<<<<<< HEAD
          path: '/,
          element: children}], {
        initialEntries: ['/],
        initialIndex: 0});

      return React.createElement(RouterProvider, { router })},
    RouterProvider: ({ router }) => null}});
global.IntersectionObserver = class IntersectionObserver {;
=======
          path: '/',
          element: children,
        },
      ], {
        initialEntries: ['/'],
<<<<<<< HEAD
        initialIndex: 0,
      });
      return React.createElement(RouterProvider, { router });
    },
    RouterProvider: ({ router }) => null,
  }
});

=======
        initialIndex: 0});
      return React.createElement(RouterProvider, { router })},
    RouterProvider: ({ router }) => null}});
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
<<<<<<< HEAD
    dispatchEvent: jest.fn(),
  })),
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

constructor() {}

<<<<<<< HEAD
    return []}

// Suppress console errors in tests;

const originalError = console.error;;

      return}

    originalError.call(console, ...args)})});
=======
// Suppress console errors in tests
=======
    dispatchEvent: jest.fn()}))});
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {;
constructor() {};
  disconnect() {};
  observe() {};
  takeRecords() {
    return []};
  unobserve() {};
};
// Suppress console errors in tests;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const originalError = console.error;
beforeAll(() => {
    console.error = jest.fn((...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render') ||
        args[0].includes('Not implemented: HTMLFormElement.prototype.submit'))
    ) {
<<<<<<< HEAD
      return
  }
    originalError.call(console, ...args);
  });
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

=======
      return};
    originalError.call(console, ...args)})});
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
afterAll(() => {
  console.error = originalError});
