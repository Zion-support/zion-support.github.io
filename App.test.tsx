import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
<<<<<<< HEAD
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


=======
import App from './App';
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD
=======
  });
  
  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Hello App')).toBeInTheDocument();
  });
  
  it('handles user interactions', () => {
    render(<App />);
    expect(screen.getByText('Hello App')).toBeInTheDocument();
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  });

  it('displays correct content', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<App />);
    // Add interaction tests here
    expect(screen.getByText(/Welcome to Zion Tech/i)).toBeInTheDocument();
  });
});

const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe('App', () => { it('renders without crashing', () => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it('displays correct content', () => { render(<App />)}); it("handles user interactions"

});
});
