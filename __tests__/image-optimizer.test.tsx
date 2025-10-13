import React from 'react';
import { render } from '@testing-library/react';
import ImageOptimizer from '../app/components/ImageOptimizer';

// Mock ImageOptimizer component
const ImageOptimizer = ({ src, alt }: { src: string; alt: string }) => (
  <div data-testid="image-optimizer"test-class"test.jpg"test" />)).not.toThrow();
  });
});

  it('renders with correct attributes', () => {
    render(
//       <ImageOptimizer
        src="
        alt="Test image"custom-class"test-image.jpg"Test image"
        width={300}
        height={200}
        className="test-image.jpg"
        alt="
        lazy={false}
//       />
    );

    const img = screen.getByRole('img', { hidden: true });
    expect(img).toHaveAttribute('src', 'http://localhost/test-image.jpg?format=webp&quality=80');
  });
});
