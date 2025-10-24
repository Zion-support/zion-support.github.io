<<<<<<< HEAD
'use client'
<<<<<<<< HEAD:app/utils/testUtils.ts
=======
'use client';
>>>>>>> origin/main
/**
 * Testing Utilities
 * Provides helper functions and utilities for testing
 */
<<<<<<< HEAD

=======
>>>>>>> origin/main
/**
 * Wait for a specified amount of time
 */
export const wait = (ms: number): Promise<void> => {
<<<<<<< HEAD
  return new Promise(resolve => setTimeout(resolve, ms))
}

=======
  return new Promise(resolve => setTimeout(resolve, ms));
};
>>>>>>> origin/main
/**
 * Wait for a condition to be true
 */
export const waitFor = async (
  condition: () => boolean,
  timeout = 5000,
  interval = 100
): Promise<void> => {
<<<<<<< HEAD
  const startTime = Date.now()
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`)
    }
    await wait(interval)
  }
}

=======
  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`);
    }
    await wait(interval);
  }
};
>>>>>>> origin/main
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
<<<<<<< HEAD
    ) as typeof fetch
  }
}

=======
    ) as typeof fetch;
  }
};
>>>>>>> origin/main
/**
 * Mock local storage
 */
export class MockStorage implements Storage {
<<<<<<< HEAD
  private store: Map<string, string> = new Map()

  get length(): number {
    return this.store.size
  }

  clear(): void {
    this.store.clear()
  }

  getItem(key: string): string | null {
    return this.store.get(key) || null
  }

  key(index: number): string | null {
    const keys = Array.from(this.store.keys())
    return keys[index] || null
  }

  removeItem(key: string): void {
    this.store.delete(key)
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value)
  }
}

/**
 * Create a mock localStorage for testing
 */
export const createMockStorage = (): MockStorage => {
  return new MockStorage()
}

/**
 * Mock window object
 */
export const mockWindow = (overrides: Partial<Window> = {}): void => {
  if (typeof global !== 'undefined') {
    Object.defineProperty(global, 'window', {
      value: {
        ...global.window,
        ...overrides
      },
      writable: true,
    })
  }
}

/**
 * Create a mock performance API
 */
export const createMockPerformance = (): Performance => {
  const entries: PerformanceEntry[] = []
  return {
    now: () => Date.now(),
    mark: (name: string) => {
      entries.push({
        name,
        entryType: 'mark',
        startTime: Date.now(),
        duration: 0,
        toJSON: () => ({})
      } as PerformanceEntry)
    },
    measure: (name: string, startMark?: string, endMark?: string) => {
      entries.push({
        name,
        entryType: 'measure',
        startTime: Date.now(),
        duration: 100,
        toJSON: () => ({})
      } as PerformanceEntry)
    },
    getEntriesByName: (name: string) => entries.filter(e => e.name === name),
    getEntriesByType: (type: string) => entries.filter(e => e.entryType === type),
    getEntries: () => entries,
    clearMarks: () => {
      entries.length = 0
    },
    clearMeasures: () => {
      entries.length = 0
    },
    clearResourceTimings: () => {},
    setResourceTimingBufferSize: () => {},
    toJSON: () => ({}),
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    onresourcetimingbufferfull: null,
    timeOrigin: Date.now(),
  } as unknown as Performance
}

/**
 * Generate random test data
 */
export const generateTestData = {
  string: (length = 10): string => {
    return Math.random()
      .toString(36)
      .substring(2, length + 2)
  },
  number: (min = 0, max = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  boolean: (): boolean => {
    return Math.random() > 0.5
  },
  email: (): string => {
    return `test${generateTestData.string(5)}@example.com`
  },
  url: (): string => {
    return `https://example.com/${generateTestData.string(10)}`
  },
  date: (): Date => {
    return new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
  },
  array: <T>(generator: () => T, length = 5): T[] => {
    return Array.from({ length }, generator)
  }
}

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Compare objects for equality
 */
export const deepEqual = (obj1: unknown, obj2: unknown): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

/**
 * Spy on console methods
 */
export class ConsoleSpy {
  private originalConsole: Console
  private logs: string[] = []
  private errors: string[] = []
  private warnings: string[] = []

  constructor() {
    this.originalConsole = { ...console }
    this.mock()
  }

  private mock(): void {
    console.log = (...args: unknown[]) => {
      this.logs.push(args.map(String).join(' '))
    }
    console.error = (...args: unknown[]) => {
      this.errors.push(args.map(String).join(' '))
    }
    console.warn = (...args: unknown[]) => {
      this.warnings.push(args.map(String).join(' '))
    }
  }

  getLogs(): string[] {
    return [...this.logs]
  }

  getErrors(): string[] {
    return [...this.errors]
  }

  getWarnings(): string[] {
    return [...this.warnings]
  }

  restore(): void {
    Object.assign(console, this.originalConsole)
  }

  clear(): void {
    this.logs = []
    this.errors = []
    this.warnings = []
  }
}

/**
 * Create a deferred promise
 */
export interface Deferred<T> {
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (reason?: unknown) => void
}

export const createDeferred = <T>(): Deferred<T> => {
  let resolve: (value: T) => void = () => {}
  let reject: (reason?: unknown) => void = () => {}
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

/**
 * Retry a function with exponential backoff
 */
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  initialDelay = 1000
): Promise<T> => {
  let lastError: Error
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      if (i < maxRetries - 1) {
        await wait(initialDelay * Math.pow(2, i))
      }
    }
  }
  throw lastError!
}

/**
 * Measure execution time of a function
 */
export const measureExecutionTime = async <T>(
  fn: () => T | Promise<T>
): Promise<{ result: T; duration: number }> => {
  const start = performance.now()
  const result = await fn()
  const duration = performance.now() - start
  return { result, duration }
}

export default {
  wait,
  waitFor,
  mockFetch,
  createMockStorage,
  mockWindow,
  createMockPerformance,
  generateTestData,
  deepClone,
  deepEqual,
  ConsoleSpy,
  createDeferred,
  retryWithBackoff,
  measureExecutionTime
}
========
  if (typeof global !== 'undefined'
  if (typeof global !== 'undefined'
    Object.defineProperty(global, 'window'
        "entryType": 'mark',
        "entryType": 'measure',
      this.logs.push(args.map(String).join(' '
      this.errors.push(args.map(String).join(' '
      this.warnings.push(args.map(String).join(' '
>>>>>>>> origin/main:app-backup/utils/testUtils.ts
=======
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
};
>>>>>>> origin/main
