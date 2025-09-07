import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();

    const { container } = render(<App />);
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
});
