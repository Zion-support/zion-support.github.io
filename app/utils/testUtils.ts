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
export const mockFetch = (response: any, status = 200) => {
  return jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(response),
    text: () => Promise.resolve(JSON.stringify(response)),
  });
};

/**
 * Create a mock event
 */
export const createMockEvent = (type: string, properties: any = {}) => {
  return {
    type,
    target: {
      value: properties.value || '',
      name: properties.name || '',
      checked: properties.checked || false,
    },
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
    ...properties,
  };
};

/**
 * Mock localStorage
 */
export const mockLocalStorage = () => {
  const store: { [key: string]: string } = {};
  
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      Object.keys(store).forEach(key => delete store[key]);
    }),
  };
};

/**
 * Mock window.location
 */
export const mockLocation = (url: string) => {
  delete (window as any).location;
  window.location = new URL(url) as any;
};

/**
 * Create a mock component
 */
export const createMockComponent = (name: string) => {
  const MockComponent = (props: any) => {
    return { type: 'div', props: { 'data-testid': name, ...props } };
  };
  MockComponent.displayName = name;
  return MockComponent;
};

/**
 * Generate test data
 */
export const generateTestData = (type: string, count = 1) => {
  const data: any[] = [];
  
  for (let i = 0; i < count; i++) {
    switch (type) {
      case 'user':
        data.push({
          id: i + 1,
          name: `Test User ${i + 1}`,
          email: `test${i + 1}@example.com`,
          role: 'user',
        });
        break;
      case 'product':
        data.push({
          id: i + 1,
          name: `Test Product ${i + 1}`,
          price: Math.floor(Math.random() * 1000) + 10,
          category: 'test',
        });
        break;
      default:
        data.push({ id: i + 1, name: `Test Item ${i + 1}` });
    }
  }
  
  return count === 1 ? data[0] : data;
};

/**
 * Mock console methods
 */
export const mockConsole = () => {
  const originalConsole = { ...console };
  
  beforeEach(() => {
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
  });
  
  afterEach(() => {
    Object.assign(console, originalConsole);
  });
  
  return originalConsole;
};

/**
 * Create a mock API response
 */
export const createMockApiResponse = (data: any, status = 200) => {
  return {
    data,
    status,
    statusText: status >= 200 && status < 300 ? 'OK' : 'Error',
    headers: {},
    config: {},
  };
};

/**
 * Mock IntersectionObserver
 */
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
  return mockIntersectionObserver;
};

/**
 * Mock ResizeObserver
 */
export const mockResizeObserver = () => {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver;
  return mockResizeObserver;
};