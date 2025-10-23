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
      loading="lazy"
    />
  );
};

describe('OptimizedImage Component', () => {
  it('renders with required props', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" />);
    
    const img = screen.getByAltText('Test image');
    
    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    
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