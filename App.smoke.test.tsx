import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
=======
>>>>>>> origin/combined-pr-merge

describe("App Smoke Tests", () => {
  it("should render without crashing", () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it("should render a basic structure", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });
<<<<<<< HEAD
});
import HomePage from './app/page';

it('renders without crashing', () => {
  render(<HomePage />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
});

=======
});
>>>>>>> origin/combined-pr-merge
