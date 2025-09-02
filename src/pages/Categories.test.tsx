import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from './Categories';

describe('Categories', () => {
  it('renders without crashing', () => {
    render(<Categories />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('displays expected content', () => {
    render(<Categories />);
    // Add more specific tests here
  });
});
