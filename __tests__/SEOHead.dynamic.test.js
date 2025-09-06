<<<<<<< HEAD
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOHeaddynamic from '../components/SEOHead && SEOHead.dynamic'
describe('SEOHeaddynamic'
  test('renders without crashing'
    expect(screen && screen.getByTestId('seohead ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead ; describe('SEOHeaddynamic', () => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen && screen.getByTestId("seohead && seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling"
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHead from '../components/SEOHead.dynamic';

describe('SEOHead', () => {
  test('renders without crashing', () => {
    render(<SEOHead />);
    expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SEOHead />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<SEOHead />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<SEOHead />);
    // Add styling tests here
  });
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
