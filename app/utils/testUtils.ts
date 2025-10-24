// Test utilities for React components and functions

export interface Deferred<T> {
  promise: Promise<T>
  resolve: (_value: T) => void
  reject: (_reason?: unknown) => void
}

export const createDeferred = <T>(): Deferred<T> => {
  let resolve: (_value: T) => void
  let reject: (_reason?: unknown) => void
  const promise = new Promise<T>((_res, _rej) => {
    resolve = _res
    reject = _rej
  })
  return { promise, resolve: resolve!, reject: reject! }
}

// Mock fetch function for testing
export const mockFetch = (response: unknown, delay = 0) => {
  return () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          ok: true,
          json: () => Promise.resolve(response),
        })
      }, delay)
    })
}

// Console spy for testing console methods
export class ConsoleSpy {
  private originalConsole: typeof console
  public logs: string[] = []
  public errors: string[] = []
  public warnings: string[] = []

  constructor() {
    this.originalConsole = { ...console }
    this.setupSpies()
  }

  private setupSpies() {
    console.log = (...args: unknown[]) => {
      this.logs.push(args.map(String).join(' '))
      this.originalConsole.log(...args)
    }

    console.error = (...args: unknown[]) => {
      this.errors.push(args.map(String).join(' '))
      this.originalConsole.error(...args)
    }

    console.warn = (...args: unknown[]) => {
      this.warnings.push(args.map(String).join(' '))
      this.originalConsole.warn(...args)
    }
  }

  restore() {
    console.log = this.originalConsole.log
    console.error = this.originalConsole.error
    console.warn = this.originalConsole.warn
  }

  clear() {
    this.logs = []
    this.errors = []
    this.warnings = []
  }
}

// Test data generators
export const generateTestUser = (overrides: Partial<User> = {}): User => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  role: 'user',
  ...overrides,
})

export const generateTestPost = (overrides: Partial<Post> = {}): Post => ({
  id: '1',
  title: 'Test Post',
  content: 'This is a test post',
  authorId: '1',
  publishedAt: new Date(),
  ...overrides,
})

// Type definitions for test data
export interface User {
  id: string
  name: string
  email: string
  role: string
}

export interface Post {
  id: string
  title: string
  content: string
  authorId: string
  publishedAt: Date
}

// Async test helpers
export const waitFor = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const waitForElement = (selector: string, timeout = 5000) => {
  return new Promise<Element>((resolve, reject) => {
    const element = document.querySelector(selector)
    if (element) {
      resolve(element)
      return
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector)
      if (element) {
        observer.disconnect()
        resolve(element)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    setTimeout(() => {
      observer.disconnect()
      reject(new Error(`Element ${selector} not found within ${timeout}ms`))
    }, timeout)
  })
}

// Mock localStorage for testing
export const mockLocalStorage = () => {
  const store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      Object.keys(store).forEach(key => delete store[key])
    },
  }
}

// Test environment setup
export const setupTestEnvironment = () => {
  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  })

  // Mock IntersectionObserver
  global.IntersectionObserver = class {
    observe = () => {}
    unobserve = () => {}
    disconnect = () => {}
  }

  // Mock ResizeObserver
  global.ResizeObserver = class {
    observe = () => {}
    unobserve = () => {}
    disconnect = () => {}
  }
}

// Cleanup test environment
export const cleanupTestEnvironment = () => {
  // Restore original implementations
  delete (window as any).matchMedia
  delete (global as any).IntersectionObserver
  delete (global as any).ResizeObserver
}