import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Footer", () => {
  it("renders without crashing", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("displays company information", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Zion Tech Group")).toBeInTheDocument();
    expect(
      screen.getByText(/Leading the future of technology/),
    ).toBeInTheDocument();
  });

  it("renders quick links section", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders services section", () => {
    renderWithRouter(<Footer />);
    // Check for Services heading specifically
    expect(
      screen.getByRole("heading", { name: "Services" }),
    ).toBeInTheDocument();
    expect(screen.getByText("AI Solutions")).toBeInTheDocument();
    expect(screen.getByText("Cloud Infrastructure")).toBeInTheDocument();
    expect(screen.getByText("Cybersecurity")).toBeInTheDocument();
    expect(screen.getByText("Data Analytics")).toBeInTheDocument();
    expect(screen.getByText("Software Development")).toBeInTheDocument();
  });

  it("renders social media links", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
  });

  it("renders copyright information", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/© 2024 Zion Tech Group/)).toBeInTheDocument();
  });

  it("renders legal links", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Cookie Policy")).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    // Check that social media links have proper aria-labels
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "aria-label",
      "LinkedIn",
    );
    expect(screen.getByLabelText("Twitter")).toHaveAttribute(
      "aria-label",
      "Twitter",
    );
    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "aria-label",
      "GitHub",
    );
  });
});
