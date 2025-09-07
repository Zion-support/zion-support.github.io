import React from "react";""
import { render, screen } from "@testing-library/react";""
import "@testing-library/jest-dom";""
import ServiceCard from "../src/components/ServiceCard";""
describe("ServiceCard", () => {""
  test("renders without crashing", () => {""
    const features = ["Feature 1", "Feature 2", "Feature 3"];"
    render(
      <ServiceCard;"
        title="Test Service"""
        description="Test Description"""
        icon="🚀""
        features={features}
      />,

)"