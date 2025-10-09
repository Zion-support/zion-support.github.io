import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Just check that the component renders without throwing an error
    expect(true).toBe(true);
  });
});