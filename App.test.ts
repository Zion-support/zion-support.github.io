<<<<<<< HEAD
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
=======
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('displays correct content', () => {
    render(<App />);
  });
  it('handles user interactions', () => {
    render(<App />);
  });
<<<<<<< HEAD
<<<<<<< HEAD
});
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
