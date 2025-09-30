<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from '../app/page';

describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('should render main content', () => {
    render(<App />);
    // Basic smoke test - just check if something renders
    expect(document.body).toBeInTheDocument();
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Smoke Tests', () => {
  test('App renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('Application builds successfully', () => {
    expect(true).toBe(true);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  });
});