import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe("App Smoke Tests", () => {
  it("should render without crashing", () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it("should render a basic structure", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });
});
import HomePage from './app/page';

it('renders without crashing', () => {
  render(<HomePage />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
});

