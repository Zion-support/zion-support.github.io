import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';

describe('App', () => {
  it('renders without crashing', () => {
<<<<<<< HEAD
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('displays correct content', () => {
<<<<<<< HEAD
    render(<App />);
=======
    render(<HomePage />);
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
<<<<<<< HEAD
    render(<App />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});