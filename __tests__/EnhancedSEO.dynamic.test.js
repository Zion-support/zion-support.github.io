<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'; describe('EnhancedSEOdynamic',() => { test('renders without crashing',() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedSEOdynamic />)}); test('handles user interactions',() => { render(<EnhancedSEOdynamic />)}); test('applies correct styling',() => { render(<EnhancedSEOdynamic />)})});
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic';
describe('EnhancedSEOdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedSEOdynamic />);
    expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<EnhancedSEOdynamic />);
  });
  test('handles user interactions', () => {
    render(<EnhancedSEOdynamic />);
  });
  test('applies correct styling', () => {
    render(<EnhancedSEOdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import EnhancedSEOdynamic from "./components/EnhancedSEO.dynamic"; describe("EnhancedSEOdynamic",() => { test("renders without crashing",() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId("enhancedseo.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<EnhancedSEOdynamic />)}); test("handles user interactions",() => { render(<EnhancedSEOdynamic />)}); test("applies correct styling",() => { render(<EnhancedSEOdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'; describe('EnhancedSEOdynamic',() => { test('renders without crashing',() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedSEOdynamic />)}); test('handles user interactions',() => { render(<EnhancedSEOdynamic />)}); test('applies correct styling',() => { render(<EnhancedSEOdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'; describe('EnhancedSEOdynamic',() => { test('renders without crashing',() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedSEOdynamic />)}); test('handles user interactions',() => { render(<EnhancedSEOdynamic />)}); test('applies correct styling',() => { render(<EnhancedSEOdynamic />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
