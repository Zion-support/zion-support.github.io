




import React from 'react';

import { render, screen } from '@testing-library/react';
>>>>>>> main
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('has proper heading structure', () => {
    render(<App />);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});


import '@testing-library/jest-dom';
describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Zion Tech Group' })).toBeInTheDocument();
  });
});

ursor/fix-website-loading-errors-and-merge-6662
});
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
    const heading = screen.getByRole('heading'
>>>>>>> origin/automation-improvements-final
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
ursor/automate-test-improve-and-merge-code-646c
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Zion Tech Group" }),
    ).toBeInTheDocument();
  });
});





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  it('has proper heading structure', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
