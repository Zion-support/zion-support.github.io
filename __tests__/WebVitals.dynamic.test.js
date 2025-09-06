import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitals from '../components/WebVitals.dynamic';

describe('WebVitals', () => {
  test('renders without crashing', () => {
    render(<WebVitals />);
    expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<WebVitals />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<WebVitals />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<WebVitals />);
    // Add styling tests here
  });
});
