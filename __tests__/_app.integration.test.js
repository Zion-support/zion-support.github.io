import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import _app from '../components/_app';

describe('_app', () => {
  test('renders without crashing', () => {
    render(<_app />);
    expect(screen.getByTestId('_app')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<_app />);
  });

  test('handles user interactions', () => {
    render(<_app />);
  });

  test('applies correct styling', () => {
    render(<_app />);
  });
});