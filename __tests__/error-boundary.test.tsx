import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock component for testing
const ErrorBoundary = ({ className = '', children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

describe('ErrorBoundary Component', () => {
  it('renders with default props', () => {
    const { container } = render(<ErrorBoundary />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<ErrorBoundary className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders children', () => {
    render(<ErrorBoundary>Test content</ErrorBoundary>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});