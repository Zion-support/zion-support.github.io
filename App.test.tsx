import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './app/page';

describe('App', () => {
  it('renders without crashing', () => {
<<<<<<< HEAD
    render(<App />);
=======
    render(<HomePage />);
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
<<<<<<< HEAD
    render(<App />);
=======
    render(<HomePage />);
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
<<<<<<< HEAD
    render(<App />);
    // Add interaction tests here
=======
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
  });
});