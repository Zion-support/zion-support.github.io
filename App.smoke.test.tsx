
import App from './App';
import React from 'react';
import { render } from '@testing-library/react';
describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow()});

  it('should render a basic structure', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy()})});