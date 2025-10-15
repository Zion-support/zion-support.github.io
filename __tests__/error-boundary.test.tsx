import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorHandler from '../app/components/ErrorHandler';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorHandler', () => {
  beforeEach(() => {
    // Suppress console.error for these tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <BrowserRouter>
        <ErrorHandler>
          <ThrowError shouldThrow={false} />
        </ErrorHandler>
      </BrowserRouter>
    );
    
    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('renders error UI when child throws error', () => {
    render(
      <BrowserRouter>
        <ErrorHandler>
          <ThrowError shouldThrow={true} />
        </ErrorHandler>
      </BrowserRouter>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
