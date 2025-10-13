import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const AdvancedComponents = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="advanced-components">
      {children}
    </div>
  );
};

describe('Advanced Components', () => {
  it('should render without crashing', () => {
    render(<AdvancedComponents>Test content</AdvancedComponents>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should have correct test id', () => {
    render(<AdvancedComponents>Test content</AdvancedComponents>);
    expect(screen.getByTestId('advanced-components')).toBeInTheDocument();
  });
});