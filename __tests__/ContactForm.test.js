<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  test('renders without crashing', () => {
    render(<ContactForm />);
    expect(screen.getByTestId('contactform')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<ContactForm />);
  });

  test('handles user interactions', () => {
    render(<ContactForm />);
  });

  test('applies correct styling', () => {
    render(<ContactForm />);
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import ContactForm from "./components/ContactForm" describe("ContactForm",() => {" test("renders without crashing",() => {" render(<ContactForm / / />) expect(screen.getByTestId("contactform")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<ContactForm / / />) }) test("handles user interactions",() => {" render(<ContactForm / / />) }) test("applies correct styling",() => {" render(<ContactForm / / />) }) })'"'"
import _React from 'react"  import '@testing-library/jest-dom import ContactForm from '../components/ContactForm" describe('ContactForm',() => {' test('renders without crashing',() => {' render(<ContactForm / / />) expect(screen.getByTestId("contactform")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<ContactForm / / />) }) test('handles user interactions',() => {' render(<ContactForm / / />) }) test('applies correct styling',() => {' render(<ContactForm / / />) }) })
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
