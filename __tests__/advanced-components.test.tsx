import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ErrorBoundary from '../app/components/ErrorBoundary';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Test content</div>;
};

// Mock onError callback
const onError = jest.fn();

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <div>Test content</div>
        </ErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
    expect(screen.getByText('We apologize for the inconvenience. Please try refreshing the page.')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  it('logs error to console in development mode', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // Set NODE_ENV to development
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </MemoryRouter>
    );

    expect(consoleSpy).toHaveBeenCalled();
    
    // Restore original NODE_ENV
    process.env.NODE_ENV = originalEnv;
    consoleSpy.mockRestore();
  });

  it('handles retry functionality', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const { rerender } = render(
      <MemoryRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </MemoryRouter>
    );

    const retryButton = screen.getByText('Try Again');
    expect(retryButton).toBeInTheDocument();
    
    // Click retry button
    retryButton.click();
    
    // Re-render with a component that doesn't throw
    rerender(
      <MemoryRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary>
      </MemoryRouter>
    );
    
    // Should render children again (without error)
    expect(screen.getByText('Test content')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });
});