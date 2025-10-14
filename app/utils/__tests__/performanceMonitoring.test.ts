import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Mock performance API
const mockPerformanceObserver = vi.fn();
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

Object.defineProperty(window, 'PerformanceObserver', {
  writable: true,
  value: mockPerformanceObserver
});

mockPerformanceObserver.mockImplementation(() => ({
  observe: mockObserve,
  disconnect: mockDisconnect
}));

// Mock performance.getEntriesByType
Object.defineProperty(performance, 'getEntriesByType', {
  writable: true,
  value: vi.fn(() => [])
});

describe('Performance Monitoring', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create PerformanceObserver instances', () => {
    expect(mockPerformanceObserver).toHaveBeenCalled();
  });

  it('should observe paint entries', () => {
    expect(mockObserve).toHaveBeenCalledWith({ entryTypes: ['paint'] });
  });

  it('should observe largest-contentful-paint entries', () => {
    expect(mockObserve).toHaveBeenCalledWith({ entryTypes: ['largest-contentful-paint'] });
  });

  it('should observe first-input entries', () => {
    expect(mockObserve).toHaveBeenCalledWith({ entryTypes: ['first-input'] });
  });

  it('should observe layout-shift entries', () => {
    expect(mockObserve).toHaveBeenCalledWith({ entryTypes: ['layout-shift'] });
  });
});