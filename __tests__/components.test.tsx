import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

describe('components', () => {
  it('should render basic component', () => {
    const TestComponent = () => <div>Test Component</div>;
    render(<TestComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('should handle props correctly', () => {
    const TestComponent = ({ title }: { title: string }) => <h1>{title}</h1>;
    render(<TestComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});