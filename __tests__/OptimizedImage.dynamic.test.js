<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
=======
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
    render(<OptimizedImagedynamic />);
  });
  test('handles user interactions', () => {
    render(<OptimizedImagedynamic />);
  });
  test('applies correct styling', () => {
    render(<OptimizedImagedynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import OptimizedImagedynamic from "./components/OptimizedImage.dynamic"; describe("OptimizedImagedynamic",() => { test("renders without crashing",() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId("optimizedimage.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<OptimizedImagedynamic />)}); test("handles user interactions",() => { render(<OptimizedImagedynamic />)}); test("applies correct styling",() => { render(<OptimizedImagedynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
