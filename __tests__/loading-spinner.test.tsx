import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    // Should render the spinner icon but no text by default
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<LoadingSpinner text="Please wait..." />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<LoadingSpinner size="sm" />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveClass('h-4', 'w-4');
    
    rerender(<LoadingSpinner size="md" />);
    expect(spinner).toHaveClass('h-8', 'w-8');
    
    rerender(<LoadingSpinner size="lg" />);
    expect(spinner).toHaveClass('h-12', 'w-12');
  });

  it('renders without text when text is empty', () => {
    render(<LoadingSpinner text="" />);
    // Check that the spinner icon is rendered but no text
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<LoadingSpinner className="custom-class" />);
    const container = screen.getByTestId('loading-spinner').parentElement;
    expect(container).toHaveClass('custom-class');
  });
});
