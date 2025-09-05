<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinnerdynamic from '../components/LoadingSpinner.dynamic';
describe('LoadingSpinnerdynamic', () => {
  test('renders without crashing', () => {
    render(<LoadingSpinnerdynamic />);
    expect(screen.getByTestId('loadingspinner.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<LoadingSpinnerdynamic />);
  });
  test('handles user interactions', () => {
    render(<LoadingSpinnerdynamic />);
  });
  test('applies correct styling', () => {
    render(<LoadingSpinnerdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import LoadingSpinnerdynamic from "./components/LoadingSpinner.dynamic"; describe("LoadingSpinnerdynamic",() => { test("renders without crashing",() => { render(<LoadingSpinnerdynamic />); expect(screen.getByTestId("loadingspinner.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<LoadingSpinnerdynamic />)}); test("handles user interactions",() => { render(<LoadingSpinnerdynamic />)}); test("applies correct styling",() => { render(<LoadingSpinnerdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import LoadingSpinnerdynamic from '../components/LoadingSpinner.dynamic'; describe('LoadingSpinnerdynamic',() => { test('renders without crashing',() => { render(<LoadingSpinnerdynamic />); expect(screen.getByTestId('loadingspinner.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<LoadingSpinnerdynamic />)}); test('handles user interactions',() => { render(<LoadingSpinnerdynamic />)}); test('applies correct styling',() => { render(<LoadingSpinnerdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import LoadingSpinnerdynamic from '../components/LoadingSpinner.dynamic'; describe('LoadingSpinnerdynamic',() => { test('renders without crashing',() => { render(<LoadingSpinnerdynamic />); expect(screen.getByTestId('loadingspinner.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<LoadingSpinnerdynamic />)}); test('handles user interactions',() => { render(<LoadingSpinnerdynamic />)}); test('applies correct styling',() => { render(<LoadingSpinnerdynamic />)})});
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
