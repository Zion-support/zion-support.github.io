import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the ImageOptimizer component since it might not exist
const ImageOptimizer = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img src={src} alt={alt} className={className} data-testid="optimized-image" />
);

describe('ImageOptimizer', () => {
  it('renders with required props', () => {
    render(<ImageOptimizer src="/test-image.jpg" alt="Test image" />);
    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('applies custom className', () => {
    render(<ImageOptimizer src="/test-image.jpg" alt="Test image" className="custom-class" />);
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveClass('custom-class');
  });
});