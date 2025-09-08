import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import React from 'react';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('displays correct content', () => {

    render(<App />);
    // Add more specific tests here
  });
  it('handles user interactions', () => {
    render(<App />);
  });
});