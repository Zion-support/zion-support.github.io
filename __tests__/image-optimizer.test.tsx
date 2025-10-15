import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOptimizer from '../app/components/ImageOptimizer';

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

describe('ImageOptimizer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct attributes', () => {
    render(
      <ImageOptimizer
        src="test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '200');
  });

  it('handles loading state', () => {
    render(
      <ImageOptimizer
        src="test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    // Should show loading state initially
    expect(screen.getByTestId('image-loading')).toBeInTheDocument();
  });
});