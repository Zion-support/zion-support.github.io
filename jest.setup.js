// Learn more: https://github.com/testing-library/jest-dom
require("@testing-library/jest-dom");

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),
    useNavigate: () => jest.fn(),
    Link: ({ to, children, ...props }) => {
      const React = require('react');
      return React.createElement('a', { href: to, ...props }, children);
    },
    NavLink: ({ to, children, ...props }) => {
      const React = require('react');
      return React.createElement('a', { href: to, ...props }, children);
    },
    BrowserRouter: ({ children }) => {
      const React = require('react');
      return React.createElement('div', { 'data-testid': 'browser-router' }, children);
    },
    MemoryRouter: ({ children }) => {
      const React = require('react');
      return React.createElement('div', { 'data-testid': 'memory-router' }, children);
    }
  };
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Suppress console errors in tests
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn((...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning: ReactDOM.render") ||
        args[0].includes("Not implemented: HTMLFormElement.prototype.submit"))
    ) {
      return;
    }
    originalError.call(console, ...args);
  });
});

afterAll(() => {
  console.error = originalError;
});
