import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OptimizedImagedynamic from "../components/OptimizedImage.dynamic";

describe("OptimizedImagedynamic", () => {
  test("renders without crashing", () => {
    render(<OptimizedImagedynamic />);
    expect(screen.getByTestId("optimizedimage.dynamic")).toBeInTheDocument();
  });
});
