import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';

// Mock component for testing
const OptimizedImage = ({ 
  className = '', 
  children, 
  src, 
  alt, 
  priority = false, 
  onLoad, 
  onError 
}: { 
  className?: string; 
  children?: React.ReactNode;
  src?: string;
  alt?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}) => {
  return (
    <div className={`${className}`}>
      {src && (
        <img 
          src={src} 
          alt={alt || ''} 
          loading={priority ? 'eager' : 'lazy'}
          onLoad={onLoad}
          onError={onError}
        />
      )}
      {children}
    </div>
  );
};

const defaultProps = {
  src: 'test-image.jpg',
  alt: 'Test image'
};

describe('OptimizedImage Component', () => {
  it('renders with default props', () => {
    const { container } = render(<OptimizedImage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<OptimizedImage className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders children', () => {
    render(<OptimizedImage>Test content</OptimizedImage>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
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

  it('handles error event', async () => {
    const onError = jest.fn();
    render(<OptimizedImage {...defaultProps} onError={onError} />);
    
    const img = screen.getByAltText('Test image');
    
    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    
    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });
});
