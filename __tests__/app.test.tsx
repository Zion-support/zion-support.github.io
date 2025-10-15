import React from "react";

import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

// Mock the lazy loading for testing
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  lazy: (fn) => fn(),
}));

import HomePage from "../app/page";

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </HelmetProvider>,
    );
    expect(screen.getByText('Advanced AI & IT')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </HelmetProvider>,
    );
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getAllByText('Learn More')).toHaveLength(4);
  });
});
