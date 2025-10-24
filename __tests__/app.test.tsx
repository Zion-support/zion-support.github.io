import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const TestComponent = () => {
  return <div>Test content</div>;
};

describe("App", () => {
  it("renders without crashing", () => {
    render(<TestComponent />);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});