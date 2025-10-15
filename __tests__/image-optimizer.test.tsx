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

// Mock Image constructor
global.Image = jest.fn(() => mockImage) as any;

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('applies correct props', () => {
    render(
      <ImageOptimizer 
        src="test.jpg" 
        alt="Test image" 
        className="test-class"
        width={100}
        height={100}
      />
    );
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveClass('test-class');
  });
});