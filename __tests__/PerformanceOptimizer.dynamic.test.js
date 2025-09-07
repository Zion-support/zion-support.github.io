<<<<<<< HEAD
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
<<<<<<< HEAD
import PerformanceOptimizer from '../components/PerformanceOptimizer.dynamic';
describe("PerformanceOptimizer", () => {test("renders without crashing", () => {render(<PerformanceOptimizer />)expect(screen.getByTestId('performance-optimizer')).toBeInTheDocument()})})import React from 'react';  import '@testing-library/jest-dom'; import PerformanceOptimizer from '../components/PerformanceOptimizer.dynamic'; describe('PerformanceOptimizer',() => { test('renders without crashing',() => { render(<PerformanceOptimizer />)expect( screen.getByTestId('performanceoptimizer') ).toBeInTheDocument()})test('displays correct content',() => { render(<PerformanceOptimizer />)})test('handles user interactions',() => { render(<PerformanceOptimizer />)})test('applies correct styling',() => { render(<PerformanceOptimizer />)})})import { render, screen, fireEvent  } from '@testing-library/react';
describe('PerformanceOptimizer', () => {test('renders without crashing', () => {render(<PerformanceOptimizer />)expect(screen.getByTestId('performanceoptimizer')).toBeInTheDocument()})test('displays correct content', () => {render(<PerformanceOptimizer />)// Add specific content tests based on component;
  })test('handles user interactions', () => {render(<PerformanceOptimizer />)// Add interaction tests based on component functionality;
  })test('applies correct styling', () => {render(<PerformanceOptimizer />)// Add styling tests if needed;
  })})
=======
import PerformanceOptimizerdynamic from '../components/PerformanceOptimizer.dynamic';

describe('PerformanceOptimizerdynamic', () => {
  test('renders without crashing', () => {
    render(<PerformanceOptimizerdynamic />);
    expect(
      screen.getByTestId('performanceoptimizer.dynamic')
    ).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<PerformanceOptimizerdynamic />);
    // Add specific content tests based on component
  });

  test('handles user interactions', () => {
    render(<PerformanceOptimizerdynamic />);
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {
    render(<PerformanceOptimizerdynamic />);
    // Add styling tests if needed
  });
});
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
