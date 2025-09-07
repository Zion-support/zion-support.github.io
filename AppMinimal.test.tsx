import React from 'react';
import { render, screen } from '@testing-library/react';
import AppMinimal from './AppMinimal.tsx';

describe('AppMinimal', () => {
  it('renders without crashing', () => {
    render(<AppMinimal />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has correct structure', () => {
    render(<AppMinimal />);
    // Add more specific tests here
  });
});
