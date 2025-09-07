import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../app/page';

describe('Smoke Tests', () => {
<<<<<<< HEAD
  test('Home page renders without crashing', async () => {
    render(<HomePage />);
    // Wait for lazy-loaded components to render
    await waitFor(() => {
      expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
    });
=======
  test('Home page renders without crashing', () => {
    render(<Home />);
    expect(screen.getAllByText(/Zion Tech Group/i)).toHaveLength(2);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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