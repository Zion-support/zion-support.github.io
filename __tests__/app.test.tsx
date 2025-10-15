import React from "react";
import { render, screen } from "@testing-library/react";

// Simple test component
const TestComponent = () => {
  return <div>Test Component</div>;
};

describe("App", () => {
  it("renders without crashing", () => {
    render(<TestComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});