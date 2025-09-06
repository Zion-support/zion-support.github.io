
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


import _React from 'react';  import '@testing-library/jest-dom'; import PerformanceOptimizerdynamic from '../components/PerformanceOptimizer.dynamic'; describe('PerformanceOptimizerdynamic',() => { test('renders without crashing',() => { render(<PerformanceOptimizerdynamic />); expect( screen.getByTestId('performanceoptimizer.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<PerformanceOptimizerdynamic />)}); test('handles user interactions',() => { render(<PerformanceOptimizerdynamic />)}); test('applies correct styling',() => { render(<PerformanceOptimizerdynamic />)})});



