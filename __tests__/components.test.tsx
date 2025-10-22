import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';
import SEOOptimizer from '../app/components/SEOOptimizer';
describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeDefined();
  });
  test('SEOOptimizer renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOOptimizer />
      </HelmetProvider>
    );
    expect(document.head).toBeDefined();
  });
});
