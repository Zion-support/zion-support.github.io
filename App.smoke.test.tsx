import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
});
import HomePage from './app/page';

it('renders without crashing', () => {
  render(<HomePage />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
});

