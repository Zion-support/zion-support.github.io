import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Smoke Test', () => {
  it('should pass basic smoke test', () => {
    expect(true).toBe(true);
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
