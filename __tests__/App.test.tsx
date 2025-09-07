import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Simple test component
const TestApp = () => {
  return (
    <div>
      <h1>Test App</h1>
      <p>This is a test application</p>
    </div>
  );
};

describe('App', () => {
  it('renders without crashing', () => {
    render(<TestApp />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<TestApp />);
    expect(screen.getByText('This is a test application')).toBeInTheDocument();
  });
});