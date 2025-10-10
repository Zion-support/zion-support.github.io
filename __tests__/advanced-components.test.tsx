import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Basic test component
const TestComponent = () => <div>Test Component</div>;

describe('Basic Test', () => {
  it('renders without crashing', () => {
    render(<TestComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});
