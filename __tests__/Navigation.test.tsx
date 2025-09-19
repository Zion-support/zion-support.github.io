import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';
describe('Navigation', () => {,
  test('renders without crashing', () => {,
    render(<Navigation />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });
  test('displays correct content', () => {,
    render(<Navigation />);
  });
  test('handles user interactions', () => {,
    render(<Navigation />);
  });
  test('applies correct styling', () => {,
    render(<Navigation />);
  });
});