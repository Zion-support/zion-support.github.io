import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './app/page';

it('renders without crashing', async () => {
  render(<HomePage />);
  // Wait for the lazy-loaded components to render
  await waitFor(() => {
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });
});