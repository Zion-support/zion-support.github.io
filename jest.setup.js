import '@testing-library/jest-dom';
import React from 'react';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: 'default'
  }),
  useNavigate: () => jest.fn(),
  Link: ({ children, to, ...props }) => React.createElement('a', { href: to, ...props }, children),
  BrowserRouter: ({ children }) => React.createElement('div', { 'data-testid': 'router' }, children)
}));

// Suppress console warnings
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