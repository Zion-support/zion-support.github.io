import React, { Suspense } from "react";

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
<<<<<<< HEAD
    expect(screen.getByText('Advanced AI & IT')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
=======
    expect(screen.getByText("Advanced AI & IT Solutions")).toBeInTheDocument();
>>>>>>> cursor/comprehensive-app-audit-and-update-4a25
  });

  it("renders navigation links", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </HelmetProvider>,
    );
<<<<<<< HEAD
    expect(screen.getByText('Call +1 302 464 0950')).toBeInTheDocument();
=======
    expect(screen.getByText("Get Started")).toBeInTheDocument();
>>>>>>> cursor/comprehensive-app-audit-and-update-4a25
  });
});
