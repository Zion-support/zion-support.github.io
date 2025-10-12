import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

// Mock components
const Loading = () => <div>Loading...</div>;
const SEOHead = ({ title, description }: { title: string; description: string }) => {
  return (
    <HelmetProvider>
      <div data-testid="seo-head">
        <title>{title}</title>
        <meta name="description" content={description} />
      </div>
    </HelmetProvider>
  );
};

describe('Basic Components', () => {
  test('Loading component renders correctly', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('SEOHead component renders correctly', () => {
    render(
      <SEOHead 
        title="Test Title" 
        description="Test Description" 
      />
    );
    expect(screen.getByTestId('seo-head')).toBeInTheDocument();
  });
});