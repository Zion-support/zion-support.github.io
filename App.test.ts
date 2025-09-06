<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
