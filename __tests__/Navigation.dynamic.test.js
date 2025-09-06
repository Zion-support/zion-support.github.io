<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';  import '@testing-library/jest-dom'; import Navigationdynamic from '../components/Navigation.dynamic'; describe('Navigationdynamic',() => { test('renders without crashing',() => { render(<Navigationdynamic />); expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigationdynamic />)}); test('handles user interactions',() => { render(<Navigationdynamic />)}); test('applies correct styling',() => { render(<Navigationdynamic />)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react';  import '@testing-library/jest-dom'; import Navigationdynamic from '../components/Navigation.dynamic'; describe('Navigationdynamic',() => { test('renders without crashing',() => { render(<Navigationdynamic />); expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigationdynamic />)}); test('handles user interactions',() => { render(<Navigationdynamic />)}); test('applies correct styling',() => { render(<Navigationdynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
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
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation.dynamic';
describe('Navigation', () => {
  test('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument();
  });
});
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
