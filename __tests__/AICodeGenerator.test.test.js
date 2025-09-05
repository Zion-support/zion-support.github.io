<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react';
import '@testing-library/jest-dom';
import AICodeGeneratortest from '../components/AICodeGenerator.test';
<<<<<<< HEAD

=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AICodeGeneratortest from "./components/AICodeGenerator.test"; describe("AICodeGeneratortest",() => { test("renders without crashing",() => { render(<AICodeGeneratortest />); expect(screen.getByTestId("aicodegenerator.test")).toBeInTheDocument()}); test("displays correct content",() => { render(<AICodeGeneratortest />)}); test("handles user interactions",() => { render(<AICodeGeneratortest />)}); test("applies correct styling",() => { render(<AICodeGeneratortest />)})});''"
=======
>>>>>>> origin/main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AICodeGeneratortest from '../components/AICodeGenerator.test';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
describe('AICodeGeneratortest', () => {
  test('renders without crashing', () => {
    render(<AICodeGeneratortest />);
    expect(screen.getByTestId('aicodegenerator.test')).toBeInTheDocument();
  });
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  test('displays correct content', () => {
    render(<AICodeGeneratortest />);
  });
  test('handles user interactions', () => {
    render(<AICodeGeneratortest />);
  });
=======
  
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
  
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  test('displays correct content', () => {
    render(<AICodeGeneratortest />);
  });
  
  test('handles user interactions', () => {
    render(<AICodeGeneratortest />);
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  test('applies correct styling', () => {
    render(<AICodeGeneratortest />);
  });
});
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  
  test('applies correct styling', () => {
    render(<AICodeGeneratortest />);
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
