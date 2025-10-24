'use client';

import React from 'react';

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
 * Mock fetch function for testing
 */
export const mockFetch = (response: any, delay: number = 0) => {
  return jest.fn().mockImplementation(() =>
    wait(delay).then(() => ({
      ok: true,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response)),
    }))
  );
};

/**
 * Create a mock component for testing
 */
export const createMockComponent = (name: string) => {
  const MockComponent = (props: any) => {
    return React.createElement('div', { 'data-testid': name, ...props });
  };
  MockComponent.displayName = name;
  return MockComponent;
};

/**
 * Generate test data
 */
export const generateTestData = (count: number, generator: (index: number) => any) => {
  return Array.from({ length: count }, (_, index) => generator(index));
};

/**
 * Mock localStorage for testing
 */
export const mockLocalStorage = () => {
  const store: Record<string, string> = {};

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
 * Mock window.location for testing
 */
export const mockLocation = (url: string) => {
  delete (window as any).location;
  window.location = new URL(url) as any;
};

/**
 * Create a mock event
 */
export const createMockEvent = (type: string, options: any = {}) => {
  return new Event(type, options);
};

/**
 * Mock IntersectionObserver for testing
 */
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
  window.IntersectionObserverEntry = jest.fn();
};

/**
 * Mock ResizeObserver for testing
 */
export const mockResizeObserver = () => {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver;
};

/**
 * Mock matchMedia for testing
 */
export const mockMatchMedia = (matches: boolean = false) => {
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
 * Setup test environment
 */
export const setupTestEnvironment = () => {
  mockLocalStorage();
  mockIntersectionObserver();
  mockResizeObserver();
  mockMatchMedia();
};

/**
 * Cleanup test environment
 */
export const cleanupTestEnvironment = () => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
};
