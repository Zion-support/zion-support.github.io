<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
import '@testing-library/jest-dom';
import React from 'react';

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
      const mockReact = jest.requireActual('react');
      return mockReact.createElement('a', { href: to, ...props }, children);
    },
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => children,
    Routes: ({ children }) => children,
    Route: ({ element }) => element,
    useParams: () => ({}),
    useSearchParams: () => [new URLSearchParams(), jest.fn()],
    createBrowserRouter: () => {
      const mockReact = jest.requireActual('react');
      return {
        path: '/',
        element: mockReact.createElement('div')
      };
    }
  };
});

// Suppress console warnings for tests
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
<<<<<<< HEAD
=======
import '@testing-library/jest-dom'
>>>>>>> origin/main
=======
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
