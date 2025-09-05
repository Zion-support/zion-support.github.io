<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../components/ErrorBoundary';

describe('ErrorBoundary', () => {
  test('renders without crashing', () => {
    render(<ErrorBoundary />);
    expect(screen.getByTestId('errorboundary')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<ErrorBoundary />);
    // Add specific content tests here
  });

  test('handles user interactions', () => {
    render(<ErrorBoundary />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<ErrorBoundary />);
    // Add styling tests here
  });
});
=======
import _React from 'react"  import '@testing-library/jest-dom import ErrorBoundary from '../components/ErrorBoundary" describe('ErrorBoundary',() => {' test('renders without crashing',() => {' render(<ErrorBoundary / / />) expect(screen.getByTestId("errorboundary")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<ErrorBoundary / / />) }) test('handles user interactions',() => {' render(<ErrorBoundary / / />) }) test('applies correct styling',() => {' render(<ErrorBoundary / / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
