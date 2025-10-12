import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Loading from '../app/components/Loading';
import SEOHead from '../app/components/SEOHead';

describe('Components', () => {
  test('renders Loading component', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders SEOHead component', () => {
    render(
      <HelmetProvider>
        <SEOHead title="Test Title" description="Test Description" />
      </HelmetProvider>
    );
    expect(document.head).toBeInTheDocument();
  });
});