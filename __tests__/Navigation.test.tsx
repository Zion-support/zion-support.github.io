import React from 'react';
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';
describe('Navigation', () => {
  test('renders without crashing', () => {
    render(<Navigation />);'
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
});
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '../components/Navigation'
describe('Navigation'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});'
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
});
describe('Navigation';
  test('renders without crashing';
    expect(screen && screen.getByRole('main';
  test('displays correct content';
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen && screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen && screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen && screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import Navigation from '../components / Navigation';
describe ('Navigation', () => {
  test ('renders without crashing', () => {
    render (<Navigation />);
    expect (screen.getByRole ('main')).toBeInTheDocument ();
  });
;
  test ('displays correct content', () => {
    expect (screen.getByText (/Zion Tech Group / i)).toBeInTheDocument ();
});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
});