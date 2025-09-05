<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import Navigationdynamic from '../components/Navigation.dynamic'; describe('Navigationdynamic',() => { test('renders without crashing',() => { render(<Navigationdynamic />); expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigationdynamic />)}); test('handles user interactions',() => { render(<Navigationdynamic />)}); test('applies correct styling',() => { render(<Navigationdynamic />)})});
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigationdynamic from '../components/Navigation.dynamic';
describe('Navigationdynamic', () => {
  test('renders without crashing', () => {
    render(<Navigationdynamic />);
    expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument();
  });
  test('displays correct content', () => {
    render(<Navigationdynamic />);
  });
  test('handles user interactions', () => {
    render(<Navigationdynamic />);
  });
  test('applies correct styling', () => {
    render(<Navigationdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigationdynamic from "./components/Navigation.dynamic"; describe("Navigationdynamic",() => { test("renders without crashing",() => { render(<Navigationdynamic />); expect(screen.getByTestId("navigation.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<Navigationdynamic />)}); test("handles user interactions",() => { render(<Navigationdynamic />)}); test("applies correct styling",() => { render(<Navigationdynamic />)})});''"
import _React from 'react';  import '@testing-library/jest-dom'; import Navigationdynamic from '../components/Navigation.dynamic'; describe('Navigationdynamic',() => { test('renders without crashing',() => { render(<Navigationdynamic />); expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigationdynamic />)}); test('handles user interactions',() => { render(<Navigationdynamic />)}); test('applies correct styling',() => { render(<Navigationdynamic />)})});
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
