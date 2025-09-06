<<<<<<< HEAD
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SEOEnhancer from "../components/SEOEnhancer.dynamic";
describe("SEOEnhancer", () => {
  test("renders without crashing", () => {
    render(<SEOEnhancer />);
    expect(screen.getByTestId("seo-enhancer")).toBeInTheDocument();
  });
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
