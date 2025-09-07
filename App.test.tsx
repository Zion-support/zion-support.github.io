<<<<<<< HEAD
=======
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

>>>>>>> cursor/fix-lint-push-and-merge-to-main-a8e3
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
  it('has correct structure', () => {
    render(<App />);
    // Add more specific tests here
  });
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-a8e3
