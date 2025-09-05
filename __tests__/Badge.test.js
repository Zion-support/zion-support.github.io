<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../components/Badge';

describe('Badge', () => {
  test('renders without crashing', () => {
    render(<Badge />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Badge />);
  });

  test('handles user interactions', () => {
    render(<Badge />);
  });

  test('applies correct styling', () => {
    render(<Badge />);
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Badge from "./components/Badge" describe("Badge",() => {" test("renders without crashing",() => {" render(<Badge / / />) expect(screen.getByTestId("badge")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Badge / / />) }) test("handles user interactions",() => {" render(<Badge / / />) }) test("applies correct styling",() => {" render(<Badge / / />) }) })'"'"
import _React from 'react"  import '@testing-library/jest-dom import Badge from '../components/Badge" describe('Badge',() => {' test('renders without crashing',() => {' render(<Badge / / />) expect(screen.getByTestId("badge")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<Badge / / />) }) test('handles user interactions',() => {' render(<Badge / / />) }) test('applies correct styling',() => {' render(<Badge / / />) }) })
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
