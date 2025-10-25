import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import AdvancedErrorBoundary from '../app/components/AdvancedErrorBoundary';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Test content</div>;
};

// Mock onError callback
const onError = jest.fn();

describe('AdvancedErrorBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <MemoryRouter>
        <AdvancedErrorBoundary>
          <div>Test content</div>
        </AdvancedErrorBoundary>
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
        <AdvancedErrorBoundary onError={onError}>
          <ThrowError shouldThrow={true} />
        </AdvancedErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
    expect(screen.getByText('Go Home')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  it('calls onError callback when error occurs', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <MemoryRouter>
        <AdvancedErrorBoundary onError={onError}>
          <ThrowError shouldThrow={true} />
        </AdvancedErrorBoundary>
      </MemoryRouter>
    );

    expect(onError).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('handles retry functionality', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const { rerender } = render(
      <MemoryRouter>
        <AdvancedErrorBoundary>
          <ThrowError shouldThrow={true} />
        </AdvancedErrorBoundary>
      </MemoryRouter>
    );

    const retryButton = screen.getByText('Try Again');
    expect(retryButton).toBeInTheDocument();
    
    // Click retry button
    retryButton.click();
    
    // Rerender with shouldThrow=false to simulate the error being fixed
    rerender(
      <MemoryRouter>
        <AdvancedErrorBoundary>
          <ThrowError shouldThrow={false} />
        </AdvancedErrorBoundary>
      </MemoryRouter>
    );
    
    // Should render children again
    expect(screen.getByText('Test content')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });
});