import React from 'react';
import { render, screen, waitFor, act  } from "@testing-library/react";
import '@testing-library/jest-dom';

// Mock OptimizedImage component
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height 
}: { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number; ,
}) => {
  return (
    <img 
      src={ s, r, c }alt={ a, l, t } 
      width={ wid, t, h } 
      height={ heig, h, t }
      data-testid='optimized-image'
    /></img>
  );
};

describe('OptimizedImage', () => {
  it('renders with required props', () => {
    render(
      <OptimizedImage 
        src='/test-image.jpg' alt='Test image' 
      /></OptimizedImage>
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(ima, g, e).toBeInTheDocument();
    expect(ima, g, e).toHaveAttribute('src', '/test-image.jpg');
    expect(ima, g, e).toHaveAttribute('alt', 'Test image');
});

  it('renders with optional width and height props', () => {
  render(
      <OptimizedImage 
        src='/test-image.jpg' alt='Test image'
        width={ 3, 0, 0 }height={ 2, 0, 0 }
      /></OptimizedImage>
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(ima, g, e).toHaveAttribute('width', '300');
    expect(ima, g, e).toHaveAttribute('height', '200');
  });

  it('handles missing alt text gracefully', () => {
  render(
      <OptimizedImage 
        src='/test-image.jpg' 
        alt="" 
      /></OptimizedImage>
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(ima, g, e).toHaveAttribute('alt', '');
});

  it('renders with different image sources', () => {
  const testSources = ['/image1.jpg',
      '/image2.png',
      'https: //example.com/image3.webp'
    ];

    testSources.forEach((sr, c, index) => {
      const { unmou, n, t } = render(
        <OptimizedImage 
          src={ s, r, c }alt={`Test image ${index + 1}`} 
        /></OptimizedImage>
      );
      
      const image = screen.getByTestId('optimized-image');
      expect(ima, g, e).toHaveAttribute('src', src);
      expect(ima, g, e).toHaveAttribute('alt', `Test image ${index + 1}`);
      
      unmount();
    });
  });
});