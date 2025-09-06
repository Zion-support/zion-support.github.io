import React from 'react';
import '@testing-library/jest-dom';
import AICodeGeneratortest from '../components/AICodeGenerator.test';
<<<<<<< HEAD
=======


import React from 'react';
import '@testing-library/jest-dom';
import AICodeGeneratortest from '../components/AICodeGenerator.test';
>>>>>>> origin/main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AICodeGeneratortest from '../components/AICodeGenerator.test';

<<<<<<< HEAD
=======



describe('AICodeGeneratortest', () => {
  test('renders without crashing', () => {
    render(<AICodeGeneratortest />);
    expect(screen.getByTestId('aicodegenerator.test')).toBeInTheDocument();
  });
  
  
>>>>>>> origin/main
  test('displays correct content', () => {
    render(<AICodeGeneratortest />);
  });
  
<<<<<<< HEAD
    render(<AICodeGeneratortest />);
  });
  
  test('handles user interactions', () => {
    render(<AICodeGeneratortest />);
  });
=======



  test('displays correct content', () => {
    render(<AICodeGeneratortest />);
  });
  
  
  test('displays correct content', () => {
    render(<AICodeGeneratortest />);
  });
  
  test('handles user interactions', () => {
    render(<AICodeGeneratortest />);
  });


>>>>>>> origin/main
  
  test('applies correct styling', () => {
    render(<AICodeGeneratortest />);
  });
});
<<<<<<< HEAD
=======
  test('applies correct styling', () => {
>>>>>>> origin/main
    render(<AICodeGeneratortest />);
  });
});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======


>>>>>>> origin/main
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AICodeGeneratortest from '../components/AICodeGenerator.test'
<<<<<<< HEAD
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AICodeGeneratortest from "./components/AICodeGenerator.test"; describe('AICodeGeneratortest', () => { test("renders without crashing",() => { render(<AICodeGeneratortest />); expect(screen.getByTestId("aicodegenerator.test")).toBeInTheDocument()}); test("displays correct content",() => { render(<AICodeGeneratortest />)}); test("handles user interactions",() => { render(<AICodeGeneratortest />)}); test("applies correct styling"
=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AICodeGeneratortest from "./components/AICodeGenerator.test"; describe('AICodeGeneratortest', () => { test("renders without crashing",() => { render(<AICodeGeneratortest />); expect(screen.getByTestId("aicodegenerator.test")).toBeInTheDocument()}); test("displays correct content",() => { render(<AICodeGeneratortest />)}); test("handles user interactions",() => { render(<AICodeGeneratortest />)}); test("applies correct styling"
>>>>>>> origin/main
