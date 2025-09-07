<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
>>>>>>> origin/chore/fix-lint-and-merge
=======
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
>>>>>>> origin/improvements-and-fixes

>>>>>>> cursor/fix-lint-push-and-merge-to-main-a8e3
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
  it('has correct structure', () => {
    render(<App />);
    // Add more specific tests here
  });
=======

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
<<<<<<< HEAD
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
=======
>>>>>>> origin/improvements-and-fixes
    // Add interaction tests here
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-a8e3
