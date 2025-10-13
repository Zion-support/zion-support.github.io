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
  });

  it('renders with custom className', () => {
    render(<OptimizedImage {...defaultProps} className="test-class" />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveClass('test-class');
  });

  it('renders with width and height', () => {
    render(<OptimizedImage {...defaultProps} width={300} height={200} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '200');
  });

  it('shows loading skeleton initially', () => {
    render(<OptimizedImage {...defaultProps} />);
    const skeleton = screen.getByAltText('Test image').parentElement?.querySelector('.animate-pulse');
    expect(skeleton).toBeInTheDocument();
  });

  it('handles error state', async () => {
    const onError = jest.fn();
    render(<OptimizedImage {...defaultProps} onError={onError} />);
    
    const img = screen.getByAltText('Test image');
    
    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load image')).toBeInTheDocument();
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
    render(<OptimizedImage {...defaultProps} priority={true} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('renders with lazy loading by default', () => {
    render(<OptimizedImage {...defaultProps} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
