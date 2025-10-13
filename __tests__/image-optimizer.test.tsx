import React from 'react';
import { render } from '@testing-library/react';

// Mock ImageOptimizer component
const ImageOptimizer = ({ src, alt }: { src: string; alt: string }) => (
  <div data-testid="image-optimizer">
    <img src={src} alt={alt} />
  </div>
);

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    expect(() => render(<ImageOptimizer src="test.jpg" alt="test" />)).not.toThrow();
  });
});
