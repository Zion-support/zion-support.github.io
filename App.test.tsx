import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './app/page';

describe('App', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});