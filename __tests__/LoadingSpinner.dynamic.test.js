<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../components/LoadingSpinner.dynamic';

describe('LoadingSpinner', () => {
  test('renders without crashing', () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
  
  test('displays loading text', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
=======
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoadingSpinnerdynamic from '../components/LoadingSpinner.dynamic'
describe('LoadingSpinnerdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('loadingspinner.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import LoadingSpinnerdynamic from "./components/LoadingSpinner.dynamic"; describe('LoadingSpinnerdynamic', () => { test("renders without crashing",() => { render(<LoadingSpinnerdynamic />); expect(screen.getByTestId("loadingspinner.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<LoadingSpinnerdynamic />)}); test("handles user interactions",() => { render(<LoadingSpinnerdynamic />)}); test("applies correct styling"
>>>>>>> origin/automation-improvements-final
