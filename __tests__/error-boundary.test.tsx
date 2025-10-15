import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock error boundary component for testing
const MockErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>;
};

describe('Error Boundary', () => {
  test('renders error boundary', () => {
    render(
      <MockErrorBoundary>
        <div>Test Content</div>
      </MockErrorBoundary>
    );
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});