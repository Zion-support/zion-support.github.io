<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import TestimonialsSectiondynamic from '../components/TestimonialsSection.dynamic'; describe('TestimonialsSectiondynamic',() => { test('renders without crashing',() => { render(<TestimonialsSectiondynamic />); expect( screen.getByTestId('testimonialssection.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<TestimonialsSectiondynamic />)}); test('handles user interactions',() => { render(<TestimonialsSectiondynamic />)}); test('applies correct styling',() => { render(<TestimonialsSectiondynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsSectiondynamic from '../components/TestimonialsSection.dynamic';
describe('TestimonialsSectiondynamic', () => {
  test('renders without crashing', () => {
    render(<TestimonialsSectiondynamic />);
    expect(
      screen.getByTestId('testimonialssection.dynamic')
    ).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<TestimonialsSectiondynamic />);
  });
  test('handles user interactions', () => {
    render(<TestimonialsSectiondynamic />);
  });
  test('applies correct styling', () => {
    render(<TestimonialsSectiondynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import TestimonialsSectiondynamic from "./components/TestimonialsSection.dynamic"; describe("TestimonialsSectiondynamic",() => { test("renders without crashing",() => { render(<TestimonialsSectiondynamic />); expect( screen.getByTestId("testimonialssection.dynamic") ).toBeInTheDocument()}); test("displays correct content",() => { render(<TestimonialsSectiondynamic />)}); test("handles user interactions",() => { render(<TestimonialsSectiondynamic />)}); test("applies correct styling",() => { render(<TestimonialsSectiondynamic />)})});''"
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import TestimonialsSectiondynamic from '../components/TestimonialsSection.dynamic'; describe('TestimonialsSectiondynamic',() => { test('renders without crashing',() => { render(<TestimonialsSectiondynamic />); expect( screen.getByTestId('testimonialssection.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<TestimonialsSectiondynamic />)}); test('handles user interactions',() => { render(<TestimonialsSectiondynamic />)}); test('applies correct styling',() => { render(<TestimonialsSectiondynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import TestimonialsSectiondynamic from '../components/TestimonialsSection.dynamic'; describe('TestimonialsSectiondynamic',() => { test('renders without crashing',() => { render(<TestimonialsSectiondynamic />); expect( screen.getByTestId('testimonialssection.dynamic') ).toBeInTheDocument()}); test('displays correct content',() => { render(<TestimonialsSectiondynamic />)}); test('handles user interactions',() => { render(<TestimonialsSectiondynamic />)}); test('applies correct styling',() => { render(<TestimonialsSectiondynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
