import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptimizedImage from '../../app/components/OptimizedImage';

describe('OptimizedImage', () => {
  it('renders with default props', () => {
    render(<OptimizedImage />);
    expect(screen.getByText('Optimized Image')).toBeInTheDocument();
    expect(screen.getByText('This is a placeholder component for Optimized Image.')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<OptimizedImage className="custom-class" />);
    const container = screen.getByText('Optimized Image').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('renders the component structure correctly', () => {
    render(<OptimizedImage />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Optimized Image');
    expect(screen.getByText('This is a placeholder component for Optimized Image.')).toBeInTheDocument();
  });
});