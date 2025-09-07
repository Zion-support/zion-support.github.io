<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
>>>>>>> origin/main

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
<<<<<<< HEAD
  });

  it('renders the main content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
=======
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
>>>>>>> origin/main
});