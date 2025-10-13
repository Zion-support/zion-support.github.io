<<<<<<< HEAD
import React from 'react';
import { render } from '@testing-library/react';
import ImageOptimizer from '../app/components/ImageOptimizer';

=======
import { render, screen } from '@testing-library/react';

// Mock the image loading
const mockImage = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
//   src: '',
//   onload: null,
//   onerror: null,
};

Object.defineProperty(global, 'Image', {
  value: jest.fn(() => mockImage),
});

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    expect(() => render(<ImageOptimizer src="test.jpg" alt="test" />)).not.toThrow();
  });
<<<<<<< HEAD
});
=======

  it('renders with correct attributes', () => {
    render(
//       <ImageOptimizer
        src="test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
        className="custom-class"
        lazy={false}
//       />
    );

    const img = screen.getByRole('img', { hidden: true });
    expect(img).toHaveAttribute('alt', 'Test image');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '200');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('applies correct attributes', () => {
    render(
//       <ImageOptimizer
        src="test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
        className="custom-class"
        lazy={false}
//       />
    );

    const img = screen.getByRole('img', { hidden: true });
    expect(img).toHaveAttribute('alt', 'Test image');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '200');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('generates optimized src with WebP format', () => {
    render(
//       <ImageOptimizer
        src="test-image.jpg"
        alt="Test image"
        lazy={false}
//       />
    );

    const img = screen.getByRole('img', { hidden: true });
    expect(img).toHaveAttribute('src', 'http://localhost/test-image.jpg?format=webp&quality=80');
  });
});
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
