import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    const { container } = render(<LoadingSpinner />);
    
    // Check that the spinner container is rendered
    const spinnerContainer = container.querySelector('.flex.flex-col.items-center.justify-center.space-y-2');
    expect(spinnerContainer).toBeInTheDocument();
    expect(spinnerContainer).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-2');
  });

  it('renders with custom text', () => {
    render(<LoadingSpinner text="Please wait..." />);
    
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(<LoadingSpinner size="sm" />);
    const spinner = container.querySelector('svg');
    expect(spinner).toHaveClass('w-4', 'h-4');

    rerender(<LoadingSpinner size="md" />);
    expect(spinner).toHaveClass('w-6', 'h-6');

    rerender(<LoadingSpinner size="lg" />);
    expect(spinner).toHaveClass('w-8', 'h-8');
  });

  it('renders without text when text is empty', () => {
    render(<LoadingSpinner text="" />);
    
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<LoadingSpinner className="custom-class" />);
    
    const spinnerContainer = container.querySelector('.flex.flex-col.items-center.justify-center.space-y-2');
    expect(spinnerContainer).toHaveClass('custom-class');
  });
});