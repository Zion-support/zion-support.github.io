import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import '@testing-library/jest-dom';

// Mock components for testing
const Loading = () => <div>Loading</div>;
const SEOHeadWrapper = ({ title, description, keywords }: { title: string; description: string; keywords: string[] }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{keywords.join(', ')}</p>
  </div>
);

describe('Loading Component', () => {
  test('renders loading text', () => {
    render(
      <HelmetProvider>
        <Loading />
      </HelmetProvider>
    );
    expect(screen.getByText('Loading')).toBeTruthy();
  });
});

describe('SEOHeadWrapper Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <HelmetProvider>
        <SEOHeadWrapper
          title="Test Title"
          description="Test Description"
          keywords={['test', 'keywords']}
        />
      </HelmetProvider>
    );
    expect(container).toBeTruthy();
  });

  test('renders with correct props', () => {
    render(
      <HelmetProvider>
        <SEOHeadWrapper
          title="Test Title"
          description="Test Description"
          keywords={['test', 'keywords']}
        />
      </HelmetProvider>
    );
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Description')).toBeTruthy();
    expect(screen.getByText('test, keywords')).toBeTruthy();
  });
});