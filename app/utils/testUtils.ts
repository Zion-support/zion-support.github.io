'use client';
<<<<<<< HEAD

=======
>>>>>>> origin/main
/**
 * Testing Utilities
 * Provides helper functions and utilities for testing
 */
/**
 * Wait for a specified amount of time
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
<<<<<<< HEAD

=======
>>>>>>> origin/main
/**
 * Wait for a condition to be true
 */
export const waitFor = async (
  condition: () => boolean,
  timeout = 5000,
  interval = 100
): Promise<void> => {
  const startTime = Date.now();
<<<<<<< HEAD
  
=======
>>>>>>> origin/main
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`);
    }
    await wait(interval);
  }
};
<<<<<<< HEAD

/**
 * Mock fetch for testing
 */
export const mockFetch = (response: any, status = 200) => {
  return jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(response),
    text: () => Promise.resolve(JSON.stringify(response)),
  });
};

/**
 * Create a mock event
 */
export const createMockEvent = (type: string, properties: any = {}) => {
  return {
    type,
    target: {
      value: properties.value || '',
      name: properties.name || '',
      checked: properties.checked || false,
    },
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
    ...properties,
  };
};

/**
 * Mock localStorage
 */
export const mockLocalStorage = () => {
  const store: { [key: string]: string } = {};
  
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      Object.keys(store).forEach(key => delete store[key]);
    }),
  };
};

/**
 * Mock window.location
 */
export const mockLocation = (url: string) => {
  delete (window as any).location;
  window.location = new URL(url) as any;
};

/**
 * Create a mock component
 */
export const createMockComponent = (name: string) => {
  const MockComponent = (props: any) => {
    return { type: 'div', props: { 'data-testid': name, ...props } };
  };
  MockComponent.displayName = name;
  return MockComponent;
};

/**
 * Generate test data
 */
export const generateTestData = (type: string, count = 1) => {
  const data: any[] = [];
  
  for (let i = 0; i < count; i++) {
    switch (type) {
      case 'user':
        data.push({
          id: i + 1,
          name: `Test User ${i + 1}`,
          email: `test${i + 1}@example.com`,
          role: 'user',
        });
        break;
      case 'product':
        data.push({
          id: i + 1,
          name: `Test Product ${i + 1}`,
          price: Math.floor(Math.random() * 1000) + 10,
          category: 'test',
        });
        break;
      default:
        data.push({ id: i + 1, name: `Test Item ${i + 1}` });
    }
  }
  
  return count === 1 ? data[0] : data;
};

/**
 * Mock console methods
 */
export const mockConsole = () => {
  const originalConsole = { ...console };
  
  beforeEach(() => {
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
  });
  
  afterEach(() => {
    Object.assign(console, originalConsole);
  });
  
  return originalConsole;
};

/**
 * Create a mock API response
 */
export const createMockApiResponse = (data: any, status = 200) => {
  return {
    data,
    status,
    statusText: status >= 200 && status < 300 ? 'OK' : 'Error',
    headers: {},
    config: {},
  };
};

/**
 * Mock IntersectionObserver
 */
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
  return mockIntersectionObserver;
};

/**
 * Mock ResizeObserver
 */
export const mockResizeObserver = () => {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver;
  return mockResizeObserver;
=======
/**
 * Mock fetch for testing
 */
export const mockFetch = (
  response: unknown,
  status = 200,
  headers: Record<string, string> = {}
): void => {
  if (typeof global !== 'undefined') {
    (global as typeof global & { fetch: typeof fetch }).fetch = jest.fn(() =>
      Promise.resolve({
        ok: status >= 200 && status < 300,
        status,
        headers: new Headers(headers),
        json: async () => response,
        text: async () => JSON.stringify(response)
      } as Response)
    ) as typeof fetch;
  }
};
/**
 * Mock local storage
 */
export class MockStorage implements Storage {
  private store: Map<string, string> = new Map();
  get length(): number {
    return this.store.size;
  }
  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }
  getItem(key: string): string | null {
    return this.store.get(key) || null;
  }
  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }
  removeItem(key: string): void {
    this.store.delete(key);
  }
  clear(): void {
    this.store.clear();
  }
}
/**
 * Mock session storage
 */
export class MockSessionStorage implements Storage {
  private store: Map<string, string> = new Map();
  get length(): number {
    return this.store.size;
  }
  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }
  getItem(key: string): string | null {
    return this.store.get(key) || null;
  }
  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }
  removeItem(key: string): void {
    this.store.delete(key);
  }
  clear(): void {
    this.store.clear();
  }
}
/**
 * Create a mock element for testing
 */
export const createMockElement = (tagName: string, attributes: Record<string, string> = {}): HTMLElement => {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};
/**
 * Mock window object for testing
 */
export const mockWindow = (overrides: Partial<Window> = {}): Window => {
  const mockWin = {
    location: {
      href: 'http://localhost:3000',
      origin: 'http://localhost:3000',
      pathname: '/',
      search: '',
      hash: '',
      assign: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn()
    },
    navigator: {
      userAgent: 'test-agent',
      language: 'en-US',
      platform: 'test-platform'
    },
    document: {
      title: 'Test Document',
      createElement: jest.fn(() => createMockElement('div')),
      querySelector: jest.fn(),
      querySelectorAll: jest.fn(() => []),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    },
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    setTimeout: jest.fn((fn: Function, delay: number) => setTimeout(fn, delay)),
    clearTimeout: jest.fn(),
    setInterval: jest.fn((fn: Function, delay: number) => setInterval(fn, delay)),
    clearInterval: jest.fn(),
    ...overrides
  } as unknown as Window;
  return mockWin;
};
/**
 * Mock console methods for testing
 */
export const mockConsole = () => {
  const originalConsole = { ...console };
  beforeEach(() => {
    console.log = jest.fn();
    console.error = jest.fn();
    console.warn = jest.fn();
    console.info = jest.fn();
  });
  afterEach(() => {
    Object.assign(console, originalConsole);
  });
};
/**
 * Create a mock event for testing
 */
export const createMockEvent = (type: string, options: EventInit = {}): Event => {
  return new Event(type, options);
};
/**
 * Create a mock custom event for testing
 */
export const createMockCustomEvent = (type: string, detail: unknown = null): CustomEvent => {
  return new CustomEvent(type, { detail });
};
/**
 * Mock IntersectionObserver for testing
 */
export const mockIntersectionObserver = () => {
  const mockObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  };
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: jest.fn().mockImplementation(() => mockObserver)
  });
  return mockObserver;
};
/**
 * Mock ResizeObserver for testing
 */
export const mockResizeObserver = () => {
  const mockObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  };
  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    configurable: true,
    value: jest.fn().mockImplementation(() => mockObserver)
  });
  return mockObserver;
};
/**
 * Mock matchMedia for testing
 */
export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
};
/**
 * Mock performance API for testing
 */
export const mockPerformance = () => {
  Object.defineProperty(window, 'performance', {
    writable: true,
    value: {
      now: jest.fn(() => Date.now()),
      mark: jest.fn(),
      measure: jest.fn(),
      getEntriesByType: jest.fn(() => []),
      getEntriesByName: jest.fn(() => []),
      clearMarks: jest.fn(),
      clearMeasures: jest.fn()
    }
  });
};
/**
 * Mock requestAnimationFrame for testing
 */
export const mockRequestAnimationFrame = () => {
  Object.defineProperty(window, 'requestAnimationFrame', {
    writable: true,
    value: jest.fn(cb => setTimeout(cb, 16))
  });
  Object.defineProperty(window, 'cancelAnimationFrame', {
    writable: true,
    value: jest.fn()
  });
};
/**
 * Setup common mocks for testing
 */
export const setupMocks = () => {
  mockIntersectionObserver();
  mockResizeObserver();
  mockMatchMedia();
  mockPerformance();
  mockRequestAnimationFrame();
};
/**
 * Clean up mocks after testing
 */
export const cleanupMocks = () => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
>>>>>>> origin/main
};