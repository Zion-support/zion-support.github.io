

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import React from 'react';


=======
import React from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Hello App')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
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
});
});

=======
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe('App', () => { it('renders without crashing', () => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it('displays correct content', () => { render(<App />)}); it("handles user interactions"

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
