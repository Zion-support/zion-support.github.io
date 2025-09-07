import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Building the future with innovative technology solutions')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});