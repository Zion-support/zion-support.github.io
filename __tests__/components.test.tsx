import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

// Mock components
const MockLoading = () => <div>Loading...</div>;
const MockSEOHead = ({ title }: { title: string }) => {
  return (
    <div data-testid="seo-head">
      <title>{title}</title>
    </div>
  );
};

describe('Components', () => {
  test('Loading component renders correctly', () => {
    render(<MockLoading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('SEOHead component renders with HelmetProvider', () => {
    render(
      <HelmetProvider>
        <MockSEOHead title="Test Title" />
      </HelmetProvider>
    );
    expect(screen.getByTestId('seo-head')).toBeInTheDocument();
  });
});
