/**
 * Test utilities for React components and functions
 * Provides mocking and testing helpers
 */

/**
 * Wait for a specified amount of time
 */
export const wait = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

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
  response: any,
  status = 200,
  headers: Record<string, string> = {}
) => {
  return jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    headers: new Headers(headers),
    json: async () => response,
    text: async () => JSON.stringify(response)
  } as Response);
};

/**
 * Mock local storage
 */
export class MockStorage implements Storage {
  private store: Map<string, string> = new Map();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.get(key) || null;
  }

  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }
}

/**
 * Create a mock storage instance
 */
export const createMockStorage = (): MockStorage => new MockStorage();

/**
 * Mock window.location
 */
export const mockLocation = (url: string) => {
  delete (window as any).location;
  window.location = new URL(url) as any;
};

/**
 * Mock window.matchMedia
 */
export const mockMatchMedia = (matches: boolean) => {
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
      dispatchEvent: jest.fn(),
    })),
  });
};

/**
 * Mock IntersectionObserver
 */
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
};

/**
 * Mock ResizeObserver
 */
export const mockResizeObserver = () => {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.ResizeObserver = mockResizeObserver;
};

/**
 * Mock scrollTo
 */
export const mockScrollTo = () => {
  window.scrollTo = jest.fn();
};

/**
 * Mock console methods
 */
export const mockConsole = () => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
};

/**
 * Restore console methods
 */
export const restoreConsole = () => {
  jest.restoreAllMocks();
};

/**
 * Create a mock event
 */
export const createMockEvent = (type: string, options: any = {}) => {
  return new Event(type, options);
};

/**
 * Create a mock keyboard event
 */
export const createMockKeyboardEvent = (type: string, options: any = {}) => {
  return new KeyboardEvent(type, options);
};

/**
 * Create a mock mouse event
 */
export const createMockMouseEvent = (type: string, options: any = {}) => {
  return new MouseEvent(type, options);
};

/**
 * Create a mock form event
 */
export const createMockFormEvent = (type: string, options: any = {}) => {
  return new Event(type, options);
};

/**
 * Mock fetch with error
 */
export const mockFetchError = (error: Error) => {
  return jest.fn().mockRejectedValue(error);
};

/**
 * Mock fetch with network error
 */
export const mockFetchNetworkError = () => {
  return jest.fn().mockRejectedValue(new Error('Network error'));
};

/**
 * Mock fetch with timeout
 */
export const mockFetchTimeout = () => {
  return jest.fn().mockImplementation(() => 
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 100)
    )
  );
};

/**
 * Setup test environment
 */
export const setupTestEnvironment = () => {
  mockMatchMedia(true);
  mockIntersectionObserver();
  mockResizeObserver();
  mockScrollTo();
  mockConsole();
};

/**
 * Cleanup test environment
 */
export const cleanupTestEnvironment = () => {
  restoreConsole();
  jest.clearAllMocks();
};