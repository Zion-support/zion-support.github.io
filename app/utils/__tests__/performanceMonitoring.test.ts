import { performanceMonitoring } from '../performanceMonitoring';

describe('performanceMonitoring', () => {
  it('should initialize correctly', () => {
    expect(performanceMonitoring).toBeDefined();
  });

  it('should track performance metrics', () => {
    const metrics = performanceMonitoring.getMetrics();
    expect(metrics).toBeDefined();
  });
});