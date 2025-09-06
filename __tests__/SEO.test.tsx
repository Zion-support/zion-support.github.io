<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/main
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEO from '../components/SEO';
describe('SEO', () => {
  test('renders without crashing', () => {
    render(<SEO />);
<<<<<<< HEAD
<<<<<<< HEAD
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<SEO />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import SEO from \'../components/SEO\'; describe(\'SEO\',() => { test(\'renders without crashing\',() => { render(<SEO />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEO from "./components/SEO"; describe("SEO",() => { test("renders without crashing",() => { render(<SEO />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});''"
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
    expect(screen.getByTestId('seo')).toBeInTheDocument();
  });
});
>>>>>>> origin/main
=======
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
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
