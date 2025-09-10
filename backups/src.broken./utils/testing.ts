// Testing utilities and helpers
import { vi } from 'vitest'
import React, { ReactElement } from 'react'

// Mock data generators
export const generateMockUser = (overrides: Partial<unknown> = {}) => ({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://via.placeholder.com/150',
  role: 'user',
  createdAt: new Date().toISOString(),
  ...overrides,
});

export const generateMockPost = (overrides: Partial<unknown> = {}) => ({
  id: '1',
  title: 'Test Post',
  content: 'This is a test post content',
  author: generateMockUser(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  ...overrides,
});

export const generateMockComment = (overrides: Partial<unknown> = {}) => ({
  id: '1',
  content: 'This is a test comment',
  author: generateMockUser(),
  postId: '1',
  createdAt: new Date().toISOString(),
  ...overrides,
});

// API mocking utilities
export const mockApiResponse = <T>(data: T, delay: number = 0) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

export const mockApiError = (message: string = 'API Error', status: number = 500) => {
  return Promise.reject(new Error(`${status}: ${message}`));
};

// Mock fetch
export const mockFetch = (responses: Record<string, unknown>) => {
  const originalFetch = global.fetch;
  
  global.fetch = vi.fn((input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();
    const response = responses[url];
    if (response) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(response),
        status: 200,
      } as Response);
    }
    return Promise.reject(new Error('Not found'));
  });

  return () => {
    global.fetch = originalFetch;
  };
};

// Test data factory
export const createTestData = {
  user: generateMockUser,
  users: (count: number) => Array.from({ length: count }, (_, i) => generateMockUser({ id: `${i + 1}` })),
  posts: (count: number) => Array.from({ length: count }, (_, i) => generateMockPost({ id: `${i + 1}` })),
  comments: (count: number, postId: string = '1') =>
    Array.from({ length: count }, (_, i) => generateMockComment({ id: `${i + 1}`, postId })),
};

// Custom matchers
export const customMatchers = {
  toBeInTheDocument: (element: HTMLElement | null) => {
    return element !== null && document.body.contains(element);
  },
  toHaveTextContent: (element: HTMLElement | null, text: string) => {
    return element?.textContent?.includes(text) ?? false;
  },
  toHaveClass: (element: HTMLElement | null, className: string) => {
    return element?.classList.contains(className) ?? false;
  },
  toHaveAttribute: (element: HTMLElement | null, attribute: string, value?: string) => {
    if (!element) return false;
    const attrValue = element.getAttribute(attribute);
    return value ? attrValue === value : attrValue !== null;
  },
};

// Accessibility testing
export const checkAccessibility = (container: HTMLElement) => {
  const issues: string[] = [];

  // Check for missing alt text on images
  const images = container.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.getAttribute('alt')) {
      issues.push(`Image ${index + 1} is missing alt text`);
    }
  });

  // Check for form labels
  const inputs = container.querySelectorAll('input, textarea, select');
  inputs.forEach((input, index) => {
    const id = input.getAttribute('id');
    if (id) {
      const label = container.querySelector(`label[for="${id}"]`);
      if (!label) {
        issues.push(`Input ${index + 1} is missing a label`);
      }
    }
  });

  // Check heading hierarchy
  const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > previousLevel + 1) {
      issues.push(`Heading hierarchy skipped at heading ${index + 1}`);
    }
    previousLevel = level;
  });

  // Check for focus management
  const focusableElements = container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusableElements.length > 0) {
    const firstElement = focusableElements[0] as HTMLElement;
    if (!firstElement.hasAttribute('tabindex') || firstElement.getAttribute('tabindex') !== '0') {
      issues.push('First focusable element should be properly marked');
    }
  }

  return issues;
};

// Performance testing utilities
export const measureRenderTime = async (component: ReactElement): Promise<number> => {
  const start = performance.now();
  // Render component here
  const end = performance.now();
  return end - start;
};

export const measureMemoryUsage = (): number => {
  if ('memory' in performance) {
    return (performance as any).memory.usedJSHeapSize;
  }
  return 0;
};

// Mock browser APIs
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
  return mockIntersectionObserver;
};

export const mockResizeObserver = () => {
  const mockResizeObserver = vi.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver;
  return mockResizeObserver;
};

export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
};

export const mockLocalStorage = () => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        Object.keys(store).forEach(key => delete store[key]);
      }),
      key: vi.fn((index: number) => Object.keys(store)[index] || null),
    },
  });
};

export const mockSessionStorage = () => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        Object.keys(store).forEach(key => delete store[key]);
      }),
      key: vi.fn((index: number) => Object.keys(store)[index] || null),
    },
  });
};

// Test environment setup
export const setupTestEnvironment = () => {
  // Mock console methods
  const originalConsole = { ...console };
  
  beforeEach(() => {
    console.warn = vi.fn();
    console.error = vi.fn();
  });

  afterEach(() => {
    Object.assign(console, originalConsole);
  });

  // Mock timers
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
};