<<<<<<< HEAD
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageTransition from "../components/PageTransition";
describe("PageTransition", () => {
  test("renders without crashing", () => {
    render(<PageTransition />);
    expect(screen.getByTestId("page-transition")).toBeInTheDocument();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  });
});
