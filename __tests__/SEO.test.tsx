<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEO from '../components/SEO';
<<<<<<< HEAD
<<<<<<< HEAD
describe('SEO', () => {
  test('renders without crashing', () => {
    render(<SEO />);
    expect(screen.getByTestId('seo')).toBeInTheDocument();
  });
});
=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEO from '../components/SEO'
describe('SEO'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import SEO from \'../components/SEO\'; describe(\'SEO\',() => { test(\'renders without crashing\',() => { render(<SEO />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEO from "./components/SEO"; describe('SEO', () => { test("renders without crashing",() => { render(<SEO />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
>>>>>>> origin/automation-improvements-final
=======
describe('SEO';
  test('renders without crashing';
    expect(screen && screen.getByRole('main';
  test('displays correct content';
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import SEO from \'../components/SEO\'; describe(\'SEO\',() => { test(\'renders without crashing\',() => { render(<SEO />); expect(screen && screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<SEO />); expect(screen && screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEO from "./components/SEO"; describe('SEO', () => { test("renders without crashing",() => { render(<SEO />); expect(screen && screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

describe('SEO', () => {
  test('renders without crashing', () => {
    render(<SEO />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SEO />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
