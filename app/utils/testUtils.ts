/**
 * Testing Utilities
 * Provides helper functions for testing React components and utilities
 */

import { ReactElement } from 'react';

/**
 * Mock localStorage for testing
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

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return keys[index] || null;
  }
}

/**
 * Setup mock localStorage
 */
export function setupMockStorage(): void {
  const mockStorage = new MockStorage();
  Object.defineProperty(window, 'localStorage', {
    value: mockStorage,
    writable: true,
  });
  Object.defineProperty(window, 'sessionStorage', {
    value: new MockStorage(),
    writable: true,
  });
}

/**
 * Mock fetch API for testing
 */
export function mockFetch(
  response: unknown,
  options: { status?: number; ok?: boolean } = {}
): jest.Mock {
  const { status = 200, ok = true } = options;
  
  return jest.fn().mockResolvedValue({
    ok,
    status,
    json: async () => response,
    text: async () => JSON.stringify(response),
    blob: async () => new Blob([JSON.stringify(response)]),
    arrayBuffer: async () => new ArrayBuffer(0),
    formData: async () => new FormData(),
  });
}

/**
 * Wait for a specified amount of time
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Wait for a condition to be true
 */
export async function waitFor(
  condition: () => boolean,
  timeout = 5000,
  interval = 50
): Promise<void> {
  const startTime = Date.now();
  
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`);
    }
    await wait(interval);
  }
}

/**
 * Create a spy on console methods
 */
export function spyOnConsole(
  method: 'log' | 'warn' | 'error' | 'info' | 'debug' = 'log'
): jest.SpyInstance {
  return jest.spyOn(console, method).mockImplementation(() => {});
}

/**
 * Restore all console spies
 */
export function restoreConsoleSpy(): void {
  jest.restoreAllMocks();
}

/**
 * Mock window.matchMedia for responsive testing
 */
export function mockMatchMedia(matches = false): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

/**
 * Mock IntersectionObserver for testing
 */
export function mockIntersectionObserver(): void {
  global.IntersectionObserver = class IntersectionObserver {
    constructor(
      public callback: IntersectionObserverCallback,
      public options?: IntersectionObserverInit
    ) {}

    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];
  };
}

/**
 * Mock ResizeObserver for testing
 */
export function mockResizeObserver(): void {
  global.ResizeObserver = class ResizeObserver {
    constructor(public callback: ResizeObserverCallback) {}
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  };
}

/**
 * Create mock environment variables
 */
export function mockEnv(env: Record<string, string>): void {
  const original = process.env;
  process.env = { ...original, ...env };
}

/**
 * Restore original environment variables
 */
export function restoreEnv(): void {
  jest.resetModules();
}

/**
 * Generate random test data
 */
export const generateTestData = {
  email: (): string => `test${Math.random().toString(36).substring(7)}@example.com`,
  
  phone: (): string => {
    const area = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const line = Math.floor(Math.random() * 9000) + 1000;
    return `(${area}) ${prefix}-${line}`;
  },
  
  name: (): string => {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
    return names[Math.floor(Math.random() * names.length)];
  },
  
  id: (): string => Math.random().toString(36).substring(2, 15),
  
  date: (): Date => new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
  
  number: (min = 0, max = 100): number => Math.floor(Math.random() * (max - min + 1)) + min,
  
  boolean: (): boolean => Math.random() > 0.5,
  
  string: (length = 10): string => Math.random().toString(36).substring(2, length + 2),
  
  array: <T>(generator: () => T, length = 5): T[] => Array.from({ length }, generator),
};

/**
 * Create a render wrapper with providers for testing
 */
export function createTestWrapper(providers: Array<React.ComponentType<{ children: React.ReactNode }>>): React.ComponentType<{ children: React.ReactNode }> {
  return ({ children }) => {
    return providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children as ReactElement
    );
  };
}

/**
 * Assert that a function throws an error
 */
export async function assertThrows(
  fn: () => unknown | Promise<unknown>,
  expectedError?: string | RegExp
): Promise<void> {
  try {
    await fn();
    throw new Error('Expected function to throw');
  } catch (error) {
    if (expectedError) {
      const message = error instanceof Error ? error.message : String(error);
      if (typeof expectedError === 'string') {
        if (!message.includes(expectedError)) {
          throw new Error(`Expected error message to include "${expectedError}", got "${message}"`);
        }
      } else {
        if (!expectedError.test(message)) {
          throw new Error(`Expected error message to match ${expectedError}, got "${message}"`);
        }
      }
    }
  }
}

export default {
  MockStorage,
  setupMockStorage,
  mockFetch,
  wait,
  waitFor,
  spyOnConsole,
  restoreConsoleSpy,
  mockMatchMedia,
  mockIntersectionObserver,
  mockResizeObserver,
  mockEnv,
  restoreEnv,
  generateTestData,
  createTestWrapper,
  assertThrows,
};