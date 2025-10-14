import React from "react";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

describe("Component Tests", () => {
  test("Basic component renders without crashing", () => {
    const TestComponent = () => <div>Test Component</div>;
    
    render(
      <HelmetProvider>
        <TestComponent />
      </HelmetProvider>
    );
  });
});