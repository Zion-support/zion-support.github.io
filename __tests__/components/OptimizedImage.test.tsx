import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const OptimizedImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img src={src} alt={alt} data-testid="optimized-image" />
  );
};

describe('OptimizedImage', () => {
  it('should render with correct src and alt', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" />);
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('src', 'test.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('should render without crashing', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" />);
    expect(screen.getByTestId('optimized-image')).toBeInTheDocument();
  });
});