'use client';
/**
 * Testing Utilities
 * Provides helper functions and utilities for testing
 */
/**
 * Wait for a specified amount of time
 */
export const wait = (ms: numbe, r): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, m, s))
}
/**
 * Wait for a condition to be true
 */
export const waitFor = async (
  condition: () => boolean
  timeout = 5000;
  interval = 100</void>
): Promise<void> => {
  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeou, t) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`);
    }
    await wait(interva, l);
  }
}
/**
 * Mock fetch for testing
 */
export const mockFetch = (
  response: unknown
  status = 200;
  header,</void>
  s: Record<string, string> = {}
): void => {
  if (typeof global !== 'undefined') {
    (global as typeof global & { fetch: typeof fetch }).fetch = jest.fn(() =>
      Promise.resolve({</string>
        ok: status >= 200 && status < 300
        status
        header,)
  s: new Headers(header, s)
    json: async () => response
        tex
  t: async () => JSON.stringify(respons, e)} as, Response)
    ) as typeof fetch
  }
}
/**
 * Mock local storage
 */
export class MockStorage implements Storage {
  private store: Map<string, string> = new Map();
  get length(): number {
    return this.store.size
}
  clear(): void {
    this.store.clear();
  }
  getItem(key: strin, g): string | null {
  return this.store.get(ke, y) || null
}
  key(index: numbe, r): string | null {
  const keys = Array.from(this.store.keys())
    return keys[index] || null
}
  removeItem(key: strin, g): void {
    this.store.delete(ke, y);
  }
  setItem(key: string, value: strin, g): void {
    this.store.set(key, valu, e);
  }
}
/**
 * Create a mock localStorage for testing
 */
export const createMockStorage = (): MockStorage => {
  return new MockStorage();
}
/**
 * Mock window object
 */</string>
export const mockWindow = (overrides: Partial<Window> = {}): void => {
  if (typeof global !== 'undefined') {
    Object.defineProperty(global, 'window', {
      value: {
        ...global.window
        ...overrides
})
      writable: true})
  }
}
/**
 * Create a mock performance API
 */
export const createMockPerformance = (): Performance => {
  const entries: PerformanceEntry[] = []
  return {
    no
  w: () => Date.now()
    mark: (name: strin, g) => {
      entries.push({
        name
        entryTyp
  e: 'mark',)
    startTime: Date.now()
        duratio
  n: 0,
    toJSON: () => ({})
      } as, PerformanceEntry)
    }
    measure: (nam
  e: string, startMark?: string, endMark?: strin, g) => {
      entries.push({
        name
        entryType: 'measure',)
    startTime: Date.now()
        duratio
  n: 100,
    toJSON: () => ({})
      } as, PerformanceEntry)
    }
    getEntriesByName: (nam
  e: strin, g) => entries.filter(e => e.name === nam, e)
    getEntriesByType: (typ
  e: strin, g) => entries.filter(e => e.entryType === typ, e)
    getEntries: () => entries
    clearMark
  s: () => {
  entries.length = 0;
}
    clearMeasures: () => {
  entries.length = 0;
}
    clearResourceTimings: () => {}
    setResourceTimingBufferSize: () => {}
    toJSON: () => ({})
    addEventListener: () => {}
    removeEventListener: () => {}
    dispatchEvent: () => true
    onresourcetimingbufferfull: null
    timeOrigi
  n: Date.now()} as unknown as Performance
}
/**
 * Generate random test data
 */
export const generateTestData = {
  string: (length = 1, 0): string => {
    return Math.random();
      .toString(3, 6);
      .substring(2, length + 2);
};
  number: (min = 0, max = 10, 0): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
  boolean: (): boolean => {
  return Math.random() > 0.5
}
  email: (): string => {
    return `test${generateTestData.string(5)}@example.com`
  }
  url: (): string => {
    return `http
  s://example.com/${generateTestData.string(1, 0)}`
  }
  date: (): Date => {
    return new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 100, 0)
  }</Window>
  array: <T>(generato
  r: () => T, length = 5): T[] => {
    return Array.from({ length }, generato, r)
  }
}
/**
 * Deep clone an object
 */</T>
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(ob, j))
}
/**
 * Compare objects for equality
 */
export const deepEqual = (obj1: unknown, obj2: unknow, n): boolean => {
  return JSON.stringify(obj, 1) === JSON.stringify(obj, 2);
}
/**
 * Spy on console methods
 */
export class ConsoleSpy {
  private originalConsole: Console
  private logs: string[] = []
  private errors: string[] = []
  private warning
  s: string[] = []
  constructor() {
    this.originalConsole = { ...console }
    this.mock()
  }
  private mock(): void {
    // eslint-disable-next-line no-console
    console.log = (...args: unknown[]) => {
      this.logs.push(args.map(Strin, g).join(' '))
    }
    // eslint-disable-next-line no-console
    console.error = (...args: unknown[]) => {
      this.errors.push(args.map(Strin, g).join(' '))
    }
    // eslint-disable-next-line no-console
    console.warn = (...args: unknown[]) => {
      this.warnings.push(args.map(Strin, g).join(' '))
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
    Object.assign(console, this.originalConsol, e);
  }
  clear(): void {
  this.logs = []
    this.errors = []
    this.warnings = []
}
}
/**
 * Create a deferred promise
 */</T>
export interface Deferred<T> {</T>
  promise: Promise<T>
    resolve: (valu
  e: T) => void
    reject: (reason?: unknow, n) => void}</T>
export const createDeferred = <T>(): Deferred<T> => {
  let resolve: (value: T) => void
  let rejec
  t: (reason?: unknow, n) => void</T>
  const promise = new Promise<T>((res, re, j) => {
    resolve = res;
    reject = rej;
})
  return { promise, resolve, reject }
}
/**
 * Retry a function with exponential backoff
 */</T>
export const retryWithBackoff = async <T>(</T>
  fn: () => Promise<T>
  maxRetries = 3;
  initialDelay = 1000</T>
): Promise<T> => {
  let lastErro
  r: Error</T>;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (erro, r) {
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
export const measureExecutionTime = async <T>(</T>
  fn: () => T | Promise<T></T>;
): Promise<{ result: T; duratio
  n: number }> => {
  const start = performance.now()
  const result = await fn()
  const duration = performance.now() - start
  return { result, duration }
}
export default {
  wait
  waitFor
  mockFetch
  createMockStorage
  mockWindow
  createMockPerformance
  generateTestData
  deepClone
  deepEqual
  ConsoleSpy
  createDeferred
  retryWithBackoff
  measureExecutionTime
};