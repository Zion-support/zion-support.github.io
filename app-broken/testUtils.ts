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
 * Wait for an element to appear in the DOM
 */
export const waitForElement = async (
  selector: string,
  timeout = 5000,
  interval = 100
): Promise<Element | null> => {
  const startTime = Date.now();
  
  while (Date.now() - startTime < timeout) {
    const element = document.querySelector(selector);
    if (element) return element;
    await wait(interval);
  }
  
  return null;
};

/**
 * Mock fetch for testing
 */
export const mockFetch = (response: any, status = 200) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(response),
    text: () => Promise.resolve(JSON.stringify(response)),
  });
};

/**
 * Reset all mocks
 */
export const resetMocks = () => {
  jest.clearAllMocks();
  if (global.fetch) {
    (global.fetch as jest.Mock).mockRestore();
  }
};

/**
 * Create a mock event
 */
export const createMockEvent = (type: string, options: any = {}) => {
  return new Event(type, options);
};

/**
 * Create a mock form event
 */
export const createMockFormEvent = (formData: Record<string, string>) => {
  const event = new Event('submit') as any;
  event.preventDefault = jest.fn();
  event.target = {
    elements: Object.keys(formData).reduce((acc, key) => {
      acc[key] = { value: formData[key] };
      return acc;
    }, {} as any)
  };
  return event;
};