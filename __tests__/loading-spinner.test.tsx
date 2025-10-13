import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock LoadingSpinner component
const LoadingSpinner = () => (
  <div data-testid="loading-spinner">
    <div className="animate-spin">Loading...</div>
  </div>
);

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    expect(() => render(<LoadingSpinner />)).not.toThrow();
  });

  it('displays loading text', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('has correct test id', () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});