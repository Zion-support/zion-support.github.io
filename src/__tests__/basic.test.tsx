import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple test to verify testing setup works
describe('Basic Testing Setup', () => {
  test('renders text content', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('renders with test id', () => {
    render(<div data-testid="test-element">Test Content</div>);
    expect(screen.getByTestId('test-element')).toBeInTheDocument();
  });

  test('basic math operations', () => {
    expect(2 + 2).toBe(4);
    expect(5 * 3).toBe(15);
    expect(10 / 2).toBe(5);
  });

  test('string operations', () => {
    expect('Zion Tech Group').toContain('Zion');
    expect('Technology Solutions').toHaveLength(20);
  });
});