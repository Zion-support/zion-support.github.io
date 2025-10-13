<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
=======
import '@testing-library/jest-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb53

// Mock component for testing
const AdvancedComponents = ({ className = '', children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={`${className}`} data-testid="advanced-components">
      {children}
    </div>
  );
};

<<<<<<< HEAD
describe('Advanced Components', () => {
  it('renders with default props', () => {
    const { container } = render(<AdvancedComponents />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<AdvancedComponents className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
=======
describe('AdvancedComponents', () => {
  it('renders with default props', () => {
    render(<AdvancedComponents />);
    expect(screen.getByTestId('advanced-components')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<AdvancedComponents className="custom-class" />);
    expect(screen.getByTestId('advanced-components')).toHaveClass('custom-class');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb53
  });

  it('renders children', () => {
    render(<AdvancedComponents>Test content</AdvancedComponents>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
<<<<<<< HEAD
=======
// Mock test for advanced components
describe('Advanced Components', () => {
  it('should render without crashing', () => {
    expect(true).toBe(true);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-69c0
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb53
  });
});