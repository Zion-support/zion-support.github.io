<<<<<<< HEAD
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
>>>>>>> origin/chore/fix-lint-and-merge

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
<<<<<<< HEAD
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
=======
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
>>>>>>> origin/chore/fix-lint-and-merge
  });

  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText('Get Started Today')).toBeInTheDocument();
  });
});
  });
});
  it('displays correct content, () => {
    render(<App />);
    // Add specific content assertions here
  });
  it(handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
  });
});

