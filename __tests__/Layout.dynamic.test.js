import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layoutdynamic from "../components/Layout.dynamic";
;
describe("Layoutdynamic", (); => {;
  test("renders without crashing", (); => {;
    render(<Layoutdynamic />);
    expect(screen.getByTestId("layout.dynamic");).toBeInTheDocument();
  });
;
  test("displays correct content", (); => {;
    render(<Layoutdynamic />);
    // Add specific content tests based on component});
  test('handles user interactions', () => {
    render(<Layoutdynamic />);
    // Add interaction tests based on component functionality});
  test('applies correct styling', () => {

    render(<Layoutdynamic />);
  });
});
;