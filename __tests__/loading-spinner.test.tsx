import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    
    // Check that the spinner icon is rendered by looking for the SVG
    const spinner = document.querySelector('svg.lucide-loader-circle');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('w-6 h-6');
  });

  it('renders with custom text', () => {
    render(<LoadingSpinner text="Please wait..." />);
    
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<LoadingSpinner size="sm" />);
    let spinner = document.querySelector('svg.lucide-loader-circle');
    expect(spinner).toHaveClass('w-4 h-4');

    rerender(<LoadingSpinner size="md" />);
    spinner = document.querySelector('svg.lucide-loader-circle');
    expect(spinner).toHaveClass('w-6 h-6');

    rerender(<LoadingSpinner size="lg" />);
    spinner = document.querySelector('svg.lucide-loader-circle');
    expect(spinner).toHaveClass('w-8 h-8');
  });

  it('renders without text when text is empty', () => {
    render(<LoadingSpinner text="" />);
    
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<LoadingSpinner className="custom-class" />);
    
    const container = document.querySelector('.custom-class');
    expect(container).toBeInTheDocument();
  });
});