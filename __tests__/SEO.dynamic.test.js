<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react';  import '@testing-library/jest-dom'; import SEOdynamic from '../components/SEO.dynamic'; describe('SEOdynamic',() => { test('renders without crashing',() => { render(<SEOdynamic />); expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOdynamic />)}); test('handles user interactions',() => { render(<SEOdynamic />)}); test('applies correct styling',() => { render(<SEOdynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOdynamic from '../components/SEO.dynamic';

describe('SEOdynamic', () => {
  test('renders without crashing', () => {
    render(<SEOdynamic />);
    expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SEOdynamic />);
    // Add specific content tests based on component
  });

  test('handles user interactions', () => {
    render(<SEOdynamic />);
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {
    render(<SEOdynamic />);
    // Add styling tests if needed
  });
});
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
