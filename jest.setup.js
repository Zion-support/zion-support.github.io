require('@testing-library/jest-dom');

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null
  }),
  useParams: () => ({}),
  Link: ({ children, to, ...props }) => {
    const React = require('react');
    return React.createElement('a', { href: to, ...props }, children);
  },
  NavLink: ({ children, to, ...props }) => {
    const React = require('react');
    return React.createElement('a', { href: to, ...props }, children);
  },
  BrowserRouter: ({ children }) => children,
  MemoryRouter: ({ children }) => children
}));

// Mock IntersectionObserver
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
    ;
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});