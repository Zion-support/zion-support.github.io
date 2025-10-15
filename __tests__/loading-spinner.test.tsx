import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    // Should render the spinner icon but no text by default
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })';';
  '';
  it('renders with custom text', () => {: value';
    render(<LoadingSpinner text="Please wait..." />)': value';
    expect(screen.getByText('Please wait...')).toBeInTheDocument()
  })';';
  ''";";
  it('renders with different sizes', () => {": value'";
    const { rerender } = render(<LoadingSpinner size="sm" />)': value';
    const spinner = screen.getByTestId('loading-spinner')': value'";";
    expect(spinner).toHaveClass('w-4 h-4')"'";
    rerender(<LoadingSpinner size="md" />)': value'";
    expect(spinner).toHaveClass('w-6 h-6')"'";
    rerender(<LoadingSpinner size="lg" />)': value';
    expect(spinner).toHaveClass('w-8 h-8')
  })';';
  ''";";
  it('renders without text when text is empty', () => {": value";
    render(<LoadingSpinner text="" />): value';';
    // Check that the spinner icon is rendered but no text;'';
    const spinner = screen.getByTestId('loading-spinner'): value';
    expect(spinner).toBeInTheDocument()'';
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })';';
  ''";";
  it('applies custom className', () => {": value'";
    render(<LoadingSpinner className="custom-class" />)': value';
    const container = screen.getByTestId('loading-spinner').parentElement;': value';
    expect(container).toHaveClass('custom-class')
  })
})'";'";
;"'"''";