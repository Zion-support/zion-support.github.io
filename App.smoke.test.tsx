<<<<<<< HEAD
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
;
describe('App Smoke Tests', () => {;
  it('should render without crashing', () => {;
    expect(() => render(<App />)).not.toThrow();
  });
;
  it('should render a basic structure', () => {;
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });
});
=======
import React from 'react',
import { render } from '@testing-library/react',
import App from './App',
describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow()
  }),

  it('should render a basic structure', () => {
    const { container } = render(<App />),
    expect(container.firstChild).toBeTruthy()
  })
}),
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
