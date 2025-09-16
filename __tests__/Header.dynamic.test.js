import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

<<<<<<< HEAD
describe('Header', () => {
  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  
  test('displays correct content', () => {
    render(<Header />);
  });
  
  test('handles user interactions', () => {
    render(<Header />);
  });
  
  test('applies correct styling', () => {
    render(<Header />);
  });
});
=======



import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Headerdynamic from '../components/Header.dynamic'
describe('Headerdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('header.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import Headerdynamic from "./components/Header.dynamic"; describe('Headerdynamic', () => { test("renders without crashing",() => { render(<Headerdynamic />); expect(screen.getByTestId("header.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<Headerdynamic />)}); test("handles user interactions",() => { render(<Headerdynamic />)}); test("applies correct styling"

>>>>>>> origin/merge-pr-12271
