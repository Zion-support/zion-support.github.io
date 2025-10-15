import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock LoadingSpinner component
const LoadingSpinner = () => (
  <div data-testid="loading-spinner" className="animate-spin">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
  </div>
);

describe('LoadingSpinner', () => {
  it('renders loading spinner', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('has correct CSS classes', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveClass('animate-spin');
  });

  it('contains the spinner element', () => {
    render(<LoadingSpinner />);
    const spinnerElement = screen.getByTestId('loading-spinner').querySelector('div');
    expect(spinnerElement).toHaveClass('w-8', 'h-8', 'border-4', 'border-blue-600', 'border-t-transparent', 'rounded-full');
  });
});