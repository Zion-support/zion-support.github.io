import React from 'react';
<<<<<<< HEAD
import { render, screen, waitFor, act } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { render, screen } from '@testing-library/react';
=======
import { render, screen, waitFor, act } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-c832

const defaultProps = {
  src: 'test-image.jpg',
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
    const { container } = render(<OptimizedImage {...defaultProps} className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

<<<<<<< HEAD
=======
  it('renders children', () => {
    render(<OptimizedImage>Test content</OptimizedImage>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-errors-and-merge-to-main-c832
  it('shows loading skeleton initially', () => {
    render(<OptimizedImage {...defaultProps} />);
    const skeleton = screen.getByAltText('Test image').parentElement?.querySelector('.animate-pulse');
    expect(skeleton).toBeInTheDocument();
  });

  it('handles error state', async () => {
    const onError = jest.fn();
    render(<OptimizedImage {...defaultProps} onError={onError} />);

    const img = screen.getByAltText('Test image');
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    
    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    
=======

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
    await act(async () => {
      img.dispatchEvent(new Event('load'));
    });
    
    await act(async () => {
      img.dispatchEvent(new Event('load'));
    });
    
=======

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
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
