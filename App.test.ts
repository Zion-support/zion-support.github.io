import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
describe('App', () => {
<<<<<<< HEAD
  it('renders without crashing', () => {
    render(React.createElement(App));
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
=======
  it('should work', () => {
    expect(true).toBe(true);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  });
<<<<<<< HEAD
});
=======

const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});""

    render(<App />);


"
  it('displays correct content', () => {
    render(React.createElement(App));
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(React.createElement(App));
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});