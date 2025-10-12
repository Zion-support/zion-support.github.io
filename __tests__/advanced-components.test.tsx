import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
// Mock components;
  return <div data-testid="error-boundary">{children}</div>}
  return <div data-testid="seo-optimizer">{title} - {description}</div>}
  return <div data-testid="performance-monitor"><div>Performance Monitor</div>
</div>}
// Mock component that throws an error;
  if (shouldThrow) {
    throw new Error('Test error')}
  return <div><div>Test content</div>
</div>}
// Test component for error boundary tests;
// 
// 
// 
  })
})

    render(
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()})
    
      .spyOn(console, 'error')
 {})
    render(
    )
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument()
    expect(screen.getByText(/Try Again/)).toBeInTheDocument()
    expect(screen.getByText('Reload Page')).toBeInTheDocument()
    expect(screen.getByText('Go to Homepage')).toBeInTheDocument()
    consoleSpy.mockRestore()})
    
      .spyOn(console, 'error')
 {})
    render(
    )
    expect(onError).toHaveBeenCalled()
    consoleSpy.mockRestore()})
    
      .spyOn(console, 'error')
 {})
    let shouldThrow = true;
    
    shouldThrow = false;
    fireEvent.click(retryButton)
    // After retry, the error boundary should reset and show the child component;
      expect(
        screen.queryByText('Oops! Something went wrong')
      ).not.toBeInTheDocument()})
    consoleSpy.mockRestore()})})
  
 setTimeout(resolve, 100))
    expect(document.title).toBe('Test Title')})
    
    // Just verify component renders without crashing;
      expect(container).toBeTruthy()})})
    
    // Just verify component renders without crashing;
      expect(container).toBeTruthy()})})
    
    // Just verify component renders without crashing;
      expect(container).toBeTruthy()})})})
  // Mock performance API;
  
  class MockPerformanceObserver {
    constructor(callback: PerformanceObserverCallback) {
      this.callback = callback}
    callback: PerformanceObserverCallback;
    observe() {}
    disconnect() {}
    takeRecords() { return []}
    // Mock performance API;
    Object.defineProperty(window, 'performance', {
      value: mockPerformance,
      writable: true,
      configurable: true,
    })
    // Mock PerformanceObserver;
    global.PerformanceObserver = MockPerformanceObserver as unknown as typeof PerformanceObserver})
    jest.clearAllMocks()})
    
    mockPerformance.getEntriesByName.mockReturnValue([
      { startTime: 2000 }, // Poor FCP;
    ])
    render(
    )
    // Should show recommendations for poor performance;
    expect(screen.getByText('Recommendations:')).toBeInTheDocument()
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true })})
    
      .spyOn(console, 'error')
 {})
    // In React testing, errors are caught by error boundaries;
    // We just verify the component doesn't crash the test;
      render(
      );
    }).not.toThrow();
    consoleSpy.mockRestore();
  });
});
