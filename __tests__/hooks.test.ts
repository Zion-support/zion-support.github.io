import { usePerformanceMonitoring } from '../app/hooks/usePerformanceMonitoring';
import { usePerformanceOptimization } from '../app/hooks/usePerformanceOptimization';

describe('Hooks Tests', () => {
  test('usePerformanceMonitoring hook exists', () => {
    expect(typeof usePerformanceMonitoring).toBe('function');
  });

  test('usePerformanceOptimization hook exists', () => {
    expect(typeof usePerformanceOptimization).toBe('function');
  });
});