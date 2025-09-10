<<<<<<< HEAD
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import AccessibilityManager from '../components/AccessibilityManager';';


  test('renders without crashing', () => {

    render(<AccessibilityManager />);
    expect(screen.getByTestId('accessibilitymanager)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<AccessibilityManager />);

    // Add specific content tests based on component
  });
});
=======
const React from "react" import { render,screen,fireEvent } from "@testing-library/react" import "@testing-library/jest-dom import AccessibilityManager from "./components/AccessibilityManager" describe("AccessibilityManager",() => {" test("renders without crashing",() => {" render(<AccessibilityManager / / />) expect(screen.getByTestId("accessibilitymanager")).toBeInTheDocument();" }) test("displays correct content",() => {" render(<AccessibilityManager / / />) }) test("handles user interactions",() => {" render(<AccessibilityManager / / />) }) test("applies correct styling",() => {" render(<AccessibilityManager / / />) }) })'"'"
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
