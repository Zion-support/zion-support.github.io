<<<<<<< HEAD
<<<<<<< HEAD
import App from './src/App';
import React from 'react';

=======
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { render,screen } from \'@testing-library/react\'; import { describe,it,expect } from \'vitest\'; import App from \'./App\'; describe(\'App\',() => { it(\'renders without crashing\',() => { render(<App />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); it(\'displays correct content\',() => { render(<App />)}); it(\'handles user interactions\',() => { render(<App />)})});
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
=======
>>>>>>> origin/main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
  it('displays correct content', () => {
    render(<App />);
    // Add specific content assertions here
  });

  it('handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
  });
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
