
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AppMinimal from "./AppMinimal";
import React from "react";

describe("AppMinimal", () => {
  it("renders without crashing", () => {
    render(<AppMinimal />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
