import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
<<<<<<< HEAD
  
  it('should render a basic structure', () => {
=======
  it('should render the main app component', () => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-a8e3
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});