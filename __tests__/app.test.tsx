import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from '../app/page';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    );
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });
  
  it('renders navigation links', () => {
    render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    );
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});