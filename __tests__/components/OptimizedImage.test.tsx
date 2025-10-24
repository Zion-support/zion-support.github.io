import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import OptimizedImage from '../../components/OptimizedImage'
describe('OptimizedImage', () => {
  it('renders with required props', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image" 
        data-testid="optimized-image"
      />
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('test-image.jpg'));
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('renders with optional width and height props', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image"
        width={300}
        height={200}
        data-testid="optimized-image"
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
        data-testid="optimized-image"
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
          data-testid="optimized-image"
        />
      )
      const image = screen.getByTestId('optimized-image')
      expect(image).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(src)))
      expect(image).toHaveAttribute('alt', `Test image ${index + 1}`)
      unmount();
    });
  });
})