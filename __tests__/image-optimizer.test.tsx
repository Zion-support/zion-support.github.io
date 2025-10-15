import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageOptimizer from '../app/components/ImageOptimizer'
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
  it('renders without crashing', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test" />);
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });

  it('handles image load events', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test" />);
    // Test image loading logic
  });
});
