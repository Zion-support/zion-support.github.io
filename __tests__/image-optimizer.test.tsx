<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOptimizer from '../app/components/ImageOptimizer';
=======
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageOptimizer from '../app/components/ImageOptimizer'
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
// Mock the image loading
const mockImage = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  src: '',
  onload: null,
  onerror: null
};

<<<<<<< HEAD
<<<<<<< HEAD
// Mock window.Image
Object.defineProperty(window, 'Image', {
  writable: true,
  value: jest.fn(() => mockImage)
});

describe('ImageOptimizer', () => {
  it('renders with default props', () => {
    render(<ImageOptimizer src="/test-image.jpg" alt="Test image" />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('renders with custom width and height', () => {
    render(
      <ImageOptimizer 
        src="/test-image.jpg" 
        alt="Test image" 
        width={300} 
        height={200} 
      />
    );
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '200');
=======
// Mock Image constructor
=======
// Mock global Image constructor
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
global.Image = jest.fn(() => mockImage) as any;

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
<<<<<<< HEAD
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
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
    render(<ImageOptimizer src="test.jpg" alt="Test" />);
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });

  it('handles image load events', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test" />);
    // Test image loading logic
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
  });
});
