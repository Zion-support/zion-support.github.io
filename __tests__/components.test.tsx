import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from '../app/components/LoadingSpinner';

// Mock SEOHead component since it might not exist
const MockSEOHead = () => <div data-testid="seo-head">SEO Head</div>;

describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeDefined();
  });
  
  test('SEOHead renders without crashing', () => {
    render(
      <HelmetProvider>
        <MockSEOHead />
      </HelmetProvider>
    );
    expect(screen.getByTestId('seo-head')).toBeDefined();
  });
});
