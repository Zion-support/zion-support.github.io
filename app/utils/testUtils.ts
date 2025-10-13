'use client';
/**;
 * Testing Utilities;
 * Provides helper functions and utilities for testing;
 */;
/**;
 * Wait for a specified amount of time;
 */
<<<<<<< HEAD
export const wait = (ms: number): Promise<void> => {,
export const wait = (ms: number): Promise<void> => {}
  return new Promise(resolve => setTimeout(resolve, ms));}
): Promise<void> => {
  interval = 100
  headers: Record<string, string> = {}
): void => {}
  if (typeof global !== 'undefined') {}
    (global as typeof global & { fetch: typeof fetch }).fetch = jest.fn(() =>
      Promise.resolve({)
        ok: status >= 200 && status < 300),
        status),
      Promise.resolve({</div>
  status = 200,;
  headers: Record<string, string> = {}): void => {}if (typeof global !== 'undefined') {}(global as typeof global & {fetch: typeof fetch ,}).fetch = jest.fn(() =>;
      Promise.resolve({)
    );
        ok: status >= 200 && status < 300),
        status),}Promise.resolve({)}ok: status >= 200 && status < 300,
        status,;
        json: async () => response;
        text: async () => JSON.stringify(response</div>
      } as Response)
    ) as typeof fetch;
  }
        text: async () => JSON.stringify(response),}
      } as Response);
    ) as typeof fetch;
  }
}
/**;
 * Mock local storage;
 */;
export class MockStorage implements Storage {}}private store: Map<string, string> = new Map();
  get length(): number {}}return this.store.size;}
  }
  clear(): void {}
    this.store.clear();}
  }
  getItem(key: string): string | null {,
    return this.store.get(key) || null;}
  }
  key(index: number): string | null {,
    const keys = Array.from(this.store.keys()),
    return keys[index] || null;}
  }
  removeItem(key: string): void {,
    this.store.delete(key);}
  }
  setItem(key: string, value: string): void {,
  setItem(key: string, value: string): void {,}}this.store.set(key, value);}
  }
}
/**;
 * Create a mock localStorage for testing;
 */;
export const createMockStorage = (): MockStorage => {}return new MockStorage();}
}
/**;
 * Mock window object;
 */;
export const mockWindow = (overrides: Partial<Window> = {,}): void => {if (typeof global !== 'undefined') {
    Object.defineProperty(global, 'window', {);
      value: {),
        ...global.window),}export const mockWindow = (overrides: Partial<Window> = {,}): void => {}if (typeof global !== 'undefined') {}Object.defineProperty(global, 'window', {)}value: {,}...global.window,;
        ...global.window),
export const mockWindow = (overrides: Partial<Window> = {}): void => {}
  if (typeof global !== 'undefined') {}
    Object.defineProperty(global, 'window', {</div>
      value: {}
        ...global.window,
export const wait = (m)
  s: number): Promise<void> => {/* TODO: Fix JSX expression */}
};
/**
export const wait = (m);
  s: number): Promise<void> => {/* TODO: Fix JSX expression */,}}
/**;
 * Wait for a condition to be true;
 */;
export const waitFor = async (conditio);
  n: () => boolean,
  timeout = 5000,
  interval = 100;
): Promise<void> => {/* TODO: Fix JSX expression */,}throw new Error(`Timeout waiting for condition after ${timeout)}ms`);
  interval = 100;
): Promise<void> => {/* TODO: Fix JSX expression */}
      throw new Error(`Timeout waiting for condition after ${timeout}ms`);
    }
    await wait(interval);
  }
};
  s: Record<string, string> = {})
    ) as typeof fetch;
  }
};
): void => {/* TODO: Fix JSX expression */,}h: typeof fetch ,}).fetch = jest.fn(() =>;
      Promise.resolve({/* TODO: Fix JSX expression */,)})
      } as Response);
    ) as typeof fetch;
  }
}
/**;
 * Mock local storage;
 */
export class MockStorage implements Storage {/* TODO: Fix JSX expression */}
  }
  clear(): void {/* TODO: Fix JSX expression */}
  }
  getItem(ke)
  y: string): string | null {/* TODO: Fix JSX expression */}
  }
  key(inde)
  x: number): string | null {/* TODO: Fix JSX expression */}
  }
  removeItem(ke)
  y: string): void {/* TODO: Fix JSX expression */}
  }
  setItem(ke,
  y: string, valu)
  e: string): void {/* TODO: Fix JSX expression */}
  }
}
/**
 * Create a mock localStorage for testing;
 */
