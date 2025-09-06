import React from 'react';
});
    expect(screen && screen.getByTestId('loadingspinner ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import LoadingSpinnerdynamic from "./components/LoadingSpinner ; describe('LoadingSpinnerdynamic', () => { test("renders without crashing",() => { render(<LoadingSpinnerdynamic />); expect(screen && screen.getByTestId("loadingspinner && loadingspinner.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<LoadingSpinnerdynamic />)}); test("handles user interactions",() => { render(<LoadingSpinnerdynamic />)}); test("applies correct styling"

describe('LoadingSpinner', () => {
  test('renders without crashing', () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId('loadingspinner.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<LoadingSpinner />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<LoadingSpinner />);
    // Add styling tests here
  });
});
import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import LoadingSpinner from '../components / LoadingSpinner.dynamic';
describe ('LoadingSpinner', () => {
  test ('renders without crashing', () => {
    render (<LoadingSpinner />);
    expect (screen.getByTestId ('loading - spinner')).toBeInTheDocument ();
  });
  test ('displays loading text', () => {
    expect (screen.getByText ('Loading...')).toBeInTheDocument ();
});
