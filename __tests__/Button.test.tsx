import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../src/components/Button';

describe('Button', () => {
  test('renders without crashing', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

<<<<<<< HEAD
  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
=======
=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../components/Button'
describe('Button'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
<<<<<<< HEAD
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Button from \'../components/Button\'; describe(\'Button\',() => { test(\'renders without crashing\',() => { render(<Button />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});'
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Button from "./components/Button"; describe('Button', () => { test("renders without crashing",() => { render(<Button />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"'"
=======
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Button from \'../components/Button\'; describe(\'Button\',() => { test(\'renders without crashing\',() => { render(<Button />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Button />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Button from "./components/Button"; describe('Button', () => { test("renders without crashing",() => { render(<Button />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
