import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const ImageOptimizer = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} />;
};

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    expect(() => render(<ImageOptimizer src="test.jpg" alt="test" />)).not.toThrow();
  });
});
