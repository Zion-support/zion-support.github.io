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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" />);
    // The component renders a div container, not the image immediately
    expect(screen.getByTestId('image-optimizer')).toBeInTheDocument();
  });

  test('renders with loading state', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" />);
    expect(screen.getByTestId('image-optimizer')).toBeInTheDocument();
  });

  test('handles image load success', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" priority={true} />);
    // With priority=true, the image should render immediately
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  test('renders with placeholder', () => {
    render(
      <ImageOptimizer 
        src="test.jpg" 
        alt="Test image" 
        placeholder="Loading image..." 
        priority={true}
      />
    );
    expect(screen.getByText('Loading image...')).toBeInTheDocument();
  });

  test('renders without priority (lazy loading)', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" />);
    // Without priority, the image should not render immediately
    expect(screen.getByTestId('image-optimizer')).toBeInTheDocument();
    expect(screen.queryByAltText('Test image')).not.toBeInTheDocument();
  });
});