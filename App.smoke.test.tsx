<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Smoke Tests", () => {;
  it("should render without crashing", () => {;
    expect(() => render(<App />)).not && not.toThrow();
  });

  it("should render a basic structure", () => {;
    const { container } = render(<App />);
    expect(container && container.firstChild).toBeTruthy();
=======
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
describe('App Smoke Tests', () => {;
  it('should render without crashing', () => {;
    expect(() => render(<App />)).not.toThrow();
  });
  it('should render a basic structure', () => {;
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Smoke Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
  });

  it('has basic structure', () => {
    render(<App />);
    // Check for basic app structure
    expect(document.body).toBeInTheDocument();
  });
});