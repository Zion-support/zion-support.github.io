<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

describe('PerformanceOptimizer', () => {
  test('renders without crashing', () => {
    render(<PerformanceOptimizer />);
    expect(screen.getByTestId('performanceoptimizer')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<PerformanceOptimizer />);
    // Add specific content tests here
  });

  test('handles user interactions', () => {
    render(<PerformanceOptimizer />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<PerformanceOptimizer />);
    // Add styling tests here
  });
});
=======
import _React from 'react"  import '@testing-library/jest-dom import PerformanceOptimizer from '../components/PerformanceOptimizer" describe('PerformanceOptimizer',() => {' test('renders without crashing',() => {' render(<PerformanceOptimizer / />) expect(screen.getByTestId("performanceoptimizer")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<PerformanceOptimizer / />) }) test('handles user interactions',() => {' render(<PerformanceOptimizer / />) }) test('applies correct styling',() => {' render(<PerformanceOptimizer / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
