import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
});