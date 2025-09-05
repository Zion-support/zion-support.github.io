<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/Layout';

describe('Layout', () => {
  test('renders without crashing', () => {
    render(<Layout />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Layout />);
    // Add specific content tests here
  });

  test('handles user interactions', () => {
    render(<Layout />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<Layout />);
    // Add styling tests here
  });
});
=======
import _React from 'react"  import '@testing-library/jest-dom import Layout from '../components/Layout" describe('Layout',() => {' test('renders without crashing',() => {' render(<Layout / / />) expect(screen.getByTestId("layout")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<Layout / / />) }) test('handles user interactions',() => {' render(<Layout / / />) }) test('applies correct styling',() => {' render(<Layout / / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
