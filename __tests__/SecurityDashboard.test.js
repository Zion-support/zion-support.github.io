<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SecurityDashboard from '../components/SecurityDashboard';

describe('SecurityDashboard', () => {
  test('renders without crashing', () => {
    render(<SecurityDashboard />);
    expect(screen.getByTestId('securitydashboard')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SecurityDashboard />);
    // Add specific content tests here
  });

  test('handles user interactions', () => {
    render(<SecurityDashboard />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<SecurityDashboard />);
    // Add styling tests here
  });
});
=======
import _React from 'react"  import '@testing-library/jest-dom import SecurityDashboard from '../components/SecurityDashboard" describe('SecurityDashboard',() => {' test('renders without crashing',() => {' render(<SecurityDashboard / />) expect(screen.getByTestId("securitydashboard")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<SecurityDashboard / />) }) test('handles user interactions',() => {' render(<SecurityDashboard / />) }) test('applies correct styling',() => {' render(<SecurityDashboard / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
