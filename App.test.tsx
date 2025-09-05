import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import React from 'react';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to our application')).toBeInTheDocument();
  });
});