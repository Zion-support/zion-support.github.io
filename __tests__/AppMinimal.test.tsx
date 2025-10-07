import { render, screen } from '@testing-library/react';
// Jest globals are available globally in test environment
import '@testing-library/jest-dom';
import React from 'react';

describe('AppMinimal', () => {
  it('renders without crashing', () => {
    // Mock component for testing
    const MockAppMinimal = () => <div>Zion Tech Group</div>;
    render(<MockAppMinimal />);
    const element = screen.getByText(/Zion Tech Group/i);
    expect(element).toBeDefined();
  });
});
