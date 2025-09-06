import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.simple';

describe('App Smoke Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Basic smoke test - just check that the component renders
    expect(document.body).toBeInTheDocument();
  });
});