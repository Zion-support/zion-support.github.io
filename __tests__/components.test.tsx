import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../src/components/LoadingSpinner';
import SEOEnhancer from '../src/components/SEOEnhancer';

describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('SEOEnhancer renders without crashing', () => {
    render(<SEOEnhancer />);
    expect(screen.getByTestId('seo-enhancer')).toBeInTheDocument();
  });
});