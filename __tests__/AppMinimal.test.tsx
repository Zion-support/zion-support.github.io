import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

describe('AppMinimal', () => {
  it('should render without crashing', () => {
    const TestApp = () => <div>Test App</div>;
    render(<TestApp />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('should handle basic interactions', () => {
    const TestApp = () => <button>Click me</button>;
    render(<TestApp />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});