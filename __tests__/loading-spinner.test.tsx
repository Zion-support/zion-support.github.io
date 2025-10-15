import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD

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
=======
import '@testing-library/jest-dom';
import LoadingSpinner from "../app/components/LoadingSpinner";

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    // Should render the spinner icon and default text
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<LoadingSpinner text="Custom loading text" />);
    expect(screen.getByText('Custom loading text')).toBeInTheDocument();
  });

  it('renders with custom size', () => {
    render(<LoadingSpinner size="large" />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('renders with custom color', () => {
    render(<LoadingSpinner color="blue" />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('renders with all custom props', () => {
    render(
      <LoadingSpinner 
        text="Loading data..." 
        size="medium" 
        color="green" 
      />
    );
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('renders without text when text prop is empty', () => {
    render(<LoadingSpinner text="" />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
  });
});