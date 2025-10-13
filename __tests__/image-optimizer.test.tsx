import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Basic test component
const TestComponent = () => (
  <div data-testid="test-component">
    <h1>Test Component</h1>
  </div>
);

describe('Test Component', () => {
  it('renders without crashing', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
  });
});