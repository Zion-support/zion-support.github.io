import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalErrorBoundary from '../GlobalErrorBoundary';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceMonitor from '../PerformanceMonitor';

// Mock components for testing
const TestComponent = ({ shouldError = false }: { shouldError?: boolean }) => {
  if (shouldError) {
    throw new Error('Test error');
  }
  return <div>Test Component</div>;
};

describe('Improvements Test Suite', () => {
  describe('GlobalErrorBoundary', () => {
    it('should catch errors and display fallback UI', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <GlobalErrorBoundary>
          <TestComponent shouldError={true} />
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(screen.getByText('Try Again')).toBeInTheDocument();
      expect(screen.getByText('Reload Page')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });

    it('should render children when no error occurs', () => {
      render(
        <GlobalErrorBoundary>
          <TestComponent />
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Test Component')).toBeInTheDocument();
    });

    it('should retry when retry button is clicked', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      const { rerender } = render(
        <GlobalErrorBoundary>
          <TestComponent shouldError={true} />
        </GlobalErrorBoundary>
      );

      const retryButton = screen.getByText('Try Again');
      fireEvent.click(retryButton);

      // Re-render with non-erroring component
      rerender(
        <GlobalErrorBoundary>
          <TestComponent shouldError={false} />
        </GlobalErrorBoundary>
      );

      // After retry, component should render normally
      expect(screen.getByText('Test Component')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });

  describe('AccessibilityEnhancer', () => {
    it('should render accessibility panel when Alt+A is pressed', async () => {
      render(
        <AccessibilityEnhancer>
          <div>Test Content</div>
        </AccessibilityEnhancer>
      );

      // Press Alt+A
      fireEvent.keyDown(document, { key: 'a', altKey: true });

      await waitFor(() => {
        expect(screen.getByText('Accessibility Settings')).toBeInTheDocument();
      });
    });

    it('should toggle accessibility settings', async () => {
      render(
        <AccessibilityEnhancer>
          <div>Test Content</div>
        </AccessibilityEnhancer>
      );

      // Open panel
      fireEvent.keyDown(document, { key: 'a', altKey: true });

      await waitFor(() => {
        expect(screen.getByText('Accessibility Settings')).toBeInTheDocument();
      });

      // Toggle high contrast
      const highContrastCheckbox = screen.getByLabelText('High Contrast');
      fireEvent.click(highContrastCheckbox);

      expect(highContrastCheckbox).toBeChecked();
    });

    it('should close panel when close button is clicked', async () => {
      render(
        <AccessibilityEnhancer>
          <div>Test Content</div>
        </AccessibilityEnhancer>
      );

      // Open panel
      fireEvent.keyDown(document, { key: 'a', altKey: true });

      await waitFor(() => {
        expect(screen.getByText('Accessibility Settings')).toBeInTheDocument();
      });

      // Close panel
      const closeButton = screen.getByLabelText('Close accessibility panel');
      fireEvent.click(closeButton);

      await waitFor(() => {
        expect(screen.queryByText('Accessibility Settings')).not.toBeInTheDocument();
      });
    });
  });

  describe('PerformanceMonitor', () => {
    it('should render without errors', () => {
      const mockOnMetricsUpdate = jest.fn();
      
      render(
        <PerformanceMonitor
          onMetricsUpdate={mockOnMetricsUpdate}
          enableRealTimeMonitoring={true}
          enableMemoryTracking={true}
          enableNetworkTracking={true}
        />
      );

      // Component should render without throwing
      expect(document.body).toBeInTheDocument();
    });

    it('should provide performance utilities', () => {
      const { performanceUtils } = require('../PerformanceMonitor');
      
      // Test debounce
      const debouncedFn = performanceUtils.debounce((value: string) => value, 100);
      expect(typeof debouncedFn).toBe('function');

      // Test throttle
      const throttledFn = performanceUtils.throttle((value: string) => value, 100);
      expect(typeof throttledFn).toBe('function');
    });
  });

  describe('Integration Tests', () => {
    it('should work with all components together', () => {
      render(
        <GlobalErrorBoundary>
          <AccessibilityEnhancer>
            <PerformanceMonitor
              onMetricsUpdate={() => {}}
              enableRealTimeMonitoring={true}
              enableMemoryTracking={true}
              enableNetworkTracking={true}
            >
              <TestComponent />
            </PerformanceMonitor>
          </AccessibilityEnhancer>
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Test Component')).toBeInTheDocument();
    });

    it('should handle errors gracefully with all components', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <GlobalErrorBoundary>
          <AccessibilityEnhancer>
            <PerformanceMonitor>
              <TestComponent shouldError={true} />
            </PerformanceMonitor>
          </AccessibilityEnhancer>
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });
});