<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';
describe('Navigation', () => {
  test('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });


  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
<<<<<<< HEAD
  });
});
=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '../components/Navigation'
describe('Navigation'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
>>>>>>> origin/automation-improvements-final
=======
});
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
