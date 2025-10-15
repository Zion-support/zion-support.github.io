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

// Mock global Image constructor
global.Image = jest.fn(() => mockImage) as any;

describe('ImageOptimizer', () => {
  it('renders with default props', () => {
    render(
      <ImageOptimizer
        src="/test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('renders with loading state', () => {
    render(
      <ImageOptimizer
        src="/test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
        showLoading={true}
      />
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
