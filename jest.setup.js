// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

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

jest.mock('./app/utils/errorReporter.ts', () => ({
  reportError: jest.fn(),
  initErrorReporting: jest.fn(),
}));

jest.mock('./app/hooks/usePerformanceOptimization.ts', () => ({
  usePerformanceOptimization: jest.fn(() => ({
    metrics: {},
    optimize: jest.fn(),
  })),
}));

jest.mock('./app/hooks/usePerformanceMonitoring.ts', () => ({
  usePerformanceMonitoring: jest.fn(() => ({
    metrics: {},
    report: {},
  })),
}));


// Mock React Router (this is a Vite project, not Next.js)
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),

  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
  }),
  useParams: () => ({}),
  BrowserRouter: ({ children }) => children,
  MemoryRouter: ({ children }) => children,
  Router: ({ children }) => children,
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
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

// Mock TextEncoder and TextDecoder
global.TextEncoder = class TextEncoder {
  encode(input) {
    return new Uint8Array(Buffer.from(input, 'utf8'));
  }
};

global.TextDecoder = class TextDecoder {
  decode(input) {
    return Buffer.from(input).toString('utf8');
  }
};

// Mock React Router context
const mockRouterContext = {
  basename: '',
  location: { pathname: '/', search: '', hash: '', state: null },
  navigationType: 'POP',
  navigator: {
    createHref: jest.fn(),
    go: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
  },
  static: false,
};

// Mock React Router context provider
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => mockRouterContext.location,
  useNavigate: () => mockRouterContext.navigator.push,
  useParams: () => ({}),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
  useRouterContext: () => mockRouterContext,
}));

// Suppress console errors in tests
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn((...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render') ||
        args[0].includes('Not implemented: HTMLFormElement.prototype.submit'))
    ) {
      return;
    }
    originalError.call(console, ...args);
  });
});

afterAll(() => {
  console.error = originalError;
});
