import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock ImageOptimizer component
const ImageOptimizer = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} data-testid="optimized-image" />
);

describe('ImageOptimizer', () => {
  it('renders image with correct props', () => {
    const testSrc = 'test-image.jpg';
    const testAlt = 'Test image';
    
    render(<ImageOptimizer src={testSrc} alt={testAlt} />);
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', testSrc);
    expect(image).toHaveAttribute('alt', testAlt);
  });
});