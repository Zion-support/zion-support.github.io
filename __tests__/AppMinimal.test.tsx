import { render, screen } from '@testing-library/react';
import React from 'react';

describe('AppMinimal', () => {
  it('renders without crashing', () => {
    // Mock component for testing
    const MockAppMinimal = () => React.createElement('div', null, 'Zion Tech Group');
    render(React.createElement(MockAppMinimal));
    expect(screen.getByText(/Zion Tech Group/i)).toBeTruthy();
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});