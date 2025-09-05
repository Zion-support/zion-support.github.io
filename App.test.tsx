<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> pr-11914
=======
>>>>>>> pr-11913
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { render,screen } from \'@testing-library/react\'; import { describe,it,expect } from \'vitest\'; import App from \'./App\'; describe(\'App\',() => { it(\'renders without crashing\',() => { render(<App />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); it(\'displays correct content\',() => { render(<App />)}); it(\'handles user interactions\',() => { render(<App />)})});
<<<<<<< HEAD
<<<<<<< HEAD
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"describe('App', () => {
=======
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
>>>>>>> pr-11913
describe('App', () => {
>>>>>>> pr-11914
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> pr-11914
=======
>>>>>>> pr-11913
  it('displays correct content', () => {
    render(<App />);
  });
  it('handles user interactions', () => {
    render(<App />);
  });
<<<<<<< HEAD
});  it('displays correct content', () => {
=======
});
<<<<<<< HEAD
=======

>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
  it('displays correct content', () => {
>>>>>>> pr-11914
    render(<App />);
    // Add specific content assertions here
  });
  it('handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
  });
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
});
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
});
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> pr-11914
=======
>>>>>>> pr-11913
