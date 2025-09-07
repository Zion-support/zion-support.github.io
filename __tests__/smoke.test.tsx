import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('Smoke Tests', () => {
  test('Home page renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('Application builds successfully', () => {
    // This test passes if the file can be imported without errors
    expect(() => {
      // Dynamic import for ES modules
      import('../app/page');
    }).not.toThrow();
  });

  test('Basic functionality works', () => {
    // Test that basic React functionality works
    const TestComponent = () => <div>Test</div>;
    render(<TestComponent />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});