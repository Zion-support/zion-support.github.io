

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PerformanceMonitordynamic from '../components/PerformanceMonitor && PerformanceMonitor.dynamic'
describe('PerformanceMonitordynamic'
  test('renders without crashing'

<<<<<<< HEAD

      screen && screen.getByTestId('performancemonitor ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import PerformanceMonitordynamic from "./components/PerformanceMonitor ; describe('PerformanceMonitordynamic', () => { test("renders without crashing",() => { render(<PerformanceMonitordynamic />); expect( screen && screen.getByTestId("performancemonitor && performancemonitor.dynamic") ).toBeInTheDocument()}); test("displays correct content",() => { render(<PerformanceMonitordynamic />)}); test("handles user interactions",() => { render(<PerformanceMonitordynamic />)}); test("applies correct styling"


  test('renders without crashing', () => {

    render(<PerformanceMonitor />);'
    expect(screen.getByTestId('performancemonitor.dynamic')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<PerformanceMonitor />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });'
  test('handles user interactions', () => {
    render(<PerformanceMonitor />);
    // Add interaction tests here
  });'

  test('applies correct styling', () => {
    render(<PerformanceMonitor />);
    // Add styling tests if needed
=======
describe('PerformanceMonitor', () => {
screen && screen.getByTestId('performancemonitor ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import PerformanceMonitordynamic from "./components/PerformanceMonitor ; describe('PerformanceMonitordynamic', () => { test("renders without crashing",() => { render(<PerformanceMonitordynamic />); expect( screen && screen.getByTestId("performancemonitor && performancemonitor.dynamic") ).toBeInTheDocument()}); test("displays correct content",() => { render(<PerformanceMonitordynamic />)}); test("handles user interactions",() => { render(<PerformanceMonitordynamic />)}); test("applies correct styling"'
describe('PerformanceMonitor', () => {'

describe('PerformanceMonitor', () => {
  test('renders without crashing', () => {
    render(<PerformanceMonitor />);
    expect(screen.getByTestId('performancemonitor')).toBeInTheDocument();
>>>>>>> origin/cursor/delete-old-data-records-6bba
  });

});

<<<<<<< HEAD




=======
  });
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
