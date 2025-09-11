import React from 'react';
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
    expect(screen.getByTestId('page-transition')).toBeInTheDocument();
import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import PageTransition from '../components / PageTransition';
describe ('PageTransition', () => {
  test ('renders without crashing', () => {
    render (<PageTransition />);
    expect (screen.getByTestId ('page - transition')).toBeInTheDocument ();
  });
});
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageTransition from '../components/PageTransition'
describe('PageTransition'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import PageTransition from \'../components/PageTransition\'; describe(\'PageTransition\',() => { test(\'renders without crashing\',() => { render(<PageTransition />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import PageTransition from "./components/PageTransition"; describe('PageTransition', () => { test("renders without crashing",() => { render(<PageTransition />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
describe('PageTransition';
  test('renders without crashing';
    expect(screen && screen.getByRole('main';
  test('displays correct content';
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import PageTransition from \'../components/PageTransition\'; describe(\'PageTransition\',() => { test(\'renders without crashing\',() => { render(<PageTransition />); expect(screen && screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<PageTransition />); expect(screen && screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import PageTransition from "./components/PageTransition"; describe('PageTransition', () => { test("renders without crashing",() => { render(<PageTransition />); expect(screen && screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTransition from '../components/PageTransition';
describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<PageTransition />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageTransition from "../components/PageTransition";
describe("PageTransition", () => {
  test("renders without crashing", () => {
    render(<PageTransition />);
    expect(screen.getByTestId("page-transition")).toBeInTheDocument();
  });
});
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import PageTransition from \'../components/PageTransition\'; describe(\'PageTransition\',() => { test(\'renders without crashing\',() => { render(<PageTransition />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import PageTransition from "./components/PageTransition"; describe("PageTransition",() => { test("renders without crashing",() => { render(<PageTransition />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content",() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});''"
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
    expect(screen.getByTestId('page-transition')).toBeInTheDocument();
  });
});