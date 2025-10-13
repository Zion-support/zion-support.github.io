import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../app/components/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders without crashing', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
