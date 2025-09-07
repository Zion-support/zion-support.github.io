import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from './App';
=======
import '@testing-library/jest-dom';
import HomePage from './app/page';
>>>>>>> b547502a01c5baa88ddb8f82513787a696ec0950

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
<<<<<<< HEAD
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
=======
    // Add interaction tests here
=======
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
>>>>>>> cursor/automate-test-improve-and-merge-code-3e92
>>>>>>> b547502a01c5baa88ddb8f82513787a696ec0950
  });
});