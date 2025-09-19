<<<<<<< HEAD
<<<<<<< HEAD
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe('App', () => { it('renders without crashing', () => { render(<App />)expect(screen.getByRole("main")).toBeInTheDocument()})it('displays correct content', () => { render(<App />)})it('handles user interactions', () => { render(<App />)})})''";
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
=======
>>>>>>> 8feed85039723bc78561eb73f1f5a67cea8b8be9
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Hello App')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
  it('handles user interactions', () => {
    render(<App />);
  });
});
=======
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
});
>>>>>>> 8feed85039723bc78561eb73f1f5a67cea8b8be9
