<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import Headerdynamic from '../components/Header.dynamic'; describe('Headerdynamic',() => { test('renders without crashing',() => { render(<Headerdynamic />); expect(screen.getByTestId('header.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Headerdynamic />)}); test('handles user interactions',() => { render(<Headerdynamic />)}); test('applies correct styling',() => { render(<Headerdynamic />)})});
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Headerdynamic from '../components/Header.dynamic';
describe('Headerdynamic', () => {
  test('renders without crashing', () => {
    render(<Headerdynamic />);
    expect(screen.getByTestId('header.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<Headerdynamic />);
  });
  test('handles user interactions', () => {
    render(<Headerdynamic />);
  });
  test('applies correct styling', () => {
    render(<Headerdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import Headerdynamic from "./components/Header.dynamic"; describe("Headerdynamic",() => { test("renders without crashing",() => { render(<Headerdynamic />); expect(screen.getByTestId("header.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<Headerdynamic />)}); test("handles user interactions",() => { render(<Headerdynamic />)}); test("applies correct styling",() => { render(<Headerdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import Headerdynamic from '../components/Header.dynamic'; describe('Headerdynamic',() => { test('renders without crashing',() => { render(<Headerdynamic />); expect(screen.getByTestId('header.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Headerdynamic />)}); test('handles user interactions',() => { render(<Headerdynamic />)}); test('applies correct styling',() => { render(<Headerdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import Headerdynamic from '../components/Header.dynamic'; describe('Headerdynamic',() => { test('renders without crashing',() => { render(<Headerdynamic />); expect(screen.getByTestId('header.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Headerdynamic />)}); test('handles user interactions',() => { render(<Headerdynamic />)}); test('applies correct styling',() => { render(<Headerdynamic />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
