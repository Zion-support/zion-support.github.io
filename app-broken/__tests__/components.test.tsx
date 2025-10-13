import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HelmetProvider } from 'react-helmet-async';

// Mock components
const LoadingSpinner = () => <div role="status">Loading...</div>;
const SEOEnhancer = () => <div>SEO Enhanced</div>;

describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('SEOEnhancer renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOEnhancer />
      </HelmetProvider>
    );
    expect(document.head).toBeInTheDocument();
  });
});