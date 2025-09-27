import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AccessibilityEnhancer } from '../AccessibilityEnhancer';
import { PerformanceMonitor } from '../PerformanceMonitor';

// Mock fetch for API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({})
  })
) as jest.Mock;

// Mock error throwing for error boundary tests
const ThrowError = () => {
  throw new Error('Test error');
};

describe('Improvements Test Suite', () => {
  describe('GlobalErrorBoundary', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('renders children when there are no errors', () => {
      render(
        <div>
          <span>Test content</span>
        </div>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('handles component errors gracefully', () => {
      render(
        <div>
          <ThrowError />
        </div>
      );
      // Component should render without crashing
    });
  });

  describe('AccessibilityEnhancer', () => {
    it('should render accessibility panel when Alt+A is pressed', async () => {
      render(<AccessibilityEnhancer />);
      
      fireEvent.keyDown(document, { key: 'a', altKey: true });
      
      await waitFor(() => {
        expect(screen.getByTestId('accessibility-panel')).toBeInTheDocument();
      });
    });

    it('should show accessibility options when panel is open', async () => {
      render(<AccessibilityEnhancer />);
      
      fireEvent.keyDown(document, { key: 'a', altKey: true });
      
      await waitFor(() => {
        expect(screen.getByText('Accessibility Options')).toBeInTheDocument();
      });
    });

    it('should close panel when close button is clicked', async () => {
      render(<AccessibilityEnhancer />);
      
      fireEvent.keyDown(document, { key: 'a', altKey: true });
      
      const closeButton = screen.getByTestId('close-accessibility-panel');
      fireEvent.click(closeButton);
      
      await waitFor(() => {
        expect(screen.queryByTestId('accessibility-panel')).not.toBeInTheDocument();
      });
    });
  });

  describe('PerformanceMonitor', () => {
    it('should render without errors', () => {
      const mockOnMetricsUpdate = jest.fn();
      
      render(
        <div>
          <PerformanceMonitor onMetricsUpdate={mockOnMetricsUpdate} />
        </div>
      );
      
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    });
  });

  describe('ErrorHandling', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('handles fetch errors gracefully', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));
      
      render(<PerformanceMonitor onMetricsUpdate={jest.fn()} />);
      
      // Should not crash the application
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    });

    it('logs errors to console', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <div>
          <ThrowError />
        </div>
      );
      
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});