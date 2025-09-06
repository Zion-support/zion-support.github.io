<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTransition from '../components/PageTransition';
<<<<<<< HEAD
describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<PageTransition />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import PageTransition from \'../components/PageTransition\'; describe(\'PageTransition\',() => { test(\'renders without crashing\',() => { render(<PageTransition />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import PageTransition from "./components/PageTransition"; describe("PageTransition",() => { test("renders without crashing",() => { render(<PageTransition />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content",() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});''"
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
    expect(screen.getByTestId('page-transition')).toBeInTheDocument();
  });
});
>>>>>>> origin/main
