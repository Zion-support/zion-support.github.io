<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import LoadingSpinnerdynamic from '../components/LoadingSpinner.dynamic'; describe('LoadingSpinnerdynamic',() => { test('renders without crashing',() => { render(<LoadingSpinnerdynamic />); expect(screen.getByTestId('loadingspinner.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<LoadingSpinnerdynamic />)}); test('handles user interactions',() => { render(<LoadingSpinnerdynamic />)}); test('applies correct styling',() => { render(<LoadingSpinnerdynamic />)})});
=======
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
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
