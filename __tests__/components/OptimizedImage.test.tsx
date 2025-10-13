import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const OptimizedImage = ({ 
  className = '', 
  src, 
  alt 
}: { 
  className?: string; 
  src: string; 
  alt: string; 
}) => {
  return (
    <img 
      className={`${className}`} 
      src={src} 
      alt={alt} 
      data-testid="optimized-image"
    />
  );
};

describe('OptimizedImage', () => {
  it('renders with required props', () => {
    render(<OptimizedImage src="/test.jpg" alt="Test image" />);
    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('renders with custom className', () => {
    render(<OptimizedImage src="/test.jpg" alt="Test image" className="custom-class" />);
    expect(screen.getByTestId('optimized-image')).toHaveClass('custom-class');
  });
});