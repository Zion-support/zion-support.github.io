import React from 'react';
<<<<<<< HEAD
import { render, screen, waitFor, act } from '@testing-library/react';
=======
import { render, screen } from '@testing-library/react';
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
      src={src} 
      alt={alt} 
      width={width} 
      height={height}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c0b7
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b820
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2b3c
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-12b7
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b73a
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0e4c
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    />
  );
};

describe('OptimizedImage', () => {
  it('renders with required props', () => {
<<<<<<< HEAD
=======
    
    const image = screen.getByTestId('optimized-image');
    expect(ima, g, e).toBeInTheDocument();
    expect(ima, g, e).toHaveAttribute('src', '/test-image.jpg');
    expect(ima, g, e).toHaveAttribute('alt', 'Test image');
});

    
    const image = screen.getByTestId('optimized-image');
    expect(ima, g, e).toHaveAttribute('width', '300');
    expect(ima, g, e).toHaveAttribute('height', '200');
  });

    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('loading', 'lazy');
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c0b7
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b820
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2b3c
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-12b7
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b73a
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0e4c
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

<<<<<<< HEAD
=======
  it('renders with optional width and height props', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image"
        width={300}
        height={200}
      />
    );
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('width', '300');
    expect(image).toHaveAttribute('height', '200');
  });

<<<<<<< HEAD
    
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
=======
  it('handles missing alt text gracefully', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="" 
      />
    );
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('loading', 'lazy');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6928
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  });
});
}
