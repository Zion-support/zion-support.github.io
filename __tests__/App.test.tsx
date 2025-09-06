import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Zion Tech Group' })).toBeInTheDocument();
  });
<<<<<<< HEAD

  test('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Leading AI & Technology Solutions for a Smarter Future')).toBeInTheDocument();
  });
});
=======
});

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
});
=======
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
    const heading = screen.getByRole('heading'
>>>>>>> origin/automation-improvements-final
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
