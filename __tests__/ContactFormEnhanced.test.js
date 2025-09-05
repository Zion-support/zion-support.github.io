<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react"  import '@testing-library/jest-dom import ContactFormEnhanced from '../components/ContactFormEnhanced" describe('ContactFormEnhanced',() => {' test('renders without crashing',() => {' render(<ContactFormEnhanced / / />) expect(screen.getByTestId("contactformenhanced")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<ContactFormEnhanced / / />) }) test('handles user interactions',() => {' render(<ContactFormEnhanced / / />) }) test('applies correct styling',() => {' render(<ContactFormEnhanced / / />) }) })
=======
<<<<<<< HEAD
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import ContactFormEnhanced from "./components/ContactFormEnhanced" describe("ContactFormEnhanced",() => {" test("renders without crashing",() => {" render(<ContactFormEnhanced / / />) expect(screen.getByTestId("contactformenhanced")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<ContactFormEnhanced / / />) }) test("handles user interactions",() => {" render(<ContactFormEnhanced / / />) }) test("applies correct styling",() => {" render(<ContactFormEnhanced / / />) }) })'"'"
import _React from 'react"  import '@testing-library/jest-dom import ContactFormEnhanced from '../components/ContactFormEnhanced" describe('ContactFormEnhanced',() => {' test('renders without crashing',() => {' render(<ContactFormEnhanced / / />) expect(screen.getByTestId("contactformenhanced")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<ContactFormEnhanced / / />) }) test('handles user interactions',() => {' render(<ContactFormEnhanced / / />) }) test('applies correct styling',() => {' render(<ContactFormEnhanced / / />) }) })
=======
import _React from 'react"  import '@testing-library/jest-dom import ContactFormEnhanced from '../components/ContactFormEnhanced" describe('ContactFormEnhanced',() => {' test('renders without crashing',() => {' render(<ContactFormEnhanced / / />) expect(screen.getByTestId("contactformenhanced")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<ContactFormEnhanced / / />) }) test('handles user interactions',() => {' render(<ContactFormEnhanced / / />) }) test('applies correct styling',() => {' render(<ContactFormEnhanced / / />) }) })
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormEnhanced from '../components/ContactFormEnhanced';

describe('ContactFormEnhanced', () => {
  test('renders without crashing', () => {
    render(<ContactFormEnhanced />);
    expect(screen.getByTestId('contactformenhanced')).toBeInTheDocument();
  });
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
