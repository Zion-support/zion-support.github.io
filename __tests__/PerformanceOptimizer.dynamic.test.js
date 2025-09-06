<<<<<<< HEAD
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PerformanceOptimizer from "../components/PerformanceOptimizer.dynamic";
describe("PerformanceOptimizer", () => {
  test("renders without crashing", () => {
    render(<PerformanceOptimizer />);
    expect(screen.getByTestId("performance-optimizer")).toBeInTheDocument();
  });
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
