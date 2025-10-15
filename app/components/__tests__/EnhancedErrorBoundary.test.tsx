import React from 'react';
import { render, screen } from '@testing-library/react';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

describe('EnhancedErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <EnhancedErrorBoundary>
        <div>Test content</div>
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error fallback when there is an error', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <EnhancedErrorBoundary>
        <ThrowError />
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});