// Jest setup file
require('@testing-library/jest-dom');

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),
    Link: ({ to, children, ...props }) => {
      const React = require('react');
      return React.createElement('a', { href: to, ...props }, children);
    },
    NavLink: ({ to, children, ...props }) => {
      const React = require('react');
      return React.createElement('a', { href: to, ...props }, children);
    },
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => children,
    createMemoryRouter: (routes, opts) => ({
      routes,
      ...opts
    }),
    RouterProvider: ({ router }) => {
      const React = require('react');
      const initialEntries = router?.initialEntries || ['/'];
      return React.createElement('div', { 'data-testid': 'router-provider' });
    }
  };
});

// Suppress console warnings for tests
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