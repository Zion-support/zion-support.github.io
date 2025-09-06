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
  });
});
