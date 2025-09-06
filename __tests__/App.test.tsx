<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import { render, screen } from '@testing-library/react';
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
  it('has proper heading structure', () => {
    render(<App />);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    const heading = screen.getByRole('heading', { level: '1' });
    expect(heading).toBeInTheDocument();
  });
});
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
>>>>>>> origin/main
=======
});
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
<<<<<<< HEAD
    const heading = screen.getByRole('heading'
=======
    const heading = screen.getByRole('heading'
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
