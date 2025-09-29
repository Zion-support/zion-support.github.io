<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import SEOHeaddynamic from '../components/SEOHead.dynamic'; describe('SEOHeaddynamic',() => { test('renders without crashing',() => { render(<SEOHeaddynamic />); expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOHeaddynamic />)}); test('handles user interactions',() => { render(<SEOHeaddynamic />)}); test('applies correct styling',() => { render(<SEOHeaddynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import SEOHeaddynamic from "../components/SEOHead.dynamic";

    render(<SEOHeaddynamic />);
    expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<SEOHeaddynamic />);
    // Add specific content tests based on component});
  test('handles user interactions', () => {
    render(<SEOHeaddynamic />);
    // Add interaction tests based on component functionality});
  test('applies correct styling', () => {

    render(<SEOHeaddynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe("SEOHeaddynamic",() => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling",() => { render(<SEOHeaddynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import SEOHeaddynamic from '../components/SEOHead.dynamic'; describe('SEOHeaddynamic',() => { test('renders without crashing',() => { render(<SEOHeaddynamic />); expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEOHeaddynamic />)}); test('handles user interactions',() => { render(<SEOHeaddynamic />)}); test('applies correct styling',() => { render(<SEOHeaddynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
