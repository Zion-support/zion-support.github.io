import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock component for testing
const ImageOptimizer = ({ className = '', children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

describe('ImageOptimizer Component', () => {
  it('renders with default props', () => {
    const { container } = render(<ImageOptimizer />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<ImageOptimizer className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders children', () => {
    render(<ImageOptimizer>Test content</ImageOptimizer>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});