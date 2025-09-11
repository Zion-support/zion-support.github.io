<<<<<<< HEAD




import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import indexp from '../pages/index && index.p'
describe('index && index.p Integration Tests'
  test('page renders correctly'

    expect(screen.getByRole('main'
  test('navigation works'
  test('page content is accessible'
  test('page loads with correct data'



=======
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import indexp from "./pages/index.p"; describe('index.p Integration Tests', () => { test("page renders correctly",() => { render(<indexp />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("navigation works",() => { render(<indexp />)}); test("page content is accessible",() => { render(<indexp />)}); test("page loads with correct data"
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import indexp from '../pages/index.p'; describe('index.p Integration Tests',() => { test('page renders correctly',() => { render(<indexp />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('navigation works',() => { render(<indexp />)}); test('page content is accessible',() => { render(<indexp />)}); test('page loads with correct data',() => { render(<indexp />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import indexp from '../pages/index.p'; describe('index.p Integration Tests',() => { test('page renders correctly',() => { render(<indexp />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('navigation works',() => { render(<indexp />)}); test('page content is accessible',() => { render(<indexp />)}); test('page loads with correct data',() => { render(<indexp />)})});
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import indexp from '../pages/index.p'; describe('index.p Integration Tests',() => { test('page renders correctly',() => { render(<indexp />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('navigation works',() => { render(<indexp />)}); test('page content is accessible',() => { render(<indexp />)}); test('page loads with correct data',() => { render(<indexp />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
