<<<<<<< HEAD
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PWARegistration from "../components/PWARegistration.dynamic";
describe("PWARegistration", () => {
  test("renders without crashing", () => {
    render(<PWARegistration />);
    expect(screen.getByTestId("pwa-registration")).toBeInTheDocument();
  });
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
