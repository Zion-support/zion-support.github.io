<<<<<<< HEAD
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestimonialsSectiondynamic from '../components/TestimonialsSection && TestimonialsSection.dynamic'
describe('TestimonialsSectiondynamic'
  test('renders without crashing'
      screen && screen.getByTestId('testimonialssection ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import TestimonialsSectiondynamic from "./components/TestimonialsSection ; describe('TestimonialsSectiondynamic', () => { test("renders without crashing",() => { render(<TestimonialsSectiondynamic />); expect( screen && screen.getByTestId("testimonialssection && testimonialssection.dynamic") ).toBeInTheDocument()}); test("displays correct content",() => { render(<TestimonialsSectiondynamic />)}); test("handles user interactions",() => { render(<TestimonialsSectiondynamic />)}); test("applies correct styling"
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsSection from '../components/TestimonialsSection.dynamic';

describe('TestimonialsSection', () => {
  test('renders without crashing', () => {
    render(<TestimonialsSection />);
    expect(screen.getByTestId('testimonialssection.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<TestimonialsSection />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<TestimonialsSection />);
    // Add styling tests here
  });
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
