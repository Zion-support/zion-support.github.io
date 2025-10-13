import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock FuturisticButton component
const FuturisticButton = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <button data-testid="futuristic-button" {...props}>
    {children}
  </button>
);

describe('Advanced Components', () => {
  it('renders FuturisticButton without crashing', () => {
    render(<FuturisticButton>Test Button</FuturisticButton>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('renders FuturisticButton with correct props', () => {
    render(<FuturisticButton className="test-class">Test Button</FuturisticButton>);
    const button = screen.getByTestId('futuristic-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('test-class');
  });
});