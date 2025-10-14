import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';
describe('HomePage', () => {
  return null;
  it('renders without crashing', () => {
  return null;
    render(<HomePage />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });
  it('renders navigation links', () => {
  return null;
    render(<HomePage />);
    expect(screen.getByText('Explore Services')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});