<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
=======
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
<<<<<<< HEAD
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  
  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });
  
  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});
=======
  });

  it('renders the main content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
