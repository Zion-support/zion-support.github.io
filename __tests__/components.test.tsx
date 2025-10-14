import React from "react";
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
describe("Component Tests", () => {
  test("renders without crashing", () => {
    render(
      <HelmetProvider></HelmetProvider>
        <div>Test Component</div>
      </HelmetProvider>
    );
  });
});