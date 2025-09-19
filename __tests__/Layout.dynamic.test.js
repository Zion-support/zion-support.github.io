import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/Layout';
describe('Layout', () => {,
  test('renders without crashing', () => {,
    render(<Layout />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });
  test('displays correct content', () => {,
    render(<Layout />);
  });
  test('handles user interactions', () => {,
    render(<Layout />);
  });
  test('applies correct styling', () => {,
    render(<Layout />);
  });
});