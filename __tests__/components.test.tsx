import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorBoundary from '../app/components/ErrorBoundary';

describe('Component Tests', () => {
  test('ErrorBoundary renders without crashing', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('ErrorBoundary catches errors and displays fallback', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    // Should render the error boundary fallback
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  test('Components render with MemoryRouter', () => {
    render(
      <MemoryRouter>
        <div>Test with router</div>
      </MemoryRouter>
    );
    expect(screen.getByText('Test with router')).toBeInTheDocument();
  });
});