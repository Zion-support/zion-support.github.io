import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', async () => {
    render(<App />);
    
    // Initially shows loading state
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    
    // Wait for the app to load and check for any content
    await waitFor(() => {
      expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
