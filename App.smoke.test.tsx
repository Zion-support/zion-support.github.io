<<<<<<< HEAD
=======
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('should render a basic structure', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  });
});
