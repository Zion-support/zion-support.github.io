import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from '../app/components/LoadingSpinner';
import SEOEnhancer from '../app/components/SEOEnhancer';

<<<<<<< HEAD
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
=======
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
