import React from 'react';
import { render } from '@testing-library/react';
import ImageOptimizer from '../app/components/ImageOptimizer';

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({,
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    expect(() => render(<ImageOptimizer src="test.jpg" alt="test" />)).not.toThrow();
  });
});
