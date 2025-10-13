<<<<<<< HEAD
=======
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
<<<<<<< HEAD

import LoadingSpinner from '../app/components/LoadingSpinner';
import SEOEnhancer from '../app/components/SEOEnhancer';

=======
import LoadingSpinner from '../src/components/LoadingSpinner';
import SEOEnhancer from '../src/components/SEOEnhancer';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
