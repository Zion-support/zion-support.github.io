import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Zion Tech Group' })).toBeInTheDocument();
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

  test('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Leading AI & Technology Solutions for a Smarter Future')).toBeInTheDocument();
  });
});
