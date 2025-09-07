<<<<<<< HEAD
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
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.tsx';
>>>>>>> cursor/automate-test-improve-and-merge-code-aa0d

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
<<<<<<< HEAD
<<<<<<< HEAD
  });

  it('renders the main content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-aa0d
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has correct structure', () => {
    render(<App />);
    // Add more specific tests here
  });
<<<<<<< HEAD

  it('handles user interactions', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
>>>>>>> origin/main
});
=======
});
>>>>>>> cursor/automate-test-improve-and-merge-code-aa0d
