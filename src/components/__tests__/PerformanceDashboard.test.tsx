import React from "react";
import { render } from "@testing-library/react";
import { screen, fireEvent, waitFor } from "@testing-library/dom";
import PerformanceDashboard from "../PerformanceDashboard";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock AdvancedPerformanceMonitor
jest.mock("../../utils/advancedPerformanceMonitor", () => ({
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
        totalBlockingTime: 200,
      })),
      getLatestMetrics: jest.fn(() => ({
        pageLoadTime: 1500,
        firstContentfulPaint: 1200,
        largestContentfulPaint: 2000,
        cumulativeLayoutShift: 0.05,
        firstInputDelay: 50,
        totalBlockingTime: 200,
      })),
      isMonitoring: jest.fn(() => true),
      startMonitoring: jest.fn(),
      stopMonitoring: jest.fn(),
    })),
  },
}));

<<<<<<< HEAD
describe("PerformanceDashboard", () => {
=======
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
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
  beforeEach(() => {
    // Mock performance API
    Object.defineProperty(window, "performance", {
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
          jsHeapSizeLimit: 4000000,
        },
      },
      writable: true,
    });
  });

<<<<<<< HEAD
  it("renders dashboard when visible", () => {
    render(<PerformanceDashboard isVisible={true} />);

    expect(screen.getByText("Performance Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Web Vitals")).toBeInTheDocument();
=======
  it('renders dashboard when visible', async () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    await waitFor(() => {
      expect(screen.getByText('Performance Dashboard')).toBeInTheDocument();
    });
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
  });

  it("does not render when not visible", () => {
    render(<PerformanceDashboard isVisible={false} />);

    expect(screen.queryByText("Performance Dashboard")).not.toBeInTheDocument();
  });

  it("displays performance metrics", async () => {
    render(<PerformanceDashboard isVisible={true} />);

    await waitFor(() => {
      expect(screen.getByText("System Resources")).toBeInTheDocument();
    });
  });

<<<<<<< HEAD
  it("shows close button when onClose prop is provided", () => {
    const mockOnClose = jest.fn();
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

=======
  it('shows close button when onClose prop is provided', async () => {
    const mockOnClose = jest.fn();
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    await waitFor(() => {
      const closeButton = screen.getByRole('button', { name: '×' });
      expect(closeButton).toBeInTheDocument();
    });
    
    const closeButton = screen.getByRole('button', { name: '×' });
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

<<<<<<< HEAD
  it("displays monitoring status", () => {
    render(<PerformanceDashboard isVisible={true} />);

    expect(screen.getByText("Performance Tips")).toBeInTheDocument();
=======
  it('displays monitoring status', async () => {
    render(<PerformanceDashboard isVisible={true} />);
    
    await waitFor(() => {
      expect(screen.getByText('Optimization Strategies')).toBeInTheDocument();
    });
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
  });

  it("has proper accessibility attributes", () => {
    render(<PerformanceDashboard isVisible={true} />);

    const dashboard = screen.getByText("Performance Dashboard");
    expect(dashboard).toBeInTheDocument();
  });
});
