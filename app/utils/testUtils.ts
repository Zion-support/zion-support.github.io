'use client';

/**
 * Test utilities for mocking browser APIs and creating test environments
 */

export const createMockWindow = () => {
  if (typeof global !== 'undefined') {
    global.window = {
      location: {
        href: '',
        origin: '',
        pathname: '/',
        search: '',
        hash: '',
      },
      navigator: {
        userAgent: 'test-agent',
        language: 'en-US',
        platform: 'test-platform',
      },
      document: {
        title: 'Test Document',
        createElement: jest.fn(() => createMockElement('div')),
        querySelector: jest.fn(),
        querySelectorAll: jest.fn(() => []),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    } as any;
  }
};

export const createMockElement = (tagName: string) => ({
  tagName: tagName.toUpperCase(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  setAttribute: jest.fn(),
  getAttribute: jest.fn(),
  classList: {
    add: jest.fn(),
    remove: jest.fn(),
    contains: jest.fn(),
  },
});

export const setupBrowserMocks = () => {
  // Mock IntersectionObserver
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });

  // Mock ResizeObserver
  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    value: jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });

  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Mock performance
  Object.defineProperty(window, 'performance', {
    writable: true,
    value: {
      now: jest.fn(() => Date.now()),
      getEntriesByType: jest.fn(() => []),
      mark: jest.fn(),
      measure: jest.fn(),
    },
  });

  // Mock requestAnimationFrame
  Object.defineProperty(window, 'requestAnimationFrame', {
    writable: true,
    value: jest.fn(cb => setTimeout(cb, 16)),
  });

  // Mock cancelAnimationFrame
  Object.defineProperty(window, 'cancelAnimationFrame', {
    writable: true,
    value: jest.fn(id => clearTimeout(id)),
  });
};