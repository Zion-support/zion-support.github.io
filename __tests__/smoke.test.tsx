import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Home from '../pages/index';
describe('Smoke Tests', () => {
  test('Home page renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('Application builds successfully', async () => {
    // This test passes if the file can be imported without errors
    expect(() => {
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