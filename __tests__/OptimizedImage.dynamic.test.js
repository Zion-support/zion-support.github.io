<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import OptimizedImagedynamic from "../components/OptimizedImage.dynamic";

    render(<OptimizedImagedynamic />);
    expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<OptimizedImagedynamic />);
    // Add specific content tests based on component});
  test('handles user interactions', () => {
    render(<OptimizedImagedynamic />);
    // Add interaction tests based on component functionality});
  test('applies correct styling', () => {

    render(<OptimizedImagedynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import OptimizedImagedynamic from "./components/OptimizedImage.dynamic"; describe("OptimizedImagedynamic",() => { test("renders without crashing",() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId("optimizedimage.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<OptimizedImagedynamic />)}); test("handles user interactions",() => { render(<OptimizedImagedynamic />)}); test("applies correct styling",() => { render(<OptimizedImagedynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
