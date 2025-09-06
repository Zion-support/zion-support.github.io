
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOHeaddynamic from '../components/SEOHead && SEOHead.dynamic'
describe('SEOHeaddynamic'
  test('renders without crashing'

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHead from '../components/SEOHead.dynamic';

describe('SEOHead', () => {
  test('renders without crashing', () => {
    render(<SEOHead />);
    expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SEOHead />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<SEOHead />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<SEOHead />);
    // Add styling tests here
  });
});'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEOHeaddynamic from '../components/SEOHead.dynamic'
describe('SEOHeaddynamic'
  test('renders without crashing'
    expect(screen.getByTestId('seohead.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHeaddynamic from '../components/SEOHead.dynamic';
describe('SEOHeaddynamic', () => {
  test('renders without crashing', () => {
    render(<SEOHeaddynamic />);
    expect(screen.getByTestId('seohead.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<SEOHeaddynamic />);
  });
  test('handles user interactions', () => {
    render(<SEOHeaddynamic />);
  });
  test('applies correct styling', () => {
    render(<SEOHeaddynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe("SEOHeaddynamic",() => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling",() => { render(<SEOHeaddynamic />)})});''"
=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOHeaddynamic from "./components/SEOHead.dynamic"; describe('SEOHeaddynamic', () => { test("renders without crashing",() => { render(<SEOHeaddynamic />); expect(screen.getByTestId("seohead.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOHeaddynamic />)}); test("handles user interactions",() => { render(<SEOHeaddynamic />)}); test("applies correct styling"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
