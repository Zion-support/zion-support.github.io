import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainLayout from '../components/MainLayout.dynamic';

describe('MainLayout', () => {
  test('renders without crashing', () => {
    render(<MainLayout />);
    expect(screen.getByTestId('mainlayout.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<MainLayout />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<MainLayout />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<MainLayout />);
    // Add styling tests here
  });
});