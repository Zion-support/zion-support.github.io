import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageOptimizer from '../app/components/ImageOptimizer'

describe('ImageOptimizer', () => {
  it('renders with correct attributes', () => {
    render(
      <ImageOptimizer
        className="custom-class"
      />
    );
    const component = screen.getByText('ImageOptimizer');
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('text-xl font-semibold text-gray-800');
  });

  it('applies correct attributes', () => {
    render(
      <ImageOptimizer
        className="custom-class"
      />
    );
    const component = screen.getByText('ImageOptimizer');
    expect(component).toBeInTheDocument();
    expect(component.closest('div')).toHaveClass('p-4 custom-class');
  });

  it('shows under construction message', () => {
    render(
      <ImageOptimizer
        className="custom-class"
      />
    );
    const message = screen.getByText('This component is under construction.');
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass('text-gray-600');
  });
});