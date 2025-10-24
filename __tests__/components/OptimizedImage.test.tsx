import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';

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
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    />
  );
};

describe('OptimizedImage Component', () => {
  it('renders with required props', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image" 
      />
    );
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    
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
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    
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
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load image')).toBeInTheDocument();
    });
  });

  it('renders with optional dimensions', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" width={100} height={100} />);
    
    const img = screen.getByAltText('Test image');
    
    await act(async () => {
      img.dispatchEvent(new Event('load'));
    });
    
    await waitFor(() => {
      expect(onLoad).toHaveBeenCalled();
    });
  });

  it('has lazy loading enabled', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" />);
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});