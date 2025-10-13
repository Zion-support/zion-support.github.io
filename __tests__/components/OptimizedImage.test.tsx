import React from 'react';
import { render, screen } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';

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
});
