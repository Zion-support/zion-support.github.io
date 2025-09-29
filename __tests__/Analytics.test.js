<<<<<<< HEAD
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Analytics from '../components/Analytics';';


  test('renders without crashing', () => {

    render(<Analytics />);
    expect(screen.getByTestId('analytics)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<Analytics />);

    // Add specific content tests based on component
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import Analytics from "./components/Analytics" describe("Analytics",() => {" test("renders without crashing",() => {" render(<Analytics / / />) expect(screen.getByTestId("analytics")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<Analytics / / />) }) test("handles user interactions",() => {" render(<Analytics / / />) }) test("applies correct styling",() => {" render(<Analytics / / />) }) })'"'"
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
