require(&apos;@testing-library/jest-dom&apos;);
const React = require(&apos;react&apos;);

// Polyfill for TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require(&apos;util&apos;);
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock react-router-dom
global.jest = {mock: jest.mock,
  requireActual: jest.requireActual,
  fn: jest.fn};

jest.mock(&apos;react-router-dom&apos;, () => {
  const actual = jest.requireActual(&apos;react-router-dom&apos;);

  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({
      pathname: &apos;/&apos;,
      search: '&apos;,
      hash: '&apos;,
      state: null
    }),
    useParams: () => ({}),
    Link: ({ children, to, ...props }) => {
      return React.createElement(&apos;a&apos;, { href: to, ...props }, children);
    },
    NavLink: ({ children, to, ...props }) => {
      return React.createElement(&apos;a&apos;, { href: to, ...props }, children);
    },
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => {
      const { createMemoryRouter, RouterProvider } = actual;
      const router = createMemoryRouter([
        {
          path: &apos;/&apos;,
          element: children
        }
      ], {initialEntries: [&apos;/&apos],
        initialIndex: 0});
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
global.beforeAll = (fn) => {;
  fn()};
global.afterAll = (fn) => {;
  fn()};

beforeAll(() => {console.error = (...args) => {
    if (
      typeof args[0] === &apos;string&apos; &&
      args[0].includes(&apos;Warning: ReactDOM.render is no longer supported&apos;)
    ) {;
      return}
    originalError.call(console, ...args);
  };
});

afterAll(() => {console.error = originalError});
