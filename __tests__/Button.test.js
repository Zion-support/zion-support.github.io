<<<<<<< HEAD
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Button from '../components/Button';';


  test('renders without crashing', () => {

    render(<Button />);
    expect(screen.getByTestId('button)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<Button />);

    // Add specific content tests based on component
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Button from "./components/Button" describe("Button",() => {" test("renders without crashing",() => {" render(<Button / / />) expect(screen.getByTestId("button")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Button / / />) }) test("handles user interactions",() => {" render(<Button / / />) }) test("applies correct styling",() => {" render(<Button / / />) }) })'"'"
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
