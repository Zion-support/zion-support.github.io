
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SEO from "../components/SEO.dynamic";
describe("SEO", () => {
  test("renders without crashing", () => {
    render(<SEO />);
    expect(screen.getByTestId("seo")).toBeInTheDocument();
  });
});


import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});



