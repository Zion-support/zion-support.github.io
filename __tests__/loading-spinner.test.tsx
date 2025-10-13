import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<LoadingSpinner text="Please wait..." />);
    
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<LoadingSpinner size="sm" />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveClass('w-4 h-4');

    rerender(<LoadingSpinner size="md" />);
    expect(spinner).toHaveClass('w-6 h-6');

    rerender(<LoadingSpinner size="lg" />);
    expect(spinner).toHaveClass('w-8 h-8');
  });

  it('renders with empty text when text is empty', () => {
    render(<LoadingSpinner text="" />);
    
    const textElement = screen.getByText('', { selector: 'p' });
    expect(textElement).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<LoadingSpinner className="custom-class" />);
    
    const container = screen.getByText('Loading...').parentElement;
    expect(container).toHaveClass('custom-class');
  });
});