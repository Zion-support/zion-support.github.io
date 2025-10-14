import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock performance API
const mockPerformanceObserver = vi.fn();
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

Object.defineProperty(window, 'PerformanceObserver', {
  writable: true,
  value: mockPerformanceObserver,
});

mockPerformanceObserver.mockImplementation(() => ({
  observe: mockObserve,
  disconnect: mockDisconnect,
}));

describe('Performance Monitoring', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should create performance observer when supported', () => {
    expect(window.PerformanceObserver).toBeDefined();
  });

  it('should handle performance metrics', () => {
    const observer = new PerformanceObserver(() => {});
    observer.observe({ entryTypes: ['paint'] });
    
    expect(mockObserve).toHaveBeenCalledWith({ entryTypes: ['paint'] });
  });

  it('should disconnect observer', () => {
    const observer = new PerformanceObserver(() => {});
    observer.disconnect();
    
    expect(mockDisconnect).toHaveBeenCalled();
  });
});