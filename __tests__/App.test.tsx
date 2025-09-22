<<<<<<< HEAD
import { describe, it, expect } from '@jest/globals';

describe('App', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});



import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
import '@testing-library/jest-dom';
import App from '../components/App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
<<<<<<< HEAD
});

});

});
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
    const heading = screen.getByRole('heading'

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
describe("App", () => {
  test("renders without crashing", () => {
=======
  
  test('displays correct content', () => {
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    render(<App />);
  });
<<<<<<< HEAD
});

  it('has proper heading structure', () => {
=======
  
  test('handles user interactions', () => {
    render(<App />);
  });
  
  test('applies correct styling', () => {
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    render(<App />);
  });
});
<<<<<<< HEAD

});

=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
