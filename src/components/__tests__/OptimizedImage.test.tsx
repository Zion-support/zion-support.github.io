import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OptimizedImage from '../OptimizedImage';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe('OptimizedImage', () => {
  const defaultProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Test image',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with basic props', () => {
    render(<OptimizedImage {...defaultProps} />);
    
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('shows placeholder while loading', () => {
    render(<OptimizedImage {...defaultProps} placeholder="placeholder.jpg" />);
    
    expect(screen.getByAltText('')).toBeInTheDocument(); // placeholder image
  });

  it('shows error state when image fails to load', async () => {
    render(<OptimizedImage {...defaultProps} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.error(img);
    
    await waitFor(() => {
      expect(screen.getByText('Image failed to load')).toBeInTheDocument();
    });
  });

  it('calls onLoad callback when image loads', async () => {
    const onLoad = jest.fn();
    render(<OptimizedImage {...defaultProps} onLoad={onLoad} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    expect(onLoad).toHaveBeenCalled();
  });

  it('calls onError callback when image fails to load', async () => {
    const onError = jest.fn();
    render(<OptimizedImage {...defaultProps} onError={onError} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.error(img);
    
    expect(onError).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<OptimizedImage {...defaultProps} className="custom-class" />);
    
    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('applies width and height styles', () => {
    render(<OptimizedImage {...defaultProps} width={200} height={300} />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveStyle({ width: '200px', height: '300px' });
  });

  it('uses eager loading for priority images', () => {
    render(<OptimizedImage {...defaultProps} priority={true} />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('uses lazy loading for non-priority images', () => {
    render(<OptimizedImage {...defaultProps} priority={false} />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('sets decoding attribute to async', () => {
    render(<OptimizedImage {...defaultProps} />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('shows loading animation while image is not loaded', () => {
    render(<OptimizedImage {...defaultProps} />);
    
    const placeholder = screen.getByAltText('Test image').parentElement?.querySelector('.animate-pulse');
    expect(placeholder).toBeInTheDocument();
  });

  it('hides loading animation when image is loaded', async () => {
    render(<OptimizedImage {...defaultProps} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(img).toHaveClass('opacity-100');
    });
  });

  it('handles missing placeholder gracefully', () => {
    render(<OptimizedImage {...defaultProps} />);
    
    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toBeInTheDocument();
  });

  it('applies object-fit cover style', () => {
    render(<OptimizedImage {...defaultProps} />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toHaveStyle({ objectFit: 'cover' });
  });

  it('sets correct alt text', () => {
    render(<OptimizedImage {...defaultProps} alt="Custom alt text" />);
    
    expect(screen.getByAltText('Custom alt text')).toBeInTheDocument();
  });

  it('handles empty src gracefully', () => {
    render(<OptimizedImage src="" alt="Empty src" />);
    
    const img = screen.getByAltText('Empty src');
    expect(img).toHaveAttribute('src', '');
  });
});