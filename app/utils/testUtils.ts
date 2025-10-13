'use client';
/**;
 * Testing Utilities;
 * Provides helper functions and utilities for testing;
 */;
/**;
 * Wait for a specified amount of time;
 */

/**
 * Wait for a specified amount of time
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Wait for a condition to be true
 */
export const waitFor = async (
  condition: () => boolean,
  timeout = 5000,
  interval = 100
): Promise<void> => {
  const startTime = Date.now();
  
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`);
    }
    await wait(interval);
  }
};

/**
 * Wait for an element to appear in the DOM
 */
export const waitForElement = async (
  selector: string,
  timeout = 5000
): Promise<Element | null> => {
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setTimeout(() => {
      observer.disconnect();
      resolve(null);
    }, timeout);
  });
};

/**
 * Mock localStorage
 */
export class MockStorage implements Storage {
  private store: Record<string, string> = {};

  get length(): number {
    return Object.keys(this.store).length;
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return keys[index] || null;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }
}

export const createMockStorage = (): MockStorage => {
  return new MockStorage();
};

/**
 * Mock window object
 */
export const mockWindow = (overrides: Partial<Window> = {}): void => {
  Object.assign(window, {
    localStorage: createMockStorage(),
    sessionStorage: createMockStorage(),
    ...overrides,
  });
};

/**
 * Mock fetch
 */
export const mockFetch = (response: any, status = 200): void => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response)),
    })
  ) as jest.Mock;
};

/**
 * Mock performance API
 */
export const createMockPerformance = (): Performance => {
  const marks: Record<string, number> = {};
  const measures: Record<string, number> = {};

  return {
    mark: (name: string) => {
      marks[name] = Date.now();
    },
    measure: (name: string, startMark?: string, endMark?: string) => {
      const start = startMark ? marks[startMark] : 0;
      const end = endMark ? marks[endMark] : Date.now();
      measures[name] = end - start;
    },
    getEntriesByType: () => [],
    getEntriesByName: () => [],
    getEntries: () => [],
    clearMarks: () => {
      Object.keys(marks).forEach(key => delete marks[key]);
    },
    clearMeasures: () => {
      Object.keys(measures).forEach(key => delete measures[key]);
    },
    now: () => Date.now(),
    navigation: {} as PerformanceNavigation,
    timing: {} as PerformanceTiming,
    memory: {} as any,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  } as Performance;
};

/**
 * Generate test data
 */
export const generateTestData = {
  random: (min = 0, max = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  boolean: (): boolean => {
    return Math.random() > 0.5;
  },
  string: (length = 10): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },
  email: (): string => {
    return `${generateTestData.string(8)}@${generateTestData.string(5)}.com`;
  },
  url: (): string => {
    return `https://${generateTestData.string(10)}.com`;
  },
  date: (): Date => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  },
  array: <T>(generator: () => T, length = 5): T[] => {
    return Array.from({ length }, generator);
  },
  object: <T>(generator: () => T): T => {
    return generator();
  },
};

/**
 * Test data generators
 */
export const createTestUser = () => ({
  id: generateTestData.random(1, 1000),
  name: generateTestData.string(10),
  email: generateTestData.email(),
  age: generateTestData.random(18, 80),
  isActive: generateTestData.boolean(),
  createdAt: generateTestData.date(),
});

export const createTestPost = () => ({
  id: generateTestData.random(1, 1000),
  title: generateTestData.string(20),
  content: generateTestData.string(100),
  authorId: generateTestData.random(1, 100),
  publishedAt: generateTestData.date(),
  tags: generateTestData.array(() => generateTestData.string(8), 3),
});

/**
 * Console spy for testing
 */
export class ConsoleSpy {
  private logs: string[] = [];
  private errors: string[] = [];
  private warnings: string[] = [];

  private mock(): void {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args: unknown[]) => {
      this.logs.push(args.map(String).join(' '));
      originalLog.apply(console, args);
    };

    console.error = (...args: unknown[]) => {
      this.errors.push(args.map(String).join(' '));
      originalError.apply(console, args);
    };

    console.warn = (...args: unknown[]) => {
      this.warnings.push(args.map(String).join(' '));
      originalWarn.apply(console, args);
    };
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  getErrors(): string[] {
    return [...this.errors];
  }

  getWarnings(): string[] {
    return [...this.warnings];
  }

  restore(): void {
    // Restore original console methods
    console.log = console.log;
    console.error = console.error;
    console.warn = console.warn;
  }

  clear(): void {
    this.logs = [];
    this.errors = [];
    this.warnings = [];
  }
}

/**
 * Deferred promise utility
 */
export interface Deferred<T> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
}

export const createDeferred = <T>(): Deferred<T> => {
  let resolve: (value: T) => void;
  let reject: (reason?: any) => void;

  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return {
    promise,
    resolve: resolve!,
    reject: reject!,
  };
};

/**
 * Test timeout utility
 */
export const withTimeout = <T>(
  promise: Promise<T>,
  timeoutMs: number
): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Test timeout')), timeoutMs)
    ),
  ]);
};

/**
 * Mock timer utilities
 */
export const mockTimers = () => {
  jest.useFakeTimers();
};

export const restoreTimers = () => {
  jest.useRealTimers();
};

export const advanceTimers = (ms: number) => {
  jest.advanceTimersByTime(ms);
};

/**
 * Test environment setup
 */
export const setupTestEnvironment = () => {
  mockWindow();
  mockFetch({});
  
  return {
    cleanup: () => {
      // Cleanup if needed
    },
  };
};

export default {
  wait,
  waitFor,
  waitForElement,
  createMockStorage,
  mockWindow,
  mockFetch,
  createMockPerformance,
  generateTestData,
  createTestUser,
  createTestPost,
  ConsoleSpy,
  createDeferred,
  withTimeout,
  mockTimers,
  restoreTimers,
  advanceTimers,
  setupTestEnvironment,
};
