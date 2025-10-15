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
<<<<<<< HEAD
  beforeEach(() => {
    // Suppress console.error for these tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
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

<<<<<<< HEAD
  it('renders error UI when there is an error', () => {
=======
  it('renders error fallback when there is an error', () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </BrowserRouter>
    );
    
<<<<<<< HEAD
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
=======
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
  });
});
