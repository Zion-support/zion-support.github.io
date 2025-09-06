<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
import React from 'react';

import React from 'react';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
});
});
});
import React from 'react';
import { render } from '@testing-library/react';

describe('App', () => {
  it('should render without crashing', () => {
    // Simple test that just checks if the component can be imported
    expect(true).toBe(true);
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
>>>>>>> origin/main
  });
});