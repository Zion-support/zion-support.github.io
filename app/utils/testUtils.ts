/**
 * Test utilities for React components and testing
 */

import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

/**
 * Mock window object for testing
 */
export const mockWindow = (overrides: Partial<Window> = {}): void => {
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://localhost:3000',
      origin: 'http://localhost:3000',
      pathname: '/',
      search: '',
      hash: '',
      ...overrides,
    },
    writable: true,
  });
};

/**
 * Mock localStorage for testing
 */
export const mockLocalStorage = (): void => {
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
};

/**
 * Mock sessionStorage for testing
 */
export const mockSessionStorage = (): void => {
  const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    length: 0,
    key: jest.fn(),
  };
  
  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
    writable: true,
  });
};

/**
 * Mock fetch for testing
 */
export const mockFetch = (response: any, status: number = 200): void => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: jest.fn().mockResolvedValue(response),
    text: jest.fn().mockResolvedValue(JSON.stringify(response)),
  });
};

/**
 * Mock IntersectionObserver for testing
 */
export const mockIntersectionObserver = (): void => {
  global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

/**
 * Mock ResizeObserver for testing
 */
export const mockResizeObserver = (): void => {
  global.ResizeObserver = jest.fn().mockImplementation((callback) => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

/**
 * Mock matchMedia for testing
 */
export const mockMatchMedia = (matches: boolean = true): void => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
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
};

/**
 * Mock performance API for testing
 */
export const mockPerformance = (): void => {
  const mockPerformance = {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
    getEntries: jest.fn(() => []),
    toJSON: jest.fn(() => ({})),
  };
  
  Object.defineProperty(window, 'performance', {
    value: mockPerformance,
    writable: true,
  });
};

/**
 * Mock console methods for testing
 */
export const mockConsole = (): void => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
};

/**
 * Wait for async operations to complete
 */
export const waitFor = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Wait for element to appear in DOM
 */
export const waitForElement = async (
  selector: string,
  timeout: number = 5000
): Promise<Element | null> => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const checkElement = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else if (Date.now() - startTime < timeout) {
        setTimeout(checkElement, 100);
      } else {
        resolve(null);
      }
    };
    
    checkElement();
  });
};

/**
 * Wait for text to appear in DOM
 */
export const waitForText = async (
  text: string,
  timeout: number = 5000
): Promise<boolean> => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const checkText = () => {
      if (document.body.textContent?.includes(text)) {
        resolve(true);
      } else if (Date.now() - startTime < timeout) {
        setTimeout(checkText, 100);
      } else {
        resolve(false);
      }
    };
    
    checkText();
  });
};

/**
 * Mock storage implementation
 */
export class MockStorage implements Storage {
  private store: Record<string, string> = {};
  
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
  
  setItem(key: string, value: string): void {
    this.store[key] = value;
  }
  
  removeItem(key: string): void {
    delete this.store[key];
  }
  
  get length(): number {
    return Object.keys(this.store).length;
  }
}

/**
 * Create mock storage instance
 */
export const createMockStorage = (): MockStorage => {
  return new MockStorage();
};

/**
 * Setup test environment
 */
export const setupTestEnvironment = (overrides: Partial<Window> = {}): void => {
  mockWindow(overrides);
  mockLocalStorage();
  mockSessionStorage();
  mockFetch();
  mockIntersectionObserver();
  mockResizeObserver();
  mockMatchMedia();
  mockPerformance();
  mockConsole();
};

/**
 * Cleanup test environment
 */
export const cleanupTestEnvironment = (): void => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
};

/**
 * Generate test data
 */
