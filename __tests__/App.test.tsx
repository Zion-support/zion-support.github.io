<<<<<<< HEAD


import React from 'react';

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { render, screen } from '@testing-library/react';
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD
=======
  });
it('has proper heading structure', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: '1' });
    expect(heading).toBeInTheDocument();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  });


=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Zion Tech Group' })).toBeInTheDocument();
  });
});

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
});
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Zion Tech Group" }),
    ).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
const heading = screen.getByRole('heading'

