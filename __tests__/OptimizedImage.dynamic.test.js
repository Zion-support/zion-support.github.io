<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptimizedImagedynamic from '../components/OptimizedImage.dynamic';
describe('OptimizedImagedynamic', () => {
  test('renders without crashing', () => {
    render(<OptimizedImagedynamic />);
    expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    // Test content display
  test('handles user interactions', () => {
    // Test user interactions
  test('applies correct styling', () => {
    // Test styling
<<<<<<< HEAD
  });
});
=======
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'
describe('OptimizedImagedynamic'
  test('renders without crashing'
    expect(screen.getByTestId('optimizedimage.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import OptimizedImagedynamic from "./components/OptimizedImage.dynamic"; describe('OptimizedImagedynamic', () => { test("renders without crashing",() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId("optimizedimage.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<OptimizedImagedynamic />)}); test("handles user interactions",() => { render(<OptimizedImagedynamic />)}); test("applies correct styling"
>>>>>>> origin/automation-improvements-final
=======
});
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
