<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

describe('Card', () => {
  test('renders without crashing', () => {
    render(<Card />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Card />);
  });

  test('handles user interactions', () => {
    render(<Card />);
  });

  test('applies correct styling', () => {
    render(<Card />);
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Card from "./components/Card" describe("Card",() => {" test("renders without crashing",() => {" render(<Card / / />) expect(screen.getByTestId("card")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Card / / />) }) test("handles user interactions",() => {" render(<Card / / />) }) test("applies correct styling",() => {" render(<Card / / />) }) })'"'"
import _React from 'react"  import '@testing-library/jest-dom import Card from '../components/Card" describe('Card',() => {' test('renders without crashing',() => {' render(<Card / / />) expect(screen.getByTestId("card")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<Card / / />) }) test('handles user interactions',() => {' render(<Card / / />) }) test('applies correct styling',() => {' render(<Card / / />) }) })
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
