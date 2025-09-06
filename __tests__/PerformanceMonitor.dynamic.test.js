<<<<<<< HEAD
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PerformanceMonitor from "../components/PerformanceMonitor.dynamic";
describe("PerformanceMonitor", () => {
  test("renders without crashing", () => {
    render(<PerformanceMonitor />);
    expect(screen.getByTestId("performance-monitor")).toBeInTheDocument();
  });
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
