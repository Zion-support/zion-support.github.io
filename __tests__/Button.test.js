<<<<<<< HEAD
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Button from "./components/Button" describe("Button",() => {" test("renders without crashing",() => {" render(<Button / / />) expect(screen.getByTestId("button")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Button / / />) }) test("handles user interactions",() => {" render(<Button / / />) }) test("applies correct styling",() => {" render(<Button / / />) }) })'"'"
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button', () => {
  test('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Button from "./components/Button" describe("Button",() => {" test("renders without crashing",() => {" render(<Button / / />) expect(screen.getByTestId("button")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Button / / />) }) test("handles user interactions",() => {" render(<Button / / />) }) test("applies correct styling",() => {" render(<Button / / />) }) })'"'"
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Button from '../components/Button';';
describe('Button', () => {'}
  test('renders without crashing', () => {'}
    render(<Button />);,
    expect(screen.getByTestId('button')).toBeInTheDocument();';,
  });,
  test('displays correct content', () => {'}
    render(<Button />);,
  });,
  test('handles user interactions', () => {'}
    render(<Button />);,
  });,
  test('applies correct styling', () => {'}
    render(<Button />);,
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  });
});
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
