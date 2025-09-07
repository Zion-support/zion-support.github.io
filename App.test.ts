<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/main
import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
=======
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
>>>>>>> origin/main
});