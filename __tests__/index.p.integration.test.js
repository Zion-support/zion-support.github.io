
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import indexp from '../pages/index && index.p'
describe('index && index.p Integration Tests'
  test('page renders correctly'

<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import indexp from '../pages/index.p';
describe('index.p Integration Tests', () => {
  test('page renders correctly', () => {
    render(<indexp />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  test('navigation works', () => {
    render(<indexp />);
  });
  test('page content is accessible', () => {
    render(<indexp />);
  });
  test('page loads with correct data', () => {
    render(<indexp />);
  });
});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import indexp from "./pages/index.p"; describe("index.p Integration Tests",() => { test("page renders correctly",() => { render(<indexp />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("navigation works",() => { render(<indexp />)}); test("page content is accessible",() => { render(<indexp />)}); test("page loads with correct data",() => { render(<indexp />)})});''"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
