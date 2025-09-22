<<<<<<< HEAD
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe('App', () => { it('renders without crashing', () => { render(<App />)expect(screen.getByRole("main")).toBeInTheDocument()})it('displays correct content', () => { render(<App />)})it('handles user interactions', () => { render(<App />)})})''";
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
=======
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
import React from 'react';
import { render, screen  } from '@testing-library/react';
import { describe, it, expect  } from 'vitest';
import App from './App';
<<<<<<< HEAD


=======
<<<<<<< HEAD
describe('App', () => {it('renders without crashing', () => {render(<App />)expect(screen.getByText('Zion Tech Group')).toBeInTheDocument()})it('displays correct content', () => {render(<App />)expect(screen.getByText('Zion Tech Group')).toBeInTheDocument()})it('handles user interactions', () => {render(<App />)expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument()})})const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe('App', () => { it('renders without crashing', () => { render(ursor/automate-test-improve-and-merge-code-646c;
})
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
  });

  it('handles user interactions', () => {
    render(<App />);
  });
});
<<<<<<< HEAD
});
});

const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe('App', () => { it('renders without crashing', () => { render(

=======
>>>>>>> origin/merge-pr-12271
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
