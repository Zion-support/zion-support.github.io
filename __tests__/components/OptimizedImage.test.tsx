import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';

// Mock framer-motion
jest.mock('framer-motion', () => ({,
    motion: {,
    img: ({ children, ...props }: any) => <img {...props}>{children}</img>,
  },
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation((callback) => {
  // Trigger the callback immediately to simulate intersection
  setTimeout(() => callback([{ isIntersecting: true }]), 0);
  return {,
    observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
  };
});

describe('OptimizedImage', () => {
  const defaultProps = {,
    src: 'https://example.com/image.jpg',
      alt: 'Test image',
      priority: true, // Always render immediately in tests
  };

  it('renders with basic props', () => {
    render(<OptimizedImage {...defaultProps} />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<OptimizedImage {...defaultProps} className="custom-class" />);
    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('renders with width and height', () => {
    render(<OptimizedImage {...defaultProps} width={300} height={200} />);
    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toHaveStyle('width: 300px');
    expect(container).toHaveStyle('height: 200px');
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
    img.dispatchEvent(new Event('error'));
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load image')).toBeInTheDocument();
    });
  });

  it('handles load event', async () => {
    const onLoad = jest.fn();
    render(<OptimizedImage {...defaultProps} onLoad={onLoad} />);
    
    const img = screen.getByAltText('Test image');
    img.dispatchEvent(new Event('load'));
    
    await waitFor(() => {
      expect(onLoad).toHaveBeenCalled();
    });
  });

  it('renders with priority loading', () => {
    render(<OptimizedImage {...defaultProps} priority={true} />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('renders with lazy loading by default', async () => {
    render(<OptimizedImage {...defaultProps} priority={false} />);
    // Wait for the IntersectionObserver to trigger
    await waitFor(() => {
      expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
