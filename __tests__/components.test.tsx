import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '../app/components/LoadingSpinner';
import { SEOEnhancer } from '../app/components/SEOEnhancer';

describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('SEOEnhancer renders without crashing', () => {
    render(<SEOEnhancer />);
    expect(document.head).toBeInTheDocument();
  });
});
