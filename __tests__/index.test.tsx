import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(screen.getByText("Zion Tech Group")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Home />);
    expect(
      screen.getByText("AI-Powered IT Services for the Modern Enterprise"),
    ).toBeInTheDocument();
  });

  it("renders call-to-action buttons", () => {
    render(<Home />);
    expect(screen.getByText("Explore Services")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });
});
