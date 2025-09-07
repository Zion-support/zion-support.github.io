<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> d886c61d6064773a1db6057f2a6c4edcabf807d6
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders minimal app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Zion Tech Group/i);
  expect(titleElement).toBeInTheDocument();
});