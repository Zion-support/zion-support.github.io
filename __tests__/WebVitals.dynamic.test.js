<<<<<<< HEAD
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import WebVitalsdynamic from '../components/WebVitals && WebVitals.dynamic'
describe('WebVitalsdynamic'
  test('renders without crashing'
    expect(screen && screen.getByTestId('webvitals ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import WebVitalsdynamic from "./components/WebVitals ; describe('WebVitalsdynamic', () => { test("renders without crashing",() => { render(<WebVitalsdynamic />); expect(screen && screen.getByTestId("webvitals && webvitals.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<WebVitalsdynamic />)}); test("handles user interactions",() => { render(<WebVitalsdynamic />)}); test("applies correct styling"
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitals from '../components/WebVitals.dynamic';

describe('WebVitals', () => {
  test('renders without crashing', () => {
    render(<WebVitals />);
    expect(screen.getByTestId('webvitals.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<WebVitals />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<WebVitals />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<WebVitals />);
    // Add styling tests here
  });
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
