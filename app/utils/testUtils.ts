'use client'
/**
 * Testing Utilities
 * Provides helper functions and utilities for testing
 */

/**
 * Wait for a specified amount of time
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Wait for a condition to be true
 */
export const waitFor = async (
  condition: () => boolean,
  timeout = 5000,
  interval = 100
): Promise<void> => {
  const startTime = Date.now()
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`)
    }
    await wait(interval)
  }
}

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
    ) as typeof fetch
  }
}

/**
 * Create a mock element for testing
 */
export const createMockElement = (tagName: string): HTMLElement => {
  return {
    tagName: tagName.toUpperCase(),
    textContent: '',
    innerHTML: '',
    className: '',
    id: '',
    style: {} as CSSStyleDeclaration,
    setAttribute: jest.fn(),
    getAttribute: jest.fn(),
    removeAttribute: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    focus: jest.fn(),
    blur: jest.fn(),
    click: jest.fn(),
    scrollIntoView: jest.fn(),
    querySelector: jest.fn(),
    querySelectorAll: jest.fn(() => []),
    appendChild: jest.fn(),
    removeChild: jest.fn(),
    insertBefore: jest.fn(),
    replaceChild: jest.fn(),
    cloneNode: jest.fn(() => createMockElement(tagName)),
    parentNode: null,
    childNodes: [],
    firstChild: null,
    lastChild: null,
    nextSibling: null,
    previousSibling: null,
    nodeType: 1,
    nodeName: tagName.toUpperCase(),
    nodeValue: null,
    ownerDocument: null
  } as unknown as HTMLElement
}

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
  } as unknown as Window

  return mockWin
}

/**
 * Mock IntersectionObserver for testing
 */
export const mockIntersectionObserver = () => {
  const mockObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
    takeRecords: jest.fn(() => [])
  }

  if (typeof global !== 'undefined') {
    (global as typeof global & { IntersectionObserver: typeof IntersectionObserver }).IntersectionObserver = jest.fn(() => mockObserver) as any
  }

  return mockObserver
}

/**
 * Mock ResizeObserver for testing
 */
export const mockResizeObserver = () => {
  const mockObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }

  if (typeof global !== 'undefined') {
    (global as typeof global & { ResizeObserver: typeof ResizeObserver }).ResizeObserver = jest.fn(() => mockObserver) as any
  }

  return mockObserver
}

/**
 * Mock Performance API for testing
 */
export const mockPerformance = () => {
  const mockPerf = {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn()
  }

  if (typeof global !== 'undefined') {
    (global as typeof global & { performance: typeof performance }).performance = mockPerf as any
  }

  return mockPerf
}

/**
 * Mock requestAnimationFrame for testing
 */
export const mockRequestAnimationFrame = () => {
  const mockRAF = jest.fn((callback: FrameRequestCallback) => {
    return setTimeout(callback, 16)
  })

  if (typeof global !== 'undefined') {
    (global as typeof global & { requestAnimationFrame: typeof requestAnimationFrame }).requestAnimationFrame = mockRAF
  }

  return mockRAF
}

/**
 * Setup all mocks for testing
 */
export const setupTestMocks = () => {
  mockIntersectionObserver()
  mockResizeObserver()
  mockPerformance()
  mockRequestAnimationFrame()
}