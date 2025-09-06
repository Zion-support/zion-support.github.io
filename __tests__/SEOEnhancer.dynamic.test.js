<<<<<<< HEAD
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
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';  import '@testing-library/jest-dom'; import SEOEnhancerdynamic from '../components/SEOEnhancer.dynamic'; describe('SEOEnhancerdynamic',() => { test('renders without crashing',() => { render(<SEOEnhancerdynamic />); expect(screen.getByTestId('seoenhancer.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOEnhancerdynamic />)}); test('handles user interactions',() => { render(<SEOEnhancerdynamic />)}); test('applies correct styling',() => { render(<SEOEnhancerdynamic />)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react';  import '@testing-library/jest-dom'; import SEOEnhancerdynamic from '../components/SEOEnhancer.dynamic'; describe('SEOEnhancerdynamic',() => { test('renders without crashing',() => { render(<SEOEnhancerdynamic />); expect(screen.getByTestId('seoenhancer.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOEnhancerdynamic />)}); test('handles user interactions',() => { render(<SEOEnhancerdynamic />)}); test('applies correct styling',() => { render(<SEOEnhancerdynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
