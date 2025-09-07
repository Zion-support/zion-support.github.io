<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

=======
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';



import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
import React from 'react';


import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
<<<<<<< HEAD
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
=======
    // Add interaction tests here
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-32fb
  });
});
=======
    // Add interaction tests here
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});

const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe('App', () => { it('renders without crashing', () => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it('displays correct content', () => { render(<App />)}); it("handles user interactions"

});
});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
