<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  test('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Navigation />);
    // Add specific content tests here
  });

  test('handles user interactions', () => {
    render(<Navigation />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<Navigation />);
    // Add styling tests here
  });
});
=======
import _React from 'react"  import '@testing-library/jest-dom import Navigation from '../components/Navigation" describe('Navigation',() => {' test('renders without crashing',() => {' render(<Navigation / / />) expect(screen.getByTestId("navigation")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<Navigation / / />) }) test('handles user interactions',() => {' render(<Navigation / / />) }) test('applies correct styling',() => {' render(<Navigation / / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
