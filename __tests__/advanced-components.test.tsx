import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import EnhancedErrorBoundary from "../app/components/EnhancedErrorBoundary";
import EnhancedSEOHead from "../app/components/EnhancedSEOHead";
import EnhancedPerformanceMonitor from "../app/components/EnhancedPerformanceMonitor";

describe("Enhanced Components", () => {
  describe("EnhancedErrorBoundary", () => {
    test("renders correctly", () => {
      render(<EnhancedErrorBoundary />);
      expect(screen.getByText("EnhancedErrorBoundary")).toBeInTheDocument();
    });
  });

  describe("EnhancedSEOHead", () => {
    test("renders correctly", () => {
      render(
        <HelmetProvider>
          <EnhancedSEOHead />
        </HelmetProvider>
      );
      expect(screen.getByText("EnhancedSEOHead")).toBeInTheDocument();
    });
  });

  describe("EnhancedPerformanceMonitor", () => {
    test("renders correctly", () => {
      render(<EnhancedPerformanceMonitor />);
      expect(screen.getByText("EnhancedPerformanceMonitor")).toBeInTheDocument();
    });
  });
});
