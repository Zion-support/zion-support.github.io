'use client'

import React from 'react'

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
        json: async () => response
      } as Response)
    )
  }
}

/**
 * Restore fetch to original implementation
 */
export const restoreFetch = (): void => {
  if (typeof global !== 'undefined' && 'fetch' in global) {
    delete (global as any).fetch
  }
}

/**
 * Create a mock component for testing
 */
export const createMockComponent = (name: string) => {
  const MockComponent = () => {
    return React.createElement('div', { 'data-testid': name }, name)
  }
  MockComponent.displayName = name
  return MockComponent
}

/**
 * Generate test data
 */
export const generateTestData = (type: string, count: number): any[] => {
  const data: any[] = []
  for (let i = 0; i < count; i++) {
    switch (type) {
      case 'user':
        data.push({
          id: i + 1,
          name: `User ${i + 1}`,
          email: `user${i + 1}@example.com`,
          createdAt: new Date().toISOString()
        })
        break
      case 'product':
        data.push({
          id: i + 1,
          name: `Product ${i + 1}`,
          price: Math.floor(Math.random() * 1000) + 10,
          category: ['Electronics', 'Clothing', 'Books'][Math.floor(Math.random() * 3)]
        })
        break
      default:
        data.push({ id: i + 1, name: `Item ${i + 1}` })
    }
  }
  return data
}

/**
 * Mock localStorage for testing
 */
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
    }
  }
}

/**
 * Mock sessionStorage for testing
 */
export const mockSessionStorage = () => {
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
    }
  }
}

/**
 * Create a mock event
 */
export const createMockEvent = (type: string, options: Partial<Event> = {}) => {
  const event = new Event(type, { bubbles: true, cancelable: true })
  Object.assign(event, options)
  return event
}

/**
 * Create a mock keyboard event
 */
export const createMockKeyboardEvent = (key: string, options: Partial<KeyboardEvent> = {}) => {
  const event = new KeyboardEvent('keydown', { 
    bubbles: true, 
    cancelable: true, 
    key,
    ...options 
  })
  return event
}

/**
 * Create a mock mouse event
 */
export const createMockMouseEvent = (type: string, options: Partial<MouseEvent> = {}) => {
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    ...options
  })
  return event
}

/**
 * Assert that a function throws an error
 */
export const expectToThrow = async (fn: () => Promise<void>, expectedError?: string) => {
  try {
    await fn()
    throw new Error('Expected function to throw an error')
  } catch (error) {
    if (expectedError && error instanceof Error && !error.message.includes(expectedError)) {
      throw new Error(`Expected error to contain "${expectedError}", but got "${error.message}"`)
    }
  }
}

/**
 * Create a mock API response
 */
export const createMockApiResponse = <T>(data: T, status = 200) => {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
    text: async () => JSON.stringify(data)
  } as Response
}

/**
 * Mock console methods for testing
 */
export const mockConsole = () => {
  const originalConsole = { ...console }
  const mockConsole = {
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn()
  }
  
  Object.assign(console, mockConsole)
  
  return {
    mockConsole,
    restore: () => Object.assign(console, originalConsole)
  }
}

export default {
  wait,
  waitFor,
  mockFetch,
  restoreFetch,
  createMockComponent,
  generateTestData,
  mockLocalStorage,
  mockSessionStorage,
  createMockEvent,
  createMockKeyboardEvent,
  createMockMouseEvent,
  expectToThrow,
  createMockApiResponse,
  mockConsole
}