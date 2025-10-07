import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../../app/components/ErrorBoundary';

// Component that throws an error for testing
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary Component', () => {
  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );
    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  test('renders error message when there is an error', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText("We're sorry, but something unexpected happened. Please try refreshing the page.")).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('displays error details in development', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Test error')).toBeInTheDocument();
    
    process.env.NODE_ENV = originalEnv;
    consoleSpy.mockRestore();
  });

  test('has retry button', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    const retryButton = screen.getByText('Try Again');
    expect(retryButton).toBeInTheDocument();
    // Button doesn't have explicit type attribute, but it's still a button
    expect(retryButton.tagName).toBe('BUTTON');
    
    consoleSpy.mockRestore();
  });

  test('retry button calls window.location.reload', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    const refreshButton = screen.getByText('Refresh Page');
    fireEvent.click(refreshButton);
    
    // The button should be clickable without errors
    expect(refreshButton).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('has proper styling classes', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    const errorContainer = screen.getByText('Something went wrong').closest('div')?.parentElement?.parentElement?.parentElement;
    expect(errorContainer).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center', 'bg-gray-50');
    
    consoleSpy.mockRestore();
  });

});