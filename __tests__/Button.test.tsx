<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';
describe('Button', () => {
  test('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<Button />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Button from \'../components/Button\'; describe(\'Button\',() => { test(\'renders without crashing\',() => { render(<Button />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Button from "./components/Button"; describe("Button",() => { test("renders without crashing",() => { render(<Button />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content",() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});''"
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Button from '../components/Button'; describe('Button',() => { test('renders without crashing',() => { render(<Button />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Button from '../components/Button'; describe('Button',() => { test('renders without crashing',() => { render(<Button />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
