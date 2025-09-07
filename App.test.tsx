<<<<<<< HEAD
import { render, screen } from '@testing-library/react';'
import { describe, it, expect } from 'vitest';'
import App from './App';'

describe('App', () => {'
  }
  it('renders without crashing', () => {'
    }
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();'
  });

  it('displays correct content', () => {'
    }
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();'
  });

  it('handles user interactions', () => {'
    }
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    render(<App />);
    // Add interaction tests here,
expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
it('handles user interactions', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
