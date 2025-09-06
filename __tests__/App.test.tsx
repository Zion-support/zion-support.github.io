import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Zion Tech Group' })).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Leading AI & Technology Solutions for a Smarter Future')).toBeInTheDocument();
  });
});
