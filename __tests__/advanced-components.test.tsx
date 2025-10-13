import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock component for testing
const AdvancedComponents = ({ className = '', children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

describe('Advanced Components', () => {
  it('renders with default props', () => {
    const { container } = render(<AdvancedComponents />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<AdvancedComponents className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders children', () => {
    render(<AdvancedComponents>Test content</AdvancedComponents>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});