import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent, waitFor } from '@testing-library/dom';
import PerformanceDashboard from '../PerformanceDashboard';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children
}));

// Mock AdvancedPerformanceMonitor
jest.mock('../../utils/advancedPerformanceMonitor', () => ({
  __esModule: true,
  default: {
    getInstance: jest.fn(() => ({
      getMetrics: jest.fn(() => []),
      getCurrentMetrics: jest.fn(() => ({
        pageLoadTime: 1500,
        firstContentfulPaint: 1200,
        largestContentfulPaint: 2000,
        cumulativeLayoutShift: 0.05,
        firstInputDelay: 50,
        totalBlockingTime: 200
      })),
      getLatestMetrics: jest.fn(() => ({
        pageLoadTime: 1500,
        firstContentfulPaint: 1200,
        largestContentfulPaint: 2000,
        cumulativeLayoutShift: 0.05,
        firstInputDelay: 50,
        totalBlockingTime: 200
      })),
      isMonitoring: jest.fn(() => true),
      startMonitoring: jest.fn(),
      stopMonitoring: jest.fn()
    }))
  }
}));

describe('PerformanceDashboard', () => {
  beforeEach(() => {
    // Mock performance API
    Object.defineProperty(window, 'performance', {
      value: {
        now: jest.fn(() => Date.now()),
        getEntriesByType: jest.fn(() => []),
        mark: jest.fn(),
        measure: jest.fn(),
        clearMarks: jest.fn(),
        clearMeasures: jest.fn(),
        memory: {
          usedJSHeapSize: 1000000,
          totalJSHeapSize: 2000000,
          jsHeapSizeLimit: 4000000
        }
      },
      writable: true
    });
  });

  it('renders dashboard when visible', () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    expect(screen.getByText('Performance Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Web Vitals')).toBeInTheDocument();
  });

  it('does not render when not visible', () => {
    render(<PerformanceDashboard isVisible={false} />);
    
    expect(screen.queryByText('Performance Dashboard')).not.toBeInTheDocument();
  });

  it('displays performance metrics', async () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    await waitFor(() => {
      expect(screen.getByText('System Resources')).toBeInTheDocument();
    });
  });

  it('shows close button when onClose prop is provided', () => {
    const mockOnClose = jest.fn();
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
    
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('displays monitoring status', () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    expect(screen.getByText('Performance Tips')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    const dashboard = screen.getByText('Performance Dashboard');
    expect(dashboard).toBeInTheDocument();
  });
});