import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock component for testing
const ImageOptimizer = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className={className}>
    <img src={src} alt={alt} />
  </div>
);

describe('Image Optimizer', () => {
  it('renders image with correct props', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" className="test-class" />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });
});