export const generateTestData = {
  string: (length: number = 10): string => {
    return Math.random().toString(36).substring(2, 2 + length);
  },
  
  number: (min: number = 0, max: number = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  boolean: (): boolean => {
    return Math.random() > 0.5;
  },
  
  email: (): string => {
    return `test${Math.random().toString(36).substring(2, 7)}@example.com`;
  },
  
  url: (): string => {
    return `https://example.com/${Math.random().toString(36).substring(2, 7)}`;
  },
  
  date: (): Date => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  },
  
  array: <T>(generator: () => T, length: number = 5): T[] => {
    return Array.from({ length }, generator);
  },
  
  object: <T>(generator: () => T): T => {
    return generator();
  },
};

/**
 * Test assertion utilities
 */
export class TestAssertions {
  static assertElementExists(selector: string): void {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element with selector "${selector}" not found`);
    }
  }
  
  static assertElementNotExists(selector: string): void {
    const element = document.querySelector(selector);
    if (element) {
      throw new Error(`Element with selector "${selector}" should not exist`);
    }
  }
  
  static assertTextExists(text: string): void {
    if (!document.body.textContent?.includes(text)) {
      throw new Error(`Text "${text}" not found in document`);
    }
  }
  
  static assertTextNotExists(text: string): void {
    if (document.body.textContent?.includes(text)) {
      throw new Error(`Text "${text}" should not exist in document`);
    }
  }
  
  static assertAttribute(element: Element, attribute: string, value: string): void {
    const actualValue = element.getAttribute(attribute);
    if (actualValue !== value) {
      throw new Error(`Expected attribute "${attribute}" to be "${value}", got "${actualValue}"`);
    }
  }
  
  static assertClassExists(element: Element, className: string): void {
    if (!element.classList.contains(className)) {
      throw new Error(`Element does not have class "${className}"`);
    }
  }
  
  static assertClassNotExists(element: Element, className: string): void {
    if (element.classList.contains(className)) {
      throw new Error(`Element should not have class "${className}"`);
    }
  }
}

/**
 * Console spy for testing
 */
export class ConsoleSpy {
  private logs: string[] = [];
  private errors: string[] = [];
  private warnings: string[] = [];
  
  private mock(): void {
    this.logs = [];
    this.errors = [];
    this.warnings = [];
    
    console.log = (...args: unknown[]) => {
      this.logs.push(args.map(String).join(' '));
    };
    
    console.error = (...args: unknown[]) => {
      this.errors.push(args.map(String).join(' '));
    };
    
    console.warn = (...args: unknown[]) => {
      this.warnings.push(args.map(String).join(' '));
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
    jest.restoreAllMocks();
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
  reject: (error: Error) => void;
}

export const createDeferred = <T>(): Deferred<T> => {
  let resolve: (value: T) => void;
  let reject: (error: Error) => void;
  
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
 * Wait for promise to resolve or reject
 */
export const waitForPromise = <T>(
  promise: Promise<T>,
  timeout: number = 5000
): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Promise timeout')), timeout);
    }),
  ]);
};

/**
 * Mock fetch with specific responses
 */
export const mockFetchWithResponses = (
  responses: Array<{ url: string; response: any; status?: number }>
): void => {
  global.fetch = jest.fn().mockImplementation((url: string) => {
    const response = responses.find(r => url.includes(r.url));
    if (response) {
      return Promise.resolve({
        ok: (response.status || 200) >= 200 && (response.status || 200) < 300,
        status: response.status || 200,
        json: () => Promise.resolve(response.response),
        text: () => Promise.resolve(JSON.stringify(response.response)),
      });
    }
    
    return Promise.reject(new Error(`No mock response for URL: ${url}`));
  });
};

/**
 * Test utilities object
 */
export const testUtils = {
  mockWindow,
  mockLocalStorage,
  mockSessionStorage,
  mockFetch,
  mockIntersectionObserver,
  mockResizeObserver,
  mockMatchMedia,
  mockPerformance,
  mockConsole,
  waitFor,
  waitForElement,
  waitForText,
  createMockStorage,
  setupTestEnvironment,
  cleanupTestEnvironment,
  generateTestData,
  TestAssertions,
  ConsoleSpy,
  createDeferred,
  waitForPromise,
  mockFetchWithResponses,
};

export default testUtils;