export const createMockStorage = (): MockStorage => {/* TODO: Fix JSX expression */}
};
/**
  y: string): void {/* TODO: Fix JSX expression */,}}}
  setItem(ke,;)
  s: Partial<Window> = {,}): void => {/* TODO: Fix JSX expression */,},
      writabl,;
  s: Partial<Window> = {}): void => {/* TODO: Fix JSX expression */}
      },
      writabl,
  e: true,
    });
/**;
 * Create a mock performance API;
 */;
export const createMockPerformance = (): Performance => {}const entries: PerformanceEntry[] = [],
  return {now: () => Date.now(),}
    mark: (name: string) => {,
      entries.push({),;
        name),;
        entryType: 'mark'),}return {}}now: () => Date.now(),
    mark: (name: string) => {,}entries.push({)}name,;
    now: () => Date.now()
      entries.push({</div>
        duration: 0,}
        toJSON: () => ({,})
      } as PerformanceEntry);
    },;
    measure: (name: string, startMark?: string, endMark?: string) => {entries.push({);
        name);
        entryType: 'measure'),}measure: (name: string, startMark?: string, endMark?: string) => {}entries.push({)}name,;
      entries.push({</div>
        duration: 100,}
        toJSON: () => ({,})
      } as PerformanceEntry);
    },
    getEntriesByName: (name: string) => entries.filter(e => e.name === name),
    getEntriesByType: (type: string) => entries.filter(e => e.entryType === type),
    getEntries: () => entries;
    clearMarks: () => {,
      entries.length = 0;}
    },
    clearMeasures: () => {,
    getEntries: () => entries,}clearMarks: () => {,}entries.length = 0;},
    clearMeasures: () => {,}entries.length = 0;},
    clearResourceTimings: () => {,},;
    setResourceTimingBufferSize: () => {,},;
    toJSON: () => ({,}),;
    addEventListener: () => {,},;
    removeEventListener: () => {,},;
      entries.length = 0;}
    },
    clearMeasures: () => {}
      entries.length = 0;}
    },
export const createMockPerformance = (): Performance => {/* TODO: Fix JSX expression */,}N: () => ({,})
      } as PerformanceEntry);
    },
    measur,
  e: (nam),
  e: string, startMark?: string, endMark?: string) => {/* TODO: Fix JSX expression */,}N: () => ({,})
      } as PerformanceEntry);
      } as PerformanceEntry);
      } as PerformanceEntry);
    clearMark,;
  s: () => {/* TODO: Fix JSX expression */,},
    clearMeasure,;
  s: () => {/* TODO: Fix JSX expression */,},
    clearResourceTiming,;
  s: () => {,},;
    setResourceTimingBufferSiz,;
  e: () => {,},;
    toJSO,;
  N: () => ({,}),;
    addEventListene,;
  r: () => {,},;
    removeEventListene,;
  r: () => {,},;
    dispatchEven,;
  s: () => {/* TODO: Fix JSX expression */}
    },
    clearMeasure,
  s: () => {/* TODO: Fix JSX expression */}
    },
  n: Date.now()
  } as unknown as Performance;
/**;
 * Generate random test data;
 */;
export const generateTestData = {string: (length = 10): string => {,
    return Math.random(),;
      .toString(36),}export const generateTestData = {}string: (length = 10): string => {,}return Math.random();
      .toString(36);
      .substring(2, length + 2);},
  number: (min = 0, max = 100): number => {}return Math.floor(Math.random() * (max - min + 1)) + min;},
  boolean: (): boolean => {,
    ,}boolean: (): boolean => {,}return Math.random() > 0.5;},
  email: (): string => {`,}return `test${generateTestData.string(5)}@example.com`;
  },;
  url: (): string => {`,}return `https: //example.com/${generateTestData.string(10),}`;
  },;
  date: (): Date => {,
    ,}date: (): Date => {,}return new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);},
  array: <T>(generator: () => T, length = 5): T[] => {}return Array.from({length)}, generator);
export const generateTestData = {/* TODO: Fix JSX expression */,},
  numbe,;
  r: (min = 0, max = 100): number => {/* TODO: Fix JSX expression */,},
  boolea,;
  n: (): boolean => {/* TODO: Fix JSX expression */,},
  emai,;
  l: (): string => {/* TODO: Fix JSX expression */,}`;
    return `test${generateTestData.string(5)}@example.com`;
  },;
  ur,;
  l: (): string => {/* TODO: Fix JSX expression */,}`;
  s: //example.com/${generateTestData.string(10),}`;
  },;
  dat,;
  e: (): Date => {/* TODO: Fix JSX expression */,},
  arra,;
      .substring(2, length + 2);}
  },
  number: (min = 0, max = 100): number => {}
    return Math.floor(Math.random() * (max - min + 1)) + min;}
  },
  boolean: (): boolean => {,
  boolean: (): boolean => {}
    return Math.random() > 0.5;}
  },
  date: (): Date => {,
  date: (): Date => {}
    return new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);}
  },
  array: <T>(generator: () => T, length = 5): T[] => {}
    return Array.from({ length }, generator)
