<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import indexp from '../pages/index.p'; describe('index.p Integration Tests',() => { test('page renders correctly',() => { render(<indexp />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('navigation works',() => { render(<indexp />)}); test('page content is accessible',() => { render(<indexp />)}); test('page loads with correct data',() => { render(<indexp />)})});
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import indexp from "../pages/index.p";

    render(<indexp />);
    expect(screen.getByRole('main')).toBeInTheDocument()})';
  test('navigation works', () => {
    render(<indexp />);
    // Test navigation elements});
  test('page content is accessible', () => {
    render(<indexp />);
    // Test accessibility features});
  test('page loads with correct data', () => {

    render(<indexp />);
  });
});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import indexp from "./pages/index.p"; describe("index.p Integration Tests",() => { test("page renders correctly",() => { render(<indexp />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("navigation works",() => { render(<indexp />)}); test("page content is accessible",() => { render(<indexp />)}); test("page loads with correct data",() => { render(<indexp />)})});''"
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import indexp from '../pages/index.p'; describe('index.p Integration Tests',() => { test('page renders correctly',() => { render(<indexp />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('navigation works',() => { render(<indexp />)}); test('page content is accessible',() => { render(<indexp />)}); test('page loads with correct data',() => { render(<indexp />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
