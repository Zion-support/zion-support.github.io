import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Loading from '../app/components/Loading';
import SEOHead from '../app/components/SEOHead';

describe('Loading Component', () => {
  test('renders loading text', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeTruthy();
  });
});

describe('SEOHead Component', () => {
  test('renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOHead />
      </HelmetProvider>
    );
    expect(document.head).toBeTruthy();
  });
});