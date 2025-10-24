require("@testing-library/jest-dom");

// Polyfill for TextEncoder/TextDecoder
const {TextEncoder, TextDecoder} = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

<<<<<<< HEAD
<<<<<<< HEAD
=======
// Mock files that use import.meta.env
jest.mock('./app/utils/logger.ts', () => ({
  logger: {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    log: jest.fn(),
  },
}));

jest.mock('./app/utils/analytics.ts', () => ({
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
  initAnalytics: jest.fn(),
}));

jest.mock('./app/utils/errorTracking.ts', () => ({
  reportError: jest.fn(),
  initErrorReporting: jest.fn(),
}));

// Performance hooks mocks removed - files don't exist

// Mock React Router (this is a Vite project, not Next.js)
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
      state: null,
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
          element: children,
        },
      ], {
        initialEntries: ['/'],
        initialIndex: 0,
      });
      return React.createElement(RouterProvider, { router });
    },
    RouterProvider: ({ router }) => null,
  };
});

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-063c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),})),
});

// Mock IntersectionObserver
<<<<<<< HEAD
global.IntersectionObserver = class IntersectionObserver {constructor() {}
=======
global.IntersectionObserver = class IntersectionObserver {
// Mock window.matchMedia;
});

// Mock IntersectionObserver;
  constructor() {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
<<<<<<< HEAD
global.ResizeObserver = class ResizeObserver {constructor() {}
=======
global.ResizeObserver = class ResizeObserver {
// Mock ResizeObserver;
  constructor() {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock window.gtag
global.gtag = jest.fn();

// Mock window.dataLayer
<<<<<<< HEAD
global.dataLayer = [];
=======
global.dataLayer = [];
// Mock window.gtag;
});

// Mock window.dataLayer;
});
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
