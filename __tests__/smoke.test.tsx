import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Smoke Tests", () => {/* content */}
  test("Home page renders without crashing", () => {/* content */}
    render(<Home />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
