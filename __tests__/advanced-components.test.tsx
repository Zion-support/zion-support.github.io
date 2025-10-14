import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import AdvancedSEOOptimizer from "../app/components/AdvancedSEOOptimizer";
import AdvancedPerformanceMonitor from "../app/components/AdvancedPerformanceMonitor";

// Mock component for testing error boundary
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error content</div>;
};

describe("Advanced Components", () => {

  describe("AdvancedSEOOptimizer", () => {
    test("renders without crashing", () => {
      render(
        <HelmetProvider>
          <AdvancedSEOOptimizer />
        </HelmetProvider>
      );
      expect(screen.getByText('Advanced SEO Optimizer')).toBeInTheDocument();
    });
  });

  describe('MockAdvancedSEOOptimizer', () => {
    it('renders without crashing', () => {
      render(<MockAdvancedSEOOptimizer />);
      expect(screen.getByText('Advanced SEO Optimizer')).toBeInTheDocument();
    });
  });
});