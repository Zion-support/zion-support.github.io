import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const AdvancedComponents = ({ className = '', children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={`${className}`} data-testid="advanced-components">
      {children}
    </div>
  );
};

describe('AdvancedComponents', () => {
  it('renders with default props', () => {
    render(<AdvancedComponents />);
    expect(screen.getByTestId('advanced-components')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<AdvancedComponents className="custom-class" />);
    expect(screen.getByTestId('advanced-components')).toHaveClass('custom-class');
  });

  it('renders children', () => {
    render(<AdvancedComponents>Test content</AdvancedComponents>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});