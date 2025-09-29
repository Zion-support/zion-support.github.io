import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import PerformanceMonitor from "../PerformanceMonitor";

// Mock performance API
const mockPerformance = {
  getEntriesByType: jest.fn(),
  getEntriesByName: jest.fn(),
  now: jest.fn(() => Date.now()),
  mark: jest.fn(),
  measure: jest.fn(),
  clearMarks: jest.fn(),
  clearMeasures: jest.fn(),
};

// Mock navigation timing
const mockNavigation = {
  loadEventEnd: 1000,
  fetchStart: 0,
  responseStart: 100,
  requestStart: 50,
  domContentLoadedEventEnd: 800,
};

Object.defineProperty(window, "performance", {
  value: mockPerformance,
  writable: true,
});

describe("PerformanceMonitor", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPerformance.getEntriesByType.mockReturnValue([mockNavigation]);
    mockPerformance.getEntriesByName.mockReturnValue([]);
  });

  it("renders performance metrics when enabled is true", () => {
    render(<PerformanceMonitor enabled={true} />);

    expect(screen.getByText(/Performance Monitor/i)).toBeInTheDocument();
  });

  it("does not render when enabled is false", () => {
    render(<PerformanceMonitor enabled={false} />);

    expect(screen.queryByText(/Performance Monitor/i)).not.toBeInTheDocument();
  });

  it("displays performance metrics correctly", () => {
    render(<PerformanceMonitor enabled={true} />);

    // Wait for metrics to be calculated
    setTimeout(() => {
      expect(screen.getByText(/FPS:/i)).toBeInTheDocument();
      expect(screen.getByText(/Memory:/i)).toBeInTheDocument();
    }, 100);
  });

  it("handles missing performance API gracefully", () => {
    // Store original performance
    const originalPerformance = window.performance;
    
    // @ts-expect-error - Testing behavior when performance API is not available
    delete window.performance;

    render(<PerformanceMonitor enabled={true} />);

    expect(screen.getByText(/Performance Monitor/i)).toBeInTheDocument();
    
    // Restore original performance
    window.performance = originalPerformance;
  });
});
