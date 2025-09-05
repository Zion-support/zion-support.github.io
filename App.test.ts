<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
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
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
