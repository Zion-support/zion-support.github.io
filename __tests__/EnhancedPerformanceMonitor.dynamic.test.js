<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedPerformanceMonitordynamic from '../components/EnhancedPerformanceMonitor.dynamic'; describe('EnhancedPerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<EnhancedPerformanceMonitordynamic />); expect( screen.getByTestId('enhancedperformancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedPerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<EnhancedPerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<EnhancedPerformanceMonitordynamic />)})});
=======
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedPerformanceMonitordynamic from '../components/EnhancedPerformanceMonitor.dynamic';

describe('EnhancedPerformanceMonitordynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedPerformanceMonitordynamic />);
    expect(screen.getByTestId('enhancedperformancemonitor.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
  test('displays correct content', () => {
    render(<EnhancedPerformanceMonitordynamic />);
  });
  test('handles user interactions', () => {
    render(<EnhancedPerformanceMonitordynamic />);
  });
  test('applies correct styling', () => {
    render(<EnhancedPerformanceMonitordynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import EnhancedPerformanceMonitordynamic from "./components/EnhancedPerformanceMonitor.dynamic"; describe("EnhancedPerformanceMonitordynamic",() => { test("renders without crashing",() => { render(<EnhancedPerformanceMonitordynamic />); expect( screen.getByTestId("enhancedperformancemonitor.dynamic") ).toBeInTheDocument()}); test("displays correct content",() => { render(<EnhancedPerformanceMonitordynamic />)}); test("handles user interactions",() => { render(<EnhancedPerformanceMonitordynamic />)}); test("applies correct styling",() => { render(<EnhancedPerformanceMonitordynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedPerformanceMonitordynamic from '../components/EnhancedPerformanceMonitor.dynamic'; describe('EnhancedPerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<EnhancedPerformanceMonitordynamic />); expect( screen.getByTestId('enhancedperformancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedPerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<EnhancedPerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<EnhancedPerformanceMonitordynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedPerformanceMonitordynamic from '../components/EnhancedPerformanceMonitor.dynamic'; describe('EnhancedPerformanceMonitordynamic',() => { test('renders without crashing',() => { render(<EnhancedPerformanceMonitordynamic />); expect( screen.getByTestId('enhancedperformancemonitor.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedPerformanceMonitordynamic />)}); test('handles user interactions',() => { render(<EnhancedPerformanceMonitordynamic />)}); test('applies correct styling',() => { render(<EnhancedPerformanceMonitordynamic />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
