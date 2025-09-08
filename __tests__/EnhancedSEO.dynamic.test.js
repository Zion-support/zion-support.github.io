

<<<<<<< HEAD
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic';

describe('EnhancedSEOdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedSEOdynamic />);
    expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument();

<<<<<<< HEAD


>>>>>>> origin/main
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'
describe('EnhancedSEOdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('enhancedseo.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import EnhancedSEOdynamic from "./components/EnhancedSEO.dynamic"; describe('EnhancedSEOdynamic', () => { test("renders without crashing",() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId("enhancedseo.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<EnhancedSEOdynamic />)}); test("handles user interactions",() => { render(<EnhancedSEOdynamic />)}); test("applies correct styling"
<<<<<<< HEAD
=======
});
});
import _React from 'react';  import '@testing-library/jest-dom'; import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'; describe('EnhancedSEOdynamic',() => { test('renders without crashing',() => { render(<EnhancedSEOdynamic />); expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<EnhancedSEOdynamic />)}); test('handles user interactions',() => { render(<EnhancedSEOdynamic />)}); test('applies correct styling',() => { render(<EnhancedSEOdynamic />)})});
>>>>>>> origin/main
