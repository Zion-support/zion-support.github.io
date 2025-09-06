<<<<<<< HEAD
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
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';  import '@testing-library/jest-dom'; import PerformanceMonitordynamic from '../components/PerformanceMonitor.dynamic'; describe('PerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<PerformanceMonitordynamic />); expect( screen.getByTestId('performancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<PerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<PerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<PerformanceMonitordynamic />)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react';  import '@testing-library/jest-dom'; import PerformanceMonitordynamic from '../components/PerformanceMonitor.dynamic'; describe('PerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<PerformanceMonitordynamic />); expect( screen.getByTestId('performancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<PerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<PerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<PerformanceMonitordynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
