import React from 'react';
import { render, screen } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';
// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
<<<<<<< HEAD:__tests__/components/OptimizedImage.test.tsx
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    img: ({ children, ...props }: any) => <img {...props}>{children}</img>,
=======
    img: ({ children, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { children?: React.ReactNode }) => <img {...props}>{children}</img>,
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea:app-broken/__tests__/components/OptimizedImage.test.tsx
  },
}));
const mockProps = {
  src: 'https://example.com/test.jpg',
  alt: 'Test image',
};
describe('OptimizedImage Component', () => {
  it('renders with default props', () => {
    render(<OptimizedImage {...mockProps} />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/test.jpg');
  });
  it('renders with custom className', () => {
    render(<OptimizedImage {...mockProps} className="custom-class" />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    // The className is applied to the wrapper div, not the img element
    const wrapper = image.closest('div');
    expect(wrapper).toHaveClass('custom-class');
  });
<<<<<<< HEAD:__tests__/components/OptimizedImage.test.tsx
});
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea:app-broken/__tests__/components/OptimizedImage.test.tsx
