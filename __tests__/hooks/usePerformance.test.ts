import { renderHook, act } from '@testing-library/react';
import { usePerformance } from '../../app/hooks/usePerformance';

// Mock performance API
const mockPerformance = {
  now: jest.fn(),
  mark: jest.fn(),
  measure: jest.fn(),
  getEntriesByType: jest.fn(),
  getEntriesByName: jest.fn(),
  clearMarks: jest.fn(),
  clearMeasures: jest.fn(),
};

Object.defineProperty(window, 'performance', {
  value: mockPerformance,
  writable: true,
});

// Mock web-vitals
jest.mock('web-vitals', () => ({
  getCLS: jest.fn((callback) => callback({ value: 0.1, entries: [] })),
  getFID: jest.fn((callback) => callback({ value: 100, entries: [] })),
  getFCP: jest.fn((callback) => callback({ value: 1200, entries: [] })),
  getLCP: jest.fn((callback) => callback({ value: 2000, entries: [] })),
  getTTFB: jest.fn((callback) => callback({ value: 800, entries: [] })),
}));

describe('usePerformance Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPerformance.now.mockReturnValue(1000);
  });

  test('initializes with default values', () => {
    const { result } = renderHook(() => usePerformance());
    
    expect(result.current.metrics).toEqual({
      cls: 0,
      fid: 0,
      fcp: 0,
      lcp: 0,
      ttfb: 0,
    });
    expect(result.current.isLoading).toBe(true);
  });

  test('measures performance after mount', async () => {
    const { result } = renderHook(() => usePerformance());
    
    expect(result.current.isLoading).toBe(true);
    
    // Wait for metrics to be loaded
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    
    expect(result.current.isLoading).toBe(false);
    expect(result.current.metrics.cls).toBe(0.1);
    expect(result.current.metrics.fid).toBe(100);
    expect(result.current.metrics.fcp).toBe(1200);
    expect(result.current.metrics.lcp).toBe(2000);
    expect(result.current.metrics.ttfb).toBe(800);
  });

  test('startTiming creates performance mark', () => {
    const { result } = renderHook(() => usePerformance());
    
    act(() => {
      result.current.startTiming('test-operation');
    });
    
    expect(mockPerformance.mark).toHaveBeenCalledWith('test-operation-start');
  });

  test('endTiming creates performance measure', () => {
    const { result } = renderHook(() => usePerformance());
    
    act(() => {
      result.current.startTiming('test-operation');
      result.current.endTiming('test-operation');
    });
    
    expect(mockPerformance.measure).toHaveBeenCalledWith(
      'test-operation',
      'test-operation-start',
      'test-operation-end'
    );
  });

  test('getTiming returns performance entry', () => {
    const mockEntry = { duration: 150, name: 'test-operation' };
    mockPerformance.getEntriesByName.mockReturnValue([mockEntry]);
    
    const { result } = renderHook(() => usePerformance());
    
    const timing = result.current.getTiming('test-operation');
    expect(timing).toBe(mockEntry);
    expect(mockPerformance.getEntriesByName).toHaveBeenCalledWith('test-operation');
  });

  test('getTiming returns null when no entry found', () => {
    mockPerformance.getEntriesByName.mockReturnValue([]);
    
    const { result } = renderHook(() => usePerformance());
    
    const timing = result.current.getTiming('non-existent');
    expect(timing).toBeNull();
  });

  test('clearTiming clears performance marks and measures', () => {
    const { result } = renderHook(() => usePerformance());
    
    act(() => {
      result.current.clearTiming('test-operation');
    });
    
    expect(mockPerformance.clearMarks).toHaveBeenCalledWith('test-operation-start');
    expect(mockPerformance.clearMarks).toHaveBeenCalledWith('test-operation-end');
    expect(mockPerformance.clearMeasures).toHaveBeenCalledWith('test-operation');
  });

  test('getAllTimings returns all performance entries', () => {
    const mockEntries = [
      { name: 'operation1', duration: 100 },
      { name: 'operation2', duration: 200 },
    ];
    mockPerformance.getEntriesByType.mockReturnValue(mockEntries);
    
    const { result } = renderHook(() => usePerformance());
    
    const allTimings = result.current.getAllTimings();
    expect(allTimings).toBe(mockEntries);
    expect(mockPerformance.getEntriesByType).toHaveBeenCalledWith('measure');
  });

  test('handles performance API errors gracefully', async () => {
    // Mock performance API to throw error
    mockPerformance.getEntriesByType.mockImplementation(() => {
      throw new Error('Performance API error');
    });
    
    const { result } = renderHook(() => usePerformance());
    
    // Should not crash and should return empty array
    const allTimings = result.current.getAllTimings();
    expect(allTimings).toEqual([]);
  });

  test('handles web-vitals errors gracefully', async () => {
    // Mock web-vitals to throw error
    const { getCLS } = require('web-vitals');
    getCLS.mockImplementation((callback) => {
      try {
        throw new Error('Web vitals error');
      } catch (error) {
        callback({ value: 0, entries: [] });
      }
    });
    
    const { result } = renderHook(() => usePerformance());
    
    // Should not crash and should use default values
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    
    expect(result.current.metrics.cls).toBe(0);
  });
});