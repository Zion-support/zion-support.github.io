require('@testing-library/jest-dom');
import React from 'react';

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
    RouterProvider: ({ router }) => null
  };
});

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Suppress console errors in tests
const originalError = console.error;
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
