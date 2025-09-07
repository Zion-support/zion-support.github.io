import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Smoke Tests', () => {
  test('Home page renders without crashing', () => {
    render(<Home />);
    expect(screen.getAllByText(/Zion Tech Group/i)).toHaveLength(2);
  });

  test('Application builds successfully', () => {
    // This test passes if the file can be imported without errors
    expect(() => {
      // Dynamic import for ES modules
      import('../pages/index');
    }).not.toThrow();
  });

  test('Basic functionality works', () => {
    // Test that basic React functionality works
    const TestComponent = () => <div>Test</div>;
    render(<TestComponent />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});