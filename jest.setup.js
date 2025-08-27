// Jest setup file for Zion Tech Group tests

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
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

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
});

// Mock window.innerHeight
Object.defineProperty(window, 'innerHeight', {
  writable: true,
  value: 800,
});

// Mock window.innerWidth
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  value: 1200,
});

// Mock CSS modules and assets - handled by Jest config

// Mock environment variables
process.env.NODE_ENV = 'test';
process.env.VITE_APP_TITLE = 'Zion Tech Group Test';
process.env.VITE_API_URL = 'http://localhost:3000';

// Mock console methods in tests
global.console = {
  ...console,
  // Uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};

// Mock fetch
global.fetch = jest.fn();

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;

// Mock URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => 'mocked-url');

// Mock URL.revokeObjectURL
global.URL.revokeObjectURL = jest.fn();

// Mock requestAnimationFrame
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);

// Mock cancelAnimationFrame
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Mock performance.now
global.performance.now = jest.fn(() => Date.now());

// Mock crypto.randomUUID
global.crypto.randomUUID = jest.fn(() => 'test-uuid');

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    this.callback([{ isIntersecting: true }]);
  }
  unobserve() {}
  disconnect() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock getComputedStyle
global.getComputedStyle = jest.fn(() => ({
  getPropertyValue: jest.fn(() => ''),
}));

// Mock Element.prototype methods
Element.prototype.scrollIntoView = jest.fn();
Element.prototype.scrollTo = jest.fn();
Element.prototype.getBoundingClientRect = jest.fn(() => ({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: 0,
  height: 0,
}));

// Mock HTMLElement.prototype methods
HTMLElement.prototype.focus = jest.fn();
HTMLElement.prototype.blur = jest.fn();
HTMLElement.prototype.click = jest.fn();

// Mock FormData
global.FormData = class FormData {
  constructor() {
    this.data = {};
  }
  append(key, value) {
    this.data[key] = value;
  }
  get(key) {
    return this.data[key];
  }
  has(key) {
    return key in this.data;
  }
  delete(key) {
    delete this.data[key];
  }
  entries() {
    return Object.entries(this.data);
  }
  keys() {
    return Object.keys(this.data);
  }
  values() {
    return Object.values(this.data);
  }
};

// Mock File
global.File = class File {
  constructor(bits, name, options = {}) {
    this.name = name;
    this.size = bits.length;
    this.type = options.type || '';
    this.lastModified = options.lastModified || Date.now();
  }
};

// Mock FileReader
global.FileReader = class FileReader {
  constructor() {
    this.readyState = 0;
    this.result = null;
    this.error = null;
  }
  readAsText(file) {
    setTimeout(() => {
      this.readyState = 2;
      this.result = 'file content';
      this.onload && this.onload();
    }, 0);
  }
  readAsDataURL(file) {
    setTimeout(() => {
      this.readyState = 2;
      this.result = 'data:text/plain;base64,file content';
      this.onload && this.onload();
    }, 0);
  }
};

// Mock Blob
global.Blob = class Blob {
  constructor(content, options = {}) {
    this.content = content;
    this.type = options.type || '';
    this.size = content.length;
  }
  arrayBuffer() {
    return Promise.resolve(new ArrayBuffer(this.content.length));
  }
  text() {
    return Promise.resolve(this.content);
  }
};

// Mock AbortController
global.AbortController = class AbortController {
  constructor() {
    this.signal = {
      aborted: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
  }
  abort() {
    this.signal.aborted = true;
  }
};

// Mock TextEncoder
global.TextEncoder = class TextEncoder {
  encode(text) {
    return new Uint8Array(text.split('').map(char => char.charCodeAt(0)));
  }
};

// Mock TextDecoder
global.TextDecoder = class TextDecoder {
  decode(bytes) {
    return String.fromCharCode(...bytes);
  }
};

// Mock structuredClone
global.structuredClone = jest.fn((obj) => JSON.parse(JSON.stringify(obj)));

// Mock queueMicrotask
global.queueMicrotask = jest.fn((callback) => Promise.resolve().then(callback));

// Mock setTimeout with jest.useFakeTimers()
jest.useFakeTimers();

// Mock setInterval with jest.useFakeTimers()
jest.useFakeTimers();

// Mock clearTimeout and clearInterval
global.clearTimeout = jest.fn();
global.clearInterval = jest.fn();

// Mock Date.now
const mockDate = new Date('2025-01-01T00:00:00.000Z');
global.Date.now = jest.fn(() => mockDate.getTime());

// Mock console.error to fail tests on unhandled errors
const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Warning: ReactDOM.render is no longer supported')
  ) {
    return;
  }
  originalError.call(console, ...args);
};

// Mock console.warn to fail tests on unhandled warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: componentWillReceiveProps') ||
     args[0].includes('Warning: componentWillUpdate'))
  ) {
    return;
  }
  originalWarn.call(console, ...args);
};

// Setup test environment
beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks();
  
  // Reset localStorage and sessionStorage
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  localStorageMock.removeItem.mockClear();
  localStorageMock.clear.mockClear();
  
  sessionStorageMock.getItem.mockClear();
  sessionStorageMock.setItem.mockClear();
  sessionStorageMock.removeItem.mockClear();
  sessionStorageMock.clear.mockClear();
  
  // Reset fetch mock
  fetch.mockClear();
  
  // Reset IntersectionObserver
  global.IntersectionObserver = class IntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {
      this.callback([{ isIntersecting: true }]);
    }
    unobserve() {}
    disconnect() {}
  };
});

afterEach(() => {
  // Clean up after each test
  jest.clearAllTimers();
});