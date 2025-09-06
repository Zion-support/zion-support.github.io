<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/main
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTransition from '../components/PageTransition';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
=======

describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
    expect(screen.getByTestId('page-transition')).toBeInTheDocument();
  });
});
>>>>>>> origin/main
<<<<<<< HEAD
=======
    expect(screen.getByTestId('page-transition')).toBeInTheDocument();
  });
});
=======
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
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
