import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''">>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
import React from 'react';
import { render, screen  } from '@testing-library/react';
import { describe, it, expect  } from 'vitest';
import App from './App';

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
});
});

const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./src/App"; describe('App', () => { it('renders without crashing', () => { render(
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
