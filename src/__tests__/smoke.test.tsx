import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Smoke Tests', () => {
  it('should render a basic component', () => {
    const TestComponent = () => <div data-testid="test-element">Hello World</div>;
    
    render(<TestComponent />);
    
    const element = screen.getByTestId('test-element');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Hello World');
  });

  it('should have working Jest environment', () => {
    expect(true).toBe(true);
    expect(1 + 1).toBe(2);
  });
});
