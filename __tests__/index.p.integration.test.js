<<<<<<< HEAD
=======
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
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import indexp from '../pages/index.p'; describe('index.p Integration Tests',() => { test('page renders correctly',() => { render(<indexp />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('navigation works',() => { render(<indexp />)}); test('page content is accessible',() => { render(<indexp />)}); test('page loads with correct data',() => { render(<indexp />)})});
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import indexp from '../pages/index.p'; describe('index.p Integration Tests',() => { test('page renders correctly',() => { render(<indexp />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('navigation works',() => { render(<indexp />)}); test('page content is accessible',() => { render(<indexp />)}); test('page loads with correct data',() => { render(<indexp />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
