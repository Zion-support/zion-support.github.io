// Enhanced test setup to handle navigation and fetch issues
import '@testing-library/jest-dom';

// Mock fetch globally
global.fetch = jest.fn();

// Mock window.location to prevent navigation errors
// Create mock location object
// const mockLocation = {
//   pathname: '/',
//   href: 'http://localhost:3000/',
//   assign: jest.fn(),
//   replace: jest.fn(),
//   reload: jest.fn(),
//   search: '',
//   hash: '',
//   host: 'localhost:3000',
//   hostname: 'localhost',
//   port: '3000',
//   protocol: 'http:',
//   origin: 'http://localhost:3000',
//   ancestorOrigins: [] as string[],
// } as Location;

// Mock window.location using a simple assignment
const mockLocationInstance = {
  pathname: '/',
  href: 'http://localhost:3000/',
  assign: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  search: '',
  hash: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  protocol: 'http:',
  origin: 'http://localhost:3000',
  ancestorOrigins: [] as unknown as DOMStringList,
} as Location;
delete (window as unknown as { location?: Partial<Location> }).location;
(window as unknown as { location: Partial<Location> }).location = mockLocationInstance;
// Mock window.history
Object.defineProperty(window, 'history', {
  value: {
    pushState: jest.fn(),
    replaceState: jest.fn(),
    go: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  },
  writable: true,
});

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock Performance API
Object.defineProperty(window, 'performance', {
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
  },
  writable: true,
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock,
  writable: true,
});

// Mock console methods to reduce noise in tests
const originalConsole = { ...console };
global.console = {
  ...originalConsole,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn();

// Mock setTimeout and clearTimeout for better test control
jest.useFakeTimers();

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

// Restore console after all tests
afterAll(() => {
  global.console = originalConsole;
});