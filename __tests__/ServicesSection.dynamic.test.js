<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import ServicesSectiondynamic from '../components/ServicesSection.dynamic'; describe('ServicesSectiondynamic',() => { test('renders without crashing',() => { render(<ServicesSectiondynamic />); expect(screen.getByTestId('servicessection.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ServicesSectiondynamic />)}); test('handles user interactions',() => { render(<ServicesSectiondynamic />)}); test('applies correct styling',() => { render(<ServicesSectiondynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ServicesSectiondynamic from "../components/ServicesSection.dynamic";

    render(<ServicesSectiondynamic />);
    expect(screen.getByTestId('servicessection.dynamic')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<ServicesSectiondynamic />);
    // Add specific content tests based on component});
  test('handles user interactions', () => {
    render(<ServicesSectiondynamic />);
    // Add interaction tests based on component functionality});
  test('applies correct styling', () => {

    render(<ServicesSectiondynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import ServicesSectiondynamic from "./components/ServicesSection.dynamic"; describe("ServicesSectiondynamic",() => { test("renders without crashing",() => { render(<ServicesSectiondynamic />); expect(screen.getByTestId("servicessection.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<ServicesSectiondynamic />)}); test("handles user interactions",() => { render(<ServicesSectiondynamic />)}); test("applies correct styling",() => { render(<ServicesSectiondynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import ServicesSectiondynamic from '../components/ServicesSection.dynamic'; describe('ServicesSectiondynamic',() => { test('renders without crashing',() => { render(<ServicesSectiondynamic />); expect(screen.getByTestId('servicessection.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ServicesSectiondynamic />)}); test('handles user interactions',() => { render(<ServicesSectiondynamic />)}); test('applies correct styling',() => { render(<ServicesSectiondynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
