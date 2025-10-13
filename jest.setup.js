import '@testing-library/jest-dom';
import React from 'react';

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
<<<<<<< HEAD
    useNavigate: () => jest.fn(),
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5fc3
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),
<<<<<<< HEAD
    Link: ({ to, children, ...props }) => {
      return React.createElement('a', { href: to, ...props }, children);
    },
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => children,
    Routes: ({ children }) => children,
    Route: ({ element }) => element,
    useParams: () => ({}),
    useSearchParams: () => [new URLSearchParams(), jest.fn()],
    createBrowserRouter: () => ({
      path: '/',
      element: React.createElement('div')
    })
  };
});

// Suppress console warnings for tests
=======
    useNavigate: () => jest.fn(),
    Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    NavLink: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    BrowserRouter: ({ children }) => React.createElement('div', { 'data-testid': 'browser-router' }, children),
    MemoryRouter: ({ children }) => React.createElement('div', { 'data-testid': 'memory-router' }, children)
  };
});

// Suppress console warnings
>>>>>>> cursor/fix-errors-and-merge-to-main-5fc3
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('Warning: ReactDOM.render is no longer supported')) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});