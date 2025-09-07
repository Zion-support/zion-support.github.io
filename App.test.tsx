import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Leading AI and Technology Solutions for the Future')).toBeInTheDocument();
  });
});