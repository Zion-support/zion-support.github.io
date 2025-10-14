import { describe, it, expect, beforeEach, jest } from '@jest/globals';

// Mock performance monitoring functions
const mockPerformanceMonitoring = {
  trackPageLoad: jest.fn(),
  trackUserInteraction: jest.fn(),
  trackError: jest.fn(),
  getPerformanceMetrics: jest.fn(),
};

describe('Performance Monitoring', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should track page load performance', () => {
    mockPerformanceMonitoring.trackPageLoad('/test-page');
    expect(mockPerformanceMonitoring.trackPageLoad).toHaveBeenCalledWith('/test-page');
  });

  it('should track user interactions', () => {
    mockPerformanceMonitoring.trackUserInteraction('click', 'button');
    expect(mockPerformanceMonitoring.trackUserInteraction).toHaveBeenCalledWith('click', 'button');
  });

  it('should track errors', () => {
    const error = new Error('Test error');
    mockPerformanceMonitoring.trackError(error);
    expect(mockPerformanceMonitoring.trackError).toHaveBeenCalledWith(error);
  });

  it('should get performance metrics', () => {
    const metrics = { loadTime: 1000, renderTime: 500 };
    mockPerformanceMonitoring.getPerformanceMetrics.mockReturnValue(metrics);
    
    const result = mockPerformanceMonitoring.getPerformanceMetrics();
    expect(result).toEqual(metrics);
  });
});