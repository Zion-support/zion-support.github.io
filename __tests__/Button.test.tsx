<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Button from '../components/Button'; describe('Button',() => { test('renders without crashing',() => { render(<Button />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
<<<<<<< HEAD
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Button from '../components/Button'; describe('Button',() => { test('renders without crashing',() => { render(<Button />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Button from '../components/Button'; describe('Button',() => { test('renders without crashing',() => { render(<Button />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