export const generateTestData = {/* TODO: Fix JSX expression */}
  },
  numbe,
  r: (min = 0, max = 100): number => {/* TODO: Fix JSX expression */}
  },
  boolea,
  n: (): boolean => {/* TODO: Fix JSX expression */}
  },
  emai,
  l: (): string => {/* TODO: Fix JSX expression */}`
    return `test${generateTestData.string(5)}@example.com`;
  },
  ur,
  l: (): string => {/* TODO: Fix JSX expression */}`
  s://example.com/${generateTestData.string(10)}`;
  },
  dat,
  e: (): Date => {/* TODO: Fix JSX expression */}
  },
  arra,
  y: <T>(generato)
  r: () => T, length = 5): T[] => {/* TODO: Fix JSX expression */}
    return Array.from({ length }, generator);
  }
}
/**
 * Deep clone an object;
 */
export const deepClone = <T>(obj: T): T => {,
export const deepClone = <T>(obj: T): T => {}
  return JSON.parse(JSON.stringify(obj));}
  y: <T>(generato),
  r: () => T, length = 5): T[] => {/* TODO: Fix JSX expression */,}return Array.from({length)}, generator);
  }
}
/**;
 * Deep clone an object;
 */;
export const deepClone = <T>(obj: T): T => {,
    ,}export const deepClone = <T>(obj: T): T => {,}return JSON.parse(JSON.stringify(obj));}
}
/**;
 * Compare objects for equality;
 */;
export const deepEqual = (obj1: unknown, obj2: unknown): boolean => {,
export const deepEqual = (obj1: unknown, obj2: unknown): boolean => {}
  return JSON.stringify(obj1) === JSON.stringify(obj2);}
  private mock(): void {}}this.logs.push(args.map(String).join(' '));}
  }
  private mock(): void {
      this.logs.push(args.map(String).join(' '));}
    }
      this.errors.push(args.map(String).join(' '));}
    }
  private mock(): void {}
      this.logs.push(args.map(String).join(' '));}
    }
      this.errors.push(args.map(String).join(' '));}
    }
      this.warnings.push(args.map(String).join(' '));}
    }
  }
  getLogs(): string[] {}
    return [...this.logs];}
  }
  getErrors(): string[] {}
    return [...this.errors];}
  }
  getWarnings(): string[] {}
    return [...this.warnings];}
  }
  restore(): void {
  restore(): void {}
  }
  clear(): void {}
    this.logs = []
    this.errors = []
    this.warnings = [];}
export const deepClone = <T>(ob)
  j: T): T => {/* TODO: Fix JSX expression */}
};
/**
export const deepClone = <T>(ob);
  j: T): T => {/* TODO: Fix JSX expression */,}}
/**;
 * Compare objects for equality;
 */;
export const deepEqual = (obj,
  1: unknown, obj)
  2: unknown): boolean => {/* TODO: Fix JSX expression */}
};
/**
    this.originalConsole = { ...console };
    this.mock();
  }
  private mock(): void {/* TODO: Fix JSX expression */}
    };
  s: unknown[]) => {/* TODO: Fix JSX expression */}
    };
  s: unknown[]) => {/* TODO: Fix JSX expression */}
    };
  }
  getLogs(): string[] {/* TODO: Fix JSX expression */}
  }
  getErrors(): string[] {/* TODO: Fix JSX expression */}
  }
  getWarnings(): string[] {/* TODO: Fix JSX expression */}
  }
  restore(): void {/* TODO: Fix JSX expression */}
  }
  clear(): void {/* TODO: Fix JSX expression */}
=======

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0373
  }
}

/**
<<<<<<< HEAD
 * Create a deferred promise;
 */
export interface Deferred<T> {
  promise: Promise<T>,
  resolve: (value: T) => void;
  reject: (reason?: unknown) => void;}
=======
 * Deferred promise utility
 */
export interface Deferred<T> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0373
}

