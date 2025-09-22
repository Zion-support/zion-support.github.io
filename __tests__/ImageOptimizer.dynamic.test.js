import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOptimizer from '../components/ImageOptimizer';

<<<<<<< HEAD
describe('ImageOptimizer', () => {
  test('renders without crashing', () => {
    render(<ImageOptimizer />);
    expect(screen.getByTestId('imageoptimizer')).toBeInTheDocument();
  });
  
  test('displays correct content', () => {
    render(<ImageOptimizer />);
  });
  
  test('handles user interactions', () => {
    render(<ImageOptimizer />);
  });
  
  test('applies correct styling', () => {
    render(<ImageOptimizer />);
  });
});
=======



import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageOptimizerdynamic from '../components/ImageOptimizer.dynamic'
describe('ImageOptimizerdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('imageoptimizer.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import ImageOptimizerdynamic from "./components/ImageOptimizer.dynamic"; describe('ImageOptimizerdynamic', () => { test("renders without crashing",() => { render(<ImageOptimizerdynamic />); expect(screen.getByTestId("imageoptimizer.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<ImageOptimizerdynamic />)}); test("handles user interactions",() => { render(<ImageOptimizerdynamic />)}); test("applies correct styling"

>>>>>>> origin/merge-pr-12271
