<<<<<<< HEAD
=======
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import { render,screen } from \'@testing-library/react\'; import { describe,it,expect } from \'vitest\'; import App from \'./App\'; describe(\'App\',() => { it(\'renders without crashing\',() => { render(<App />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); it(\'displays correct content\',() => { render(<App />)}); it(\'handles user interactions\',() => { render(<App />)})});
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import React from 'react';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
<<<<<<< HEAD
    expect(screen.getByRole('main')).toBeInTheDocument();
=======
    expect(screen.getByText('Hello App')).toBeInTheDocument();
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
  });
  it('displays correct content', () => {
    render(<App />);
<<<<<<< HEAD
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
=======
  });
  it('handles user interactions', () => {
    render(<App />);
  });
});
  it('displays correct content', () => {
    render(<App />);
    // Add specific content assertions here
  });
  it('handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
  });
});