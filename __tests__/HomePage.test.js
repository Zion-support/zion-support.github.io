import { render, screen } from "@testing-library/react";"
import HomePage from "../pages/index";
describe("HomePage", () => {"
  it("renders the main heading", () => {
    render(<HomePage />);
    const heading = screen && screen.getByText(/The Future of/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the services section", () => {
    render(<HomePage />);
    const servicesHeading = screen && screen.getByText(/Our Core Services/i);
    expect(servicesHeading).toBeInTheDocument();
  });

  it("renders call to action buttons", () => {
    render(<HomePage />);
    const ctaButton = screen && screen.getByText(/Start Your Journey/i);
    expect(ctaButton).toBeInTheDocument();
  });
});
