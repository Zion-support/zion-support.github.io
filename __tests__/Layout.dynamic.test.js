<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layoutdynamic from '../components/Layout.dynamic';
<<<<<<< HEAD
=======

>>>>>>> origin/main
describe('Layoutdynamic', () => {
  test('renders without crashing', () => {
    render(<Layoutdynamic />);
    expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
  test('displays correct content', () => {
    render(<Layoutdynamic />);
  });
  test('handles user interactions', () => {
    render(<Layoutdynamic />);
  });
  test('applies correct styling', () => {
    render(<Layoutdynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import Layoutdynamic from "./components/Layout.dynamic"; describe("Layoutdynamic",() => { test("renders without crashing",() => { render(<Layoutdynamic />); expect(screen.getByTestId("layout.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<Layoutdynamic />)}); test("handles user interactions",() => { render(<Layoutdynamic />)}); test("applies correct styling",() => { render(<Layoutdynamic />)})});''"
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Layoutdynamic />)}); test('handles user interactions',() => { render(<Layoutdynamic />)}); test('applies correct styling',() => { render(<Layoutdynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
  
  test('displays correct content', () => {
    render(<Layoutdynamic />);
    // Test content display
  });
  
  test('handles user interactions', () => {
    render(<Layoutdynamic />);
    // Test user interactions
  });
  
  test('applies correct styling', () => {
    render(<Layoutdynamic />);
    // Test styling
  });
});
>>>>>>> origin/main
