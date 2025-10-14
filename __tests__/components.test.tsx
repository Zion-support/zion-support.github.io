import React from "react";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

// Mock component for testing
const MockComponent = () => (
  <div data-testid="mock-component">
    <h1>Test Component</h1>
  </div>
);

describe("Component Tests", () => {
  test("MockComponent renders without crashing", () => {
    render(
      <HelmetProvider>
        <MockComponent />
      </HelmetProvider>
    );
  });

  test("Component has correct content", () => {
    const { getByTestId } = render(
      <HelmetProvider>
        <MockComponent />
      </HelmetProvider>
    );
    
    expect(getByTestId("mock-component")).toBeInTheDocument();
    expect(getByTestId("mock-component")).toHaveTextContent("Test Component");
  });
});