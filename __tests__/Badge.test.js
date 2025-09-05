>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../components/Badge';

describe('Badge', () => {
  test('renders without crashing', () => {
    render(<Badge />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Badge />);
  });

  test('handles user interactions', () => {
    render(<Badge />);
  });

  test('applies correct styling', () => {
    render(<Badge />);
  });
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
