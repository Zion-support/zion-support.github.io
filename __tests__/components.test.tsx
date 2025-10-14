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

  test('ErrorBoundary handles errors gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('Components render with MemoryRouter', () => {
    render(
      <MemoryRouter>
        <div>Router test</div>
      </MemoryRouter>
    );
    
    expect(screen.getByText('Router test')).toBeInTheDocument();
  });
});