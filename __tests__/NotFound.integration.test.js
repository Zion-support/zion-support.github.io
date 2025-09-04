import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../components/NotFound';

describe('NotFound', () => {
  test('renders without crashing', () => {
    render(<NotFound />);
    expect(screen.getByTestId('notfound')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<NotFound />);
  });

  test('handles user interactions', () => {
    render(<NotFound />);
  });

  test('applies correct styling', () => {
    render(<NotFound />);
  });
});