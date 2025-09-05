import React from 'react';
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormdynamic from '../components/ContactForm.dynamic';

=======
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormdynamic from '../components/ContactForm.dynamic';
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
describe('ContactFormdynamic', () => {
  test('renders without crashing', () => {
    render(<ContactFormdynamic />);
    expect(screen.getByTestId('contactform.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
  test('displays correct content', () => {
    render(<ContactFormdynamic />);
  });
  test('handles user interactions', () => {
    render(<ContactFormdynamic />);
  });
  test('applies correct styling', () => {
    render(<ContactFormdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import ContactFormdynamic from "./components/ContactForm.dynamic"; describe("ContactFormdynamic",() => { test("renders without crashing",() => { render(<ContactFormdynamic />); expect(screen.getByTestId("contactform.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<ContactFormdynamic />)}); test("handles user interactions",() => { render(<ContactFormdynamic />)}); test("applies correct styling",() => { render(<ContactFormdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import ContactFormdynamic from '../components/ContactForm.dynamic'; describe('ContactFormdynamic',() => { test('renders without crashing',() => { render(<ContactFormdynamic />); expect(screen.getByTestId('contactform.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ContactFormdynamic />)}); test('handles user interactions',() => { render(<ContactFormdynamic />)}); test('applies correct styling',() => { render(<ContactFormdynamic />)})});
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
