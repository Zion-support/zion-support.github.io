<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
import React from 'react';



=======

import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    expect(screen.getByTestId('seo')).toBeInTheDocument();
=======
import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import SEO from '../components / SEO';
describe ('SEO', () => {
  test ('renders without crashing', () => {
    render (<SEO />);
    expect (screen.getByTestId ('seo')).toBeInTheDocument ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
=======
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SEO from "../components/SEO";
describe("SEO", () => {
  test("renders without crashing", () => {
    render(<SEO />);
    expect(screen.getByTestId("seo")).toBeInTheDocument();
  });
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  });
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
