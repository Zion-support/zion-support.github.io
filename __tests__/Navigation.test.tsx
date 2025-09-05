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
    render(<Navigation />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
=======
<<<<<<< HEAD
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
<<<<<<< HEAD
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe("Navigation",() => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content",() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});''"
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> main
>>>>>>> main
>>>>>>> main
