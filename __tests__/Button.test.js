<<<<<<< HEAD
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Button from "./components/Button" describe("Button",() => {" test("renders without crashing",() => {" render(<Button / / />) expect(screen.getByTestId("button")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Button / / />) }) test("handles user interactions",() => {" render(<Button / / />) }) test("applies correct styling",() => {" render(<Button / / />) }) })'"'"
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Button from '../components/Button';';

describe('Button', () => {'}
  test('renders without crashing', () => {'}
    render(<Button />);,
    expect(screen.getByTestId('button')).toBeInTheDocument();';,
  });,
  
  test('displays correct content', () => {'}
    render(<Button />);,
  });,
  
  test('handles user interactions', () => {'}
    render(<Button />);,
  });,
  
  test('applies correct styling', () => {'}
    render(<Button />);,
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
