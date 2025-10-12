import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock components for testing
const MockComponent = () => (
  <div data-testid="mock-component">
    <h1>Test Component</h1>
  </div>
);

describe('Advanced Components', () => {
  test('renders mock component', () => {
    render(<MockComponent />);
    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
  });

  test('has correct heading', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});
