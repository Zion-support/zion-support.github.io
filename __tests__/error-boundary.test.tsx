import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../app/components/ErrorBoundary';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary>
      </BrowserRouter>
    );
    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('renders error fallback when there is an error', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </BrowserRouter>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    consoleSpy.mockRestore();
  });
});
