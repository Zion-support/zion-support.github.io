import '@testing-library/jest-dom';
import React from 'react';

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),
<<<<<<< HEAD

    useNavigate: () => jest.fn(),
=======
useNavigate: () => jest.fn(),
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    NavLink: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    BrowserRouter: ({ children }) => React.createElement('div', { 'data-testid': 'browser-router' }, children),
    MemoryRouter: ({ children }) => React.createElement('div', { 'data-testid': 'memory-router' }, children)
  };
});

// Suppress console warnings
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
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