<<<<<<< HEAD
=======
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { render,screen } from \'@testing-library/react\'; import { describe,it,expect } from \'vitest\'; import App from \'./App\'; describe(\'App\',() => { it(\'renders without crashing\',() => { render(<App />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); it(\'displays correct content\',() => { render(<App />)}); it(\'handles user interactions\',() => { render(<App />)})});
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
import React from 'react';
<<<<<<< HEAD

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';


=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD


=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
  it('displays correct content', () => {

    render(<App />);
    // Add more specific tests here
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
  });
<<<<<<< HEAD
});
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
