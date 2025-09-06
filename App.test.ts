<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe('App', () => { it('renders without crashing', () => { render(
=======
=======
import React from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

<<<<<<< HEAD
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
<<<<<<< HEAD
});
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
