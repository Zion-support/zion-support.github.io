import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';
describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
// Should render the spinner icon but no text by default
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument(); });
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