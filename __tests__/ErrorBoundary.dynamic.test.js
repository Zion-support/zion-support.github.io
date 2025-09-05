<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import ErrorBoundarydynamic from '../components/ErrorBoundary.dynamic'; describe('ErrorBoundarydynamic',() => { test('renders without crashing',() => { render(<ErrorBoundarydynamic />); expect(screen.getByTestId('errorboundary.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ErrorBoundarydynamic />)}); test('handles user interactions',() => { render(<ErrorBoundarydynamic />)}); test('applies correct styling',() => { render(<ErrorBoundarydynamic />)})});
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundarydynamic from '../components/ErrorBoundary.dynamic';
describe('ErrorBoundarydynamic', () => {
  test('renders without crashing', () => {
    render(<ErrorBoundarydynamic />);
    expect(screen.getByTestId('errorboundary.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<ErrorBoundarydynamic />);
  });
  test('handles user interactions', () => {
    render(<ErrorBoundarydynamic />);
  });
  test('applies correct styling', () => {
    render(<ErrorBoundarydynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import ErrorBoundarydynamic from "./components/ErrorBoundary.dynamic"; describe("ErrorBoundarydynamic",() => { test("renders without crashing",() => { render(<ErrorBoundarydynamic />); expect(screen.getByTestId("errorboundary.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<ErrorBoundarydynamic />)}); test("handles user interactions",() => { render(<ErrorBoundarydynamic />)}); test("applies correct styling",() => { render(<ErrorBoundarydynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import ErrorBoundarydynamic from '../components/ErrorBoundary.dynamic'; describe('ErrorBoundarydynamic',() => { test('renders without crashing',() => { render(<ErrorBoundarydynamic />); expect(screen.getByTestId('errorboundary.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ErrorBoundarydynamic />)}); test('handles user interactions',() => { render(<ErrorBoundarydynamic />)}); test('applies correct styling',() => { render(<ErrorBoundarydynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import ErrorBoundarydynamic from '../components/ErrorBoundary.dynamic'; describe('ErrorBoundarydynamic',() => { test('renders without crashing',() => { render(<ErrorBoundarydynamic />); expect(screen.getByTestId('errorboundary.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ErrorBoundarydynamic />)}); test('handles user interactions',() => { render(<ErrorBoundarydynamic />)}); test('applies correct styling',() => { render(<ErrorBoundarydynamic />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
