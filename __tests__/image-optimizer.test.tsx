import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock image optimizer component
const ImageOptimizer = ({ src, alt, width, height }: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid="optimized-image"
    />
  );
};

describe('ImageOptimizer', () => {
  it('should render with correct attributes', () => {
    render(
      <ImageOptimizer
        src="test.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', 'test.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
    expect(image).toHaveAttribute('width', '300');
    expect(image).toHaveAttribute('height', '200');
  });

  it('should render without crashing', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" />);
    expect(screen.getByTestId('optimized-image')).toBeInTheDocument();
  });
});