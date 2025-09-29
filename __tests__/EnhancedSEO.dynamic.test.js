<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'; describe('EnhancedSEOdynamic',() => { test('renders without crashing',() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedSEOdynamic />)}); test('handles user interactions',() => { render(<EnhancedSEOdynamic />)}); test('applies correct styling',() => { render(<EnhancedSEOdynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import EnhancedSEOdynamic from "../components/EnhancedSEO.dynamic";

  test('renders without crashing', () => {
    render(<EnhancedSEODynamic />);
    expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument()})
'
  test('displays correct content', () => {
    render(<EnhancedSEODynamic />);

    // Add specific content tests based on component

  test('handles user interactions', () => {
    render(<EnhancedSEOdynamic />);
  });
  test('applies correct styling', () => {
    render(<EnhancedSEOdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import EnhancedSEOdynamic from "./components/EnhancedSEO.dynamic"; describe("EnhancedSEOdynamic",() => { test("renders without crashing",() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId("enhancedseo.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<EnhancedSEOdynamic />)}); test("handles user interactions",() => { render(<EnhancedSEOdynamic />)}); test("applies correct styling",() => { render(<EnhancedSEOdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'; describe('EnhancedSEOdynamic',() => { test('renders without crashing',() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedSEOdynamic />)}); test('handles user interactions',() => { render(<EnhancedSEOdynamic />)}); test('applies correct styling',() => { render(<EnhancedSEOdynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
