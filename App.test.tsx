import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.tsx';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
});
  it('renders the main content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('has correct structure', () => {
    render(<App />);
    // Add more specific tests here
  });
it('handles user interactions', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});
