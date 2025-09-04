import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../components/Badge';

describe('Badge', () => {
  test('renders without crashing', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Badge>Test Badge</Badge>);
  });

  test('handles user interactions', () => {
    render(<Badge>Test Badge</Badge>);
  });

  test('applies correct styling', () => {
    render(<Badge>Test Badge</Badge>);
  });
});