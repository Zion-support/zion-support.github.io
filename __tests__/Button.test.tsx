import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';
<<<<<<< HEAD

describe('Button', () => {
  test('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
});
=======
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
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
