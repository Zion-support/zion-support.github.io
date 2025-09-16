import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../components/ErrorBoundary';

<<<<<<< HEAD
describe('ErrorBoundary', () => {
  test('renders without crashing', () => {
    render(<ErrorBoundary />);
    expect(screen.getByTestId('errorboundary')).toBeInTheDocument();
  });
  
  test('displays correct content', () => {
    render(<ErrorBoundary />);
  });
  
  test('handles user interactions', () => {
    render(<ErrorBoundary />);
  });
  
  test('applies correct styling', () => {
    render(<ErrorBoundary />);
  });
});
=======



import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorBoundarydynamic from '../components/ErrorBoundary.dynamic'
describe('ErrorBoundarydynamic'
  test('renders without crashing'
    expect(screen.getByTestId('errorboundary.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import ErrorBoundarydynamic from "./components/ErrorBoundary.dynamic"; describe('ErrorBoundarydynamic', () => { test("renders without crashing",() => { render(<ErrorBoundarydynamic />); expect(screen.getByTestId("errorboundary.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<ErrorBoundarydynamic />)}); test("handles user interactions",() => { render(<ErrorBoundarydynamic />)}); test("applies correct styling"

>>>>>>> origin/merge-pr-12271
