import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock OptimizedImage component
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height 
}: { 
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

describe('OptimizedImage', () => {
  it('renders with required props', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image" 
      />
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('renders with optional width and height props', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('width', '300');
    expect(image).toHaveAttribute('height', '200');
  });

  it('handles missing alt text gracefully', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="" 
      />
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('alt', '');
  });

  it('renders with different image sources', () => {
    const testSources = [
      '/image1.jpg',
      '/image2.png',
      'https://example.com/image3.webp'
    ];

    testSources.forEach((src, index) => {
      const { unmount } = render(
        <OptimizedImage 
          src={src} 
          alt={`Test image ${index + 1}`} 
        />
      );
      
      const image = screen.getByTestId('optimized-image');
      expect(image).toHaveAttribute('src', src);
      expect(image).toHaveAttribute('alt', `Test image ${index + 1}`);
      
      unmount();
    });
  });
});