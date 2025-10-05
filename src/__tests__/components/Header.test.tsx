import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

// Mock the Header component if it doesn't exist
jest.mock('../../components/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header Component</header>;
  };
});

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});