import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptimizedImage from '../components/OptimizedImage.dynamic';

describe('OptimizedImage', () => {
  test('renders without crashing', () => {
    render(<OptimizedImage />);
    expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<OptimizedImage />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<OptimizedImage />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<OptimizedImage />);
    // Add styling tests here
  });
});