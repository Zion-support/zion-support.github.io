import React from "react";
import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header";

const renderWithRouter = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
  );
  return render(ui, { wrapper: Wrapper });
};

describe("Header", () => {
  test("renders logo and company name", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Zion Tech Group")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders get started button", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  test("toggles mobile menu when hamburger button is clicked", () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText("Toggle menu");

    // Menu should be closed initially - mobile menu container should not exist
    expect(document.querySelector(".md\\:hidden.py-4")).not.toBeInTheDocument();

    // Click to open menu
    fireEvent.click(hamburgerButton);

    // Menu should be open - check for mobile menu container
    const mobileMenuContainer = document.querySelector(".md\\:hidden.py-4");
    expect(mobileMenuContainer).toBeInTheDocument();

    // Click to close menu
    fireEvent.click(hamburgerButton);

    // Menu should be closed again - mobile menu container should not exist
    expect(document.querySelector(".md\\:hidden.py-4")).not.toBeInTheDocument();
  });

  test("closes mobile menu when navigation link is clicked", () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText("Toggle menu");

    // Open menu
    fireEvent.click(hamburgerButton);
    const mobileMenuContainer = document.querySelector(".md\\:hidden.py-4");
    expect(mobileMenuContainer).toBeInTheDocument();

    // Click on a navigation link in the mobile menu
    const aboutLink = screen.getAllByText("About")[1]; // Get the mobile menu About link
    fireEvent.click(aboutLink);

    // Menu should be closed - mobile menu container should not exist
    expect(document.querySelector(".md\\:hidden.py-4")).not.toBeInTheDocument();
  });

  test("has proper accessibility attributes", () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText("Toggle menu");
    expect(hamburgerButton).toHaveAttribute("aria-label", "Toggle menu");
  });
});
