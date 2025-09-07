<<<<<<< HEAD
import React from 'react;
import { render } from @testing-library/react';
import App from './App;

describe(App Smoke Tests', () => {
  it('should render without crashing, () => {
    expect(() => render(<App />)).not.toThrow();
  });

    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

=======
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
});

  });
});
import { render, screen } from '@testing-library/react;
import @testing-library/jest-dom';


it('renders without crashing, () => {
  render(<HomePage />);
  expect(screen.getByText(Welcome to Zion Tech Group')).toBeInTheDocument();
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('should render a basic structure', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should have basic app structure', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });
});