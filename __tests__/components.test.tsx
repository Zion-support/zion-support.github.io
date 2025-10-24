import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import '@testing-library/jest-dom';
import Loading from '../app/components/Loading';
import SEOHead from '../app/components/SEOHead';

describe('Loading Component', () => {
  test('renders service text', () => {
    render(<Loading />);
    expect(screen.getByText('Service')).toBeTruthy();
  });
});

describe('SEOHead Component', () => {
  test('renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOHead 
          title="Test Title"
          description="Test Description"
          keywords={['test', 'keywords']}
        />
      </HelmetProvider>
    );
    expect(document.head).toBeTruthy();
  });
});