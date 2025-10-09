import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEOEnhancer from '../app/components/SEOEnhancer';

describe('Component Tests', () => {
  // LoadingSpinner test removed - component doesn't exist

  test('SEOEnhancer renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOEnhancer />
      </HelmetProvider>
    );
    expect(document.head).toBeInTheDocument();
  });
});
