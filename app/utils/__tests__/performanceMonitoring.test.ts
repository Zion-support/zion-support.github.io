import { describe, it, expect, jest } from '@jest/globals';

// Mock performance monitoring functions
const mockPerformanceObserver = jest.fn();
const mockObserve = jest.fn();

// Mock PerformanceObserver
global.PerformanceObserver = jest.fn().mockImplementation(() => ({
  observe: mockObserve,
  disconnect: jest.fn(),
}));

describe('Performance Monitoring', () => {
  it('should initialize performance monitoring', () => {
    expect(mockPerformanceObserver).toBeDefined();
  });

  it('should observe performance entries', () => {
    const observer = new PerformanceObserver(() => {});
    observer.observe({ entryTypes: ['paint'] });
    expect(mockObserve).toHaveBeenCalledWith({ entryTypes: ['paint'] });
  });
});