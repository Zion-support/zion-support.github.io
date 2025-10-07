import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../../app/components/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('renders without crashing', () => {
    render(<LoadingSpinner />);
    const container = screen.getByRole('generic');
    expect(container).toBeInTheDocument();
  });

  test('displays loading text when provided', () => {
    render(<LoadingSpinner text="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('has spinning animation class', () => {
    render(<LoadingSpinner />);
    const spinnerElement = document.querySelector('.animate-spin');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('has proper styling classes', () => {
    render(<LoadingSpinner />);
    const container = screen.getByRole('generic');
    expect(container).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center');
  });

  test('spinner element has correct classes', () => {
    render(<LoadingSpinner />);
    const spinnerElement = document.querySelector('.animate-spin');
    expect(spinnerElement).toHaveClass(
      'animate-spin',
      'rounded-full',
      'border-2',
      'border-gray-300',
      'w-8',
      'h-8'
    );
  });

  test('renders with different sizes', () => {
    render(<LoadingSpinner size="lg" />);
    const spinnerElement = document.querySelector('.w-12.h-12');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('renders with different colors', () => {
    render(<LoadingSpinner color="blue" />);
    const spinnerElement = document.querySelector('.text-blue-600');
    expect(spinnerElement).toBeInTheDocument();
  });
});