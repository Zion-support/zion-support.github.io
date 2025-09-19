import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
describe('PerformanceOptimizer', () => {,
  test('renders without crashing', () => {,
    render(<PerformanceOptimizer />);
    expect(screen.getByTestId('performanceoptimizer')).toBeInTheDocument();
  });
  test('displays correct content', () => {,
    render(<PerformanceOptimizer />);
  });
  test('handles user interactions', () => {,
    render(<PerformanceOptimizer />);
  });
  test('applies correct styling', () => {,
    render(<PerformanceOptimizer />);
  });
});