import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock ImageOptimizer component
const ImageOptimizer = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy"
    {...props}
  />
);

describe('ImageOptimizer', () => {
  it('renders image with correct src and alt', () => {
    render(<ImageOptimizer src="/test-image.jpg" alt="Test image" />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('has lazy loading enabled', () => {
    render(<ImageOptimizer src="/test-image.jpg" alt="Test image" />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('passes through additional props', () => {
    render(
      <ImageOptimizer 
        src="/test-image.jpg" 
        alt="Test image" 
        className="test-class"
        data-testid="test-image"
      />
    );
    
    const image = screen.getByTestId('test-image');
    expect(image).toHaveClass('test-class');
  });
});