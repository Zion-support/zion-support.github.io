<<<<<<< HEAD
import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import OptimizedImage from '../../components/OptimizedImage'
describe('OptimizedImage', () => {
  it('renders with required props', () => {
    render(
      <OptimizedImage 
        src="/test-image.jpg" 
        alt="Test image" 
        data-testid="optimized-image"
      />
    );
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toBeInTheDocument();
    // Next.js Image component transforms the src, so we check for the transformed URL
    expect(image).toHaveAttribute('src', expect.stringContaining('test-image.jpg'));
    expect(image).toHaveAttribute('alt', 'Test image');
=======
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    img: ({ children, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { children?: React.ReactNode }) => <img {...props}>{children}</img>,
  },
}));

const defaultProps = {
  src: 'https://example.com/image.jpg',
  alt: 'Test image',
  width: 300,
  height: 200,
};

describe('OptimizedImage Component', () => {
  it('renders with default props', () => {
    const { container } = render(<OptimizedImage {...defaultProps} />);
    expect(container.firstChild).toBeInTheDocument();
>>>>>>> origin/main
  });

  it('renders with custom className', () => {
    const { container } = render(<OptimizedImage {...defaultProps} className="test-class" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('test-class');
  });

  it('renders with width and height', () => {
    const { container } = render(<OptimizedImage {...defaultProps} width={300} height={200} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle('width: 300px');
    expect(wrapper).toHaveStyle('height: 200px');
  });

<<<<<<< HEAD
  it('renders with different image sources', () => {
    const testSources = [
      '/image1.jpg',
      '/image2.png',
      'https://example.com/image3.webp'
    ]
    testSources.forEach((src, index) => {
      const { unmount } = render(
        <OptimizedImage
          src={src}
          alt={`Test image ${index + 1}`}
          data-testid="optimized-image"
        />
      )
      const image = screen.getByTestId('optimized-image')
      // Next.js Image component transforms the src, so we check for the transformed URL
      expect(image).toHaveAttribute('src', expect.stringContaining(src.split('/').pop() || src))
      expect(image).toHaveAttribute('alt', `Test image ${index + 1}`)
      unmount()
    })
  })
})
=======
  it('shows loading skeleton initially', () => {
    render(<OptimizedImage {...defaultProps} />);
    const wrapper = screen.getByAltText('Test image').parentElement?.parentElement;
    expect(wrapper).toBeInTheDocument();
  });

  it('handles error state', async () => {
    const onError = jest.fn();
    render(<OptimizedImage {...defaultProps} onError={onError} />);
    
    const img = screen.getByAltText('Test image');
    
    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load')).toBeInTheDocument();
    });
  });

  it('handles load event', async () => {
    const onLoad = jest.fn();
    render(<OptimizedImage {...defaultProps} onLoad={onLoad} />);
    
    const img = screen.getByAltText('Test image');
    
    await act(async () => {
      img.dispatchEvent(new Event('load'));
    });
    
    await waitFor(() => {
      expect(onLoad).toHaveBeenCalled();
    });
  });

  it('renders with priority loading', () => {
    render(<OptimizedImage {...defaultProps} lazy={false} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('renders with lazy loading by default', () => {
    render(<OptimizedImage {...defaultProps} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
>>>>>>> origin/main
