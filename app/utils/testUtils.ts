'use client';
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
 * Mock fetch for testing
 */
export const mockFetch = (
  response: unknown,
  status = 200,
  headers: Record<string, string> = {}
): void => {
  if (typeof global !== 'undefined') {
    (global as typeof global & { fetch: typeof fetch }).fetch = (() =>
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
 * Create a mock function
 */
export const createMockFunction = <T extends (..._args: unknown[]) => unknown>(
  implementation?: T
): T => {
  return (implementation || (() => {})) as T;
};

/**
 * Mock console methods for testing
 */
export const mockConsole = {
  log: createMockFunction<typeof console.log>(),
  error: createMockFunction<typeof console.error>(),
  warn: createMockFunction<typeof console.warn>(),
  info: createMockFunction<typeof console.info>(),
};

/**
 * Restore console methods
 */
export const restoreConsole = (): void => {
  // In a real test environment, you would restore the original console methods
  // This is a placeholder for the actual implementation
};

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
 * Simulate user interaction
 */
export const simulateClick = (element: HTMLElement): void => {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(event);
};

/**
 * Simulate keyboard input
 */
export const simulateKeyPress = (element: HTMLElement, key: string): void => {
  const event = new KeyboardEvent('keydown', {
    key,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
};

/**
 * Simulate form input
 */
export const simulateInput = (element: HTMLInputElement, value: string): void => {
  element.value = value;
  const event = new Event('input', { bubbles: true });
  element.dispatchEvent(event);
};

/**
 * Get element by test id
 */
export const getByTestId = (testId: string): HTMLElement | null => {
  return document.querySelector(`[data-testid="${testId}"]`);
};

/**
 * Get all elements by test id
 */
export const getAllByTestId = (testId: string): HTMLElement[] => {
  return Array.from(document.querySelectorAll(`[data-testid="${testId}"]`));
};

/**
 * Check if element is visible
 */
export const isVisible = (element: HTMLElement): boolean => {
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Wait for element to appear
 */
export const waitForElement = async (
  selector: string,
  timeout = 5000
): Promise<HTMLElement> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkElement = () => {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        resolve(element);
      } else if (Date.now() - startTime > timeout) {
        reject(new Error(`Element with selector "${selector}" not found within ${timeout}ms`));
      } else {
        setTimeout(checkElement, 100);
      }
    };
    checkElement();
  });
};

/**
 * Wait for element to disappear
 */
export const waitForElementToDisappear = async (
  selector: string,
  timeout = 5000
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkElement = () => {
      const element = document.querySelector(selector);
      if (!element) {
        resolve();
      } else if (Date.now() - startTime > timeout) {
        reject(new Error(`Element with selector "${selector}" still present after ${timeout}ms`));
      } else {
        setTimeout(checkElement, 100);
      }
    };
    checkElement();
  });
};

/**
 * Mock localStorage for testing
 */
export const mockLocalStorage = (): void => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        Object.keys(store).forEach(key => delete store[key]);
      },
      length: Object.keys(store).length,
      key: (index: number) => Object.keys(store)[index] || null
    },
    writable: true
  });
};

/**
 * Mock sessionStorage for testing
 */
export const mockSessionStorage = (): void => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        Object.keys(store).forEach(key => delete store[key]);
      },
      length: Object.keys(store).length,
      key: (index: number) => Object.keys(store)[index] || null
    },
    writable: true
  });
};

/**
 * Mock window.location for testing
 */
export const mockLocation = (url: string): void => {
  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      origin: new URL(url).origin,
      pathname: new URL(url).pathname,
      search: new URL(url).search,
      hash: new URL(url).hash,
      assign: () => {},
      replace: () => {},
      reload: () => {}
    },
    writable: true
  });
};

/**
 * Create a mock promise that resolves after a delay
 */
export const createDelayedPromise = <T>(
  value: T,
  delay = 100
): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });
};

/**
 * Create a mock promise that rejects after a delay
 */
export const createRejectedPromise = (
  error: Error,
  delay = 100
): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(error), delay);
  });
};

/**
 * Generate random test data
 */
export const generateTestData = {
  string: (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },
  
  number: (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  email: () => {
    return `${generateTestData.string(8)}@example.com`;
  },
  
  url: () => {
    return `https://example.com/${generateTestData.string(8)}`;
  }
};

/**
 * Clean up after tests
 */
export const cleanup = (): void => {
  // Clear all timers
  if (typeof global !== 'undefined') {
    const timers = (global as typeof global & { timers: Set<number> }).timers;
    if (timers) {
      timers.forEach(timer => clearTimeout(timer));
      timers.clear();
=======
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
>>>>>>> 25adb2f5c6bac8e2e9c4ea63f8e65ad0a7ecbbec
    }
  }
  
  // Clear DOM
  document.body.innerHTML = '';
  
  // Clear storage
  if (typeof window !== 'undefined') {
    localStorage.clear();
    sessionStorage.clear();
  }
};