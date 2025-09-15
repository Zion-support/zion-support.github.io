import { renderHook, act } from '@testing-library/react';
import { useLazyLoad } from '../useLazyLoad';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe('useLazyLoad', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with isVisible false', () => {
    const { result } = renderHook(() => useLazyLoad());
    
    expect(result.current.isVisible).toBe(false);
    expect(result.current.elementRef).toBeDefined();
  });

  it('should use default options', () => {
    renderHook(() => useLazyLoad());
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
  });

  it('should use custom options', () => {
    const options = {
      threshold: 0.5,
      rootMargin: '100px',
      triggerOnce: false
    };
    
    renderHook(() => useLazyLoad(options));
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0.5,
        rootMargin: '100px'
      }
    );
  });

  it('should handle intersection callback', () => {
    const { result } = renderHook(() => useLazyLoad());
    
    // Get the callback function that was passed to IntersectionObserver
    const callback = mockIntersectionObserver.mock.calls[0][0];
    
    // Simulate intersection
    act(() => {
      callback([{ isIntersecting: true }]);
    });
    
    expect(result.current.isVisible).toBe(true);
  });

  it('should handle non-intersection callback', () => {
    const { result } = renderHook(() => useLazyLoad({ triggerOnce: false }));
    
    const callback = mockIntersectionObserver.mock.calls[0][0];
    
    // Simulate intersection
    act(() => {
      callback([{ isIntersecting: true }]);
    });
    
    expect(result.current.isVisible).toBe(true);
    
    // Simulate non-intersection
    act(() => {
      callback([{ isIntersecting: false }]);
    });
    
    expect(result.current.isVisible).toBe(false);
  });

  it('should maintain visibility when triggerOnce is true', () => {
    const { result } = renderHook(() => useLazyLoad({ triggerOnce: true }));
    
    const callback = mockIntersectionObserver.mock.calls[0][0];
    
    // Simulate intersection
    act(() => {
      callback([{ isIntersecting: true }]);
    });
    
    expect(result.current.isVisible).toBe(true);
    
    // Simulate non-intersection - should still be visible
    act(() => {
      callback([{ isIntersecting: false }]);
    });
    
    expect(result.current.isVisible).toBe(true);
  });
});