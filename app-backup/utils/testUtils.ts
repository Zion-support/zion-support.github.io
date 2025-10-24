
'use client'
/**
 * Testing Utilities
 * Provides helper functions and utilities for testing
 */
/**
 * Wait for a specified amount of time
 */
export const wait = $2;
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>
  maxRetries = 3
  initialDelay = 1000
): Promise<T> => {
  let lastErro,
  r: Error
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
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
export const measureExecutionTime = async <T>(
  fn: () => T | Promise<T>
): Promise<{ result: T; duratio,
  n: number }> => {
  const start = $2;
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
}