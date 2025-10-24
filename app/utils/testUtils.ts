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
  
  while (Date.now() - startTime < timeout) {
    if (condition()) {
      return;
    }
    await wait(interval);
  }
  
  throw new Error(`Condition not met within ${timeout}ms`);
};

/**
 * Wait for an element to appear in the DOM
 */
export const waitForElement = async (
  selector: string,
  timeout = 5000
): Promise<Element> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const checkElement = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      
      if (Date.now() - startTime > timeout) {
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
        return;
      }
      
      setTimeout(checkElement, 100);
    };
    
    checkElement();
  });
};

/**
 * Wait for an element to disappear from the DOM
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
        return;
      }
      
      if (Date.now() - startTime > timeout) {
        reject(new Error(`Element ${selector} still present after ${timeout}ms`));
        return;
      }
      
      setTimeout(checkElement, 100);
    };
    
    checkElement();
  });
};

/**
 * Simulate user interaction
 */
export const simulateClick = (element: Element): void => {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(event);
};

export const simulateInput = (element: HTMLInputElement, value: string): void => {
  element.value = value;
  const event = new Event('input', { bubbles: true });
  element.dispatchEvent(event);
};

export const simulateKeyPress = (element: Element, key: string): void => {
  const event = new KeyboardEvent('keydown', {
    key,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
};

/**
 * Mock fetch for testing
 */
export const mockFetch = (response: unknown, status = 200): void => {
  global.fetch = (() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response))
    })
  ) as unknown as typeof fetch;
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
      }
    }
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
      }
    }
  });
};

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
 * Mock console methods for testing
 */
export const mockConsole = {
  logs: [] as string[],
  errors: [] as string[],
  warnings: [] as string[],
  
  setup() {
    console.log = (...args: unknown[]) => {
      this.logs.push(args.map(String).join(' '))
    }
    console.error = (...args: unknown[]) => {
      this.errors.push(args.map(String).join(' '))
    }
    console.warn = (...args: unknown[]) => {
      this.warnings.push(args.map(String).join(' '))
    }
  },
  
  restore() {
    // Restore original console methods
    console.log = (..._args: unknown[]) => {
      // Original console.log behavior
    };
    console.error = (..._args: unknown[]) => {
      // Original console.error behavior
    };
    console.warn = (..._args: unknown[]) => {
      // Original console.warn behavior
    };
  }
};

/**
 * Clean up after tests
 */
export const cleanup = () => {
  // Clear timers
  const timers = (global as typeof global & { timers: Set<number> }).timers;
  if (timers) {
    timers.forEach(timer => clearTimeout(timer));
    timers.clear();
  }
  
  // Clear DOM
  document.body.innerHTML = '';
  
  // Clear storage
  if (typeof window !== 'undefined') {
    localStorage.clear();
    sessionStorage.clear();
  }
};