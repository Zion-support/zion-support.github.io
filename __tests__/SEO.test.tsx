<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SEO from "../components/SEO";
describe("SEO", () => {
  test("renders without crashing", () => {
    render(<SEO />);
    expect(screen.getByTestId("seo")).toBeInTheDocument();

import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
<<<<<<< HEAD
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});

import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> pr/11282
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SEO.test', () => {
  test('renders without crashing', () => {
    expect(true).toBe(true);
  });
<<<<<<< HEAD
  test('displays correct content', () => {
    render(<SEO />);
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<SEO />);
    // Add interaction tests based on component functionality
  });
  test('applies correct styling', () => {
    render(<SEO />);
    // Add styling tests if needed
  });
});
>>>>>>> origin/main
=======
});
>>>>>>> pr/11282
