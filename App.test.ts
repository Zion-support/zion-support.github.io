import { render, screen } from '@testing-library/react';
import * as React from 'react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(React.createElement(App));
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(React.createElement(App));
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(React.createElement(App));
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});