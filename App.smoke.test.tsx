import React from 'react';
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Smoke Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
=======
import { render } from '@testing-library/react';
import App from './App';
describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
  it('should render the main app component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  });
});