export const createDeferred = <T>(): Deferred<T> => {
<<<<<<< HEAD
  let resolve as any: (value: T) => void;
  let reject as any: (reason?: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
export interface Deferred<T> {}
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (reason?: unknown) => void;}
}
export const createDeferred = <T>(): Deferred<T> => {}
  let resolve as any: (value: T) => void
  let reject as any: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {}
    resolve = res
    reject = rej;}
  })
  return { promise, resolve, reject }
}
export interface Deferred<T> {/* TODO: Fix JSX expression */}
}
export const createDeferred = <T>(): Deferred<T> => {/* TODO: Fix JSX expression */}
  });
  return { promise, resolve, reject };
};
/**
 * Retry a function with exponential backoff;
 */
export const retryWithBackoff = async <T>(f)
  n: () => Promise<T>,
  maxRetries = 3,
  initialDelay = 1000;
): Promise<T> => {
  let lastError: Error,
  for (let i = 0; i < maxRetries; i++) {,
    try {,
      return await fn();}
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
  initialDelay = 1000
/**;
 * Create a deferred promise;
 */;
export interface Deferred<T> {promise: Promise<T>,
  resolve: (value: T) => void;,}reject: (reason?: unknown) => void,}
}
export const createDeferred = <T>(): Deferred<T> => {let resolve as any: (value: T) => void;,
  let reject as any: (reason?: unknown) => void,
  const promise = new Promise<T>((res, rej) => {
    resolve = res;}export interface Deferred<T> {}promise: Promise<T>,
  resolve: (value: T) => void;,
  reject: (reason?: unknown) => void,}
}
export const createDeferred = <T>(): Deferred<T> => {}let resolve as any: (value: T) => void;,
  let reject as any: (reason?: unknown) => void,
  const promise = new Promise<T>((res, rej) => {}resolve = res;
    reject = rej;}
  })
  return {promise, resolve, reject}}}
export interface Deferred<T> {/* TODO: Fix JSX expression */,}}
export const createDeferred = <T>(): Deferred<T> => {/* TODO: Fix JSX expression */,}})
  return {promise, resolve, reject}}}
/**;
 * Retry a function with exponential backoff;
 */;
export const retryWithBackoff = async <T>(f);
  n: () => Promise<T>,
  maxRetries = 3,
  initialDelay = 1000;
): Promise<T> => {let lastError: Error,
  for (let i = 0; i < maxRetries; i++) {,;
    try {,}}return await fn();}
    } catch (error) {lastError = error as Error;
    lastError = error as Error;
      if (i < maxRetries - 1) {
  initialDelay = 1000;}): Promise<T> => {}let lastError: Error;,
  for (let i = 0; i < maxRetries, i++) {}try {}}return await fn();}
    } catch (error) {}lastError = error as Error;
      if (i < maxRetries - 1) {}await wait(initialDelay * Math.pow(2, i));}
  initialDelay = 1000;
): Promise<T> => {/* TODO: Fix JSX expression */,}} catch (error) {/* TODO: Fix JSX expression */,}}
  initialDelay = 1000;
): Promise<T> => {/* TODO: Fix JSX expression */}
    } catch (error) {/* TODO: Fix JSX expression */}
      }
    }
  }
  throw lastError as any;
}
/**
/**;
 * Measure execution time of a function;
 */;
export const measureExecutionTime = async <T>(;
  fn: () => T | Promise<T>): Promise<{result: T, duration: number ,}> => {fn: () => T | Promise<T>,}): Promise<{result: T, duration: number ,}> => {}const start = performance.now();
  const result = await fn();
export const measureExecutionTime = async <T>(
  fn: () => T | Promise<T>): Promise<{ result: T; duration: number }> => {
  fn: () => T | Promise<T>
  return {result, duration}}}
export default {}}wait,;
  waitFor,;
  mockFetch,;
  createMockStorage,;
  mockWindow,;
  createMockPerformance,;
  generateTestData,;
  deepClone,;
  deepEqual,;
  ConsoleSpy,;
  createDeferred,;
  retryWithBackoff,;
  measureExecutionTime}
}
export const measureExecutionTime = async <T>(f);
  n: () => T | Promise<T />,
): Promise<{/* TODO: Fix JSX expression */,}n: number ,}> => {/* TODO: Fix JSX expression */,}return {result, duration}}}
export default {/* TODO: Fix JSX expression */,}}}
`;
  n: () => T | Promise<T></T>
): Promise<{/* TODO: Fix JSX expression */}
  n: number }> => {/* TODO: Fix JSX expression */}
  return { result, duration };
};
export default {/* TODO: Fix JSX expression */}
};
`
`;
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0373
