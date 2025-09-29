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

// Mock bundleOptimizer
jest.mock('../../utils/bundleOptimizer', () => ({
  bundleOptimizer: {
    analyzeBundle: jest.fn(() => Promise.resolve({
      totalSize: 732420,
      gzippedSize: 195310,
      chunkCount: 8,
      largestChunk: 'vendor-react',
      duplicateModules: 12,
      unusedCode: 43950,
      compressionRatio: 73.0
    })),
    getOptimizationStrategies: jest.fn(() => [
      {
        name: 'Code Splitting',
        priority: 'high',
        impact: 25,
        description: 'Split large bundles into smaller, focused chunks',
        implementation: 'Use dynamic imports and React.lazy() for route-based splitting'
      }
    ]),
    generateOptimizationReport: jest.fn(() => '# Bundle Optimization Report\n\n## Current Metrics\n- **Total Size**: 732.42 KB')
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

  it('renders dashboard when visible', async () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    await waitFor(() => {
      expect(screen.getByText('Performance Dashboard')).toBeInTheDocument();
    });
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

  it('shows close button when onClose prop is provided', async () => {
    const mockOnClose = jest.fn();
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    await waitFor(() => {
      const closeButton = screen.getByRole('button', { name: '×' });
      expect(closeButton).toBeInTheDocument();
    });
    
    const closeButton = screen.getByRole('button', { name: '×' });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('displays monitoring status', async () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    await waitFor(() => {
      expect(screen.getByText('Optimization Strategies')).toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    const dashboard = screen.getByText('Performance Dashboard');
    expect(dashboard).toBeInTheDocument();
  });
});