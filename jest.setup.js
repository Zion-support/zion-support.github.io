/* eslint-disable @typescript-eslint/no-require-imports */
require('@testing-library/jest-dom');
const React = require('react');

// Polyfill TextEncoder for Node.js environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock react-router-dom
global.jest = {
  mock: jest.mock,
  requireActual: jest.requireActual,
  fn: jest.fn
};

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null
    }),
    useParams: () => ({}),
    Link: ({ children, to, ...props }) => {
      return React.createElement('a', { href: to, ...props }, children);
    },
    NavLink: ({ children, to, ...props }) => {
      return React.createElement('a', { href: to, ...props }, children);
    },
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => {
      const { createMemoryRouter, RouterProvider } = actual;
      const router = createMemoryRouter([
        {
          path: '/',
          element: children
        }
      ], {
        initialEntries: ['/'],
        initialIndex: 0
      });
      return React.createElement(RouterProvider, { router });
    },
    RouterProvider: () => null
  };
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Suppress console errors in tests
const originalError = console.error;
global.beforeAll = (fn) => {
  fn();
};
global.afterAll = (fn) => {
  fn();
};

beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});