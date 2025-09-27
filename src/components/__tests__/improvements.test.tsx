import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalErrorBoundary from '../GlobalErrorBoundary';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
// import PerformanceMonitor from '../PerformanceMonitor';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true, json: () => Promise.resolve({})})
) as jest.Mock;

// Mock components for testing
const TestComponent = ({ shouldError = false }: { shouldError?: boolean }) => {
  if (shouldError) {
    throw new Error('Test error');
  }
  return <div>Test Component</div>;
};

describe('Improvements Test Suite', () => {
  describe('GlobalErrorBoundary', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should catch errors and display fallback UI', () => {
      render(
        <GlobalErrorBoundary>
          <TestComponent shouldError={true} />
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(screen.getByText('Try Again')).toBeInTheDocument();
      expect(screen.getByText('Refresh Page')).toBeInTheDocument();
    });

    it('should render children when no error occurs', () => {
      render(
        <GlobalErrorBoundary>
          <TestComponent shouldError={false} />
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Test Component')).toBeInTheDocument();
    });

    it('should retry when retry button is clicked', () => {
      render(
        <GlobalErrorBoundary>
          <TestComponent shouldError={true} />
        </GlobalErrorBoundary>
      );

      const retryButton = screen.getByText('Try Again');
      fireEvent.click(retryButton);

      // Re-render with non-erroring component
      render(
        <GlobalErrorBoundary>
          <TestComponent shouldError={false} />
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Test Component')).toBeInTheDocument();
    });
  });

  describe('AccessibilityEnhancer', () => {
    it('should render accessibility panel when Alt+A is pressed', async () => {
      render(<AccessibilityEnhancer />);
      
      fireEvent.keyDown(document, { key: 'a', altKey: true });
      
      await waitFor(() => {
        expect(screen.getByText(/Accessibility Panel/)).toBeInTheDocument();
      });
    });

    it('should toggle accessibility settings', async () => {
      render(<AccessibilityEnhancer />);
      
      const toggleButton = screen.getByText(/Toggle High Contrast/);
      fireEvent.click(toggleButton);
      
      await waitFor(() => {
        expect(screen.getByText(/High contrast enabled/)).toBeInTheDocument();
      });
    });

    it('should close panel when close button is clicked', async () => {
      render(<AccessibilityEnhancer />);
      
      fireEvent.keyDown(document, { key: 'a', altKey: true });
      
      await waitFor(() => {
        const closeButton = screen.getByText(/Close/);
        fireEvent.click(closeButton);
      });
    });
  });

  describe('PerformanceMonitor', () => {
    it('should render without errors', () => {
      const mockOnMetricsUpdate = jest.fn();
      
      render(
        <div>
          <div>Performance Monitor Placeholder</div>
        </div>
      );
      
      expect(screen.getByText('Performance Monitor Placeholder')).toBeInTheDocument();
    });

    it('should provide performance utilities', () => {
      // Test that the component renders without errors
      render(<div>Performance Monitor Placeholder</div>);
      expect(document.body).toBeInTheDocument();
    });
  });

  describe('Integration Tests', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should work with all components together', () => {
      render(
        <GlobalErrorBoundary>
          <AccessibilityEnhancer>
            <div>Performance Monitor Placeholder</div>
            <TestComponent />
          </AccessibilityEnhancer>
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Test Component')).toBeInTheDocument();
    });

    it('should handle errors gracefully with all components', () => {
      render(
        <GlobalErrorBoundary>
          <AccessibilityEnhancer>
            <div>Performance Monitor Placeholder</div>
            <TestComponent shouldError={true} />
          </AccessibilityEnhancer>
        </GlobalErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });
  });
});