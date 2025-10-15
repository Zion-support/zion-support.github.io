require("@testing-library/jest-dom");
// Polyfill for TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {

// Mock TextEncoder and TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  const mockReact = jest.requireActual('react');
  return {
    ...actual,
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),
    useNavigate: () => jest.fn(),
    Link: ({ to, children, ...props }) => mockReact.createElement('a', { href: to, ...props }, children),
    NavLink: ({ to, children, ...props }) => mockReact.createElement('a', { href: to, ...props }, children),
    BrowserRouter: ({ children }) => mockReact.createElement('div', { 'data-testid': 'browser-router' }, children),
    MemoryRouter: ({ children }) => mockReact.createElement('div', { 'data-testid': 'memory-router' }, children)
  };
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
});

// Suppress console warnings
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('Warning: ReactDOM.render is no longer supported')) {
      return;
    }
    originalError.call(console, ...args);
  };cursor/fix-errors-and-merge-to-main-ec45
});
// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
=======
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
};
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
// Mock window.gtag
global.gtag = jest.fn();
// Mock window.dataLayer
global.dataLayer = [];
