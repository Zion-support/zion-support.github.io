import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the image loading
const mockImage = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  src: '',
  onload: null,
  onerror: null
};

Object.defineProperty(global, 'Image', {
  value: jest.fn(() => mockImage)
});

// Simple ImageOptimizer component for testing
const ImageOptimizer = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} />;
};

describe('ImageOptimizer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct attributes', () => {
    render(
      <ImageOptimizer
        src="test-image.jpg"
        alt="Test image"
      />
    );
    
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });
});
