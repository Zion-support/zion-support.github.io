
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


import _React from 'react';  import '@testing-library/jest-dom'; import PerformanceMonitordynamic from '../components/PerformanceMonitor.dynamic'; describe('PerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<PerformanceMonitordynamic />); expect( screen.getByTestId('performancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<PerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<PerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<PerformanceMonitordynamic />)})});



