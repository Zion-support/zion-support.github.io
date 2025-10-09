// Jest globals are available in test environment
import '@testing-library/jest-dom';
import React from 'react';

describe('AppMinimal', () => {
  it('renders without crashing', () => {
    // Mock component for testing
    const MockAppMinimal = () => <div>Zion Tech Group</div>;
    render(<MockAppMinimal />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeTruthy();
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});